import { useMemo } from 'react';
import useToggle from '../useToggle';

export interface IActions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}

export default function useBoolean(defaultValue = false): [boolean, IActions] {
  const [state, { set, toggle }] = useToggle(!!defaultValue);

  const actions: IActions = useMemo(() => {
    const setTrue = () => set(true);
    const setFalse = () => set(false);
    return {
      toggle,
      set: (v) => set(!!v),
      setTrue,
      setFalse,
    };
  }, []);

  return [state, actions];
}
