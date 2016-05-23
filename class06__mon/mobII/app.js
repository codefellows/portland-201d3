/*var x = 'The whole class';

function isCool(s) {
  console.log(s + ' is cool!');
}

isCool(x);
*/

// TODO: Create child element
// TODO: Store text in a var
// TODO: Add text to element
// TODO: Add element to parent
var newListItem = document.createElement('li');
newListItem.textContent = 'Junk Bike!';

var ul = document.getElementsByTagName('ul')[0];
ul.appendChild(newListItem);

var orange = document.querySelector('div:nth-child(5)');
orange.textContent = 'I like fruit. I am one.';



var speed = -100;

function bell() { console.log('Ding!'); return 1000; }

// Initialize an object using an object literal
var bike = {

  tireSize: 'fat (4-in wide -- for the BEACH!)',
  color: 'red', // Paint color of bike, not basket color
  speed: 0, // In general, a "float" value

  makeNoise: function() { this.accelerate(); },

  accelerate: function() {
    this.speed += 5;
  },
  pedal: bell,
};

var x = bell;
x();

///////////////////////////////////////////
///////////////////////////////////////////
function Treat(name, color) {
  this.name = name;
  this.color = color;
  this.tasteRating = 0;

  this.setTasteRating = function(ratingFromUser) {
    if (isNaN(ratingFromUser) || ratingFromUser < 0) {
      return;
    }
    this.tasteRating = ratingFromUser;
  };
}

var cannoli = new Treat('cannoli', 'beige');
cannoli.setTasteRating(4.5);
console.log('taste rating = ' + cannoli.tasteRating);

// "Bare" call to constructor:
// - Properties become global vars
// - Methods become "normal" functions
Treat('apple', 'green');
