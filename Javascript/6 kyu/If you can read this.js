/*
The idea for this Kata came from 9gag today.here

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

Like this:

Input: If you can read

Output: India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

Some notes

Keep the punctuation, and remove the spaces.
Use Xray without dash or space.

Reference

        A: "Alfa",
        B: "Bravo",
        C: "Charlie",
        D: "Delta",
        E: "Echo",
        F: "Foxtrot",
        G: "Golf",
        H: "Hotel",
        I: "India",
        J: "Juliett",
        K: "Kilo",
        L: "Lima",
        M: "Mike",
        N: "November",
        O: "Oscar",
        P: "Papa",
        Q: "Quebec",
        R: "Romeo",
        S: "Sierra",
        T: "Tango",
        U: "Uniform",
        V: "Victor",
        W: "Whiskey",
        X: "Xray",
        Y: "Yankee",
        Z: "Zulu"


You can use the NATO hash with the alphabet
*/

function to_nato(words) {
    const pilotArray = {
        A: "Alfa",
        B: "Bravo",
        C: "Charlie",
        D: "Delta",
        E: "Echo",
        F: "Foxtrot",
        G: "Golf",
        H: "Hotel",
        I: "India",
        J: "Juliett",
        K: "Kilo",
        L: "Lima",
        M: "Mike",
        N: "November",
        O: "Oscar",
        P: "Papa",
        Q: "Quebec",
        R: "Romeo",
        S: "Sierra",
        T: "Tango",
        U: "Uniform",
        V: "Victor",
        W: "Whiskey",
        X: "Xray",
        Y: "Yankee",
        Z: "Zulu"
    }
    let output = "";
    let newLet = words.toUpperCase();
    let count = 0;
    console.log(newLet);
    for (let i = 0; i < newLet.length; i++) {
        for (let j in pilotArray) {
            if (j === newLet[i]) {
                output += pilotArray[j] + " ";
                count = 1;
            }
        }
        if (count === 0 && words[i] !== " ") {
            output += words[i] + " ";
        } else {
            count = 0;
        }
    }
    let newString = output.replace(/\s+/g, ' ').trim();
    return newString;
}
to_nato('go for it!'), "Golf Oscar Foxtrot Oscar Romeo India Tango !"
