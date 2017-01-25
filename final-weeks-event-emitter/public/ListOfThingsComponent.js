'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.EE === undefined) {
  window.EE = {};
}

(function () {
  var ListOfThingsComponent = function (_React$Component) {
    _inherits(ListOfThingsComponent, _React$Component);

    function ListOfThingsComponent() {
      _classCallCheck(this, ListOfThingsComponent);

      var _this = _possibleConstructorReturn(this, (ListOfThingsComponent.__proto__ || Object.getPrototypeOf(ListOfThingsComponent)).call(this));

      _this.state = { items: [] };
      return _this;
    }

    _createClass(ListOfThingsComponent, [{
      key: 'keyUp',
      value: function keyUp(evt) {
        if (evt.keyCode === 13) {
          EE.Data.addItem(evt.target.value);
          evt.target.value = '';
        }
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        EE.Data.emitter.on('changed', function () {
          console.log('updating!');
          _this2.setState({
            items: EE.Data.getItems()
          });
        });
      }
    }, {
      key: 'removeAtIndex',
      value: function removeAtIndex(index) {
        EE.Data.removeItem(index);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var counter;
        if (this.state.items.length < 4) {
          counter = React.createElement(EE.CounterComponent, null);
        }

        return React.createElement(
          'div',
          null,
          React.createElement('input', {
            ref: function ref(input) {
              _this3.input = input;
            },
            onKeyUp: function onKeyUp(evt) {
              _this3.keyUp(evt);
            },
            placeholder: 'Enter a thing' }),
          React.createElement(
            'ul',
            null,
            this.state.items.map(function (x, index) {
              return React.createElement(
                'li',
                { key: index, onClick: function onClick() {
                    _this3.removeAtIndex(index);
                  } },
                x
              );
            })
          ),
          counter
        );
      }
    }]);

    return ListOfThingsComponent;
  }(React.Component);

  EE.ListOfThingsComponent = ListOfThingsComponent;
})();
//# sourceMappingURL=ListOfThingsComponent.js.map
