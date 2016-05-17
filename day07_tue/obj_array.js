/*var a = [1, 2, 3];

var a = {
  0: 1;
  1: 2;
  2: 3;
}

var obj = {
  color: 'green',
  cost: 500
};

var x1 = a[0];
var x2 = a.0;

var y1 = obj['color'];
var y2 = obj.color;

var keys = ['t1', 't2', ...];
Store = {
  t1: 'dog',
  t2: 'car',
//keys: ['car', 'house'];
}

var i = 0;
var z = Store[keys[i]];
var z = Store.keys[i];

function Projector(brightness) {
  this.brightness = brightness;
  this.isOn = false;

*this.toggle = function() {
    this.isOn = (! this.isOn);
    console.log('isOn = ' + this.isOn);
  }*
}

Projector.prototype.toggle = function() {
  this.isOn = (! this.isOn);
  console.log('isOn = ' + this.isOn);
}

var p = new Projector(5);
var q = new Projector(50);
var r = new Projector(500);
p.toggle();

console.log('p.warranty = '+ p.warranty);

Projector.prototype.warranty = false;

console.log('p.warranty = '+ p.warranty);

p.toggle();
p.toggle();
q.toggle();

var x = 5;
console.log('x.bee = ' + x.bee);
Number.prototype.bee = 'buzzzz';
Object.prototype.bee = 'buzzzz';
console.log('x.bee = ' + x.bee);

var y = {};
Object.prototype.bee = 'ZOOM';
console.log('y.bee = ' + y.bee);
console.log('p.bee = ' + p.bee);

delete Object.prototype.bee;
console.log('y.bee = ' + y.bee);
console.log('p.bee = ' + p.bee);
*/

var house = {
  area: 2100,
  lightsOn: function() {
    console.log('Honey I\'m home!');
  },
  empty: function() {
    console.log('[3 mice are sqeaking]');
  }
};

var garden = {
  area: 500,
  timesWatered: function() {
    console.log('Watered once using 50 liters.');
  },
  empty: function() {
    console.log('[2 crickets chirping]');
  }
};

/*
house.lightsOn();
house.empty();
garden.timesWatered();
*/
var places = [];
places.push(house, garden);
/*
console.log(places);

for (x = 0; x < places.length; x++) {
  console.log('area = ', places[x].area);
  places[x].empty();
}
*/

places.map(function(el) {
  console.log('area = ', el.area);
  el.empty();
});

/*var places = [house, garden];
var x = [1, 2, 3];*/

/*places.push(house);
console.log(places);*/