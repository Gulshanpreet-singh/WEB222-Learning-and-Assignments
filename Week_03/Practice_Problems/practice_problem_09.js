/*
Write a function containsBadWord that takes two arguments: badWords (an Array of words that can’t be used), and userName (a String entered by the user). Check to see if any of the words in badWords are contained within userName. Return the badWord that was found, or null if none are found.
*/

function containsBadWord(badWords, userName) {
    let found = [];
    for (let i = 0; i < badWords.length; i++) {
        if (userName.toLowerCase().includes(badWords[i].toLowerCase())) {
            return badWords[i];
        }
    }

    return null;
}

console.log(containsBadWord(["Bad", "Words", "Not", "Good"], "Bestwords"));