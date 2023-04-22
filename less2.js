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


const fruits = ['яблуко', 'виноград', 'апельсин', 'банан', 'лимон'];
for (let i = 0; i < fruits.length; i ++) {
    console.log(`${i+1} : ${fruits[i]}`);
}


const namesA = 'Anna,Olga,Vira,Maks';
const phonesA = '096,097,098,093';
const namesParts = namesA.split(',');
const phonesParts = phonesA.split(',');
for (let i = 0; i < namesParts.length; i++) {
    console.group('user', namesParts[i]);
    console.log('names', namesParts[i]);
    console.log('phones', phonesParts[i]);
    console.groupEnd();
}


// const stringA = 'Welcome to the my future';
// const stringArray = stringA.split(' ');
// stringArray.shift();
// stringArray.pop();
// console.log(stringArray);
// for (let i = 0; i < stringArray.length; i+=1){
//     console.log(stringArray[i]);
// }

// for (let i = 1; i < stringArray.length - 1; i+=1){
//     console.log(stringArray[i]);
// }
const stringA = 'Welcome to the all my future';
const stringArray = stringA.split(' ');
const newStringArray = stringArray.slice(1, -1);
console.log(newStringArray.join(" "));

// for (let i = 0; i < newStringArray.length; i++){
//     console.log(newStringArray[i])
// }

const stringB = 'Welcome to the all future';
let resultB = '';
for (let i = stringB.length - 1; i >= 0; i--){
    resultB += stringB[i];
    console.log(resultB);
}

let resultC = stringB.split('').reverse().join('')
console.log(resultC);


const langs = ['python', 'javascript', 'c++', 'php', 'ruby', 'haskel'];
console.log('orginal', langs);
let sortedLangs = langs.sort();
console.log('sorted', sortedLangs);

const numbers = [1, 5, 47, 33, 69];
let minNumbers = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (minNumbers > numbers[i]) {
        minNumbers = numbers[i];
    }
}
console.log(minNumbers)