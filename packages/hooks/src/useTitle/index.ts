import { useEffect, useRef } from 'react';
import isBrowser from '../utils/isBrowser';
import useUnmount from '../useUnmount';

export interface Options {
  restoreOnUnmount?: boolean;
}

const DEFAULT_OPTIONS = {
  restoreOnUnmount: false,
};

export default function useTitle(title: string, options: Options = DEFAULT_OPTIONS) {
  const titleRef = useRef(isBrowser ? document.title : '');

  useEffect(() => {
    // 保证页面完全挂载
    setTimeout(() => {
      document.title = title;
    }, 0);
  }, [title]);
  useUnmount(() => {
    if (options.restoreOnUnmount) {
      document.title = titleRef.current;
    }
  });
}
