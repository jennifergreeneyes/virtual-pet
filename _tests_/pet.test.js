const Pet = require('../src/pet');

describe('constructor', () => {
    let pet;
    beforeEach(() => {
        pet = new Pet ('Fido');
    });
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        expect(pet.name).toEqual('Fido');
    });

    it('has an initial age of 0', () => {
        expect(pet.age).toEqual(0);
    });

    it('has an initial hunger of 0', () => {
        expect(pet.hunger).toBe(0);
    })

    it('has an initial fitness of 10', () => {
        expect(pet.fitness).toBe(10);
    });
});

describe('growUp', () => {
    let pet;
    beforeEach(() => {
        pet = new Pet ('Fido');
    });
    it('increments age by 1', () => {
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    it('increments hunger by 5', () => {
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    it('decreases fitness by 3', () => {
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    })
    it('throws an error if the pet is not alive', () => {
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive'); 
    })
})

describe('walk', () => {
    let pet;
    beforeEach(() => {
        pet = new Pet ('Fido');
    });
    it('increases fitness by 4', () => {
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });
    it('increases fitness to a max of 10', () => {
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
    it('throws an error if the pet is not alive', () => {
        pet.age = 30;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive'); 
    })
});

describe ('feed', () => {
    let pet;
    beforeEach(() => {
        pet = new Pet ('Fido');
    });
    it('decreases hunger by 3', () => {
        pet.hunger = 6;
        pet.feed()
        expect(pet.hunger).toEqual(3);
    });
    it('decreases hunger to a min of 0', () => {
        pet.hunger = 1;
        pet.feed()
        expect(pet.hunger).toEqual(0);
    });
    it('throws an error if the pet is not alive', () => {
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive');
    })
})

describe ('checkup', () => {
    let pet;
    beforeEach(() => {
        pet = new Pet ('Fido');
    });
    it('returns "I need a walk" if fitness <= 3', () => {
        pet.fitness = 2;
        pet.checkup()
        expect(pet.checkup()).toEqual("I need a walk");
    });
    it('returns "I am hungry" if hunger >= 5', () => {
        pet.hunger = 6;
        expect(pet.checkup()).toEqual("I am hungry");
    });
    it('returns "I am hungry AND I need a walk" if hunger >= 5 and fitness is <= 3', () => {
        pet.hunger = 7;
        pet.fitness = 1;
        expect(pet.checkup()).toEqual("I am hungry AND I need a walk");
    });
    it('returns "I feel great!" if hunger < 5 and fitness > 3', () => {
        pet.hunger = 2;
        pet.fitness = 5;
        expect(pet.checkup()).toEqual("I feel great!");
    });
    it('throws an error if the pet is not alive', () => {
        pet.hunger = 10;
        expect(() => pet.checkup()).toThrow('Your pet is no longer alive');
    });
});

