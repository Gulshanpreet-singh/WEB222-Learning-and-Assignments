const { buildUrl } = require('./solutions');

// function buildUrl(query, order, count, license) {

describe('Problem 10 - buildUrl() function', function () {
  function assertUrl(urlString, query, order, count, license) {
    let url = new URL(urlString);
    expect(url.origin).toBe('https://api.inaturalist.org');
    expect(url.pathname).toBe('/v2/observations');
    expect(url.searchParams.get('query')).toEqual(query);
    expect(url.searchParams.get('count')).toEqual(String(count));
    expect(url.searchParams.get('order')).toEqual(order);
    expect(url.searchParams.get('license')).toEqual(license);
  }

  test('correct values produce an expected url', function () {
    let url = buildUrl('butterfly', 'ascending', 30, 'cc-by');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 'ascending', 30, 'cc-by');
  });

  test('query values are properly encoded on url', function () {
    let url = buildUrl('butterfly with special characters:/\\{}<>[]}`"', 'ascending', 30, 'cc-by');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly with special characters:/\\{}<>[]}`"', 'ascending', 30, 'cc-by');
  });

  test('count below 1 throws but 1 works', function () {
    expect(() => buildUrl('butterfly', 'ascending', 0, 'cc-by')).toThrowError();

    let url = buildUrl('butterfly', 'ascending', 1, 'cc-by');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 'ascending', 1, 'cc-by');
  });

  test('count above 30 throws but 30 works', function () {
    expect(() => buildUrl('butterfly', 'ascending', 31, 'cc-by')).toThrowError();

    let url = buildUrl('butterfly', 'ascending', 30, 'cc-by');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 'ascending', 30, 'cc-by');
  });

  test('order can be `ascending`', function () {
    let url = buildUrl('butterfly', 'ascending', 30, 'cc-by');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 'ascending', 30, 'cc-by');
  });

  test('order can be `descending`', function () {
    let url = buildUrl('butterfly', 'descending', 30, 'cc-by');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 'descending', 30, 'cc-by');
  });

  test('order can also be asc or desc', function () {
    expect(buildUrl('butterfly', 'desc', 30, 'cc-by')).toEqual(
      'https://api.inaturalist.org/v2/observations?query=butterfly&count=30&order=descending&license=cc-by'
    );
    expect(buildUrl('butterfly', 'asc', 30, 'cc-by')).toEqual(
      'https://api.inaturalist.org/v2/observations?query=butterfly&count=30&order=ascending&license=cc-by'
    );
  });

  test('order other than asc/desc throws', function () {
    expect(() => buildUrl('butterfly', 'd', 30, 'cc-by')).toThrowError();
    expect(() => buildUrl('butterfly', 'a', 30, 'cc-by')).toThrowError();
    expect(() => buildUrl('butterfly', '', 200, 'cc-by')).toThrowError();
  });

  test('license must be one of the expected values', function () {
    [
      'none',
      'any',
      'cc-by',
      'cc-by-nc',
      'cc-by-sa',
      'cc-by-nd',
      'cc-by-nc-sa',
      'cc-by-nc-nd'
    ].forEach((license) => {
      let url = buildUrl('butterfly', 'descending', 30, license);
      expect(typeof url).toEqual('string');
      assertUrl(url, 'butterfly', 'descending', 30, license);
    });
  });

  test('license other than the expected values will throw', function () {
    expect(() => buildUrl('butterfly', 'ascending', 30, '')).toThrowError();
  });
});
