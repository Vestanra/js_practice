const bodyEl = document.getElementById('root');
const technologies = ['HTMl', 'CSS', 'JavaScript', 'React', 'Node'];

let technologiesEl = document.createElement('ul');
bodyEl.append(technologiesEl);

let technologiesMarkup = technologies.map(technology => `<li>${technology}</li>`).join('\n');
// let technologiesMarkup = technologies.reduce((acc, technology) => acc + `<li>${technology}</li>`, '');

console.log(technologiesMarkup);
technologiesEl.innerHTML = technologiesMarkup;



const colors = [
    {
        label: 'red',
        color: '#FF0000',
    },
    {
        label: 'green',
        color: '#00FF00',
    },
    {
        label: 'blue',
        color: '#0000FF',
    },
    {
        label: 'yellow',
        color: '#FFFF00',
    },
];
const colorsButtons = colors.map(color => {
    let colorButton = document.createElement('button');
    colorButton.textContent = color.label;
    colorButton.style.backgroundColor = color.color;

    return colorButton;
});

// bodyEl.append(...colorsButtons);
// colorsButtons.forEach(btn => bodyEl.append(btn));
colors
    .forEach(color => {
        let colorButton = document.createElement('button');
        colorButton.textContent = color.label;
        colorButton.style.backgroundColor = color.color;
        bodyEl.append(colorButton);
    });
    
    
