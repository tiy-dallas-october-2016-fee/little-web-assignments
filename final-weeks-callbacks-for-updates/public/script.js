'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var DataObject = {
  counter: 0,
  callbacks: [],

  incrementCount: function incrementCount() {
    console.log('this before', this);
    this.counter += 1;
    this.callbacks.forEach(function (cb) {
      cb();
    });
    console.log('this after', this);
  },

  //Call this to keep track of who wants to know when the state changed.
  registerCallback: function registerCallback(cb) {
    this.callbacks.push(cb);
  }
};

var FirstComponent = function (_React$Component) {
  _inherits(FirstComponent, _React$Component);

  function FirstComponent() {
    _classCallCheck(this, FirstComponent);

    var _this = _possibleConstructorReturn(this, (FirstComponent.__proto__ || Object.getPrototypeOf(FirstComponent)).call(this));

    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(FirstComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      DataObject.registerCallback(function () {
        _this2.setState({
          count: DataObject.counter
        });
      });
    }
  }, {
    key: 'clicky',
    value: function clicky() {
      DataObject.incrementCount();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        null,
        'Count: ',
        this.state.count,
        React.createElement(
          'button',
          { onClick: function onClick() {
              _this3.clicky();
            } },
          'increment'
        )
      );
    }
  }]);

  return FirstComponent;
}(React.Component);

var SecondComponent = function (_React$Component2) {
  _inherits(SecondComponent, _React$Component2);

  function SecondComponent() {
    _classCallCheck(this, SecondComponent);

    var _this4 = _possibleConstructorReturn(this, (SecondComponent.__proto__ || Object.getPrototypeOf(SecondComponent)).call(this));

    _this4.state = {
      count: 0
    };
    return _this4;
  }

  _createClass(SecondComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this5 = this;

      DataObject.registerCallback(function () {
        _this5.setState({
          count: DataObject.counter
        });
      });
    }
  }, {
    key: 'clicky',
    value: function clicky() {
      DataObject.incrementCount();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return React.createElement(
        'div',
        null,
        'This other count: ',
        this.state.count,
        React.createElement(
          'button',
          { onClick: function onClick() {
              _this6.clicky();
            } },
          'increment'
        )
      );
    }
  }]);

  return SecondComponent;
}(React.Component);

var AppComponent = function (_React$Component3) {
  _inherits(AppComponent, _React$Component3);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
  }

  _createClass(AppComponent, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(FirstComponent, null),
        React.createElement(SecondComponent, null)
      );
    }
  }]);

  return AppComponent;
}(React.Component);

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
