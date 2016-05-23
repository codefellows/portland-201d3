var x = 1;
var y = 10;

var s = 'Hello';
var t = 'students';

var b = true;
var c = false;

function overworkedCoder() {
  return 'Yes, right away bosses.';
}

function lazyManager() {
  return overworkedCoder();
}

function lazyDirector() {
  return lazyManager();
}

function lazyCEO() {
  return lazyDirector();
}

function high_five() {
  return 5;
}

function printNums() {
  console.log('I want to print a number: -40');

  var num = 123;
  console.log('I want to print a number: ' + num);
}

printNums();

// Get a value, then print it:
// 1. One way (note "intermediate value"
var f = high_five();
console.log(f);
// 2. Another way (nested)
console.log(high_five());

// Nested function call
console.log(lazyCEO());

// Nested function call, with params
function overworkedCoder_p(iphone8sPlus) {
  return 'Sure, bosses. I\'ll have ' + iphone8sPlus;
}

function lazyManager_p(duck) {
  duck += ' AND documentation!';
  return overworkedCoder_p(duck);
}

function lazyDirector_p(s) {
  s += ' with precision';
  return lazyManager_p(s);
}

function lazyCEO_p(s) {
  s += ' by 5 pm today';
  return lazyDirector_p(s);
}

console.log(lazyCEO_p('results'));
