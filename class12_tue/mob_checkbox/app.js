var hello = document.getElementById('hello');
var button = document.getElementById('button');
var checkbox = document.getElementById('checkbox');

button.addEventListener('click', toggle);
checkbox.addEventListener('change', toggleAccess);

var visible = true;

function toggle() {
//if (! checkbox.checked) {
  if (true) {
    visible = ! visible;
    if (visible) {
      hello.style.visibility = 'visible';
    } else {
      hello.style.visibility = 'hidden';
    }
  }
}

function toggleAccess() {
  if (checkbox.checked) {
    button.removeEventListener('click', toggle);
  } else {
    button.addEventListener('click', toggle);
  }
}
