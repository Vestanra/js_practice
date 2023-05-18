const counter = {
    value: 0,
    increment(value) {
        console.log('increment', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement', this);
        this.value -= value;
    },
};

const increment1 = function (value) {
    console.log('increment', this);
    this.value += value;
};
// counter.increment(5);
// console.log(counter);
increment1.call(counter, 8);
console.log(counter);

const hat = {
    color: 'black',
};

const dress = {
    color: 'red',
};
const changeColor = function (color) {
    console.log('changeColor', this);
    this.color = color;
};
changeColor.call(hat, 'green');
console.log(hat);
const changeColorDress = changeColor.bind(dress);
changeColorDress('pink');
console.log(dress);

const objA = {
    a: 5,
    z: 1,
};

const objB = Object.create(objA);
objB.y = 3;
objB.a = 13;
console.log(objA);
console.log(objB.a);
console.log(objA.hasOwnProperty('z'));

const Car = function ({brand, modale, price} = {}) {
    // const {brand, modale, price} = config;
    this.brand = brand;
    this.modale = modale;
    this.price = price;
};
const myCar1 = new Car ({brand: 'Audi', modale: 'Q3', price: 20000, });
console.log('myCar1', myCar1);
const myCar2 = new Car ({brand: 'BMW', modale: 'X5', price: 18000, });
console.log('myCar2', myCar2);
const myCar3 = new Car ();
console.log('myCar3', myCar3);
