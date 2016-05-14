// 201 Day 3 code demo

var userName = prompt('What is your name?');
console.log('The user said her/his name is ' + userName);

alert('Hi, ' + userName + ' I\'m going to ask you some questions about me. Please answer Y or N.');
var userResponse = prompt('Was, I born on the moon?');
console.log('userResponse: ' + userResponse);

if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {
  alert('Nope, I was actualy born on the moon. I\'m a moonian computer language.');
} else if (userResponse === 'Y'){
  alert('Nice, I was born on the moon');
} else {
  alert('Ooops!, you should have given a Y or N, so you loose this round.');
}

// New features
console.log('before the while loop favoriteNum is ' + favoriteNum);
while (favoriteNum !== 57){
  var favoriteNum = parseInt(prompt('what is my favorite number.'));

  if (favoriteNum > 57){
    alert('Your guess, ' + favoriteNum + ', is too high!'); 
  } else if (favoriteNum < 57){
    alert('Your guess, ' + favoriteNum + ', is too low!'); 
  } else {
    alert('Nice guess!');
  }
}

var pets = ['SlugNeo', 'CatMushi', 'PupQuazi', 'FrogLulwat'];
var petRespnse = prompt('Can you name of my pets?');
var correctGuess=false;

for (var i=0; i< pets.length; i++){
  console.log('pets[' + i + ']: ' + pets[i]);
  if (petRespnse === pets[i]){
    alert('Wow, are you psychic? ' + petRespnse + ', is totally one of my pets!'); 
    correctGuess = true;
  }
}

if (! correctGuess){
  alert('No, you guessed wrong, but can try again by reloading this page.');
}
