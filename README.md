# TEAM TODO INITIAL PLAN
1) We will made a miro board with two html files and three JS files
2) The first html file will be a login page with some text inputs for username and password and a button.
3) The other html file will be our todo display with an input and button that lets you add a task, there will also be a logout button that redirects to the login page. The Todos will be checkboxes, when checked the text will strikethrough. 
4) Our three JS files will be a login.js that handles the form submission. If username doesn't match password, alert. If creating a new user use function from data.js.
5) Data.js holds all our functions we'll use for local storage, user creation, findById, and adding a todo
6) Todo.js will get the user from local storage on load and render our todo page; also, handle the logout. If the user adds a todo, update the user object, set in local storage, and update the render. 
7) Then we'll create the file structure and HTML elements.
8) Then we'll write empty functions in our data.js and TDD.
9) Next we'll write the functions.

# CLEANUP PLAN
1) Input new todos
2) Style completed todos to strikethrough on click