/**
 * WEB222 – Assignment 1
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Aryan Khurana
 *      Student ID: 145282216
 *      Date: 20 May 2022
 *
 * Please see all unit tests in the files problem-00.test.js, problem-01.test.js, etc.
 */

/*******************************************************************************
 * Problem 0: learn how to implement code to pass unit tests.
 *
 * Welcome to Assignment 1! In this assignment, you're going to be practicing lots
 * of new JavaScript programming techniques.  Before you dive in let's spend a
 * minute helping you learn how to read this code, and how to understand the
 * tests that go with it.
 *
 * In addition to this file, please also open the file `src/problem-00.test.js.
 * Start by reading the big comment at the top of that file, then come back here and
 * continue.
 *
 * Before continuing, make sure you have completed the necessary setup steps (e.g.,
 * install node.js, run `npm install`, install the suggested VSCode extensions).
 * The rest of the instructions assume that you have done this. If you need help,
 * ask your professor.
 *
 * After you finish reading src/problem-00.test.js, it's time to try running
 * the tests.  To run the tests, open a terminal (see https://code.visualstudio.com/docs/editor/integrated-terminal)
 * in the same directory as your `package.json` file (i.e., the root of this project)
 * and type the following command:
 *
 *   npm test
 *
 * You have to run this command in the root of your project (i.e., in the same
 * directory as package.json).  When you do, you will see a lot of failures.
 * That's expected, since we haven't written any solution code yet.
 *
 * You can also run tests for only this one problem instead of all tests. To do that,
 * add the name of a test file after `npm test` like this:
 *
 *   npm test problem-00
 *
 * This will look for tests that are part of the problem-00.test.js file, and only
 * run those.  Doing so should result in 1 failed and 1 passed test.
 *
 * The first test passes:
 *
 *  ✓ greeting should be a function (2ms)
 *
 * But the second one fails:
 *
 * ✕ greeting should return the correct string output (3ms)
 *
 * ● Problem 0 - greeting() function › greeting should  return the correct string output
 *
 *   expect(received).toBe(expected) // Object.is equality
 *
 *   Expected: "Hello WEB222 Student!"
 *   Received: "Hello WEB222 Student"
 *
 *     63 |   test('greeting should return the correct string output', function() {
 *     64 |     let result = greeting('WEB222 Student');
 *   > 65 |     expect(result).toBe('Hello WEB222 Student!');
 *        |                    ^
 *     66 |   });
 *     67 |
 *     68 |   /**
 *
 * We can see that the second test 'greeting should return the correct string output'
 * is failing. In particular, it's failing because it expected to get the string
 * "Hello WEB222 Student!" but instead it actually received the string "Hello WEB222 Student".
 *
 * It looks like we have a small typo in our code below, and we are missing
 * the final "!"" character.  Try adding it, save this file, and re-run the
 * tests again:
 *
 * npm test problem-00
 * PASS  src/problem-00.test.js
 *  Problem 0 - greeting() function
 *   ✓ greeting should be a function (2ms)
 *   ✓ greeting should return the correct string output
 *
 * Test Suites: 1 passed, 1 total
 * Tests:       2 passed, 2 total
 *
 * Excellent! At this point you're ready to move on to Problem 1. As you do,
 * read both the information in the Problem's comment (i.e., this file), and also read
 * the tests to understand what they expect from your code's implementation.
 *
 * One final word about these comments.  You'll see comments like this one:
 *
 * @param {string} name - the name to greet in the message
 * @returns {string}
 *
 * These are specially formatted comments that document parameters to functions,
 * and tell us the type (e.g., {string} or {number}), and also the parameter's name.
 * We also indicate the return type for functions (e.g., {string}).
 *
 * Finally, we also explain a bit about how the parameter is used, and what
 * data it will have, whether it's optional, etc.
 ******************************************************************************/

