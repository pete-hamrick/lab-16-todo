import { getUser } from '../data/data.js';
 // import functions and grab DOM elements
const userForm = document.getElementById('form-data');


userForm.addEventListener('submit', e =>{
    e.preventDefault();
    const formData = new FormData(userForm);
    const name = formData.get('name');
    const password = formData.get('password');
    
    const user = getUser(name, password);
   
    
    if (user.password === password) {
        window.location.replace(`../todo/?user=${name}`);
    } else if (user.password !== password) {
        alert('NOPE - retype password!');
    }
});
