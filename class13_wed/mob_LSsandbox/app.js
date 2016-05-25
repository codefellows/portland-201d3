var x = 10;

localStorage.x = x;
console.log('x (from RAM) = ' + x);
console.log('x (from localStorage) = ' + localStorage.x);

var y = {};
y.bee = 'I make honey!';
y.fox = 'Ring ding ding';
y.farmer = function() {
  console.log('I run functions.');
};

console.log('y.bee says ' + y.bee);
console.log('y.fox says ' + y.fox);

console.log('y is an object:');
console.log(y);

var y_as_string = JSON.stringify(y);
console.log('y string is ' + y_as_string);
localStorage.y = y;
localStorage.y_as_string = y_as_string;
var yBack = JSON.parse(localStorage.y_as_string);
console.log(yBack);
/*
var z = [1, 2, 3];
console.log('z = ' + z);
localStorage.z = JSON.stringify(z);
var zBack = JSON.parse(localStorage.z);
// Like this: var zBack = [1, 2, 3];
console.log('zBack = ' + zBack);
console.log('zBack[0] = ' + zBack[0]);
*/
