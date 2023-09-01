import { useState, useCallback } from 'react';
import useLatest from '../useLatest';
import type { Dispatch, SetStateAction } from 'react';

type GetStateAction<S> = () => S;

function useGetState<S>(initialState: S | (() => S)): [
  S,
  {
    setState: Dispatch<SetStateAction<S>>;
    getState: GetStateAction<S>;
  },
];

function useGetState<S = undefined>(): [
  S | undefined,
  {
    setState: Dispatch<SetStateAction<S | undefined>>;
    getState: GetStateAction<S | undefined>;
  },
];

function useGetState<S>(initialValue?: S) {
  const [state, setState] = useState(initialValue);
  const stateRef = useLatest(state);
  const getState = useCallback(() => stateRef.current, []);
  return [
    state,
    {
      setState,
      getState,
    },
  ];
}

export default useGetState;
