import { renderHook, act } from '@testing-library/react';
import useArray from '..';
const setup = () => renderHook(() => useArray([1, '2']));
describe('useArray', () => {
  it('should work with initialValue', () => {
    const hook = setup();
    expect(hook.result.current[0]).toStrictEqual([1, '2']);
  });

  it('should work after added', () => {
    const hook = setup();
    act(() => {
      hook.result.current[1].addItem(4);
    });
    expect(hook.result.current[0]).toStrictEqual([1, '2', 4]);
  });
  it('should work after update', () => {
    const hook = setup();
    act(() => {
      hook.result.current[1].updateItem(0, 'qqq');
    });
    expect(hook.result.current[0]).toStrictEqual(['qqq', '2']);
  });
  it('should work after delete', () => {
    const hook = setup();
    act(() => {
      hook.result.current[1].deleteItem(0);
    });
    expect(hook.result.current[0]).toStrictEqual(['2']);
  });
  it('should work after reset', () => {
    const hook = setup();
    act(() => {
      hook.result.current[1].addItem('123333');
    });
    expect(hook.result.current[0]).toStrictEqual([1, '2', '123333']);
    act(() => {
      hook.result.current[1].reset();
    });
    expect(hook.result.current[0]).toStrictEqual([1, '2']);
  });
});
