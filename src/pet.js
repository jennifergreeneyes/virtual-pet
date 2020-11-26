const MAX_FITNESS = 10;
const HUNGER_INCREMENT = 5;
const FITNESS_DECREMENT = 3;
const MIN_HUNGER = 0;
const MAX_AGE = 30;
const MAX_HUNGER = 10;

class Pet {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = MAX_FITNESS;
        this.children = [];
    }
    get isAlive() {
        return this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > 0;
    }
    growUp() {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive");
        }
        this.age++;
        this.hunger += HUNGER_INCREMENT;
        this.fitness -= FITNESS_DECREMENT;
    }
    walk() {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive");
        }
        if (this.fitness + 4 <= MAX_FITNESS) {
            this.fitness += 4;
        } else {
            this.fitness = MAX_FITNESS;
        }
    }
    feed() {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive");
        }
        if (this.hunger - 3 >= MIN_HUNGER) {
            this.hunger -= 3;
        } else {
            this.hunger = MIN_HUNGER;
        }
    }
    checkup() {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive");
        }
        if (this.fitness <= 3 && this.hunger >= 5) {
            return "I am hungry AND I need a walk";
        } else if (this.fitness <= 3) {
            return "I need a walk";
        } else if (this.hunger >= 5) {
            return "I am hungry";
        } else {
            return "I feel great!";
        }
    }
    haveBaby(name) {
        if(!this.isAlive) {
            throw new Error("Your pet is no longer alive");
        }
        this.children.push(new Pet(name));
    }
}


module.exports = Pet;
