const numbers = [5, 4, 3, 2, 1];

const practic = numbers.map((number) => {
    // console.log(number);
    return number + 1;
});

console.log(practic);

const players = [
    { id: 'player-1', name: 'apple', price: 50, online: true },
    { id: 'player-2', name: 'grapes', price: 70, online: true },
    { id: 'player-3', name: 'lemon', price: 60, online: false },
    { id: 'player-4', name: 'strawberry', price: 110, online: true },
    { id: 'player-5', name: 'lemon', price: 60, online: false },
    { id: 'player-6', name: 'apple', price: 50, online: true },
];
const playersNames = players.map((player) => {
    return player.name;
});
console.log('playersNames', playersNames);

const playersId = players.map(player => player.id);
console.log('playersId', playersId);

// const playersId1 = function(){
//     let a =[];
//     players.forEach((player) => {
//        a.push(player.name);
//     });
//     return a;
// }
// console.log('playersId1', playersId1(players));

const updatePrice = players.map((player) => {
    return {
        ...player,
        price: Number((player.price * 1.1).toFixed(0)),
    }
});

console.log('updatePrice', updatePrice);


const updatePriceFor = 'lemon';
const updatePrice2 = players.map((player) => 

    // if (player.name === updatePriceFor) {
    //     return {
    //         ...player,
    //         price: 333,
    //     }
    // }
    // return player;

    player.name === updatePriceFor ? { ...player, price: 333, } : player);
console.log(updatePrice2);

const playersOnline = players.filter((elemet) => elemet.online);
const playersOffline = players.filter((elemet) => !elemet.online);
console.log(playersOffline);

const namePlayerFind = 'strawberry';
const playerFind = players.find(player => player.name === namePlayerFind);
console.log(playerFind);

const playerFind2 = (allPlayers, playersName) => {
    return allPlayers.find((player) => player.name === playersName);
};
console.log(playerFind2(players, 'lemon'));

const aaa =
    [
        {
            name: "Moore Hensley",
            email: "moorehensley@indexia.com",
            eyeColor: "blue",
            friends: ["Sharron Pace"],
            isActive: false,
            balance: 2811,
            gender: "male",
            age: 37
        },
        {
            name: "Sharlene Bush",
            email: "sharlenebush@tubesys.com",
            eyeColor: "blue",
            friends: ["Briana Decker", "Sharron Pace"],
            isActive: true,
            balance: 3821,
            gender: "female",
            age: 34
        },
        {
            name: "Ross Vazquez",
            email: "rossvazquez@xinware.com",
            eyeColor: "green",
            friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
            isActive: false,
            balance: 3793,
            gender: "male",
            age: 24
        },
        {
            name: "Elma Head",
            email: "elmahead@omatom.com",
            eyeColor: "green",
            friends: ["Goldie Gentry", "Aisha Tran"],
            isActive: true,
            balance: 2278,
            gender: "female",
            age: 21
        },
        {
            name: "Carey Barr",
            email: "careybarr@nurali.com",
            eyeColor: "blue",
            friends: ["Jordan Sampson", "Eddie Strong"],
            isActive: true,
            balance: 3951,
            gender: "male",
            age: 27
        },
        {
            name: "Blackburn Dotson",
            email: "blackburndotson@furnigeer.com",
            eyeColor: "brown",
            friends: ["Jacklyn Lucas", "Linda Chapman"],
            isActive: false,
            balance: 1498,
            gender: "male",
            age: 38
        },
        {
            name: "Sheree Anthony",
            email: "shereeanthony@kog.com",
            eyeColor: "brown",
            friends: ["Goldie Gentry", "Briana Decker"],
            isActive: true,
            balance: 2764,
            gender: "female",
            age: 39
        }
    ];
const getUsersWithFriend = (users, friendName) => {
    return users.filter((elemet) => elemet.friends.includes(friendName))
    


};
console.log(getUsersWithFriend(aaa, 'Briana Decker'));   