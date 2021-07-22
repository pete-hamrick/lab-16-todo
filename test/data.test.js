// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createUser } from '../data/data.js';

const test = QUnit.test;

test('if createUser creates a new user', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userInput = [
        { username: 'Bob', password: 'whatever' }
    ];
    const expected = {
        username: 'Bob',
        password: 'whatever'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createUser(userInput);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});