/*
Create a function that transforms any positive number to a string representing
the number in words. The function should work for all numbers between 0 and
999999.

Examples

number2words(0)  ==>  "zero"
number2words(1)  ==>  "one"
number2words(9)  ==>  "nine"
number2words(10)  ==>  "ten"
number2words(17)  ==>  "seventeen"
number2words(20)  ==>  "twenty"
number2words(21)  ==>  "twenty-one"
number2words(45)  ==>  "forty-five"
number2words(80)  ==>  "eighty"
number2words(99)  ==>  "ninety-nine"
number2words(100)  ==>  "one hundred"
number2words(301)  ==>  "three hundred one"
number2words(799)  ==>  "seven hundred ninety-nine"
number2words(800)  ==>  "eight hundred"
number2words(950)  ==>  "nine hundred fifty"
number2words(1000)  ==>  "one thousand"
number2words(1002)  ==>  "one thousand two"
number2words(3051)  ==>  "three thousand fifty-one"
number2words(7200)  ==>  "seven thousand two hundred"
number2words(7219)  ==>  "seven thousand two hundred nineteen"
number2words(8330)  ==>  "eight thousand three hundred thirty"
number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred
eighty-eight"
*/

function triplets(n) {
    var c = '',
        m = 0;
    if (100 <= n) {
        m = Math.floor(n / 100);
        c += triplets(m) + ' hundred';
        n -= m * 100
    }
    n.toString().replace(/^[2-9](?=\d)/, function (a) {
        c += (m ? ' ' : ' ') + ('twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety'.split(',')[a - 2]);
        n -= (+a) * 10
    });
    if (n == 0) return c;
    else if (c && n < 10) c += '-';
    return c + ' ' + 'one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen'.split(',')[n - 1];
}

function number2words(n) {
    if (n === 0) {
        return "zero";
    }
    var lng, isS, chn = '';
    wds = ',thousand,million,thousand million'.split(',');
    n.toString().replace(/(\d{1,3})(?=((\d\d\d)*)$)/g, function (a, b, c) {
        lng = c.toString().length / 3;
        isS = triplets(m = a.replace(/^0+/, ''));
        if (isS) chn += ((!lng) && m < 100 && /thousand$/.test(chn) ? ' ' : ' ') + isS.replace(/- /g, '-') + ' ' + wds[lng];
    });
    chn = chn.replace("d-", "d ")
    chn = chn.replace("d-", "d ");
    return chn.replace(/\s+/g, ' ').trim();
}
