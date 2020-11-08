const MAXIMUM_FITNESS = 10;
const HUNGER_INCREMENT = 5
const FITNESS_DECREMENT = 3
const MINIMUM_HUNGER = 0

function Pet(name){
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
};

Pet.prototype = {
    constructor: Pet,
    growUp: function() {
    this.age ++;
    this.hunger += HUNGER_INCREMENT;
    this.fitness -= FITNESS_DECREMENT;
},
    walk: function(){
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ){
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS
    }
},
    feed: function (){
        if((this.hunger - 3) >= MINIMUM_HUNGER){ 
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
},
}
module.exports = Pet;