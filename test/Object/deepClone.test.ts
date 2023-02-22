import deepClone from '../../src/Object/deepClone';

describe('deepClone', () => {
  test('deepClone has Array', () => {
    expect(deepClone({ a: 1, b: [1, 2] })).toEqual({ a: 1, b: [1, 2] });
    expect(deepClone({ a: 1, b: [1, 2] })).not.toBe({ a: 1, b: [1, 2] });
  });

  test('deepClone { a: 1 }', () => {
    expect(deepClone({ a: 1 })).toEqual({ a: 1 });
    expect(deepClone({ a: 1 })).not.toBe({ a: 1 });
  });

  test('deepClone has target ', () => {
    expect(deepClone({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    expect(deepClone({ a: 1 }, { b: 2 })).not.toBe({ a: 1, b: 2 });
  });

  test('deepClone has target & has Array', () => {
    expect(deepClone({ a: 1 }, { b: 2, c: [1, 2] })).toEqual({ a: 1, b: 2, c: [1, 2] });
    expect(deepClone({ a: 1 }, { b: 2, c: [1, 2] })).not.toBe({ a: 1, b: 2, c: [1, 2] });
  });

  test('deepClone has Object', () => {
    expect(deepClone({ a: 1, d: { a: 1 } })).toEqual({ a: 1, d: { a: 1 } });
    expect(deepClone({ a: 1, d: { a: 1 } })).not.toBe({ a: 1, d: { a: 1 } });
  });
});
