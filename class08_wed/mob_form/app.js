function gebi(v) {
  return document.getElementById(v);
}

var button = gebi('button');
var tableParent = gebi('tableParent');

button.addEventListener('click', addTable);

function addTable() {
  // Create <table> and <tr>
  var newTable = document.createElement('table');
  var newTR = document.createElement('tr');

  // Make <tr> a child of <table>
  newTable.appendChild(newTR);
//var firstName = document.querySelector('input[name]')[0];
  var firstName = gebi('firstName').value;
  var lastName = gebi('lastName').value;
  console.log('1st name value = ', firstName);
  console.log('2nd name value = ', lastName);
  var names = [firstName,
               lastName,
               Math.floor(10 * Math.random()) + 1];

  for (var ii = 0; ii < names.length; ii++) {
    var newTD = document.createElement('td'); // New <td>
    newTD.textContent = names[ii]; // Fill in <td>'s with text
    newTR.appendChild(newTD);
  }

  tableParent.appendChild(newTable); // Append <table> to DOM tree
}
