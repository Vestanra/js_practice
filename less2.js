'use strict'

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

const genres = ['Jazz', 'Blues'];
genres.push('Рок-н-рол');
console.log(genres);
console.log(genres[0]);
console.log(genres[genres.length - 1]);

let deletedGenres = genres.splice(0, 1);
console.log("deletedGenres", deletedGenres);
let deletedGenresShifft = genres.shift();
console.log("deletedGenresShift", deletedGenres);

console.log(genres);
genres.unshift('Country', 'Reggae');
console.log(genres);


const values = '23 11';
let valuesParts = values.split(' ');
let width = Number(valuesParts[0]);
let height = Number(valuesParts[1]);
let square = width * height;
console.log('square', square);