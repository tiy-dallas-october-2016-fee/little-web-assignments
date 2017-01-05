'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.MyPersonApp = window.MyPersonApp || {};

(function () {
  var PersonComponent = function (_React$Component) {
    _inherits(PersonComponent, _React$Component);

    function PersonComponent() {
      _classCallCheck(this, PersonComponent);

      var _this = _possibleConstructorReturn(this, (PersonComponent.__proto__ || Object.getPrototypeOf(PersonComponent)).call(this));

      console.log('firing PersonComponent constructor!');

      _this.state = {
        currentClass: ''
      };
      return _this;
    }

    _createClass(PersonComponent, [{
      key: 'toggle',
      value: function toggle() {

        //you can get to the current value by using this.state.currentClass

        if (this.state.currentClass === 'on') {
          this.setState({
            currentClass: ''
          });
        } else {
          this.setState({
            currentClass: 'on'
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        console.log('the props for this component: ', this.props);

        return React.createElement(
          'li',
          { className: this.state.currentClass, onClick: function onClick() {
              _this2.toggle();
            } },
          React.createElement(
            'div',
            null,
            'First Name: ',
            this.props.firstName
          ),
          React.createElement(
            'div',
            null,
            'Last Name: ',
            this.props.lastName
          ),
          React.createElement(
            'div',
            null,
            'Age: ',
            this.props.age
          )
        );
      }
    }]);

    return PersonComponent;
  }(React.Component);

  var someOtherVariable = 7;

  MyPersonApp.PersonComponent = PersonComponent;
})();
//# sourceMappingURL=person-component.js.map
