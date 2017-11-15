function expandedForm(num) {
    var arr = []
    var tenth = 10
    var str = num.toString();
    arr.push(str.charAt(str.length - 1));
    for (var i = (str.length - 2); i >= 0; i--) {
            arr.push('' + str.charAt(i) * tenth);
            tenth = tenth * 10
        }
    return arr.reverse().join(" + ").replace(/ 0+ \+/g, "").replace(/ \+ 0$/, "");
}