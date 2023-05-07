// 'use strict';
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function calculateTotalPrice(productName) {
//     let totalPrice = 0;
//     for (const product of products) { 
//         if (product.name.hasOwnProperty([productName])) {
//             totalPrice = (product.price * product.quantity);
//         }
//     }
//     return totalPrice;
// }
// console.log(calculateTotalPrice('Droid'));



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// // function getAllPropValues(propName) {
// //   const result = [];
// //     for (const product of products) {
// //         if (product.hasOwnProperty([propName])) {
// //         result.push(product[propName]);
// //     }
// // }
// // return result;
// // }
// // console.log(getAllPropValues('name'));


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// // console.log(hexColors);




// function addOverNum(firstArg, ...args) {
//   console.log(firstArg);
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstArg) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(10, 12, 4, 11, 10, 8));




// function findMatches(array, ...otherArgs) {
//   const matches = []; // Don't change this line

// for (const arg of otherArgs) {
//   if (array.includes(arg)) {
//     matches.push(arg)
//   }
// }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));



// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const indexOldBook = this.books.indexOf(oldName);
//     console.log(indexOldBook);
//     this.books.splice(indexOldBook, 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.books)



// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//   const indexOldName = this.potions.indexOf(oldName);
//   this.potions.splice(indexOldName, 1, newName);
//   return this.potions;
// }
// }

//     // Change code above this line

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);


const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  // getPotions() {
  //   return this.potions;
  // },
  // addPotion(newPotion) {
  //   const {name, price} = newPotion;
  //   console.log(this.potions);
  //   for (const potion of this.potions) {
  //     const value = Object.values(potion);
  //     // console.log('Object.values', value);
  //     if (value.includes(name)) {
  //       return console.log(`Error! Potion ${name} is already in your inventory!`);
  //     }
  //   };
  //   this.potions.push(newPotion);
  // },


//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//     const value = Object.values(this.potions[i]);
//     if (value.includes(potionName)) {
//       this.potions.splice(i, 1);
//       return this.potions;
//       }
//   }
//   return (`Potion ${potionName} is not in inventory!`);
// },

  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      const value = Object.values(potion);
      const index = value.indexOf(oldName);
      if (value.includes(oldName)) {
        value.splice(index, 1, newName);
        return value;
      }
    }
    return console.log(`Potion ${oldName} is not in inventory!`);
  },
};



// atTheOldToad.getPotions();
// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: "Stone skin", price: 700 });
// console.log(atTheOldToad.removePotion("Stone skin"));
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
console.log(atTheOldToad);


const a = ['Stone skin', 520];
const b = 'ddd';
const c = 'Stone skin';
if(a.includes(c)) {
  a.splice(0, 1, b);
}
console.log('new a', a)