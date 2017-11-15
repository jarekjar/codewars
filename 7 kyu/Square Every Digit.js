/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num){
 var strArr = num.toString().split('');
 var result = '';
    for(var i = 0; i < strArr.length; i++){
     result += Math.pow(strArr[i], 2) + '';
    }

    return +result;

}
