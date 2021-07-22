import { findById, getUser, setUser, USER } from '../data/data.js';
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
    getUser(USER);
    for (let user of users) {
        if (user.username === formData.get('name')){
            if (user.password === formData.get('password')){
                window.location.replace('../todo');
            } else if (user.password !== formData.get('password')){
                alert('NOPE - retype password!');
            }
        } 
    }
});