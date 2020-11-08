const MAXIMUM_FITNESS = 10;
const HUNGER_INCREMENT = 5;
const FITNESS_DECREMENT = 3;
const MINIMUM_HUNGER = 0;

function Pet(name){
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
};

Pet.prototype = {
    constructor: Pet,

    get isAlive(){
        return this.age < 30 && this.hunger <10 && this.fitness > 0;
},

    growUp: function() {
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive');
        }
    this.age ++;
    this.hunger += HUNGER_INCREMENT;
    this.fitness -= FITNESS_DECREMENT;
},
    walk: function(){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive');
        }
        if ((this.fitness + 4) <= MAXIMUM_FITNESS ){
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS
    }
},
    feed: function (){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive');
        }
        if((this.hunger - 3) >= MINIMUM_HUNGER){ 
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
},
    checkup: function (){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive');
        }
        if(this.fitness <= 3 && this.hunger >= 5){
            return "I am hungry AND I need a walk";
        } else if (this.fitness <= 3){ 
            return "I need a walk";
        } else if (this.hunger >= 5){
            return "I am hungry";
        } else {
            return "I feel great!"
        }
    },
}

module.exports = Pet;