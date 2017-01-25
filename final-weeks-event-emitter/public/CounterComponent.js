'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.EE === undefined) {
  window.EE = {};
}

(function () {
  var CounterComponent = function (_React$Component) {
    _inherits(CounterComponent, _React$Component);

    function CounterComponent() {
      _classCallCheck(this, CounterComponent);

      var _this = _possibleConstructorReturn(this, (CounterComponent.__proto__ || Object.getPrototypeOf(CounterComponent)).call(this));

      _this.state = {
        count: 0
      };
      return _this;
    }

    _createClass(CounterComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.changedCallback = function () {
          console.log('updating!');
          _this2.setState({
            count: EE.Data.getItems().length
          });
        };

        EE.Data.emitter.on('changed', this.changedCallback);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        console.log('unmounting');
        EE.Data.emitter.off('changed', this.changedCallback);
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            'Counter: ',
            this.state.count
          )
        );
      }
    }]);

    return CounterComponent;
  }(React.Component);

  EE.CounterComponent = CounterComponent;
})();
//# sourceMappingURL=CounterComponent.js.map
