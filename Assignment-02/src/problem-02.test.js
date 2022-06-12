const data = require('./data');
const { observationsByPrivacy } = require('./observations');

describe('Problem 02 - observationsByPrivacy()', function () {
  test('should throw if privacy is not one of the expected values', function () {
    // undefined
    expect(() => observationsByPrivacy(data)).toThrowError();
    // number
    expect(() => observationsByPrivacy(data, 3)).toThrowError();
    // boolean
    expect(() => observationsByPrivacy(data, true)).toThrowError();
    // unknown string
    expect(() => observationsByPrivacy(data, 'unknown')).toThrowError();
    // spelling mistake string
    expect(() => observationsByPrivacy(data, 'oppen')).toThrowError();
  });

  test('should include the expected objects for a privacy = obscured', function () {
    const obscured = observationsByPrivacy(data, 'obscured');

    expect(obscured.length).toBe(3);
    obscured.forEach((observation) => {
      expect(typeof observation).toBe('object');
      expect(observation.privacy).toBe('obscured');
    });
  });

  test('should include the expected objects for a privacy = OBSCURED', function () {
    const obscured = observationsByPrivacy(data, 'OBSCURED');

    expect(obscured.length).toBe(3);
    obscured.forEach((observation) => {
      expect(typeof observation).toBe('object');
      expect(observation.privacy).toBe('obscured');
    });
  });

  test('should include the expected objects for a privacy = null', function () {
    const obscured = observationsByPrivacy(data, null);

    expect(obscured.length).toBe(7);
    obscured.forEach((observation) => {
      expect(typeof observation).toBe('object');
      expect(observation.privacy).toBe(null);
    });
  });

  test('should return expected Array if data contains strings and null', function () {
    const mixedResults = {
      results: [
        { privacy: 'obscured' },
        { privacy: null },
        { privacy: 'open' },
        { privacy: 'obscured' }
      ]
    };
    const obscured = observationsByPrivacy(mixedResults, 'obscured');
    expect(obscured.length).toBe(2);
    obscured.forEach((observation) => {
      expect(typeof observation).toBe('object');
      expect(observation.privacy).toBe('obscured');
    });
  });
});
