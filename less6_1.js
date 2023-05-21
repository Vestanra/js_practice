const bodyEl = document.getElementById('root');
const technologies = ['HTMl', 'CSS', 'JavaScript', 'React', 'Node'];

let technologiesEl = document.createElement('ul');
bodyEl.append(technologiesEl);

let technologiesMarkup = technologies.map(technology => `<li>${technology}</li>`).join('\n');
// let technologiesMarkup = technologies.reduce((acc, technology) => acc + `<li>${technology}</li>`, '');

console.log(technologiesMarkup);
technologiesEl.innerHTML = technologiesMarkup;