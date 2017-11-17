/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
    var count = 0;
    for (var i = 0; i < A.length; i++) {
        for (var k = 0; k < A.length; k++) {
            if (A[i] == A[k]) {
                count++
            }

        }
        if (count % 2 == 1) {
            return A[i];
        }
        count = 0;
    }
}
