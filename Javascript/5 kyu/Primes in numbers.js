/*
Given a positive number n > 1 find the prime factor decomposition of n. 
The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

function primeFactors(n) {
    var primeFactors = [];
    var out = "";
    while (n % 2 === 0) {
        primeFactors.push(2);
        n = n / 2;
    }

    var sqrtn = Math.sqrt(n);
    for (var i = 3; i <= sqrtn; i++) {
        while (n % i === 0) {
            primeFactors.push(i);
            n = n / i;
        }
    }
    
    if (n > 2) {
        primeFactors.push(n);
    }

    var new1 = primeFactors;
    
    var count = {};
    primeFactors.forEach(function (i) {
        count[i] = (count[i] || 0) + 1;
    });
   
    var valu = [];
    for (var key of Object.keys(count)) {
        valu.push(count[key]);
    }
    
    var num = [];
    for (var key in count) {
        num.push(key);
    }
    
    for (var i = 0; i < num.length; i++) {
        if (valu[i] > 1) {
            out += "(" + num[i] + "**" + valu[i] + ")";
        } else {
            out += "(" + num[i] + ")";
        }
    }
    return out;
}