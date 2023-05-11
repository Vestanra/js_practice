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

const numbers2 = [5, 10, 15, 20, 25];

const total = numbers2.reduce((acc, number) => acc + number)
console.log('total umbers2:', total);

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
    (acc, value) => acc + value, 
    0,
    );
console.log('totalSalary - ', totalSalary);

const totalPriceReduce = players.reduce(
    (total, {price}) => total + price,
    0,
    );

console.log('totalPriceReduce', totalPriceReduce);


const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTweets = tweets.flatMap(elemet => elemet.tags);
console.log('tweets.flatMap', allTweets);

const allTweets1 = tweets.map(elemet => elemet.tags);
console.log('tweets.map', allTweets1);

const allTweets2 = tweets.reduce((allTweets2, tweet) => {
  allTweets2.push(tweet.tags);
  return allTweets2;
}, []);
console.log('tweets.reduce', allTweets2);

const allTweets22 = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);//спочатку старий акумулятор
console.log('tweets.reduce, ...rest', allTweets22);