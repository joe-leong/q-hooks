import { renderHook, act } from '@testing-library/react';
import useToggle from '../index';

describe('useToggle', () => {
  it('test init', async () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBeFalsy();
  });
});
