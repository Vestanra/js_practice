'use strict';
const playlist = {
    name: 'мій плейліст',
    rating: 5,
    tracks: ['трек-1', 'трек-2','трек-3'],
    tracksCount: 3,    
    // getName: function () {
    //     console.log('This is function')
    // },
    getName() {
        console.log('This is function')
    },
    changeName(newName) {
        this.name = newName;
    },
    addTrack(newTrack) {
        this.tracks.push(newTrack);
    },
    updateRating(newRating) {
        this.rating = newRating;
    },
    getTrackCount() {
        return this.tracks.length;
    },
}
// playlist.getName();
console.log(playlist.getName); 
console.log(playlist.name); 
// console.log(playlist['name']); //одне і теж

playlist.changeName('my playlist');
console.log(playlist.name); 

playlist.addTrack('track-4');
console.log(playlist.tracks);

playlist.updateRating(3);
console.log('обновлений рейтинг', playlist.rating);

console.log(playlist.getTrackCount());
const propertyName = 'tracks';
// console.log(playlist.propertyName); буде undefined
console.log(playlist[propertyName]); //шукає перемінну


const username = 'Mango';
const email = 'mango@mail';

const signupDate = {
    username: username,
    email: email,
    // email,
    // username,    (якщо імя співпадає з переміною, можа записувати так)
}
console.log(signupDate);


const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    [inputName]: inputValue,
}
console.log(colorPickerData);


console.log({ a: 1 } === { a: 1 }); //false
const a = { x: 1, y: 1, };
const b = a;
console.log(b === a); //true
console.log(b);
b.c = 2;
console.log(b);
console.log(a);


//масив це обєкт, ключі від 0 до ...
const c = [1, 2, 3, 4];
c.hello = ':)';
console.log(c);
//і функція
const fn = function () {
    console.log('hello');
}
fn.hi = ':)';
console.dir(fn);
console.log(fn.hi);


const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
}

const keys = Object.keys(feedback); //повертає масив ключів
console.log(keys);

let totalFeedback = 0;
for (const key of keys) {
    console.log(key);
    console.log(feedback[key]);

    totalFeedback += feedback[key];
}
console.log('total feedback', totalFeedback);

const values = Object.values(feedback);
console.log(values); //повертає масив значень

let totalFeedbackNew = 0;
for (const value of values) {
    console.log(value);
    totalFeedbackNew += value;
}
console.log(totalFeedbackNew);



