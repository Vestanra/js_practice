// const bodyEl = document.getElementById('root');
// let mainEl = document.createElement('main');
// mainEl.id = 'mainEl';
// bodyEl.append(mainEl);

// let headerEl = document.createElement('h1');
// headerEl.id = 'title';
// headerEl.textContent = 'Tom Adgard';
// mainEl.append(headerEl);
const bodyEl = document.getElementById('root');
let mainElConfig = {
    tag: 'main',
    id: 'main',
    children: [
        {
            tag: 'h1',
            id: 'title',
            text: 'Devid Edgard',
        },
        {
            tag: 'figure',
            id: 'img-div',
            children: [
                {
                    tag: 'img',
                    id: 'image',
                    src: 'https://picsum.photos/200/300?grayscale',
                    alt: 'animal',
                }
            ]
        },
        {
            tag:'article',
            id: 'tribute-info',
            children: [
                {
                    tag: 'div',
                    id: 'intro',
                    children: [
                        {
                            tag: 'p',
                            html: '<> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        }
                    ]
                }
            ]
        }
    ]
};

function createElementByConfig(config) {
    let newElement = document.createElement(config.tag);
    if (config.text) {
        newElement.id = config.id;
    }
    if (config.text) {
        newElement.textContent = config.text;
    }
    if (config.html) {
        newElement.innerHTML = config.html;
    }
    if (config.src) {
        newElement.src = config.src;
    }
    if (config.alt) {
        newElement.alt = config.alt;
    }
    if (config.children) {
        config.children.forEach(child => {
            let childEl = createElementByConfig(child);
            // childEl.textContent = child.text;
            newElement.append(childEl);
            console.log(childEl);
    
        });
    }
    
    return newElement;
};

let mainEl = createElementByConfig(mainElConfig);
bodyEl.append(mainEl);
