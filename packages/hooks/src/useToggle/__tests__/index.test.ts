import { renderHook, act } from '@testing-library/react';
import useToggle from '../index';
const callToggle = (hook: any) => {
  act(() => {
    hook.result.current[1].toggle();
  });
};
describe('useToggle', () => {
  it('test init', async () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBeFalsy();
  });

  it('test on method', async () => {
    const hook = renderHook(() => useToggle('hello'));
    expect(hook.result.current[0]).toBe('hello');
    callToggle(hook);
    expect(hook.result.current[0]).toBeFalsy();
    act(() => {
      hook.result.current[1].setLeft();
    });
    expect(hook.result.current[0]).toBe('hello');
    act(() => {
      hook.result.current[1].setRight();
    });
    expect(hook.result.current[0]).toBeFalsy();
  });

  it('test on optional', async () => {
    const hook = renderHook(() => useToggle('hello', 'world'));
    callToggle(hook);
    expect(hook.result.current[0]).toBe('world');
    act(() => {
      hook.result.current[1].setLeft();
    });
    expect(hook.result.current[0]).toBe('hello');
    act(() => {
      hook.result.current[1].set('world');
    });
    expect(hook.result.current[0]).toBe('world');
  });
});
