import { renderHook, act } from '@testing-library/react';
import useGetState from '..';

describe('useGetState', () => {
  const setUp = <T>(initialState: T) =>
    renderHook(() => {
      const [state, { getState, setState }] = useGetState<T>(initialState);
      return {
        state,
        getState,
        setState,
      };
    });

  it('should support initialValue', () => {
    const hook = setUp(() => 0);
    expect(hook.result.current.state).toBe(0);
  });

  it('should support update', () => {
    const hook = setUp(0);
    act(() => {
      hook.result.current.setState(1);
    });
    expect(hook.result.current.getState()).toBe(1);
  });

  it('should getState frozen', () => {
    const hook = setUp(0);
    const prevGetState = hook.result.current.getState;
    act(() => {
      hook.result.current.setState(1);
    });
    expect(hook.result.current.getState).toBe(prevGetState);
  });
});
