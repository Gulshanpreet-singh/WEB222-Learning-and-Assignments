const { createIframe } = require('./solutions');

describe('Problem 2 - createIframe() function', function () {
  test('<iframe> is correct for given src and height values', function () {
    let src = 'https://web222.ca';
    let height = 500;
    let result = createIframe(src, height);
    expect(result).toBe('<iframe src="https://web222.ca" height="500"></iframe>');
  });

  test('<iframe> HTML is correct for src value that needs to be trimmed', function () {
    let src = '   https://web222.ca  ';
    let height = 500;
    let result = createIframe(src, height);
    expect(result).toBe('<iframe src="https://web222.ca" height="500"></iframe>');
  });

  test('<iframe> HTML is correct when height is a valid number, but passed as string', function () {
    let src = '   https://web222.ca  ';
    let height = '1024';
    let result = createIframe(src, height);
    expect(result).toBe('<iframe src="https://web222.ca" height="1024"></iframe>');
  });

  test('<iframe> HTML is correct when negative numeric height is included', function () {
    let src = 'https://web222.ca';
    let height = -300;
    let result = createIframe(src, height);
    expect(result).toBe('<iframe src="https://web222.ca"></iframe>');
  });

  test('<iframe> HTML is correct when non-integer numeric height is included', function () {
    let src = 'https://web222.ca';
    let height = 0.123;
    let result = createIframe(src, height);
    expect(result).toBe('<iframe src="https://web222.ca"></iframe>');
  });

  test('<iframe> HTML is correct when allowfullscreen is included', function () {
    let src = 'https://web222.ca';
    let height = 800;
    let allowfullscreen = true;
    let result = createIframe(src, height, allowfullscreen);
    expect(result).toBe('<iframe src="https://web222.ca" height="800" allowfullscreen></iframe>');
  });
});
