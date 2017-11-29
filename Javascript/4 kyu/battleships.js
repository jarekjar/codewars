/*
Task

Your task in the kata is to determine how many boats are sunk damaged and
untouched from a set amount of attacks. You will need to create a function that
takes two arguments, the playing board and the attacks.




 

Boats are placed either horizontally, vertically or diagonally on the board. 0
represents a space not occupied by a boat. Digits 1-3 represent boats which vary
in length 1-4 spaces long. There will always be at least 1 boat up to a maximum
of 3 in any one game. Boat sizes and board dimentions will vary from game to
game.

Attacks

Attacks are calculated from the bottom left, first the X coordinate then the Y.
There will be at least one attack per game, and the array will not contain
duplicates.

[[2, 1], [1, 3], [4, 2]];
First attack      [2, 1] = 3
Second attack [1, 3] = 0
Third attack     [4, 2] = 1
Function Initialization

board = [[0,0,0,2,2,0],
         [0,3,0,0,0,0],
         [0,3,0,1,0,0],
         [0,3,0,1,0,0]];
         
attacks = [[2, 1], [1, 3], [4, 2]];

damagedOrSunk(board, attacks);

Scoring

1 point for every whole boat sank.
0.5 points for each boat hit at least once (not including boats that are sunk).
-1 point for each whole boat that was not hit at least once.
Sunk or Damaged

sunk = all boats that are sunk
damaged = all boats that have been hit at least once but not sunk
notTouched/not_touched = all boats that have not been hit at least once
Output

You should return a hash with the following data

`sunk`, `damaged`, `notTouched`, `points`
Example Game Output

In our above example..

First attack: boat 3 was damaged, which increases the points by 0.5
Second attack: miss nothing happens
Third attack: boat 1 was damaged, which increases the points by 0.5
boat 2 was untouched so points -1 and notTouched +1 in Javascript/Java/C# and
not_touched +1 in Python/Ruby.
No whole boats sank
Return Hash

{ sunk: 0, damaged: 2 , notTouched: 1, points: 0 }
*/

function damagedOrSunk(board, attacks) {
    var result = {
        sunk: 0,
        damaged: 0,
        notTouched: 0,
        points: 0
    }
    var b1Results = [];
    var b2Results = [];
    var b3Results = [];
    var x = 1;
    var y = 1;
    for (var i = (board.length - 1); i > -1; i--) {
        var bArray = board[i];
        for (var j = 0; j < bArray.length; j++) {
            if (board[i][j] === 1) {
                b1Results.push([(x), (y)]);
            } else if (board[i][j] === 2) {
                b2Results.push([(x), (y)]);
            } else if (board[i][j] === 3) {
                b3Results.push([(x), (y)]);
            }
            x++;
        }
        y++;
        x = 1;
    }
    var b1Length = b1Results.length;
    var b2Length = b2Results.length;
    var b3Length = b3Results.length;
    var hitCount = 0;
    //console.log(b3Results);
    function calculatePoints(boat, length) {
        for (var i = 0; i < attacks.length; i++) {
            for (var boats in boat) {
                if (JSON.stringify(boat[boats]) === JSON.stringify(attacks[i])) {
                    hitCount++;
                }
            }
        }
        if (hitCount === length) {
            result.sunk++
                result.points++
        } else if (hitCount === 0) {
            result.notTouched++;
            result.points--;
        } else {
            result.points += .5;
            result.damaged++
        }
        hitCount = 0;
    }
    if (b1Length != 0) {
        calculatePoints(b1Results, b1Length)
    }
    if (b2Length != 0) {
        calculatePoints(b2Results, b2Length)
    }
    if (b3Length != 0) {
        calculatePoints(b3Results, b3Length)
    }

    return result;
}
