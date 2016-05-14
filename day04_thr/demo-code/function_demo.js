// 201
// 7-thur-lecture code demo
// functions

// what is a funciton?
// Functions let you group a series of statements together to perform a specific task.
// If there are parts of a script that repeat the same task, you can reuse the function.

// what is a function declaration vs. function call?
// a function that will log "hello, world"

// a function declaration is when you define/declare the function
// this is a function declaration
function sayHello(){
  console.log('hello, world');
}

// a funciton call is when you run the function
// this is a function call
sayHello();

// what are parameters and arguments?
// parameters are what we call the input varaibles when we declare a function
// name is a parameter
function sayGoodBye(firstName, lastName){
  console.log('good bye, ' + firstName + ' ' + lastName);
  return 555;
}

// arguments are what we call the input values when we call a function
// 'friend' is an argument
var cat = 'Meow-meow';
var dog = 'Baggins';
var ret = sayGoodBye(cat, dog);
console.log('ret = ' + ret);
var p = Math.sqrt(9);
console.log(p);

// what is a return value?
// function with return value
// If we want to get data back from a function we can use a 'return' statement
function getFullName(first, last){
  return first + ' ' + last;
}

// ada will equal 'Ada Lovelace';
var ada = getFullName('Ada', 'Lovelace');
console.log('ada: ' + ada);

// what is scope?
// scope the set of rules that dictates where you have access to a variable, depending
// on where you declare it. In Javascript variables that are declared in the main program
// are added to the global scope. In the browser the global scope is the window object.
// Variables that are declared in a funciton are only accesible from within that function.
// within a function you can allways access variables declared in a parent scope.

// If a variable in a parent scope has ben set before a function call, uses it that function
// will have access to it.
var bpm = 120;          // variable declared in the global scope
console.log('bpm before slowDown(): ', bpm);
function slowDown(){    // function declared in the global scope
  bpm = bpm - 5;        // variable declared in the scope of the function slowDown
}

slowDown();             // slowDown is called and bpm will now be 115
console.log('bpm after slowDown(): ', bpm);

// If a variable is declared within the scope of a function no parent scope will be able to
// access that varaible.
function globalCannotAccessScope() {
  var topSecret = 'My password is 1234';
  console.log('Inside function, topSecret = ' + topSecret);
}

globalCannotAccessScope();

function getUserAnswer(questionToAsk) {
//console.log('topSecret: ' + topSecret); // this will throw an error for topSecret not being defiend
  return 'Same answer every time';
}

var answer = getUserAnswer('How are you?');
console.log('answer = ' + answer);

//console.log('topSecret: ' + topSecret); // this will throw an error for topSecret not being defiend

var make = 'Ford';
function changeMake(pMake) {
  make = 'volkswagen';
  console.log('Inside changeMake(): make = ' + make);
}

console.log('global, before call: make=' + make);
changeMake(make);
console.log('global, after call: make=' + make);

function getMultiple(x, y, z) {
  var a = 1;
  var b = 2;
  console.log('x = ' + x);
  console.log('y = ' + y);
  var tObj = { first: 'a', second: b };

  return tObj;
}

var zz = getMultiple('Hey, I\'m defined');
console.log('zz = ', zz);

//myButton.addEventListener('click', quizUser, false);

quizUser();

var quizUser = function() {
  console.log('You\'ve been quizzed!');
};

function quizUser() {
  console.log('You\'ve been quizzed!');
}

//var width = 10000;
var width = 5;
var height = 6;

var a = (function(w, h) {
  var area = w * h;
  console.log('Inside IIFE: area = ' + area);
  return area;
}(width, height));

console.log('Global: a = ' + a);
