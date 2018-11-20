/************************ 
* Variables and data types
*/ 

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 23;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var 3years = 3
console.log(3years);

/************************ 
* Variables mutation and type coercion
*/ 

/*
var firstName = 'John';
var age = 25;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher'
isMarried = false

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

age = 'twenty five';
job = 'driver';

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

/************************ 
* Basic operators
*/ 

// Math operators
/*
var now, yearJohn, yearMark;
now = 2018
ageJohn = 25;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark; 

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typof operator
console.log(typeof johnOlder);
console.log(typeof ageMark);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

/************************ 
* Operator precedence
*/ 
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignements

var x,y;
x = y = (3 + 5) * 4 - 6 // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);

x += 10;
console.log(x);

x++
console.log(x);

/************************ 
* Coding challenge 
*/
/*
var massMark, massJohn, heightMark, heightJohn;
massMark = 70;
massJohn = 85;
heightMark = 1.85;
heightJohn = 2.00;

var BMIJohn, BMIMark; 
BMIJohn = massJohn / (heightJohn * heightJohn);
BMIMark = massMark / (heightMark * heightJohn); 

console.log(BMIJohn); 
console.log(BMIMark);

var whoIsFatter = BMIMark > BMIJohn; 
console.log(whoIsFatter); 

console.log('Is Mark\'s BMI higher than John\'s? ' + whoIsFatter);

/************************ 
* If/else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is single!');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + 'is married!');
} else {
    console.log(firstName + ' is single!');
}

var massMark, massJohn, heightMark, heightJohn;
massMark = 70;
massJohn = 85;
heightMark = 1.85;
heightJohn = 2.00;

var BMIJohn, BMIMark; 
BMIJohn = massJohn / (heightJohn * heightJohn);
BMIMark = massMark / (heightMark * heightJohn); 

console.log(BMIJohn); 
console.log(BMIMark);

if (BMIJohn > BMIMark) {
    console.log('John\'s BMI is higher than Mark\'s');
} else {
    console.log('Mark\'s BMI is higher than John\'s');
}

/************************ 
* Boolean login
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

/************************ 
* Ternanry Operator and Switch Statements
*/

// Ternary operator - conditional operator that allows to write if/else statement in one line

var firstName = 'John';
var age = 22; 

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice'); 

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/* if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

// Switch statement

var job = 'teacher';
switch(job) {
    case 'teacher': 
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer':
        console.log(fristName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else');
}

age = 10;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20: 
         console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30: 
        console.log(firstName + ' is a young man.');
        break;
    default: 
         console.log(firstName + ' is a man.');
}

/************************ 
* Truthy and Falsy values and equality operators
*/

// Falsy values: undefined, null, 0, empty strings ' ', NaN in if/else statement
// Truthy values: all the values that are considered true when evaluated in an if/else statement

/*
var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
// == 
// === strict equality operator

if (height == '23') {
    console.log('The == operator does type coercion!');
}

/************************ 
* Coding challenge
*/

var JohnTeamScore, MikeTeamScore, MaryTeamScore
JohnTeamScore = 89 + 111 + 133; // in points
MikeTeamScore = 116 + 94 + 123; 
MaryTeamScore = 97 + 134 + 102;

console.log(JohnTeamScore);
console.log(MikeTeamScore);
console.log(MaryTeamScore);

var AvgJohnScore, AvgMikeScore, AvgMaryScore;
AvgJohnScore = JohnTeamScore / 3;
AvgMikeScore = MikeTeamScore/ 3;
AvgMaryScore = MaryTeamScore / 3;

console.log(AvgJohnScore); // 104
console.log(AvgMikeScore); // 111
console.log(AvgMaryScore); // 112

if (AvgJohnScore > AvgMikeScore && AvgJohnScore > AvgMaryScore) {
    console.log("John\'s Team won with " + AvgJohnScore);
} else if (AvgMaryScore > AvgJohnScore && AvgMaryScore > AvgMikeScore) {
    console.log("Mary\'s Team won with " + AvgMaryScore);
} else if (AvgMikeScore > AvgJohnScore && AvgMikeScore > AvgMaryScore) {
    console.log("Mike\'s Team won with " + AvgMikeScore);
} else {
    console.log("It\'s a tie with " + AvgJohnScore, AvgMaryScore, AvgMikeScore);
}

 /************************ 
* Functions
*/

// How to write a function? function + name (arguments) -- variable inside function+ {function block - return}

function calculateAge(birthYear){
    return 2018 - birthYear;
}
// variable to store the result
var ageJohn = calculateAge(1990); 
var ageMike = calculateAge(1948); 
var ageJane = calculateAge(1969); 

console.log(ageJohn,ageMike,ageJane);

// Function is like a machine that receives some input, it does some stuff with it and returns the output

function yearsUntillRetirement(year,firstName){
    var age = calculateAge(year) //calling other function in a function
    var retirement = 65 - age;
    
    if (retirement>0){
        console.log(firstName + ' retires in' + retirement + ' years');
    } else{
        console.log(firstName + ' is already retired');
    }
   
}

// calling the function out
yearsUntillRetirement(1990, 'John');
yearsUntillRetirement(1948, 'Mike');
yearsUntillRetirement(1969, 'Jane');

/************************ 
* Function Statements and Expressions
*/

// Function declaration
/*
function(job,firstName){
    
}
*/

// Function without the name, passing the arguments and store it in the variable == function expression
var whatDoYouDo = function(job,firstName){
   switch(job){
    case 'teacher':
           return firstName + ' teaches how to code';
    case 'driver':
           return firstName + ' drives';
    case 'designer':
           return firstName + ' designs';
    default:
           return firstName + ' does something else';
    
   } 
}

// call the function and pass the values and immediately log to the console
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Mike'));

// Expressions always produces a result, example: 2+3 = 5, or call the function directly in the console, or typeof 23. Whenever JS expects a value, it's an expression
// Statements perform actions, they don't produce any immediate results: if/else statements, loops, function declarations











  

