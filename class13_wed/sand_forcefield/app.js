function gebi(id) { return document.getElementById(id); }
imgContain = gebi('imgContain');
forcefield = gebi('forcefield');
checkbox = gebi('checkbox');

checkbox.addEventListener('change', function() {
  var depth = -1;
  if (checkbox.checked) {
    depth = 1000;
  }
  forcefield.style['z-index'] = depth;
});

imgContain.addEventListener('click', function(ev) {
  console.log("Boo! Image container clicked. target: ", ev.target);
});    

forcefield.addEventListener('click', function(ev) {
  ev.stopPropagation();
  console.log("Forcefield clicked. Target = ", ev.target);
});