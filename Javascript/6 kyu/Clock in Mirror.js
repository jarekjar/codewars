/*
Clock in Mirror

Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22


He knows that the time is 11:38


in the same manner:

05:25 --> 06:35

01:50 --> 10:10

11:58 --> 12:02

12:01 --> 11:59

Please complete the method which is provided with mirror time as string, and return the real time as string.

The return time value should always be between 1<= time < 13. This is the convenient way that human read the clock.

So there is no 00:20, instead it is 12:20.

There is no 13:20, instead it is 01:20.
*/


function WhatIsTheTime(timeInMirror) {
    console.log(timeInMirror);
    var time = timeInMirror.split(':').map(Number);
    var res = [0, 0];
    // returns time as an array formatted: [h,m]
    // creates res as an empty array
    // e.g. 08:20 --> [8,20]

    if (time[1]) {
        res[1] = 60 - time[1];
    }
    // make the the 2nd element in the result array equal
    // to 60 minus that time.
    // e.g. [8,20] --> [8,40]

    res[0] = 12 - time[0];
    // make the 1st element in the result equal
    // to 12 minutes the hours.
    // e.g. [8,40] --> [4,40]

    if (time[1] !== 0) {
        res[0]--;
    }
    // if the OG minutes are not equal to zero
    // decrease the NEW hours by 1
    // [4,40] --> [3,40]

    if (res[0] <= 0) {
        res[0] += 12;
    }
    // if the NEW hours are less than or equal to zero,
    // the NEW hours should change to 12.
    //

    return ('0' + res[0]).slice(-2) + ':' + ('0' + res[1]).slice(-2);
    // return the concatted array into the right format
}

