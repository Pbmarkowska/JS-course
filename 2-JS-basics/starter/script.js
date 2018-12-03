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

/*
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
*/

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

/************************ 
* Arrays
*/

// Arrays are collections of variables that can even have different data types

// Initialize new array, first element is 0, then 1,2 etc.
var names = ['John', 'Mark', 'Jane'];

// Different way of initializing an array
var years = new Array(1990, 1969, 1948);

// Access the elements from the array
console.log(names[0]);

// Returns the whole array
console.log(names);

// How many elements we have in an arraay
console.log(names.length);

// Mutate the data in the array
names[1] = 'Ben';
console.log(names);

/*
// Add an element to an array
names[5] = 'Mary';
console.log(names);
*/

// Add element in the end of the array
names[names.length] = 'Mary';
console.log(names);

// Different data types

var john = ['John', 'Smith', 1990, 'teacher', false];

// Adding an element at the end of the array
john.push('blue');
console.log(john);

// Adding an element in the beginning of the array
john.unshift('Mr.');
console.log(john);

// Removes the element from the end
john.pop();
john.pop();
console.log(john);

// Remove the first element from the array
john.shift();
console.log(john);

// Return the position of the argument
john.indexOf(1990);
console.log(john.indexOf(1990));

// Search an element in the array and return different outputs based on it
var isJohnDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isJohnDesigner);

/************************ 
* Codding challenge preparation 
*/


var greetings = "Hey";

function newFunction(){
    var hello = "hello";
}

/* hello(); // this will return an error, becuase hello is function scoped and we can only access it inside the function */

// Simple function

function newFunction(greetings,person){
    var greetings = "Hey";
    var person = "You";
    
    if (greetings = "Hey"){
        return (greetings + ' ' + person);
    }
}
    
console.log(newFunction());

// Structure:

/*
function nameOfThisFunction(anArgument){ // also zero argument() or many (x, y, z)
    return 2018 - anArgument; // nameOfThisFunction is returned, anArgument will be provided
}
//nameOfThisFunction(1987); // here argument is provided in the brackets it has to be stored somewhere, so:
var varToStoreResultOfFunction = nameOfThisFunction(1990); //this var stores the result 
console.log('example 0 ' + varToStoreResultOfFunction);
*/

// Example 1 - function with return, result stored in var and called out outside the function
/*
function calculateAge(yearOfBirth){
    return 2018 - yearOfBirth;
}

var myAge = calculateAge(1991); // storing the result and calling the function
console.log('My age is' + ' ' + myAge);

var ageDorota = calculateAge(1989);
var ageOlga = calculateAge(1990);
console.log('Dorota is' + ' ' + ageDorota + ' and Olga is' + ' ' + ageOlga);
*/

// Example 2 - function with var to store the result and console log to print the result, function called out outside the function

/*
function calculageAge(yearOfBirth){
    var age = 2018 - yearOfBirth;
    console.log('Person\'s age is ' + age);
}

calculageAge(1990);
*/

// Example 3 - function with return, no need to store the result, result printed in the console and called out at the same time outside the function
/*
function calculateAge(yearOfBirth) {
    age = 2018 - yearOfBirth;
    return age;
}

console.log('My age is ' + calculateAge(1990)); 
*/

// Example 4 - function with 2 parameters

/*
function calculateAge(year, name){
    var age = 2018 - year;
    console.log(name + ' is ' + age + ' years old' );
}

calculateAge(1991, 'Pati');
calculateAge(1989, 'Dorota');
*/

// Example 5

/*
function calculateAge(yearOfBirth){
    return 2018 - yearOfBirth;
}

console.log(calculateAge(1980));

function yearsToRetirement(yearOfBirth, name){
    var age = calculateAge(yearOfBirth)
    var years = 65 - age
    
    if (yearOfBirth >= 0){
        console.log('Years to retirement for ' + name + ' is ' + years)
    } else {
        console.log(name + ' is already retired')
    }
}

yearsToRetirement(1990,'John');
*/

// Coding challenge 3 - My solution

// Function to calculate tip

/*
function calculateTip(bill){
    var tip;

    if (bill < 50){
        tip = bill * 0.2;
        console.log('Tip is ' + tip)
    } else if (bill >= 50 && bill <= 200){
        tip = bill * 0.15;
        console.log('Tip is ' + tip)
    } else {
        tip = bill * 0.10;
        console.log('Tip is ' + tip )
    }
    return tip;
}

// Store the result of a function and call out the function
var tip1 = calculateTip(124);
var tip2 = calculateTip(48);
var tip3 = calculateTip(268);

// Array with tips
var tips = [tip1, tip2, tip3];
console.log(tips);

// Array with bills
var bills = [124,48,268];
console.log(bills);

// Array with final paid amount
var paidAmout1 = 124 + tip1;
var paidAmount2 = 48 + tip2; 
var paidAmount3 = 268 + tip3;

var paidAmount = [paidAmout1, paidAmount2, paidAmount3];
console.log(paidAmount);
*/

