import isArray from '../../src/Array/isArray';

describe('isArray', () => {
  test('isArray true', () => {
    expect(isArray([])).toBeTruthy();
  });

  test('isArray true', () => {
    expect(isArray([1, 2])).toBeTruthy();
  });

  test('isArray false', () => {
    expect(isArray('')).not.toBeTruthy();
  });

  test('isArray false', () => {
    expect(isArray({})).not.toBeTruthy();
  });

  test('isArray false', () => {
    expect(isArray(undefined)).not.toBeTruthy();
  });
});
