/*
Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.

Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge. 
Don't forget the space after the closing parenthesis!
*/

function createPhoneNumber(numbers) {
    var num1 = numbers.slice(0, 3);
    var num2 = numbers.slice(3, 6);
    var num3 = numbers.slice(6, 10);
    num1.toString();
    num2.toString();
    num3.toString();   

    return "(" + num1.join("") + ")" + " " + num2.join("") + "-" + num3.join("");
}
