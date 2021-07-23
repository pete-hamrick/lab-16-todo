import { getUser, setUser } from '../data/data.js';
// import users from '../data/users.js';

const searchParams = new URLSearchParams(window.location.search);
const addButton = document.getElementById('add-button');
const toDoAdd = document.getElementById('todo-add');

const logoutButton = document.getElementById('reset-btn');
console.log(logoutButton);

const display = document.getElementById('todo-display');

const name = searchParams.get('user');
const user = getUser(name);
//TODO change this tp new format
// const user = findByName(users, name);
const toDoList = user.todo;

for (let item of toDoList){
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('list-item');
    const checkbox = document.createElement('input');
    checkbox.id = 'input ' + item;
    const label = document.createElement('label');
    label.setAttribute('for', checkbox.id);
    checkbox.type = 'checkbox';
    label.textContent = item;
    itemDiv.append(checkbox, label);
    display.appendChild(itemDiv);
}
console.log(user);

// const newToDo = toDoAdd.value;
// console.log(newToDo);
addButton.addEventListener('click', ()=> {
    //taking the input and add it to the array of todos
    //save that into local storage
    //get local storage
    //render the page
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
    
    toDoList.push(toDoAdd.value);
    setUser(user);
});
// thisistoDoList is the list
// toDoList.push(newToDo);
// getUser();
logoutButton.addEventListener('click', ()=>{
    window.location.replace('../');
});