function greeting(name) {
  return `Hello ${name}!`;
}

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with underscores
 * ('_'), and makes it UPPERCASE.
 *
 * We want to be able to convert a string to Upper normalizeVariable Case style, so that all
 * leading/trailing whitespace is removed, and any internal spaces, tabs, or dots,
 * are converted to '_' and all letters are UPPER cased.
 *
 * The normalizeVariable() function should work like this:
 *
 * normalizeVariable('abc') --> returns 'ABC'
 * normalizeVariable(' ABC ') --> returns 'ABC'
 * normalizeVariable('ABC') --> returns 'ABC'
 * normalizeVariable('A BC') --> returns 'A_BC'
 * normalizeVariable(' A bC  ') --> returns 'A_BC'
 * normalizeVariable('A   BC') --> returns 'A_BC'
 * normalizeVariable('A.BC') --> returns 'A_BC'
 * normalizeVariable(' A..  B   C ') --> returns 'A_B_C'
 *
 * @param {string} value - a string to be converted
 * @return {string}
 ******************************************************************************/

function normalizeVariable(value) {
  // Creating a regular expression
  let regex = /[ .\t]+/g;

  return value.trim().toUpperCase().replace(regex, '_');
}

/*******************************************************************************
 * Problem 2: create an HTML <iframe> element for the given url.
 *
 * An iframe hosts one web page within another. Here is how we might use HTML
 * to use an iframe:
 *
 * <iframe src="https://web222.ca" height="500"></iframe>
 *
 * Our <iframe> has two attributes:
 *
 * - src: the URL to a web page
 * - height: the height to use (in pixels) when showing the iframe
 *
 * Write the createIframe() function to accept a URL and height, and return the
 * properly formatted iframe tag. For example:
 *
 * createIframe('https://web222.ca', 500);
 *
 * should return the following string of HTML:
 *
 * '<iframe src="https://web222.ca" height="500"></iframe>'
 *
 * A <iframe> can also optionally contain an `allowfullscreen` attribute,
 * which tells the browser that it's OK for the iframe to expand to fill
 * the whole screen (e.g., YouTube videos do this). For example:
 *
 * <iframe src="https://web222.ca" height="500" allowfullscreen></iframe>
 *
 * In this case, the <iframe> element can be expanded full screen.  Therefore,
 * your createIframe() function should also accept a third argument, `allowFullScreen`:
 *
 * // Full screen not allowed (the default)
 * createIframe('https://web222.ca', 500)
 * // Full screen allowed
 * createIframe('https://web222.ca', 500, true)
 *
 * The returned <iframe> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src before you use them
 * - The src and height attribute values should be wrapped in double-quotes (e.g., src="..." height="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." height="..." allowfullscreen)
 * - The height attribute should only be added if it is a valid integer value (number or string).  Otherwise ignore it.
 *
 * @param {string} src - the src URL for the iframe
 * @param {string|number} height - the height of the iframe. Must be a valid, positive integer
 * @param {boolean} allowFullScreen - whether to include the `allowfullscreen` attribute or not
 * @returns {string} - the HTML string for the iframe
 ******************************************************************************/

function createIframe(src, height, allowFullScreen) {
  let element = '';

  // Checking if the height is a valid data type and is a whole number
  if (height >= 1) {
    element = `<iframe src="${src.trim()}" height="${height}"></iframe>`;
  } else {
    element = `<iframe src="${src.trim()}"></iframe>`;
  }

  // Checking whether the full screen option is to be used
  if (allowFullScreen) {
    element = `<iframe src="${src.trim()}" height="${height}" allowfullscreen></iframe>`;
  }

  // Returning the final iframe elements
  return element.trim();
}
/*******************************************************************************
 * Problem 3: fix the formatting of Canadian Postal Codes
 *
 * A Canadian Postal Code (see https://en.wikipedia.org/wiki/Postal_codes_in_Canada)
 * is a 6-character string of the following form:
 *
 * A1A 1A1
 *
 * There are more than 800K valid postal codes.  The first three-characters of
 * the postal code is called a "Forward Sortation Area," and represents a geographic
 * region, with the first letter representing a province, or part of a province.
 *
 * The first character in a postal code can be any letter except D, F, I, O, Q, W, U, Z
 *
 * The other characters (i.e., letters) in a postal code can be any letter except
 * D, F, I, O, Q or U (i.e., W and Z are allowed)
 *
 * The numbers can be anything between 0 and 9
 *
 * HINT: use a Regular Expression to help you check for valid characters/numbers
 *
 * Many databases have postal codes that have been manually entered, and contain
 * formatting errors.  The fixPostalCode() function takes a possible postal code
 * (i.e. a string), attempts to format it, and returns the formatted version.
 * If the string is not a valid postal code, an error is thrown.  See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw.
 *
 * @param {string} postalCode - a possible postal code to be formatted
 * @returns {string} - a formatted postal code
 ******************************************************************************/

