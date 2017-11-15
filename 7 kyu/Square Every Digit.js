function squareDigits(num){
 var strArr = num.toString().split('');
 var result = '';
    for(var i = 0; i < strArr.length; i++){
     result += Math.pow(strArr[i], 2) + '';
    }

    return +result;

}