function declareWinner(f1, f2, firstAttacker) {
    if (firstAttacker === f1.name) {
        while (f1.health > 0 && f2.health > 0) {
            f2.health -= f1.damagePerAttack;
            console.log(f1.name + " attacks! " + f2.name + " now has " + f2.health + " health.");
            if ((f2.health - f1.damagePerAttack) <= 0) {
                console.log(f1.name + " wins with " + f1.health + " health left!")
                return f1.name;
            }
            f1.health -= f2.damagePerAttack;
            console.log(f2.name + " attacks! " + f1.name + " now has " + f1.health + " health.");
            if ((f1.health - f2.damagePerAttack) <= 0) {
                console.log(f2.name + " wins with " + f2.health + " health left!")
                return f2.name;
            }

        }
    } else {
        while (f1.health > 0 && f2.health > 0) {
            f1.health -= f2.damagePerAttack;
            console.log(f2.name + " attacks! " + f1.name + " now has " + f1.health + " health.");
            if ((f1.health - f2.damagePerAttack) <= 0) {
                console.log(f2.name + " wins with " + f2.health + " health left!")
                return f2.name;
            }
            f2.health -= f1.damagePerAttack;
            console.log(f1.name + " attacks! " + f2.name + " now has " + f2.health + " health.");
            if ((f2.health - f1.damagePerAttack) <= 0) {
                console.log(f1.name + " wins with " + f1.health + " health left!")
                return f1.name;
            }
        }
    }
}