import { findByName, getUser } from '../data/data.js';
import users from '../data/users.js';

getUser();
const searchParams = new URLSearchParams(window.location.search);

const display = document.getElementById('todo-display');

const name = searchParams.get('user');

const user = findByName(users, name);

for (let item of user.todo){
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('list-item');
    const checkbox = document.createElement('input');
    checkbox.id = 'input ' + item;
    const label = document.createElement('label');
    label.setAttribute('for', checkbox.id);
    checkbox.type = 'checkbox';
    // const span = document.createElement('span');
    label.textContent = item;
    // label.append(checkbox, span);
    itemDiv.append(checkbox, label);
    display.appendChild(itemDiv);
}

// label, radio