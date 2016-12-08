var name;


console.log(name);

name = 'Bob';


function eatPizza() {
  var pizzaType;
  var mostYummy;

  pizzaType = 'Canadian Bacon';
  if (pizzaType === 'Canadian Bacon') {
    mostYummy = true;
  }
  else {
    mostYummy = false;
  }
}

function loooooopy() {
  var str;
  var i;
  var theLetter;

  str = 'steak';

  for (i = 0; i < str.length; i++) {
    theLetter = str[i];
    console.log(theLetter);
  }
}

function getTheMax() {
  var arr;
  var theMax;
  var i;
  var val;

  arr = [1, 6, 9, 20, 5];
  theMax = 0;

  for (i = 0; i < arr.length; i++) {
    val = arr[i];
    if (val > theMax) {
      theMax = val;
    }
  }

  console.log('the max', val);
}
getTheMax();