// Coding challenge 3 - Author's Solution
/*
function tipCalculator(bill){
    var percentage;
    if (bill < 50){
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200){
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * bill;
}

console.log(tipCalculator(10)); // check if the calculator is working

// Create arrays with tips using the function we wrote
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
console.log(tips);

var finalAmounts = [bills[0] + tips[0],
                    bills[1] + tips[1], 
                    bills[2] + tips[2]];
                    
console.log(tips, finalAmounts);
*/

 /************************ 
* Objects and properties
*/

// Arrays - order matter, Objects - order doesn't matter
// In Objects we define key values pairs

// Object literal
/*
var john = {
    firstName: 'John', // we separate key values with coma
    lastName: 'Smith',
    birthYear: 1998,
    family: ['Jane', 'Mark', 'Bob', 'Emily'], // we can have array inside of the object
    job: 'teacher',
    isMarried: false
};

// Retrieve data from object

console.log(john);
console.log(john.firstName); // log selected value from object with dot notation
console.log(john['lastName']); // log selected value with brackets

var x = 'birthYear';
console.log(john[x])

// Mutate data from object

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// Initiate new objet syntax

/*
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1991;
jane['lastName'] = 'Smith';
console.log(jane);
*/

 /************************ 
* Objects and methods
*/

// Adding a function to an object

/*
var john = {
    firstName: 'John', // we separate key values with coma
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'], // we can have array inside of the object
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear){
        return 2018 - this.birthYear; // this current object - John, this keyword point to the current object
    }
};
*/

// Logging the result and calling out the function from an object
/*
console.log(john.calcAge());
*/

// Store the result right in the john object
/*
var age = john.calcAge();
john.age = age
*/
 
// Store the result in the john object all in one line

/*
var john = {
    firstName: 'John', // we separate key values with coma
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'], // we can have array inside of the object
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear){
        this.age =  2018 - this.birthYear; // this current object - John
    }
};

john.calcAge();
console.log(john);
*/

 /************************ 
* Codding challenge 4 - My solution
*/

/*
var john = {
    fullName: 'John Smith',
    bodyMass: 76,
    height: 1.56,
    calcBMI: function(bodyMass, height){
        return this.bodyMass / (this.height * this.height)
    }
}

john.BMI = john.calcBMI();
console.log(john.calcBMI());

var mark = {
    fullName: 'Mark Doe',
    bodyMass: 87,
    height: 1.85,
    calcBMI: function(bodyMass, height){
        return this.bodyMass / (this.height * this.height)
    }
}

mark.BMI = mark.calcBMI();
console.log(mark.calcBMI());

if (john.BMI > mark.BMI){
    console.log(john.fullName + ' has higher BMI than ' + mark.fullName);
} else {
    console.log(mark.fullName + ' has higher BMI thatn ' + john.fullName);
}

console.log(john, mark);
*/

/************************ 
* Codding challenge 4 - Author's solution
*/

/*
var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();

console.log(john, mark);

if (mark.bmi > john.bmi){
    console.log(mark.fullName + ' has higher BMI of ' + mark.bmi)
} else if (john.bmi > mark.bmi){
    console.log(john.fullName + ' has higher BMI of ' + john.bmi)
} else{
    console.log('They have the same BMI');
}
*/

/************************ 
* Loops and Iteration
*/

// Loops - for very repetitive tasks

// 'for' loop elements: 
// 1. initial value of a counter (updated every loop)
// 2. condition evaluated before each loop iteration
// 3. counter update after each iteration
// i++ it's the same as i = i + 1, i is incremented

/*
for (var i = 0; i < 10; i++){
    console.log(i);
}
*/

// i = 0, 0 < 10 true, log i to the console, i++
// i = 1, 1 < 10 true, log i to the console, i++
// ...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

/*
for (var i = 1; i <= 20; i++){
    console.log(i);
}
*/ 

/*
for (var i = 1; i <= 20; i += 2){
    console.log(i);
}
*/

// i + = 2 is the same as i = i + 2

var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];
/*
console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log(john[3]);
console.log(john[4]);
*/

/*
for (var i = 0; i < john.length; i++){
    console.log(john[i]);
};
*/
 
// 'while' loop - in this loop we only need to pass the condition

/*
var i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}
*/

// Continue and Break statements
// !== different, strict different operator
// === equal


var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];
// check if the element is string

for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

// Loop stops when finds an element that doesn't meet the condition
for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
}