import _ from 'lodash';
import myName from './myName.js';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    const element2 = document.createElement('div');
    element2.textContent = myName('Cody');

    return [element, element2];
}

let components = component();
console.log(components);

document.body.appendChild(components[0]);
document.body.appendChild(components[1]);