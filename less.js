console.log(3 && true && 'kiwi');

//11:22
const totalMinutes = 450;
console.log('totalMinutes', totalMinutes);

let hours = Math.floor(totalMinutes / 60);
console.log('hours', hours);
let minutes = totalMinutes % 60;
console.log('minutes', minutes);

let hoursFormatted = hours.toString().padStart(2, 0);
let minutesFormatted = minutes.toString().padStart(2, 0);
let result = `${hoursFormatted}:${minutesFormatted}`;
console.log(result);
//padStar це функція строки, тому треба toString

// const newHours = 14;
// const newMinutes = 10;
// let timeString;
// timeString = `${newHours} год.`;
// if (newMinutes > 0) {
//   timeString += `${newMinutes} хв.`;
// }
// console.log(timeString);


for (let i = 0; i <= 20; i += 5) {
    console.log(i);
}

const target = 6;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//     console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }


function findLongestWord(string) {
  // Change code below this line
const arrayWord = string.split(" ");
  let max = arrayWord[0];
  for (const word of arrayWord) {
    if (word.lenght > max.lenght) {
      max = word;
    } 
  }

}
findLongestWord("The quick brown fox jumped over the lazy dog");

function getCommonElements(array1, array2) {
  // Change code below this line
const commmonElements = [];
  for (const element of array1) {
    if (array1 = array2.includes(element)) {
      commmonElements.push(element);
    }
  }
return commmonElements;

 // Change code above this line
}
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  // Change code above this line
  return total;
}

function getEvenNumbers(start, end) {
   // Change code below this line
const evenNumbers = [];
  for (let i = start; i >=end; i += 1) {
    if (i % 2 === 0) {
      continue;
      evenNumbers.push(i);
    }
  }
return evenNumbers;

    // Change code above this line
}
getEvenNumbers(6, 12)
  
function includes(array, value) {
let result;
  for (let i = 0; i < array.length; i += 1) {
    if (i === value) {
      result = true;
      break;
    } 
  }
  return result;
}

// const userInput = prompt("Введіть число");
// // console.log(typeof userInput);
// const inputNumber = Number(userInput)
// console.log(typeof inputNumber, inputNumber);
// if (userInput > 0) {
//   console.log("це позитивне число");
// } else if (inputNumber === 0) {
//   console.log("0");
// } else if (userInput < 0) {
//   console.log("це негативне число");
// } else {
//   console.log("це не число");
// };


const a = 10;
const b = 30;
// if ((a > 100) && (b > 100)) {
//   console.log(a > b ? a : b);
// }
if ((a > 100) && (b > 100)) {
  if (a > b) {
    console.log(a);
  } else if (b > a) {
    console.log(b);
  } else {
    console.log('a = b,', a);
  }
} else {
  console.log(`512 + b = ${ b + 512}`);
}

// let link = 'https://www.edu.goit.global/uk/learn/8016032/2294/2295/lessons';
// console.log(link);
// if ((!link.endsWith('/')) && link.includes('goit')) {
//   link += '/';
//   console.log(link);
// } 

let link = 'https://www.edu.goit.global/uk/learn/8016032/2294/2295/lessons';
link = (!link.endsWith('/')) && link.includes('goit') ? link += '/' : link += '';
console.log(link);

const hoursA = 14;
if (hoursA < 17) {
  console.log('Pending');
} else if ((hoursA >= 17) && (hoursA <= 24)) {
  console.log('Expires');
} else {
  console.log('Overdue');
}
// const daysUntilDeadLine = 1;
// if (daysUntilDeadLine === 0) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadLine === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadLine === 2) {
//   console.log('Післязавтра');
// } else {
//   console.log('Дата в майбутньому');
// }
// 

const daysUntilDeadLine = 6;
switch (daysUntilDeadLine) {
  case 0:
    console.log('Сьогодні');
    break;
  case 1:
    console.log('Завтра');
    break;
  case 2:
    console.log('Післязавтра');
    break;
  default:
    console.log('Дата в майбутньому');
}

// const min = 20;
// const max = 100;
// for (let i = min; i <= max; i += 25) {
//   console.log(i);
// }

const min = 20;
const max = 100;
for (let i = min; i <= max; i++) {
  if (i % 15 === 0) {
    console.log(i);
  }
}

let userName = prompt(`userName`);
if (userName === 'бандерівець') {
  let password = prompt('гасло');

  if (password === `Слава Україні`) {
    console.log('Героям слава');
  } else {
    console.log('Вийди розбійник');
  }
} else if (!userName) {
  console.log(`скасовано`);
} else {
  console.log(`Ви хто такі, я вас не кликав`);
}