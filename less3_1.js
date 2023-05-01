'use strict';
const playlist = {
    name: 'мій плейліст',
    rating: 5,
    tracks: ['трек-1', 'трек-2','трек-3'],
    tracksCount: 3,    
}
console.log(playlist.name); 
console.log(playlist['name']);

const propertyName = 'tracks';
// console.log(playlist.propertyName); буде undefined
console.log(playlist[propertyName]);


const username = 'Mango';
const email = 'mango@mail';

const signupDate = {
    username: username,
    email: email,
    // email,     (якщо імя співпадає з переміною, можа записувати так)
}
console.log(signupDate);