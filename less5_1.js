// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement', this);
//         this.value -= value;
//     },
// };

// const increment1 = function (value) {
//     console.log('increment', this);
//     this.value += value;
// };
// // counter.increment(5);
// // console.log(counter);
// increment1.call(counter, 8);
// console.log(counter);

// const hat = {
//     color: 'black',
// };

// const dress = {
//     color: 'red',
// };
// const changeColor = function (color) {
//     console.log('changeColor', this);
//     this.color = color;
// };
// changeColor.call(hat, 'green');
// console.log(hat);
// const changeColorDress = changeColor.bind(dress);
// changeColorDress('pink');
// console.log(dress);

// const objA = {
//     a: 5,
//     z: 1,
// };

// const objB = Object.create(objA);
// objB.y = 3;
// objB.a = 13;
// console.log(objA);
// console.log(objB.a);
// console.log(objA.hasOwnProperty('z'));



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
console.log(Car.prototype);
Car.prototype.changePrice = function(newPrice) {
    this.price = newPrice;
};
myCar2.changePrice(111);
console.log('myCar2', myCar2);

const User = function ({email, passwword} = {}) {
    this.email = email;
    this.passwword = passwword;
};

User.prototype.changeEmail = function (newEmial) {
    this.email = newEmial;
}
const mango = new User({email: 'aa@com', passwword: 1111});
mango.changeEmail('bbb@com'); 
console.log('mango', mango);

class Dress {
    static items = 'dresses';
    constructor ({brand, color, price} = {}) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
    changePrice(newPrice) {
        this.price = newPrice;
    }
};

const dress1 = new Dress ({brand: 'deli', color: 'red', price: 850,});
dress1.changePrice(777)
dress1.color = 'blacck';
console.log(dress1);
console.log('Dress', Dress);



class Ccar {
    // Change code below this line
  constructor ({brand, model, price} = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  
  
    // Change code above this line
  }





  class Storage {
    constructor (items) {
      this.items = items;
    }
    getItems() {
      return this.items;
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    removeItem(itemToRemove) {
        this.items.reduce([], element => {
            
        })
    }
  }
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]  