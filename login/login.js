import { findByName, getUser, setUser, USER } from '../data/data.js';
import users from '../data/users.js';
 // import functions and grab DOM elements
const userForm = document.getElementById('form-data');
setUser(users);

userForm.addEventListener('submit', e =>{
    e.preventDefault();
    const formData = new FormData(userForm);
    const name = formData.get('name');
    const password = formData.get('password');
    
    getUser(USER);
    const user = findByName(users, name);
    
    if (user.password === password) {
        window.location.replace(`../todo/?user=${name}`);
    } else if (user.password !== password) {
        alert('NOPE - retype password!');
    }
});
