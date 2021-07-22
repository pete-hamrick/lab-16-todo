import { setUser } from '../data/data.js';

// import functions and grab DOM elements
const userForm = document.getElementById('formdata');

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
userForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const user = {
        name: formData.set('name'),
        password: formData.set('password'),
        completed: {},
        todos: {}
    };
    setUser(user);
});