function findNb(m) {
    if (Math.pow(1, 3) == m) {
        return 1
    } else {
        var n = 2
        var volume = 1
        while (volume < m) {
            volume = volume + Math.pow(n, 3)
            if (volume == m) {
                return n
            } else {
                n = n + 1
                continue
            }
        }
    }
    return -1
}