function fixPostalCode(postalCode) {
  // Started fixing the postal code
  let fixedPostalCode = postalCode.trim().toUpperCase();

  // Adding space ater the third character if needed
  if (fixedPostalCode[3] !== ' ') {
    fixedPostalCode =
      fixedPostalCode.substring(0, 3) + ' ' + fixedPostalCode.substring(3, fixedPostalCode.length);
  }

  // Creating a regex to check
  let regex = /^[^DFIOQWUZ][0-9][^DFIOQU][ ][0-9][^DFIOQU][0-9]$/;

  // Checking using the regex that we created earlier
  if (regex.test(fixedPostalCode) === true) {
    return fixedPostalCode;
  }

  throw 'ERROR'; // Throw Error if regex doesn't match
}

/*******************************************************************************
 * Problem 4: convert a valid Canadian Postal Code to a Canadian Province
 *
 * The first letter of a Postal Code tells us which province the Postal Code is
 * from. Here's the list of Provinces/Territories, their 2-letter short form,
 * and the first letter(s) of the Postal Code that matches it:
 *
 * Province Name                    Short Form      First Letter of Postal Code
 * -----------------------------------------------------------------------------
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
 *
 * The toProvince() function converts a valid postal code to a province name. Use
 * your fixPostalCode() function from the previous problem to format and validate
 * the `postalCode` argument first. If it is invalid, return `null`. HINT: use try/catch
 * to deal with fixPostalCode() throwing an error, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 * If the `useShortForm` argument is `true`, the province's short-form is
 * returned instead of the full name.  For example:
 *
 * toProvince('M5W1E6') returns 'Ontario'
 * toProvince('M5W 1E6') returns 'Ontario'
 * toProvince('M5W 1E6', true) returns 'ON'
 * toProvince('M5W') returns null
 *
 * @param {string} postalCode - a postal code to be validated and used
 * @param {boolean|undefined} useShortForm - whether to return the full or short name
 * @returns {string} - a province name or short form
 ******************************************************************************/

function toProvince(postalCode, useShortForm) {
  let province = null,
    shortForm = null;

  // Creating a regex to check
  let regex = /^[^DFIOQWUZ][0-9][^DFIOQU][ ]?[0-9][^DFIOQU][0-9]$/;

  // Creating a set of parallel arrays to keep track of provinces and their short forms
  let provinces = [
    'Ontario',
    'Quebec',
    'Nova Scotia',
    'New Brunswick',
    'Manitoba',
    'British Columbia',
    'Prince Edward Island',
    'Saskatchewan',
    'Alberta',
    'Newfoundland and Labrador',
    'Northwest Territories and Nunavut',
    'Yukon'
  ];
  let shortForms = ['ON', 'QC', 'NS', 'NB', 'MB', 'BC', 'PE', 'SK', 'AB', 'NL', 'NT', 'YT'];

  // Returning null if the postal code is not valid
  if (!regex.test(postalCode.toUpperCase()) === true) {
    return null;
  }

  // Assigning the province name and short form
  switch (postalCode.toUpperCase()[0]) {
    case 'K':
    case 'L':
    case 'M':
    case 'N':
    case 'P':
      province = provinces[0];
      shortForm = shortForms[0];
      break;

    case 'G':
    case 'H':
    case 'J':
      province = provinces[1];
      shortForm = shortForms[1];
      break;

    case 'B':
      province = provinces[2];
      shortForm = shortForms[2];
      break;

    case 'E':
      province = provinces[3];
      shortForm = shortForms[3];
      break;

    case 'R':
      province = provinces[4];
      shortForm = shortForms[4];
      break;

    case 'V':
      province = provinces[5];
      shortForm = shortForms[5];
      break;

    case 'C':
      province = provinces[6];
      shortForm = shortForms[6];
      break;

    case 'S':
      province = provinces[7];
      shortForm = shortForms[7];
      break;

    case 'T':
      province = provinces[8];
      shortForm = shortForms[8];
      break;

    case 'A':
      province = provinces[9];
      shortForm = shortForms[9];
      break;

    case 'X':
      province = provinces[10];
      shortForm = shortForms[10];
      break;

    case 'Y':
      province = provinces[11];
      shortForm = shortForms[11];
      break;

    default:
      province = null;
      shortForm = null;
      break;
  }

  // Checking whether short form should be returned
  if (useShortForm === true) {
    return shortForm;
  }
  return province;
}

