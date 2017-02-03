(function() {

  function DomHelper(selector) {
    this.el = document.querySelector(selector);
  }

  DomHelper.prototype = {
    text: function(str) {
      this.el.textContent = str;
    },

    toggle() {
      this.el.classList.toggle('toggled');
    }
  };

  //Now that I've defined it, I'm going to use it!

  var helper = new DomHelper('.dom-section-2');
  helper.text('I have changed the text too!');
  helper.toggle();

})();
