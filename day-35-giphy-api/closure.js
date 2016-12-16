


function runMe() {
  var MAX = 100;

  function generateNumber() {
    console.log('we are running the generateNumber function', MAX);
    return 7;
  }

  return generateNumber;
}

var thatFunctionWeCreated = runMe();

thatFunctionWeCreated();



function counterCreator() {

  var count = 0;

  function counter() {
    count++;
    console.log('count is ', count);
  }

  return counter;
}


var firstCounter = counterCreator();
firstCounter();
firstCounter();

var secondCounter = counterCreator();
secondCounter();




//We cannot use MAX




(function() {

  var domElement = document.querySelector('.thing');
  var count = 0;

  domElement.addEventListener('click', function() {
    count++;
  });

})();
