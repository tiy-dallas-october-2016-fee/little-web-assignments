


console.log(name);

var name = 'Bob';


function eatPizza() {
  var pizzaType = 'Canadian Bacon';
  if (pizzaType === 'Canadian Bacon') {
    var mostYummy = true;
  }
  else {
    var mostYummy = false;
  }
}




function loooooopy() {
  var str = 'steak';

  for (var i = 0; i < str.length; i++) {
    var theLetter = str[i];
    console.log(theLetter);
  }
}



function getTheMax() {
  console.log('before', arr);
  var arr = [1, 6, 9, 20, 5];
  console.log('after', arr);
  var theMax = 0;

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (val > theMax) {
      theMax = val;
    }
  }

  console.log('the max', val);
}
getTheMax();
