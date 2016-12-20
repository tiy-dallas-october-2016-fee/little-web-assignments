(function() {

  // var togglingDiv = document.querySelector('.toggle-me');
  //
  // togglingDiv.addEventListener('click', function() {
  //   togglingDiv.classList.toggle('on');
  // });
  //
  // var togglingTooDiv = document.querySelector('.toggle-me-too');
  //
  // togglingTooDiv.addEventListener('click', function() {
  //   togglingTooDiv.classList.toggle('on');
  // });


  class CustomView {

    constructor(selector) {
      console.log('custom view constructor. Selector: ', selector);
      this.selector = selector;
      this.element = document.querySelector(selector);
    }

    setupToggling(className) {
      this.element.addEventListener('click', function(evt) {
        evt.target.classList.toggle(className);
      });
    }

    txt(str) {
      this.element.textContent = str;
    }
  }

  var firstToggler = new CustomView('.toggle-me');
  firstToggler.setupToggling('on');

  console.log('first toggler', firstToggler);

  var secondToggler = new CustomView('.toggle-me-too');
  secondToggler.setupToggling('on');
  secondToggler.txt('hello');

})();
