import { findByName, getUser, setUser, USER } from '../data/data.js';
import users from '../data/users.js';
 // import functions and grab DOM elements
const userForm = document.getElementById('form-data');
setUser(users);

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
userForm.addEventListener('submit', e =>{
    e.preventDefault();
    const formData = new FormData(userForm);
    const name = formData.get('name');
    const password = formData.get('password');
    console.log(password);
    getUser(USER);
    const user = findByName(users, name);
    console.log(users, name, user);
    if (user.password === password) {
        window.location.replace(`../todo/?user=${name}`);
    } else if (user.password !== password) {
        alert('NOPE - retype password!');
    }
});


    // for (let user of users) {
    //     if (user.username === formData.get('name')) {
    //     } 
    // }