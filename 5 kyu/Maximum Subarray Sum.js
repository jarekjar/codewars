 var maxSequence = function (arr) {
     var rec = 0;
     var sum = 0;
     for (var i = 0; i < arr.length; i++) {
         sum = 0;
         for (var j = i; j < arr.length; j++) {
             sum += arr[j];
             if (sum > rec) {
                 rec = sum;
             }
         }
     }

     return rec;
 }