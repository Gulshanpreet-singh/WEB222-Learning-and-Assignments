const { toProvince } = require('./solutions');

/**
 * Ontario                          ON              K, L, M, N, P
 * Quebec                           QC              G, H, J
 * Nova Scotia                      NS              B
 * New Brunswick                    NB              E
 * Manitoba                         MB              R
 * British Columbia                 BC              V
 * Prince Edward Island             PE              C
 * Saskatchewan                     SK              S
 * Alberta                          AB              T
 * Newfoundland and Labrador        NL              A
 * Nunavut, Northwest Territories   NT              X
 * Yukon                            YT              Y
 */

describe('Problem 4 - toProvince() function', function () {
  test('Invalid postal codes return null', () => {
    expect(toProvince('INVALID')).toEqual(null);
    expect(toProvince('ZZZZZZ')).toEqual(null);
    expect(toProvince('000000')).toEqual(null);
    expect(toProvince('')).toEqual(null);
  });

  test('Valid postal codes without a space work', () => {
    expect(toProvince('K6A1A5')).toEqual('Ontario');
  });

  test('Valid postal codes with lower-case letters work', () => {
    expect(toProvince('k6a1a5')).toEqual('Ontario');
  });

  test('Ontario', () => {
    // K
    expect(toProvince('K6A 1A5')).toEqual('Ontario');
    expect(toProvince('K6A 1A5', true)).toEqual('ON');
    // L
    expect(toProvince('L1A 5N3')).toEqual('Ontario');
    expect(toProvince('L1A 5N3', true)).toEqual('ON');
    // M
    expect(toProvince('M5W 1P5')).toEqual('Ontario');
    expect(toProvince('M5W 1P5', true)).toEqual('ON');
    // N
    expect(toProvince('N0B 1K0')).toEqual('Ontario');
    expect(toProvince('N0B 1K0', true)).toEqual('ON');
    // P
    expect(toProvince('P3A 8M6')).toEqual('Ontario');
    expect(toProvince('P3A 8M6', true)).toEqual('ON');
  });

  test('Quebec', () => {
    // G
    expect(toProvince('G3A 7G2')).toEqual('Quebec');
    expect(toProvince('G3A 7G2', true)).toEqual('QC');
    // H
    expect(toProvince('H9H 4Y1')).toEqual('Quebec');
    expect(toProvince('H9H 4Y1', true)).toEqual('QC');
    // J
    expect(toProvince('J7P 2V3')).toEqual('Quebec');
    expect(toProvince('J7P 2V3', true)).toEqual('QC');
  });

  test('Nova Scotia', () => {
    expect(toProvince('B6L 7G2')).toEqual('Nova Scotia');
    expect(toProvince('B6L 7G2', true)).toEqual('NS');
  });

  test('New Brunswick', () => {
    expect(toProvince('E4H 6K1')).toEqual('New Brunswick');
    expect(toProvince('E4H 6K1', true)).toEqual('NB');
  });

  test('Manitoba', () => {
    expect(toProvince('R8N 9E1')).toEqual('Manitoba');
    expect(toProvince('R8N 9E1', true)).toEqual('MB');
  });

  test('British Columbia', () => {
    expect(toProvince('V1Y 5V4')).toEqual('British Columbia');
    expect(toProvince('V1Y 4V4', true)).toEqual('BC');
  });

  test('Prince Edward Island', () => {
    expect(toProvince('C0A 3H0')).toEqual('Prince Edward Island');
    expect(toProvince('C0A 3H0', true)).toEqual('PE');
  });

  test('Saskatchewan', () => {
    expect(toProvince('S0C 1W0')).toEqual('Saskatchewan');
    expect(toProvince('S0C 1W0', true)).toEqual('SK');
  });

  test('Alberta', () => {
    expect(toProvince('T0G 2G0')).toEqual('Alberta');
    expect(toProvince('T0G 2G0', true)).toEqual('AB');
  });

  test('Newfoundland and Labrador', () => {
    expect(toProvince('A0K 1B0')).toEqual('Newfoundland and Labrador');
    expect(toProvince('A0K 1B0', true)).toEqual('NL');
  });

  test('Nunavut, Northwest Territories', () => {
    expect(toProvince('X0G 0A0')).toEqual('Northwest Territories and Nunavut');
    expect(toProvince('X0G 0A0', true)).toEqual('NT');
  });

  test('Yukon', () => {
    expect(toProvince('Y0B 1T0')).toEqual('Yukon');
    expect(toProvince('Y0B 1T0', true)).toEqual('YT');
  });
});
