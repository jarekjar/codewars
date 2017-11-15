function isValidWalk(walk) {
    var n = 0,
        s = 0,
        e = 0,
        w = 0;
    if (walk.length == 10) {
        for (var i = 0; i < walk.length; i++) {
            if (walk[i] == 'n') {
                n++
            } else if (walk[i] == 's') {
                s++
            } else if (walk[i] == 'e') {
                e++
            } else if (walk[i] == 'w') {
                w++
            }
        }
        if ((n - s) === 0 && (w - e) === 0) {
            return true
        } else {
            return false
        }
    }
    else {
        return false
    }
}