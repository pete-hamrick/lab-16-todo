import { findByName, getUser } from '../data/data.js';
import users from '../data/users.js';

getUser();
const searchParams = new URLSearchParams(window.location.search);


const display = document.getElementById('todo-display');

const name = searchParams.get('user');
console.log(name);
const user = findByName(users, name);

// need to make label wrapped inputs that are checkboxes
// put todo text into input textcontent
// append label to the display\


for (let item of user.todo){
    console.log(user);
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = item;
    label.append(radio, span);
    display.append(label);
}