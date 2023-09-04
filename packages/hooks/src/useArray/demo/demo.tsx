import React from 'react';
import useArray from '..';

export default () => {
  const [state, { addItem, updateItem, deleteItem, reset }] = useArray<string | number>([1, '2']);
  return (
    <div>
      <button type="button" onClick={() => addItem(Date.now())}>
        Add number
      </button>
      <button type="button" onClick={() => addItem(String(Date.now()))} style={{ margin: '0 8px' }}>
        add string
      </button>
      <button
        type="button"
        onClick={() => updateItem(0, String(Date.now()))}
        disabled={!state.length}
      >
        update item
      </button>
      <button
        type="button"
        onClick={() => deleteItem(0)}
        style={{ margin: '0 8px' }}
        disabled={!state.length}
      >
        delete item
      </button>
      <button type="button" onClick={() => reset()} style={{ margin: '0 8px' }}>
        reset
      </button>
      <ul>
        {state.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