/*******************************************************************************
 * Problem 5: parse a geographic coordinate
 *
 * Coordinates are defined as numeric, decimal values of Longitude and Latitude.
 * As an example, the Seneca College Newnham campus is located at:
 *
 * Longitude: -79.3496 (negative number means West)
 * Latitude: 43.7955 (positive number means North)
 *
 * A dataset includes thousands of geographic coordinates, stored as strings.
 * However, over the years, different authors have used slightly different formats.
 * All of the following are valid and need to be parsed:
 *
 * 1. "43.7955, -79.3496" (NOTE: space after the comma)
 * 4. "[-79.3496,43.7955]" (NOTE: lack of space after comma, lat/lng values are reversed)
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Parse the value and reformat it into the string form: "(lat, lng)"
 *
 * @param {string} value - a geographic coordinate string in one of the given forms
 * @returns {string} - a geographic coordinate formatted as "(lat, lng)"
 ******************************************************************************/

function normalizeCoord(value) {
  // Regular expression
  let regex = /[+-]?[0-9]+\.?[0-9]+/g;

  let lat, lng, output;

  // Storing the coordinates in an array
  let latLongArray = value.match(regex);

  // Checking the format
  if (value[0] === '[') {
    lng = latLongArray[0];
    lat = latLongArray[1];
  } else {
    lat = latLongArray[0];
    lng = latLongArray[1];
  }

  // Throwing an error if latitude and longitude are out of range
  if (!(lat >= -90 && lat <= 90) || !(lng >= -180 && lng <= 180)) {
    throw 'ERROR';
  }

  // returning the final output
  output = `(${lat}, ${lng})`;
  return output;
}

/*******************************************************************************
 * Problem 6: format any number of coordinates as a list in a string
 *
 * You are asked to format geographic lat, lng coordinates in a list using your
 * normalizeCoord() function from problem 5.
 *
 * Where normalizeCoord() takes a single geographic coord, the formatCoords()
 * function takes a list of any number of geographic coordinates, parses them,
 * filters out any invalid coords, and creates a list.
 *
 * For example: given the following coords, "43.7955, -79.3496" and "[-62.1234,43.7955]",
 * a new list would be created of the following form "((43.7955, -79.3496), (43.7955, -62.1234))".
 *
 * Notice how the list has been enclosed in an extra set of (...) braces, and each
 * formatted geographic coordinate is separated by a comma and space.
 *
 * The formatCoords() function can take any number of arguments, but they must all
 * be strings.  If any of the values can't be parsed by normalizeCoord() (i.e., if
 * an Error is thrown), skip the value.  For example:
 *
 * formatCoords("43.7955, -79.3496", "[-62.1234,43.7955]", "300, -9000") should return
 * "((43.7955, -79.3496), (43.7955, -62.1234))" and skip the invalid coordinate.
 *
 * @param {string} values - any number of string arguments can be passed
 * @returns {string}
 ******************************************************************************/

function formatCoords(...values) {
  let i, returnList, coordList;

  // Iterating through all the values
  for (i = 0; i < values.length; i++) {
    // Checking if there were any errors
    try {
      if (i === 0) {
        coordList = normalizeCoord(values[i]);
      } else {
        coordList += ', ' + normalizeCoord(values[i]);
      }
    } catch (err) {
      continue;
    }
  }

  // Removing undefined
  if (typeof coordList === 'undefined') {
    coordList = '';
  }

  // Enclosing the list to be returned in parenthesis
  returnList = '(' + coordList + ')';
  return returnList;
}

