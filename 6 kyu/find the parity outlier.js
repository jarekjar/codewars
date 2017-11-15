function findOutlier(arr) {
    var evens = [];
    var odds = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        } else if (Math.abs(arr[i]) % 2 === 1) {
            odds.push(arr[i]);
        }
    }
    if (evens.length > odds.length) {
        return odds[0]
    } else {
        return evens[0]
    }
}