const { fixPostalCode } = require('./solutions');

describe('Problem 3 - fixPostalCode() function', function () {
  test('leading space is removed', function () {
    const postalCode = '  A1A 1A1';
    expect(fixPostalCode(postalCode)).toEqual('A1A 1A1');
  });

  test('trailing space is removed', function () {
    const postalCode = 'A1A 1A1   ';
    expect(fixPostalCode(postalCode)).toEqual('A1A 1A1');
  });

  test('an internal space is added', function () {
    const postalCode = 'A1A1A1';
    expect(fixPostalCode(postalCode)).toEqual('A1A 1A1');
  });

  test('lowercase letters are converted to UPPER case', function () {
    const postalCode = 'a1a 1a1';
    expect(fixPostalCode(postalCode)).toEqual('A1A 1A1');
  });

  test('a postal code with too many characters throws an error', function () {
    const invalidPostalCode = 'A1A 1A11';
    expect(() => fixPostalCode(invalidPostalCode)).toThrow();
  });

  test('a postal code with too few characters throws an error', function () {
    const invalidPostalCode = 'A1A';
    expect(() => fixPostalCode(invalidPostalCode)).toThrow();
  });

  test('a postal code that starts with an invalid character throws an error', function () {
    // D, F, I, O, Q, W, U, Z are all invalid in the first position
    expect(() => fixPostalCode('D1A 1A1')).toThrow();
    expect(() => fixPostalCode('F1A 1A1')).toThrow();
    expect(() => fixPostalCode('I1A 1A1')).toThrow();
    expect(() => fixPostalCode('O1A 1A1')).toThrow();
    expect(() => fixPostalCode('Q1A 1A1')).toThrow();
    expect(() => fixPostalCode('W1A 1A1')).toThrow();
    expect(() => fixPostalCode('U1A 1A1')).toThrow();
    expect(() => fixPostalCode('Z1A 1A1')).toThrow();
  });

  test('a postal code with a non-digit in the second position throws an error', function () {
    expect(() => fixPostalCode('DZA 1A1')).toThrow();
  });

  test('a postal code with an invalid character in the third position throws an error', function () {
    // D, F, I, O, Q, U are all invalid in the first position
    expect(() => fixPostalCode('A1D 1A1')).toThrow();
    expect(() => fixPostalCode('A1F 1A1')).toThrow();
    expect(() => fixPostalCode('A1I 1A1')).toThrow();
    expect(() => fixPostalCode('A1O 1A1')).toThrow();
    expect(() => fixPostalCode('A1Q 1A1')).toThrow();
    // W is valid in this position
    expect(fixPostalCode('A1W 1A1')).toEqual('A1W 1A1');
    expect(() => fixPostalCode('A1U 1A1')).toThrow();
    // Z is valid in this position
    expect(fixPostalCode('A1Z 1A1')).toEqual('A1Z 1A1');
  });

  test('a postal code with a non-space or invalid character in the fourth position throws an error', function () {
    expect(() => fixPostalCode('AZA-1A1')).toThrow();
    expect(() => fixPostalCode('AZA  1A1')).toThrow();
  });

  test('a postal code with a non-digit in the fifth position throws an error', function () {
    expect(() => fixPostalCode('AZAAA1')).toThrow();
    expect(() => fixPostalCode('AZA A1')).toThrow();
  });

  test('a postal code with an invalid character in the sixth position throws an error', function () {
    // D, F, I, O, Q, U are all invalid in the sixth position
    expect(() => fixPostalCode('A1A 1D1')).toThrow();
    expect(() => fixPostalCode('A1A 1F1')).toThrow();
    expect(() => fixPostalCode('A1A 1I1')).toThrow();
    expect(() => fixPostalCode('A1A 1O1')).toThrow();
    expect(() => fixPostalCode('A1A 1Q1')).toThrow();
    // W is valid in this position
    expect(fixPostalCode('A1A 1W1')).toEqual('A1A 1W1');
    expect(() => fixPostalCode('A1A 1U1')).toThrow();
    // Z is valid in this position
    expect(fixPostalCode('A1A 1Z1')).toEqual('A1A 1Z1');
  });

  test('a postal code with a non-digit in the seventh position throws an error', function () {
    expect(() => fixPostalCode('AZA AAG')).toThrow();
    expect(() => fixPostalCode('AZA A1-')).toThrow();
  });
});
