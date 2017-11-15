/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

##Example:
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") => "Lew"
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
*/

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
