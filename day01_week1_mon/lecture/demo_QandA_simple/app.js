// Simple example of an interactive web page

var userName = prompt('What is your name?');
console.log('Meow Meow Meow ' + userName + '!!!!');

console.log('userGame before prompt: ', userGame);
var userGame = prompt('What is your game?');
console.log('userGame after prompt: ', userGame);
alert('So, ' + userName + ', I heard you like ' + userGame);

var loveHate = confirm(userName + ' do you love interweb?');
alert('Does, ' + userName + ' love interweb? ' + loveHate);
