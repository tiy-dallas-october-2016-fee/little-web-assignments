'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var AppComponent = function (_React$Component) {
  _inherits(AppComponent, _React$Component);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
  }

  _createClass(AppComponent, [{
    key: 'componentDidMount',


    //I am using the ref here to autofocus when the component is loaded.
    value: function componentDidMount() {
      this.theInput.focus();
    }

    //If you wanted to do an API call based on a button click, maybe this way. Using the ref to get to the value.

  }, {
    key: 'click',
    value: function click() {
      console.log('the input', this.theInput, this.theInput.value);
      getData(this.theInput.value);
    }

    //Execute when key up happens? Do this!

  }, {
    key: 'keyUpHappened',
    value: function keyUpHappened(evt) {
      console.log(evt.keyCode, evt.target);
      if (evt.keyCode === 13) {
        getData(evt.target.value);
      }
    }
  }, {
    key: 'getData',
    value: function getData(query) {
      $.ajax({
        url: 'https://api.github.com/search/users?q=' + query
      }).done(function (data) {
        console.log('got that data!', data);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement('input', { placeholder: 'input goes here', ref: function ref(theDomElement) {
            _this2.theInput = theDomElement;
          } }),
        React.createElement(
          'button',
          { onClick: function onClick() {
              _this2.click();
            } },
          'focus, bro'
        ),
        React.createElement('input', {
          placeholder: 'put something in and hit enter',
          onKeyUp: function onKeyUp(evt) {
            _this2.keyUpHappened(evt);
          } })
      );
    }
  }]);

  return AppComponent;
}(React.Component);

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
