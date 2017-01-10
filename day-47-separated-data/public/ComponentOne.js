"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.SD === undefined) {
  window.SD = {};
}

(function () {
  var ComponentOne = function (_React$Component) {
    _inherits(ComponentOne, _React$Component);

    function ComponentOne() {
      _classCallCheck(this, ComponentOne);

      var _this = _possibleConstructorReturn(this, (ComponentOne.__proto__ || Object.getPrototypeOf(ComponentOne)).call(this));

      _this.state = {
        data: SD.MyDataPlace.data
      };
      return _this;
    }

    _createClass(ComponentOne, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          "Component One",
          React.createElement(
            "ul",
            null,
            this.state.data.map(function (name, index) {
              return React.createElement(
                "li",
                { key: index },
                name
              );
            })
          )
        );
      }
    }]);

    return ComponentOne;
  }(React.Component);

  SD.ComponentOne = ComponentOne;
})();
//# sourceMappingURL=ComponentOne.js.map
