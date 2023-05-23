const buttonEl = document.querySelector('.js-click');
const container = document.querySelector('.js-container');


// buttonEl.addEventListener('click', onClick);

// let step = 0;
// function onClick(event) {
//     step +=10
//     container.style.marginLeft = `${step}px`;
//     container.style.marginTop = `${step}px`;
//     console.log(event.currentTarget);
// }



///сховати текст
// const title = document.querySelector('.js-title');
// const title1 = document.querySelector('.js-title1');
// const title2 = document.querySelector('.js-title2');
// const title3 = document.querySelector('.js-title3');
// title.addEventListener('click', onClickTitle);
// title1.addEventListener('click', onClickTitle);
// title2.addEventListener('click', onClickTitle);
// title3.addEventListener('click', onClickTitle);
// const maxLength = 13;
// const totalLength = maxLength + 3;


// function onClickTitle(evt) {
//     const title = evt.currentTarget;
//     const strTitle = title.textContent.slice(0, maxLength);
//     if (title.textContent.length > totalLength) {
//         const remainderTitle = title.textContent.slice(maxLength);
//         title.setAttribute('data-title', remainderTitle);
//         title.textContent = strTitle+'...';
//     } else {
//         const remainderTitle = title.dataset.title;
//         if (remainderTitle) {
//             title.textContent = strTitle + remainderTitle;
//         }
//     };
// }


