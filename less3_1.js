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


const friends = [
    { name: 'Mango', online: false, },
    { name: 'Kiwi', online: true, },
    { name: 'Poly', online: true, },
    { name: 'Ajax', online: false, },
    { name: 'Anna', online: false, }, 
];
// friends[1].newprop = 555;
console.table(friends);

// for (const friend of friends) {
//     console.log(friend.name);

//     friend.newprop = 555;
// };

// console.table(friends);

const findFriendByName = function (allFriends, name) {
    for (const friend of friends) {
        console.log(friend);
        console.log(friend.name);
       
        if (friend.name === name) {
            return 'the name was found';
        } 
    }
    return 'the name was not found'
};
console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

function getAllNames(allFriends, name) {

    const friendsArray = [];
    for (const friend of friends) {
        friendsArray.push(friend.name);
    }
    // console.log(friendsArray);
    return  friendsArray;
}
console.log(getAllNames());

//повертаємо всіх онлайн
function getOnlineFriends(allFriends) {
    const onlineFriends = [];
    for (const friend of friends) {
        if (friend.online) { //(friend.online === true) так не писати
            onlineFriends.push(friend);
        }
    }
    return onlineFriends;
}
console.log(getOnlineFriends());


//повертаємо всіх офлайн
function getOfflineFriends(allFriends) {
    const offlineFriends = [];
    for (const friend of friends) {
        if (!friend.online) {
            offlineFriends.push(friend);
        }
    }
    return offlineFriends;
}
console.log(getOfflineFriends());

const getFriendsByOnlineStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of friends) {
        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue;
        }
        friendsByStatus.offline.push(friend);
    }
    return friendsByStatus;
};

console.log(getFriendsByOnlineStatus(friends));


const x = {
    a: 1,
    b: 2,
    c: 50,
    d: 100,
};
console.log(Object.keys(x).length);

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//     values.push(apartment[key]);
//   };
//   console.log(values);

