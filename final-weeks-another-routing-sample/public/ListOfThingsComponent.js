"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.R === undefined) {
  window.R = {};
}

(function () {
  var ListOfThingsComponent = function (_React$Component) {
    _inherits(ListOfThingsComponent, _React$Component);

    function ListOfThingsComponent() {
      _classCallCheck(this, ListOfThingsComponent);

      var _this = _possibleConstructorReturn(this, (ListOfThingsComponent.__proto__ || Object.getPrototypeOf(ListOfThingsComponent)).call(this));

      _this.state = {
        things: []
      };
      return _this;
    }

    _createClass(ListOfThingsComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setState({
          things: R.Data.things
        });
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "list-of-things" },
          React.createElement(
            "h1",
            null,
            "List of things"
          ),
          React.createElement(
            "ul",
            null,
            this.state.things.map(function (x) {
              return React.createElement(R.ThingComponent, { key: x.id, id: x.id, name: x.name });
            })
          )
        );
      }
    }]);

    return ListOfThingsComponent;
  }(React.Component);

  R.ListOfThingsComponent = ListOfThingsComponent;
})();
//# sourceMappingURL=ListOfThingsComponent.js.map
