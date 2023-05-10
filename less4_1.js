
const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers.forEach(logMessage);

// const onCetPositionSuccess = function (position) {
//   console.log('position');
//   console.log(position);
// };

// const onCetPositionError = function (error) {
//   console.log('error', error);
// };

// window.navigator.geolocation.getCurrentPosition(onCetPositionSuccess, onCetPositionError);


// function callback() {
//   console.log('через 5 сек');
// };
// console.log('tru');
// setTimeout(callback, 5000);
// console.log('lala');


//ф-ція фільтрації
const filter = function (array, test) {
  const filterArray = [];
  for (const element of array) {
    const passed = test(element);
    if (passed) {
      filterArray.push(element);
    }
  }
  return filterArray;
};

const callback = function (value) {
  return value >= 3;
};
const callback1 = function (value) {
  return value <= 3;
};
const callback2 = function (fruit) {
  return fruit.price > 60;
};
const fruits = [
  { name: 'apple', price: 50 },
  { name: 'grapes', price: 70 },
  { name: 'lemon', price: 60 },
  { name: 'strawberry', price: 110 }];
  
console.log(filter(([2, 1, 8, 9, 4]), callback));
console.log(filter(([2, 1, 8, 9, 4]), callback1));

console.log(filter(fruits, callback2));


//замикання
const fnA = function (parametr) {
  const a = 77;
  console.log('1', a);
  const innerFunction = function () {
    console.log('this is innerFunction');
    console.log('2', a);
  };
  return innerFunction;
};

const fnB = fnA();
fnB();
// console.log(fnB);


//повар
const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} cooks ${dish}`);    
  }

  return makeDish;
}
const sheffNick = makeSheff('Nick');
const sheffAnna = makeSheff('Anna');
sheffNick('soup');
sheffAnna('salat');

console.dir(sheffNick);


//округлення
// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };
// console.log(rounder(1.117771, 4));

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};
const to2 = rounder(2);
console.log(to2(1.117771));


const calculateTotalPrice = (orderedItems) => {
  let total = 0;
  orderedItems.forEach(function (element) {
  total += element;
  });
  return total;
};
console.log(calculateTotalPrice([164, 48, 291]));

const add = function (a, b, c) {
  console.log(arguments);
  return a + b + c;
};

const add1 = (a, b, c) => {
  return a + b + c;
}
console.log(add(2, 5, 10));

const fnAA = function () {
  return {
    a: 5,
  }
};
console.log(fnAA());

const fnBB = () => ({
  a: 'a',
});
console.log(fnBB());

const calculateTotalPrice1 = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => totalPrice += item);
  return totalPrice;
};


// function changeEven(numbers, value) {
//   // Change code below this line
//   let newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] + value);
//     } else {
//       newNumbers.push(numbers[i]);
//     };
//   };
//   return newNumbers;
//   // Change code above this line
// }
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));


const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];

const usersName = users.map((user) => user.name);
console.log(usersName);

