/*
Common denominators

You will have a list of rationals in the form

 { {numer_1, denom_1} , ... {numer_n, denom_n} }
or

 [ [numer_1, denom_1] , ... [numer_n, denom_n] ]
or

 [ (numer_1, denom_1) , ... (numer_n, denom_n) ]
where all numbers are positive ints.

You have to produce a result in the form

 (N_1, D) ... (N_n, D)
or

 [ [N_1, D] ... [N_n, D] ]
or

 [ (N_1', D) , ... (N_n, D) ]
or

{{N_1, D} ... {N_n, D}}
depending on the language (See Example tests)

in which D is as small as possible and

 N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example:

convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
Note for Bash

input is a string, e.g "2,4,2,6,2,8"

output is then "6 12 4 12 3 12"
*/

function convertFrac(lst) {
    var denom = [];
    for (var i = 0; i < lst.length; i++) {
        denom.push(lst[i][1]);
    }
    denom.sort(function (a, b) {
        return b - a
    });

    var lcd = lcm_more_than_two_numbers(denom);
    var numer = [];
    var mat = 0;
    var result = "";

    for (var j = 0; j < lst.length; j++) {
        mat = (lst[j][0] / lst[j][1]) * lcd
        numer.push(mat);
    }
    for (var k = 0; k < numer.length; k++) {
        result += ("(" + Math.round(numer[k]) + "," + lcd + ")");
    }
    return result;
}

function lcm_more_than_two_numbers(arr) {
    // ini
    arr = arr.map(set_abs);
    var a = arr[0];

    // loop
    for (var i = 1, len = arr.length; i < len; i++) {
        let b = arr[i];
        a = get_lcm(a, b);
    }
    return a;
}

// get greatest common divisor recursively
var get_gcd = function (a, b) {
    return !b ? a : get_gcd(b, a % b);
};

var get_lcm = function (a, b) {
    return (a * b) / get_gcd(a, b);
};

var set_abs = function (num) {
    return Math.abs(num);
};
