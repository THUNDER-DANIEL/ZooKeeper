
// EXPORT DEFINES WHAT IS AVAIALBE WHEN IMPORTING THIS FILE

export default class Bear {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
    }
     // methods are functions attached to  ojects

    eat(food) {
        console.log(`BEAR Chomp chomp all the ${food}ies.`)
    }
    // method (FUNCTION)

    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
