import { renderHook, act } from '@testing-library/react';
import useSet from '..';

const setup = <K>(initialValue?: Iterable<K>) => renderHook(() => useSet(initialValue));

describe('useSet', () => {
  it('should init set and utils', () => {
    const { result } = setup([1, 2]);
    const [set, utils] = result.current;

    expect(set).toEqual(new Set([1, 2]));
    expect(utils).toStrictEqual({
      add: expect.any(Function),
      remove: expect.any(Function),
      reset: expect.any(Function),
    });
  });

  it('should init empty set if no initial set provided', () => {
    const { result } = setup();
    expect(result.current[0]).toEqual(new Set());

    const { result: result1 } = setup(undefined);
    expect(result1.current[0]).toEqual(new Set());
  });

  it('should have an initially provided key', () => {
    const { result } = setup(['a']);
    const [set, utils] = result.current;

    let value;
    act(() => {
      value = set.has('a');
    });

    expect(value).toBe(true);
  });

  it('should have an added key', () => {
    const { result } = setup();

    act(() => {
      result.current[1].add('newKey');
    });

    let value;
    act(() => {
      value = result.current[0].has('newKey');
    });

    expect(value).toBe(true);
  });

  it('should get false for non-existing key', () => {
    const { result } = setup(['a']);
    const [set] = result.current;

    let value;
    act(() => {
      value = set.has('nonExisting');
    });

    expect(value).toBe(false);
  });

  it('should add a new key', () => {
    const { result } = setup(['oldKey']);
    const [, utils] = result.current;

    act(() => {
      utils.add('newKey');
    });

    expect(result.current[0]).toEqual(new Set(['oldKey', 'newKey']));
  });

  it('should work if setting existing key', () => {
    const { result } = setup(['oldKey']);
    const [, utils] = result.current;

    act(() => {
      utils.add('oldKey');
    });

    expect(result.current[0]).toEqual(new Set(['oldKey']));
  });

  it('should remove existing key', () => {
    const { result } = setup([1, 2]);
    const [, utils] = result.current;

    act(() => {
      utils.remove(2);
    });

    expect(result.current[0]).toEqual(new Set([1]));
  });

  it('should do nothing if removing non-existing key', () => {
    const { result } = setup(['a', 'b']);
    const [, utils] = result.current;

    act(() => {
      utils.remove('nonExisting');
    });

    expect(result.current[0]).toEqual(new Set(['a', 'b']));
  });

  it('should reset to initial set provided', () => {
    const { result } = setup([1]);
    const [, utils] = result.current;

    act(() => {
      utils.add(2);
    });

    expect(result.current[0]).toEqual(new Set([1, 2]));

    act(() => {
      utils.reset();
    });

    expect(result.current[0]).toEqual(new Set([1]));
  });

  it('should memoized its utils methods', () => {
    const { result } = setup(['a', 'b']);
    const [, utils] = result.current;
    const { add, remove, reset } = utils;

    act(() => {
      add('foo');
    });

    expect(result.current[1].add).toBe(add);
    expect(result.current[1].remove).toBe(remove);
    expect(result.current[1].reset).toBe(reset);
  });
});
