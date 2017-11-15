function createPhoneNumber(numbers) {
    var num1 = numbers.slice(0, 3);
    var num2 = numbers.slice(3, 6);
    var num3 = numbers.slice(6, 10);
    num1.toString();
    num2.toString();
    num3.toString();   

    return "(" + num1.join("") + ")" + " " + num2.join("") + "-" + num3.join("");
}