'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

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


  var CustomView = function () {
    function CustomView(selector) {
      _classCallCheck(this, CustomView);

      console.log('custom view constructor. Selector: ', selector);
      this.selector = selector;
      this.element = document.querySelector(selector);
    }

    _createClass(CustomView, [{
      key: 'setupToggling',
      value: function setupToggling(className) {
        this.element.addEventListener('click', function (evt) {
          evt.target.classList.toggle(className);
        });
      }
    }, {
      key: 'txt',
      value: function txt(str) {
        this.element.textContent = str;
      }
    }]);

    return CustomView;
  }();

  var firstToggler = new CustomView('.toggle-me');
  firstToggler.setupToggling('on');

  console.log('first toggler', firstToggler);

  var secondToggler = new CustomView('.toggle-me-too');
  secondToggler.setupToggling('on');
  secondToggler.txt('hello');
})();
//# sourceMappingURL=toggler.js.map