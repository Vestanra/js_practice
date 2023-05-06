'use strict';
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];


function calculateTotalPrice(productName) {
    let totalPrice = 0;
    for (const product of products) { 
        if (product.name.hasOwnProperty([productName])) {
            totalPrice = (product.price * product.quantity);
        }
    }
    return totalPrice;
}
console.log(calculateTotalPrice('Droid'));



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


const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
console.log(hexColors);

