var productNames = [
  'Coke',
  'Pepsi',
  'Sprite',
  'Diet Coke',
//'Mercedez',
  'Orange Crush'];

// var body = document.body;
// console.log(body)
// Didn't work:
//   body.addEventListener('load', getRandomData);
// This did work:
//   body.addEventListener('click', getRandomData);

// Same as window.addEventListener(...)
addEventListener('load', drawRandomData);

function draw(numArray, pcntArray, labelArray) {
  var canvas = document.getElementById('canvas');

  // **Shamelessly** copied from Chart.js documentation
  var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labelArray,
      datasets: [{
        label: '# of Votes',
        data: numArray,
      },
        {
          type: 'line',
          label: 'votes/shown %',
          data: pcntArray
        }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: { beginAtZero:true }
        }]
      }
    }
  });
}

//draw(getRandomData());

function drawRandomData() {
  console.log('BLAAAAAH!');
  var data = [];
  var percents = [];
  for (var ii = 0; ii < productNames.length; ii++) {
    data.push(Math.ceil(Math.random() * 100));
    percents.push(Math.ceil(Math.random() * 100));
  }
  console.log(data);
  draw(data, percents, productNames);
}
