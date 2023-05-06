// 'use strict';
// const numbers = [1,2,3].concat([4,5,6], [7,8,9]);
// console.log(numbers);

// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]]; //concat analog
// console.log(numbers);

//пошук найменшого і найбільшого числа
const temps = [14, 5, 76, 23, 99, 1];
console.log('max number', Math.max(...temps));
console.log('min number', Math.min(...temps));

const numbers = [4, 5, 47, 33, 69];
let minNumbers = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (minNumbers > numbers[i]) {
        minNumbers = numbers[i];
    }
}
console.log('min number method#1',minNumbers);
console.log('min number method#2', Math.min(...numbers));

//...spread робить копію, якщо елементи масиву примітиви і посилання, якщо об'єкти
const a = [1, 2, 3];
const b =[...a];
const c = a;
console.log(a);
console.log(b);
console.log(c);
console.log(a === b); //false
console.log(b === c); //true
b.push(55)
console.log(a);
console.log('new', b);

const d = [{x: 1}, {y: 2},];
const f = [...d];
console.log(d);
console.log(f);
console.log(d[0] === f[0]); //true
console.log(d === f); //false


//object.assign розпилення об'єктів старий спосіб
const aObject = { x: 1, y: 5};
const bObject = { x: 7, z: 8};

// const cObject = {};
// Object.assign(cObject, aObject, bObject);

const cObject = {...aObject, name: 'Mango', ...bObject};

console.log(cObject);

console.log(...'hello world')//рядок теж розиляється

//userSettings
const defaultSettings = {
    theme: 'light',
    showNotifications: false,
    hideSidebar: true,
}
const userSettings = {
    showNotifications: true,
    hideSidebar: false,
}
const finalSettings = {...defaultSettings, ...userSettings,};
console.log(finalSettings);


//дестуктуризація
// const playlist = {
//     name: 'мій плейліст',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2','трек-3'],
//     tracksCount: 3, 
// };

// console.log(playlist.name, playlist.rating, playlist.tracks, playlist.tracksCount);
// const { rating, name, tracksCount: numberOfTracks, tracks, author = 'tom'} = playlist;
// console.log(rating);

// tracks.push('lalala');
// console.log('playlist after change', playlist.tracks);
// console.log(numberOfTracks);

const profile = {
  name: 'Tom Geer',
  tag: 'gluk',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://fastly.picsum.photos/id/553/200/300.jpg?hmac=-A3VLW_dBmwUaXOe7bHhCt-lnmROrPFyTLslwNHVH1A',
  stats: {
    followers: 5603,
    views: 4287,
    likes: 542,
  },
};

// const { name, tag, avatar, stats, stats: { followers, views, likes }, } = profile; //глубока дестуктуризація
// // const { followers, views, likes } = stats;  
// console.log(tag, name, stats, followers);

//...rest
const { name, tag, location, ...restProfail } = profile;
console.log('restProfail', restProfail);


//деструктуризація масиву    !!!! лише по порядку
const rgb = [255, 169, 122];
const [aa, bb, cc, dd = 100] = rgb;
console.log(dd)

// знайти найбільше число
const authors = {
  kiwi: 4,
  poly: 5,
  ajax: 8,
  mango: 7,  
}
const entries = Object.entries(authors);
console.log(entries);

// for (const entry of entries) {
//   const [name, rating] = entry;
//   console.log(name, rating);
// }



// const ratings = Object.values(authors);
// console.log(Math.max(...ratings));


//патерн
function showProfileInfo(userProfile) {
  console.log(userProfile);
}
showProfileInfo(profile);