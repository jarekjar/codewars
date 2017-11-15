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