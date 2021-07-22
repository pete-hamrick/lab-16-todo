## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

# TEAM TODO PLAN
1) We will made a miro board with two html files and three JS files
2) The first html file will be a login page with some text inputs for username and password and a button.
3) The other html file will be our todo display with an input and button that lets you add a task, there will also be a logout button that redirects to the login page. The Todos will be checkboxes, when checked the text will strikethrough. 
4) Our three JS files will be a login.js that handles the form submission. If username doesn't match password, alert. If creating a new user use function from data.js.
5) Data.js holds all our functions we'll use for local storage, user creation, findById, and adding a todo
6) Todo.js will get the user from local storage on load and render our todo page; also, handle the logout. If the user adds a todo, update the user object, set in local storage, and update the render. 
7) Then we'll create the file structure and HTML elements.
8) Then we'll write empty functions in our data.js and TDD.
9) Next we'll write the functions.