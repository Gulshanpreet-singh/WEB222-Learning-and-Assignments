const { countForProvince } = require('./solutions');

describe('Problem 7 - countForProvince() function', function () {
  test('Multiple valid postal codes should return the correct count', () => {
    const count = countForProvince('ON', 'K6A 1A5', 'L1A 5N3', 'M5W 1P5', 'N0B 1K0', 'P3A 8M6');
    expect(count).toBe(5);
  });

  test('The province must match the province code used', () => {
    const count = countForProvince('MB', 'K6A 1A5', 'L1A 5N3', 'M5W 1P5', 'N0B 1K0', 'P3A 8M6');
    expect(count).toBe(0);
  });

  test('Invalid postal codes should be ignored', () => {
    const count = countForProvince('ON', 'K6A', 'L1A   5N3', 'P5', '0B1K0', 'P3A 8M6');
    expect(count).toBe(1);
  });

  test('An error is thrown if no postal codes are passed', () => {
    expect(() => countForProvince('ON')).toThrow();
  });

  test('An error is thrown if any of the postal codes are not strings', () => {
    expect(() => countForProvince('ON', 1)).toThrow();
    expect(() => countForProvince('ON', 'K6A 1A5', null)).toThrow();
  });
});
