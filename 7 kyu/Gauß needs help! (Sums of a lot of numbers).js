function f(n) {
    var sum = 0;
    if (n > 0 && Math.round(n) == n) {
        while (n > 0) {
            sum += n;
            n--;
        }
        return sum;
    } else {
        return false;
    }
}