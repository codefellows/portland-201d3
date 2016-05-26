function gebi(id) {
  return document.getElementById(id);
}

var imgNames = ['colorFruit.jpg', // 0
                'outdoors.jpg',   // 1
                'waterRose.jpg',  // 2
                'hamster.jpg'];   // 3
var images = [];
var totalClicks = 0;
var divImg = gebi('divImg');
var fig = gebi('fig'); // Neugen?

function getRandomInt() {
  return Math.floor(imgNames.length * Math.random()); // idx is a random integer
}

function showNewImage(idx) {
  // divImg.style['background-image'] = 'url("' + images[idx].src + '")';
  divImg.setAttribute('src', images[idx].src);

  divImg.imageIdx = idx; // Store index of visible image
  images[idx].incrementNshown();
  var s = 'Show counts: ';
  images.map(function(ele) { s += ele.Nshown + ', '; });
  divImg.className = 'fadeinAnim';
  // Same as: divImg.setAttribute('class', 'fadeinAnim');

  setTimeout(function() {
    divImg.className = '';
  }, 1000);

  divImg.style['opacity'] = 1;
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

// Load initial image
var ri = localStorage.currentImgIdx;
if (! ri) { // If app hasn't run before, localStorage doesn't contain state
  console.log('localStorage doesn\'t hold state');
  ri = getRandomInt(); // so generate a random index #

  for (var ii = 0; ii < imgNames.length; ii++) {
    var img = new Image(imgNames[ii]);
    images.push(img);
  }
} else {
  console.log('** localStorage HAS state');
  var imagesBack = JSON.parse(localStorage.images);

  for (var ii = 0; ii < imgNames.length; ii++) {
    var img = new Image(imgNames[ii]);
    img.Nclicks = imagesBack[ii].Nclicks;
    img.Nshown = imagesBack[ii].Nshown;
    images.push(img);
  }
}
console.log(images);
showNewImage(ri);

console.log('divImg.imageIdx = ' + divImg.imageIdx);

divImg.addEventListener('click', refreshImage);

function refreshImage() {
  console.log('PING!'); // Hi Michelle E!

  // Increment click count for image just clicked
  images[divImg.imageIdx].incrementClicks();
  var s = 'click counts: ';
  images.map(function(ele) { s += ele.Nclicks + ', '; });
  console.log(s);
  fig.innerText = s;

  totalClicks++;
  console.log('totalClicks = ' + totalClicks);

  localStorage.images = JSON.stringify(images);

  if (totalClicks % 5 == 0 && (totalClicks > 1)) {
    console.log('Gimme Five!');
  } else {
    console.log('* Not a multiple of 5.');
  }

  var ri = getRandomInt();
  showNewImage(ri);
  localStorage.currentImgIdx = ri;

  // Can use dot notation ("width" doesn't contain a dash
  //divImg.style.width = '600px';
}

/*var ____ = 'I\'m feeling low';
console.log(____);*/
function saveState() {
  localStorage['voting.in.progress'] = votingProgress;

}
