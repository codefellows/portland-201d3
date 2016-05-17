var kitchen = document.getElementById('kitchen');

// Create <table> and <tr>
var newTable = document.createElement('table');
var newTR = document.createElement('tr');

// Make <tr> a child of <table>
newTable.appendChild(newTR);

var names = ['Ruth', 'Lizzie'];

function makeTable() {
  var tds = [];
  // Connect <td>'s as children of <tr>
  for (var ii = 0; ii < 2; ii++) {
    var newTD = document.createElement('td'); // New <td>
    newTD.textContent = names[ii] + ' ' + Math.floor(Math.random() * 100); // Fill in <td>'s with text
    newTR.appendChild(newTD);
    tds.push(newTD);
  }
  return tds;
}

var myTDs = makeTable();

// Append <table> to DOM tree
kitchen.appendChild(newTable);
