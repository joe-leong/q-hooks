import { useState } from 'react';
function useArray<T>(initialValue: T[] | (() => T[])): [
  T[],
  {
    addItem: (data: T) => void;
    updateItem: (willReplaceIndex: number, data: T) => void;
    deleteItem: (willDeleteIndex: number) => void;
    reset: () => void;
  },
];

function useArray<T>(initialValue: T[]) {
  const getInitValue = () => Array.from(initialValue);
  const [state, setState] = useState(getInitValue);
  const addItem = (data) => {
    setState([...state, data]);
  };
  const updateItem = (willReplaceIndex, data) => {
    let newState = [...state];
    newState.splice(willReplaceIndex, 1, data);
    setState(newState);
  };
  const deleteItem = (willDeleteIndex) => {
    let newState = [...state];
    newState.splice(willDeleteIndex, 1);
    setState(newState);
  };

  const reset = () => setState(getInitValue);
  return [state, { addItem, updateItem, deleteItem, reset }];
}

export default useArray;