/*******************************************************************************
 * Problem 7: count valid postal codes for a given province code
 *
 * The countForProvince() function takes a two-character province code, and
 * any number of postal codes, some of which may be invalid.  It returns the
 * total number of postal codes for the province represented by the two-character
 * code.
 *
 * For example:
 *
 * countForProvince('ON', 'M5W 1E6') returns 1
 * countForProvince('ON', 'Y0A 1L0') returns 0
 * countForProvince('ON', 'M5W 1E6', 'N0B 1K0') returns 2
 * countForProvince('ON', 'M5W 1E6', 'N0B 1K0', 'Y0A 1L0') returns 2
 * countForProvince('ON', 'INVALID', '', 'Y0A 1L0') returns 0
 *
 * Use the toProvince() function you wrote earlier in your answer.
 *
 * Throw an error if no postal codes are passed, or if any of the postal codes
 * is not a string.
 *
 * @param {string} provinceCode - a two character province code
 * @param {string} ...postalCodes - one or more postal code strings
 * @returns {number} the total, or 0
 ******************************************************************************/

function countForProvince(provinceCode, ...postalCodes) {
  // Checking whether postal codes are passed
  if (!(arguments.length > 1)) {
    throw 'ERROR';
  }

  let count = 0; // Keeps track of valid postal codes for a given province code
  // Checking valid codes
  for (let i = 0; i < postalCodes.length; i++) {
    if (provinceCode === toProvince(postalCodes[i], true)) {
      count++;
    }
  }

  // Returning the final value
  return count;
}

/*******************************************************************************
 * Problem 8, Part 1: generate license text and link from license code.
 *
 * Images, videos, and other resources on the web are governed by copyright.
 * Everything you find on the web is copyright to its creator automatically, and
 * you cannot reuse it unless you are granted a license to do so.
 *
 * Different licenses exist to allow creators to share their work. For example,
 * the Creative Commons licenses are a popular way to allow people to reuse
 * copyright material, see https://creativecommons.org/licenses/.
 *
 * Below is a list of license codes, and the associated license text explaining the code:
 *
 * CC-BY: Creative Commons Attribution License
 * CC-BY-NC: Creative Commons Attribution-NonCommercial License
 * CC-BY-SA: Creative Commons Attribution-ShareAlike License
 * CC-BY-ND: Creative Commons Attribution-NoDerivs License
 * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
 * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
 *
 * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
 * and the explanation text, "All Rights Reserved"
 *
 * Write a function, generateLicenseLink(), which takes a license code, and returns
 * an HTML link to the appropriate license URL, and including the explanation text.
 *
 * For example:
 *
 * generateLicenseLink('CC-BY-NC') should return the following HTML string:
 *
 * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
 *
 * The URL is generated based on the license code:
 *
 * - remove the `CC-` prefix
 * - convert to lower case
 * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
 *
 * Your generateLicenseLink() function should also accept an optional second argument,
 * `targetBlank`.  If `targetBlank` is true, add ` target="_blank"` to your link
 * so that the URL opens in a blank tab/window.
 *
 * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 * @param {string} licenseCode - a license code
 * @param {bool|undefined} targetBlank - whether to open the link in a new tab/window
 * @returns {string}
 ******************************************************************************/

