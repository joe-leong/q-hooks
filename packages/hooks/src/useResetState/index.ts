import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import useMemoizedFn from '../useMemoizedFn';
type ResetState = () => void;
export default function useResetState<S>(
  initialState: S | (() => S),
): [S, { setState: Dispatch<SetStateAction<S>>; resetState: ResetState }] {
  const [state, setState] = useState(initialState);
  const resetState = useMemoizedFn(() => setState(initialState));

  return [state, { setState, resetState }];
}
