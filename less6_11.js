// const title = document.querySelector('.js-title');
// title.textContent = 'Hello JS';
// console.dir(title);
// title.classList.add('title-color');
// title.classList.remove('title-color');
// title.classList.toggle('title-color');
// console.dir(title.dataset.id);
// console.dir(title.getAttribute('data-id'));
// // console.dir(title.setAttribute('hidden', 'false'));



// const list = document.querySelector('.js-list');
// console.dir(list);
// const listChldren = [...list.children];
// console.log(listChldren);

// // const liEl = document.createElement('li');
// // liEl.textContent = list.children.length + 1;
// // liEl.dataset.id = '123';
// // list.append(liEl);
// // const divEl = document.createElement('div');
// // const h2El = document.createElement('h2');
// // h2El.textContent = 'Hello';
// // h2El.classList.add("title-color");
// // liEl.append(divEl);
// // divEl.append(h2El);


// const liEl = `<li data-id="123">${list.children.length + 1}<div><h2 class="title-color">Hello</h2></div></li>`;
// list.insertAdjacentHTML('beforeend', liEl);
// console.log(liEl);



// -----
const listStatic = document.querySelectorAll('li');
const listDynamics = document.getElementsByTagName('li');
console.log('listStatic', listStatic);
console.log('listDynamics', listDynamics);
const listEl = document.querySelector(".js-list");
console.dir(listEl);
const liEl = document.createElement('li');
liEl.textContent = listEl.children.length + 1;
listEl.append(liEl);
console.log(listEl.children[3]);

console.log('listStatic', listStatic);
console.log('listDynamics', listDynamics);

const cars = [
    {
        id: 4,
        model: 'Volvo',
        type: "XC60",
        price: 7000,
        img: 'https://picsum.photos/200',
    },
    {
        model: 'BMV',
        type: "X5",
        price: 9000,
        img: 'https://picsum.photos/200',
    }
]


const container = document.querySelector('.js-container');
console.dir(container);

const markup =  cars.map(({id = "none", model, type, price, img} )=> 
    `<li data-id="${id}">
    <img src='${img}' alt='${model}'>
    <h2>${model}</h2>
    <h3>${type}</h3>
    <p>${price}</p>
    </li>`).join('');
container.insertAdjacentHTML('beforeend', markup);
console.log(container);

const containerAfter = document.querySelector('.js-container');
console.dir(containerAfter);
[...containerAfter.children].forEach(item => {
    if (item.dataset.id !== 'none') {
        item.remove()
    }
});
// containerAfter.innerHTML = '';