function generateLicenseLink(licenseCode, targetBlank) {
  let element = '';
  let license = '',
    link = '';

  // Assigning descriptions
  switch (licenseCode) {
    case 'CC-BY':
      license = 'Creative Commons Attribution License';
      break;
    case 'CC-BY-NC':
      license = 'Creative Commons Attribution-NonCommercial License';
      break;
    case 'CC-BY-SA':
      license = 'Creative Commons Attribution-ShareAlike License';
      break;
    case 'CC-BY-ND':
      license = 'Creative Commons Attribution-NoDerivs License';
      break;
    case 'CC-BY-NC-SA':
      license = 'Creative Commons Attribution-NonCommercial-ShareAlike License';
      break;
    case 'CC-BY-NC-ND':
      license = 'Creative Commons Attribution-NonCommercial-NoDerivs License';
      break;
    default:
      license = 'All Rights Reserved';
      link = `"https://choosealicense.com/no-permission/"`;
      break;
  }

  // Assigning link
  if (link === '') {
    var formattedCode = licenseCode;
    formattedCode = formattedCode.substring(3, licenseCode.length).toLowerCase();

    link = `"https://creativecommons.org/licenses/${formattedCode}/4.0/"`;
  }

  // Checking to see if target has to be set to blank
  if (targetBlank) {
    link += ` target="_blank"`;
  }

  // defining the element to be returned
  element = `<a href=${link}>${license}</a>`;

  // Returning the final link element
  return element;
}

/*******************************************************************************
 * Problem 9 Part 1: convert a value to a Boolean (true or false)
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats and languages (English and French)
 * over the years, and the data is a mess. For example, the dataset contains all
 * of the following values:
 *
 * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...any positive number
 * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...any negative number
 *
 * Write a function pureBool() which takes a String, Number, or Boolean,
 * and attempts to convert it into a pure Boolean value, according to these rules:
 *
 * 1. If the value is already a Boolean (true or false) return the value without conversion
 * 2. If the value is one of the "true" type values, return `true` (Boolean)
 * 3. If the value is one of the "false" type values, return `false` (Boolean)
 * 4. If the value is none of the "true" or "false" values, throw an error with the error
 * message, 'invalid value'.
 *
 * @param {string|number|boolean|} value - a value to convert to true/false
 * @returns {bool}
 ******************************************************************************/

function pureBool(value) {
  let result; // Variable to store the return value

  // Cheking if value is a number
  if (typeof value === 'number') {
    if (value > 0) {
      result = true;
    } else {
      result = false;
    }
  }

  // Checking if value is a string
  else if (typeof value === 'string') {
    let modValue = value.toUpperCase();

    let trueVals = ['YES', 'Y', 'OUI', 'O', 'TRUE', 'T', 'VRAI', 'V']; // Values that should return true
    let falseVals = ['NO', 'N', 'NON', 'FALSE', 'F', 'FAUX']; // Values that should return false

    // Checking if value is true
    if (trueVals.includes(modValue)) {
      result = true;
    }
    // Checking if value is false
    else if (falseVals.includes(modValue)) {
      result = false;
    }
  }

  // Checking if value is a boolean
  else if (typeof value === 'boolean') {
    result = value;
  }

  // Checking whether the value given is invalid
  else {
    throw 'invalid value';
  }

  // Returning the result
  return result;
}

/*******************************************************************************
 * Problem 9 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your pureBool() function above, create three new functions to check
 * if a list of arguments are all "true", partially "true", or all "false" values:
 *
 * every('Y', 'yes', 1) --> returns true
 * any('Y', 'no', 1) --> returns true
 * none('Y', 'invalid', 1) --> returns false
 *
 * Use try/catch syntax to avoid having your functions throw errors when pureBool()
 * throws on invalid data.
 ******************************************************************************/

function every() {
  let check;

  // Iterating through the arguments passed to the function
  for (let i = 0; i < arguments.length; i++) {
    // Checking if errors were thrown
    try {
      check = pureBool(arguments[i]);
    } catch (err) {
      check = false;
    }

    // Exiting the program if check becomes false
    if (check === false) {
      return check;
    }
  }

  // Returning the result
  return check;
}

function any() {
  let check;

  // Iterating through the arguments passed to the function
  for (let i = 0; i < arguments.length; i++) {
    // Checking if errors were thrown
    try {
      check = pureBool(arguments[i]);
    } catch (err) {
      check = false;
    }

    // Exiting the program if even one of the values is true
    if (check === true) {
      return check;
    }
  }

  // Returning the result
  return check;
}

function none() {
  let check;

  // Iterating through the arguments passed to the function
  for (let i = 0; i < arguments.length; i++) {
    // Checking if errors were thrown
    try {
      check = pureBool(arguments[i]);
    } catch (err) {
      check = false;
    }

    // If even one value is true, we return false because the output is true only when all the inputs are false
    if (check === true) {
      check = false;
      return check;
    }
  }

  // If the program reaches here, it means that all the values produce false, so we return true
  check = true;
  return check;
}

