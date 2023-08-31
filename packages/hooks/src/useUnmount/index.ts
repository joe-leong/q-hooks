import useLatest from '../useLatest';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';
import { useEffect } from 'react';

export default function useUnmount(fn: () => void) {
  if (isDev) {
    if (!isFunction) {
      console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
    }
  }

  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    [],
  );
}
