const { normalizeVariable } = require('./solutions');

describe('Problem 1 - normalizeVariable() function', function () {
  test('returns string unmodified if it needs no changes', function () {
    let result = normalizeVariable('abc');
    expect(result).toBe('ABC');
  });

  test('returns string with leading whitespace removed', function () {
    let result = normalizeVariable(' abc');
    expect(result).toBe('ABC');
  });

  test('returns string with trailing whitespace removed', function () {
    let result = normalizeVariable('abc ');
    expect(result).toBe('ABC');
  });

  test('returns string with all lowercase letters', function () {
    let result = normalizeVariable('AbC');
    expect(result).toBe('ABC');
  });

  test('returns string with internal spaces removed', function () {
    let result = normalizeVariable('A B       C');
    expect(result).toBe('A_B_C');
  });

  test('returns string with internal tabs removed', function () {
    let result = normalizeVariable('A\tB\tC');
    expect(result).toBe('A_B_C');
  });

  test('returns string with mixed internal tabs and spaces removed', function () {
    let result = normalizeVariable('A  B\t\t C');
    expect(result).toBe('A_B_C');
  });

  test('returns string with periods removed', function () {
    let result = normalizeVariable('A.B..............................C');
    expect(result).toBe('A_B_C');
  });

  test('returns string with periods, tabs, and spaces removed', function () {
    let result = normalizeVariable(
      ' A. b. . . . . . . \t\t\t  ....\t. . . . .   ......c..     ....d '
    );
    expect(result).toBe('A_B_C_D');
  });
});
