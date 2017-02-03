(function() {

  class DomHelper {
    constructor(selector) {
      this.el = document.querySelector(selector);
    }

    text(str) {
      this.el.textContent = str;
    }

    toggle() {
      this.el.classList.toggle('toggled');
    }
  }



  //Now that I've defined it, I'm going to use it!

  var helper = new DomHelper('.dom-section-1');
  helper.text('I have changed the text!');
  helper.toggle();

})();
