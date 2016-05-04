var total   = document.getElementById('total');
var inLeft  = document.getElementById('inLeft');
var inRight = document.getElementById('inRight');

/*var leftPocket  = 8.85;
  var rightPocket = 3.49;
*/
var leftString = prompt('Enter amount of change in your left pocket');
console.log('type of leftString = ' + typeof leftString);
//var p = confirm("Blah?");
//console.log('p = '+p);
var leftPocket = parseFloat(leftString);
inLeft.textContent = 'Your left  pocket has $' + leftPocket + ' in change';
console.log('Your left  pocket has $' + leftPocket + ' in change');

var rightString = prompt('Enter amount of change in your RIGHT pocket');
var rightPocket = parseFloat(rightString);
inRight.textContent = 'Your right pocket has $' + rightPocket + ' in change';
console.log('Your right pocket has $' + rightPocket + ' in change');

function add(a, b) {
  var c = a + b;
  return c;
}

var totalChange = add(leftPocket, rightPocket);
total.textContent = 'Total pocket change: $' + totalChange;
console.log('Total pocket change: $' + totalChange);

if (totalChange > 1000) {
  total.textContent += ' <-- Wow, that\'s a lot of pocket change!';
  total.style = 'color:green';
  console.log(' <-- Wow, that\'s a lot of pocket change!');
}
