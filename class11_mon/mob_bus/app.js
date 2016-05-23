function gebi(id) {
  return document.getElementById(id);
}

var imgNames = ['colorFruit.jpg',
                'outdoors.jpg',
                'waterRose.jpg',
                'hamster.jpg'];
var images = [];

divImg = gebi('divImg');

function getRandomInt() {
  return Math.floor(imgNames.length * Math.random()); // idx is a random integer
}

function showNewImage(idx) {
  divImg.style['background-image'] = 'url("' + images[idx].src + '")';
  divImg.imageIdx = idx; // Store index of visible image
  images[idx].incrementNshown();
  var s = 'Show counts: ';
  images.map(function(ele) { s += ele.Nshown + ', '; });
  console.log(s);
}

function Image(src) {
  this.src = 'img/' + src;
  this.Nclicks = 0;
  this.Nshown = 0;
  this.incrementClicks = function() {
    this.Nclicks++;
  };
  this.incrementNshown = function() {
    this.Nshown++;
  };

}

for (var ii = 0; ii < imgNames.length; ii++) {
  var img = new Image(imgNames[ii]);
  images.push(img);
}

console.log(images);

showNewImage(getRandomInt());
console.log('divImg.imageIdx = ' + divImg.imageIdx);

divImg.addEventListener('click', refreshImage);

function refreshImage() {
  console.log('PING!'); // Hi Michelle E!

  images[divImg.imageIdx].incrementClicks();
  var s = 'click counts: ';
  images.map(function(ele) { s += ele.Nclicks + ', '; });
  console.log(s);

  showNewImage(getRandomInt());
  // Can use dot notation ("width" doesn't contain a dash
  //divImg.style.width = '600px';
}
