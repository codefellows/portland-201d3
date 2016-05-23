var numTests = 0;
var numCorrect = 0;

if (typeof sum != 'undefined') {
  var y = sum(5, 6);
  if (11 === y) {
    console.log('PASS!');
    numCorrect++;
  }
  else {
    console.log('fail. Wrong answer');
  }
}
else {
  console.log('fail. No such function');
}

numTests++;
console.log('You got ' + numCorrect + ' out of ' + numTests);

if (typeof sum != 'undefined') {
  var y = sum(-10, 10);
  if (0 === y) {
    console.log('PASS!');
    numCorrect++;
  }
  else {
    console.log('fail. Wrong answer');
  }
}
else {
  console.log('fail. No such function');
}

numTests++;
console.log('You got ' + numCorrect + ' out of ' + numTests);
