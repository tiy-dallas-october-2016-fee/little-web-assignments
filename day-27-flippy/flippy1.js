(function() {

  var position = 1;

  //here is one way to solve the problem of max position
  //get the item count by selecting all children and getting the length
  var allTheThings = document.querySelectorAll('.contains-things div');
  var maxPosition = allTheThings.length;

  //here is another way of solving the problem
  //get the item count by looking at the children array of the parent
  //if I had to guess, this would be ever so slightly faster for the browser to actually do
  var parent = document.querySelector('.contains-things');
  maxPosition = parent.children.length;

  var previousButton = document.querySelector('.button-previous');
  var nextButton = document.querySelector('.button-next');

  previousButton.addEventListener('click', function() {
    if (position > 1) {
      position--;
      showBasedOnCurrentPosition();
    }
  });


  nextButton.addEventListener('click', function() {
    if (position < maxPosition) {
      position++;
      showBasedOnCurrentPosition();
    }
  });

  function showBasedOnCurrentPosition() {
    //now, remove what is currently selected
    var currentlyShowing = document.querySelector('.showing');
    currentlyShowing.classList.remove('showing');

    //we will build our selector so we can dynamically
    // grab the next item
    var selector = '.thing-' + position;
    console.log('selector', selector);

    //go get it and show it
    var thing = document.querySelector(selector);
    thing.classList.add('showing');
  }

})();
