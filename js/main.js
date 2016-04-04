/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: Undefined


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: "Tim"


givenName = givenName;
// Q: What is `givenName` set to right now?
// A: "Tim"


var greeting = "Hello, how are you? " + givenName;
// Q: What is `greeting` set to?
// A: "Hello, how are you? Tim"


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: 40

math = high - "5";
// Q: What is `math` set to?
// A: 45


/* =========================================================
     Part 3: Expressions - You Write Code!
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2016;

// Answers Below:
var timsAge = "Tim is " + (today - born) + " years old"


// Store some information following in variables.
var yourName;
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:

var yourName = 'Thomas';
var instructorsName = 'Tim'

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorsName;
