import Cookies from 'js-cookie';
import { useState } from 'react';
import useMemoizedFn from '../useMemoizedFn';
import { isFunction, isString } from '../utils';

export type IState = string | undefined;

export interface IOptions extends Cookies.CookieAttributes {
  defaultValue?: IState | (() => IState);
  [prop: string]: any;
}

export default function useCookieState(cookieKey: string, options: IOptions = {}) {
  const [state, setState] = useState<IState>(() => {
    const cookieValue = Cookies.get(cookieKey);

    if (isString(cookieValue)) return cookieValue;

    if (isFunction(options.defaultValue)) {
      return options.defaultValue();
    }
    return options.defaultValue || '';
  });

  const updateState = useMemoizedFn(
    (
      newValue: IState | ((prevState: IState) => IState),
      newOptions: Cookies.CookieAttributes = {},
    ) => {
      const { defaultValue = '', ...restOptions } = { ...options, ...newOptions };
      const value = isFunction(newValue) ? newValue(state) : newValue;

      setState(value);

      if (value === undefined) {
        Cookies.remove(cookieKey);
      } else {
        Cookies.set(cookieKey, value, restOptions);
      }
    },
  );
  return [state, updateState] as const;
}
