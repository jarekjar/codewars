/*
For building the encrypted string:
Take every 2nd char from the string, 
then the other chars, that are not every 2nd char, 
and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

This kata is part of the Simple Encryption Series:
Simple Encryption #1 - Alternating Split
Simple Encryption #2 - Index-Difference
Simple Encryption #3 - Turn The Bits Around
Simple Encryption #4 - Qwerty

Have fun coding it and please don't forget to vote and rank this kata! :-)
*/


function encrypt(text, n) {
    let newString = text;
    if (!text || n <= 0 || text.length <= 0) {
        return text;
    }
    for (let i = 0; i < n; i++) {
        let twoChar = ""
        let otherChar = ""
        for (let i = 0; i < newString.length; i++) {
            if (i % 2) {
                twoChar += newString[i];
            } else {
                otherChar += newString[i];
            }
        }
        newString = twoChar + otherChar;
    }
    return newString;
}


function decrypt(encryptedText, n) {
    let newString = encryptedText;
    if (!encryptedText || n <= 0 || encryptedText.length <= 0) {
        return encryptedText;
    }

    for (let i = 0; i < n; i++) {
        let odds = newString.slice(0, (newString.length / 2));
        let evens = newString.slice((newString.length / 2));
        let output = ""
        for (let i = 0; i < newString.length; i++) {
            if (i % 2) {
                output += odds[0];
                odds = odds.slice(1);
            } else {
                output += evens[0];
                evens = evens.slice(1);
            }
        }
        newString = output;
    }
    return newString;
}
