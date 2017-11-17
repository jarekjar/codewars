/*Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

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