/*******************************************************************************
 * Problem 10 - build a URL
 *
 * Querying the iNaturalist Web API (https://api.inaturalist.org/v2/observations)
 * for data involves formatting a URL in a particular way.  As we know from
 * week 1, a URL can contain optional name=value pairs, see: https://web222.ca/weeks/week01/#urls
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildUrl() function to build a URL for the iNaturalist API
 * based on arguments passed by the caller.
 *
 * The buildUrl() function accepts the following arguments:
 *
 * - query: a URI encoded search string, for example "butterfly" or "Horse-chestnut"
 * - order: a string indicating sort order, with possible values of `ascending` or `descending`
 * - count: a number from 1 to 30, indicating how many results to return per page
 * - license: a string indicating which items to return (e.g., which license they use). Possible
 *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., count must be between 1 and 50, etc), and returns
 * a properly formatted URL.
 *
 * For example:
 *
 * buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by') would return the following URL:
 *
 * https://api.inaturalist.org/v2/observations?query='Monarch%20Butterfly'&count=25&order=ascending&license=cc-by
 *
 * NOTE: if any of the values passed to buildUrl() are invalid, an Error should be thrown.
 *
 * NOTE: make sure you properly encode the query value, since URLs can't contain
 * spaces or other special characters. HINT: use the encodeURIComponent() function
 * to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * @param {string} query the query to use. Must be properly URI encoded
 * @param {string} order the sort order to use, must be one of `ascending` or `descending`.
 *        If the caller uses `asc` convert it to `ascending`.  Same for `desc` and `descending`.
 * @param {number} count the number of results per page, must be 1-50
 * @param {string} license the license to use, must be one of:
 *        none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 * @returns {string} the properly formatted URL
 ******************************************************************************/

function buildUrl(query, order, count, license) {
  // Creating arrays containing valid values
  let validLicense = [
    'none',
    'any',
    'cc-by',
    'cc-by-nc',
    'cc-by-sa',
    'cc-by-nd',
    'cc-by-nc-sa',
    'cc-by-nc-nd'
  ];

  let validOrder = ['ascending', 'asc', 'descending', 'desc'];

  // Validating the order
  if (!validOrder.includes(order)) {
    throw 'ERROR: Enter a valid order';
  }

  if (order === 'asc') {
    order = 'ascending';
  }

  if (order === 'desc') {
    order = 'descending';
  }

  // Validating the count
  if (!(count >= 1 && count <= 30)) {
    throw 'ERROR: Enter a valid count value';
  }

  // Validating the license
  if (!validLicense.includes(license)) {
    throw 'ERROR: License not valid';
  }

  let template = `https://api.inaturalist.org/v2/observations?query=`;
  let formattedUri = '';

  // Validating the query
  // Checking if query has spaces
  if (/\s/.test(query)) {
    // Checking if query has special characters
    if (/[^A-Za-z0-9 ]/.test(query)) {
      query = `${encodeURIComponent(query)}`;
    } else {
      query = `'${encodeURIComponent(query)}'`;
    }
  } else {
    query = `${encodeURIComponent(query)}`;
  }

  // Creating the uri and returning it
  formattedUri = `${query}&count=${count}&order=${order}&license=${license}`;
  let uri = template + formattedUri;

  // Returning the final URI
  return uri;
}

// Our unit test files need to access the functions we defined
// above, so we export them here.
exports.greeting = greeting;
exports.normalizeVariable = normalizeVariable;
exports.createIframe = createIframe;
exports.fixPostalCode = fixPostalCode;
exports.toProvince = toProvince;
exports.normalizeCoord = normalizeCoord;
exports.formatCoords = formatCoords;
exports.countForProvince = countForProvince;
exports.generateLicenseLink = generateLicenseLink;
exports.pureBool = pureBool;
exports.every = every;
exports.any = any;
exports.none = none;
exports.buildUrl = buildUrl;
