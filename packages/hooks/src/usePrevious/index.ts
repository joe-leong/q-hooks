import { useRef } from 'react';

export type ShouldUpdateFn<T> = (prev: T | undefined, next: T) => boolean;

const defaultShouldUpdate = <T>(a?: T, b?: T) => !Object.is(a, b);

export default function usePrevious<T>(
  state: T,
  shouldUpdate: ShouldUpdateFn<T> = defaultShouldUpdate,
): T | undefined {
  const prevRef = useRef<T>();
  const curRef = useRef<T>();
  if (shouldUpdate(curRef.current, state)) {
    prevRef.current = curRef.current;
    curRef.current = state;
  }
  return prevRef.current;
}
