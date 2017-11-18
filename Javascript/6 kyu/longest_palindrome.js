/*
Longest Palindrome

Find the length of the longest substring in the given string s that is the same
in reverse.

As an example, if the input was “I like racecars that go fast”, the substring
(racecar) length would be 7.

If the length of the input string is 0, return value must be 0.

Example:

"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/


function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
}

function longestPalindrome(str1) {
    if (str1 === "") {
        return 0;
    }
    var max_length = 0,
        maxp = '';

    for (var i = 0; i < str1.length; i++) {
        var subs = str1.substr(i, str1.length);

        for (var j = subs.length; j >= 0; j--) {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
                continue;

            if (is_Palindrome(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }
    if (maxp.length === 0) {
        return 1;
    }
    return maxp.length;

}
