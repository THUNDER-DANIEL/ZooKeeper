
export default class Cougar{
    constructor(
        name = '',
        color = '',
        gender ='',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
    ){
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
    }


    eat(food){
        console.log('Chomp chomp all the good ${food}ies')
    }

    speak(noise){
        alert('The ${this.constructor.name} says ${noise}')
    }



}