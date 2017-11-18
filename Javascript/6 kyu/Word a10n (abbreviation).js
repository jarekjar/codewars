/*
The word i18n is a common abbreviation of internationalization the developer
community use instead of typing the whole word and trying to spell it correctly.
Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below)
within that string of length 4 or greater into an abbreviation following the same
rules.

Notes:

A "word" is a sequence of alphabetical characters. By this definition, any other
character like a space or hyphen (eg. "elephant-ride") will split up a series of
letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number
of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example:

abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"
*/

function abbreviate(string) {
    var count = 0;
    var output = "";
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i).toLowerCase() != string.charAt(i).toUpperCase() &&
            string.charAt(i + 1).toLowerCase() != string.charAt(i + 1).toUpperCase() &&
            string.charAt(i - 1).toLowerCase() != string.charAt(i - 1).toUpperCase()) {
            count++
        } else {
            if (count > 1) {
                output += count + string[i];
                count = 0;
            } else if (count == 1) {
                output += (string[i - 1] + string[i]);
                count = 0;
            } else {
                output += string[i];
            }
        }
    }
    return output;
}
