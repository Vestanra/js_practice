'use strict'
function example(array) {
    // return '123';
    array.push(5);
    return '123';
}
// let testArray = [1, 2, 3];
// example(testArray);
// console.log(testArray);

let fruits = ['apple'];
example(fruits);
console.log(fruits);
let result = example(fruits);
console.log('result', result);


function toNumber(str) {
    return Number(str.replace(',', '.'));
}

function calcBMI(weight, height) {
    weight = toNumber(weight);
    height = toNumber(height);
    let resultBMI = (weight / (Math.pow(height, 2)));
    return Number(resultBMI.toFixed(1));
}
const bmi = calcBMI('88,3', '1.75');
console.log('Your bmi', bmi); 

function minNumber(a, b) {
    // if (a < b) {
    //     return a;
    // }
    //     return b;
    return (a < b) ? a : b;
}
let resultMinNumber = minNumber(9, 11, 5);
console.log(resultMinNumber);


function getRectArea(dimensoins) {
    let dimensoinsPart = dimensoins.split(" ");
    let width = toNumber(dimensoinsPart[0]);
    let hight = toNumber(dimensoinsPart[1]);
    return width * hight;
}
console.log(getRectArea('4 1,1'));


function logItems(items) {
    console.group('items');
    for (let i = 0; i < items.length; i++) {
        console.log(`${i+1} - ${items[i]}`);
    }
    console.groupEnd();
}
logItems(['a', 'f', 'e']);
logItems(['gga', '22f', 'edf', 'dff']);


function printContactsInfo(names, phones) {
    let contactsNames = names.split(',');
    let contactsPhones = phones.split(',');
    for (let i = 0; i < contactsNames.length; i++) {
        console.log(contactsNames[i], contactsPhones[i]);
    }
}
printContactsInfo('Anna,Olga,Vira,Maks', '096,097,098,093');

// знайти найбільше число
function findLargesNumber(numbers) {
    let largesNumbers = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (largesNumbers < numbers[i]) {
            largesNumbers = numbers[i];
        }
    }
    return largesNumbers;
}
console.log(findLargesNumber([45, 108, 14, 84, 3, 8]));


// знайти індекс найбільшого числа
function findLargesNumIndex(numbers) {
    let maxIndex = 0; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}
let a = [45, 108, 14, 84, 333, 8];
console.log(findLargesNumIndex([45, 108, 14, 84, 333, 8]));


// знайти середнє чзначення
function calAvarege() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}
console.log(calAvarege(20, 30, 20, 30, 0));


// формат часу
function formatTime(minutes) {
    const hoursReturn = ((Math.floor(minutes/60)));
    const minutesReturn = minutes % 60;
    const formatHoursReturn = hoursReturn.toString().padStart(2, 0);
    const formatMinutesReturn = minutesReturn.toString().padStart(2, 0);
    return `${formatHoursReturn} : ${formatMinutesReturn}`;
}
console.log(formatTime(73));
console.log(formatTime(200));


// додає, видаляє, замінює курси 
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Postgres', 'Express', 'gg'];
function addCours(name) {
    if (courses.includes(name)) {
        return 'є такий';
    }
    courses.push(name);
    return courses;
}
addCours('CSSg')
console.log(courses);

function removeCours(name) {
    let index = courses.indexOf(name);
    if (index > -1) {
        courses.splice(index, 1);
    } else {
        console.log('немає такого');
    }
}
removeCours('HTML')
console.log(courses);

function updateCourse(oldName, newName) {
    let index = courses.indexOf(oldName);
    if (index > -1) {
        courses[index] = newName;
    }
}

updateCourse('gg', 'aa');
console.log('update', courses);