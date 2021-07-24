import { getUser, setUser } from '../data/data.js';
// import users from '../data/users.js';

const searchParams = new URLSearchParams(window.location.search);
const addButton = document.getElementById('add-button');
const toDoAdd = document.getElementById('todo-add');

const logoutButton = document.getElementById('reset-btn');

const display = document.getElementById('todo-display');

const name = searchParams.get('user');
let user = getUser(name);

const toDoList = user.todo;

for (let item of toDoList){
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('list-item');
    const checkbox = document.createElement('input');
    checkbox.id = 'input ' + item.todo;
    const label = document.createElement('label');
    label.setAttribute('for', checkbox.id);
    checkbox.type = 'checkbox';
    label.textContent = item.todo;
    itemDiv.append(checkbox, label);
    display.appendChild(itemDiv);
}

addButton.addEventListener('click', () => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('list-item');
    const checkbox = document.createElement('input');
    checkbox.id = 'input ' + toDoAdd.value;
    const label = document.createElement('label');
    label.setAttribute('for', checkbox.id);
    checkbox.type = 'checkbox';
    label.textContent = toDoAdd.value;
    itemDiv.append(checkbox, label);
    display.appendChild(itemDiv);
    
    toDoList.push({ todo: toDoAdd.value, completed: false });
    setUser(user);
});

logoutButton.addEventListener('click', () => {
    window.location.replace('../');
});
// const checkBox = document.querySelector('input[name=checkbox]');
// checkBox.addEventListener('change', e => {
//     if (e.target.checked) {
//         toDoList.pop({ todo: toDoAdd.value, completed: false });
//         toDoList.push({ todo: toDoAdd.value, completed: true });
//     }
// });