(function() {

  var next1 = document.querySelector('.thing-1 .next');
  var next2 = document.querySelector('.thing-2 .next');
  var back2 = document.querySelector('.thing-2 .back');

  // moving from #1 to #2
  next1.addEventListener('click', function() {
    hideCurrentlyShowingThing();
    show('.thing-2');
  });

  // moving from #2 to #3
  next2.addEventListener('click', function() {
    hideCurrentlyShowingThing();
    show('.thing-3');
  });

  //moving from #2 back to #1
  back2.addEventListener('click', function() {
    hideCurrentlyShowingThing();
    show('.thing-1');
  });

  function hideCurrentlyShowingThing() {
    var showing = document.querySelector('.showing');
    showing.classList.remove('showing');
  }

  function show(selector) {
    var thing = document.querySelector(selector);
    thing.classList.add('showing');
  }



})();
