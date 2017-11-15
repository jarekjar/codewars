function nbYear(p0, percent, aug, p) {
    var percentage = parseFloat(percent) / 100.0;
    var count = 1;
    var newPop = p0 + (percentage * p0) + aug;
    console.log("The population for year " + count +  " is " + Math.round(newPop))
    while (newPop < p) {
        newPop = newPop + (percentage * newPop) + aug;
        count++;
        console.log("The population for year " + count +  " is " + Math.round(newPop))
    }
    console.log("It will take roughly " + count + " years to reach " + p + " people!")
    return count;
}