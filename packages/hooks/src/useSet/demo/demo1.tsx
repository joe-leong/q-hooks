import React from 'react';
import { useSet } from 'q-hooks';

export default () => {
  const [state, { add, remove, reset }] = useSet(['Hello']);
  return (
    <div>
      <button type="button" onClick={() => add(String(Date.now()))}>
        Add Timestamp
      </button>
      <button
        type="button"
        onClick={() => remove('Hello')}
        disabled={!state.has('Hello')}
        style={{ margin: '0 8px' }}
      >
        Remove Hello
      </button>
      <button type="button" onClick={() => reset()}>
        Reset
      </button>
      <div style={{ marginTop: 16 }}>
        <pre>{JSON.stringify(Array.from(state), null, 2)}</pre>
      </div>
    </div>
  );
};
