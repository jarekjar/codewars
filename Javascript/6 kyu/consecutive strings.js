/*
You are given an array strarr of strings and an integer k. Your task is to return
the first longest string consisting of k consecutive strings taken in the array.

#Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas",
"theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/

function longestConsec(strarr, k) {
    if (k > strarr.length || k < 0) {
        return ""
    }
    var array = [];
    var str = "";
    var longest = "";
    var count = 0;
    for (var j = 0; j < strarr.length; j++) {
        for (var i = 0; i < k; i++) {
            if (strarr[j]) {
                str += strarr[j]
                j++
                count++
            }
        }
        if (longest.length < str.length) {
            longest = str;
        }
        str = "";
        j -= count;
        count = 0;
    }
    return longest
}
