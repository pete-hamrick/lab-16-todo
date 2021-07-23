import { findByName, getUser } from '../data/data.js';
import users from '../data/users.js';

getUser();
const searchParams = new URLSearchParams(window.location.search);

const display = document.getElementById('todo-display');

const name = searchParams.get('user');

const user = findByName(users, name);

for (let item of user.todo){
   
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = item;
    label.append(radio, span);
    display.append(label);
}