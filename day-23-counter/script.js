(function() {

  //begin new
  var localStorageValue = localStorage.getItem('counter');
  console.log('here it is, yo', localStorageValue);

  var counter = 0;
  if (localStorageValue !== null) {
    counter = Number(localStorageValue);
  }
  //end new

  var decrementButton = document.querySelector('.decrement');
  var incrementButton = document.querySelector('.increment');
  var display = document.querySelector('.display');

  display.textContent = counter;

  decrementButton.addEventListener('click', function() {
    counter--;
    display.textContent = counter;
    localStorage.setItem('counter', counter); //new
  });

  incrementButton.addEventListener('click', function() {
    counter++;
    display.textContent = counter;
    localStorage.setItem('counter', counter); //new
  });

})();
