'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.R === undefined) {
  window.R = {};
}

(function () {
  var DetailViewOfThingComponent = function (_React$Component) {
    _inherits(DetailViewOfThingComponent, _React$Component);

    function DetailViewOfThingComponent() {
      _classCallCheck(this, DetailViewOfThingComponent);

      return _possibleConstructorReturn(this, (DetailViewOfThingComponent.__proto__ || Object.getPrototypeOf(DetailViewOfThingComponent)).apply(this, arguments));
    }

    _createClass(DetailViewOfThingComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('componentDidMount', this.props.params.id);

        var thing = R.Data.findById(this.props.params.id);
        this.setState({
          thing: thing
        });
      }
    }, {
      key: 'render',
      value: function render() {
        console.log('render', this.state);

        if (this.state === null || this.state.thing === undefined) {
          return React.createElement('div', { className: 'detail-view' });
        }

        return React.createElement(
          'div',
          { className: 'detail-view' },
          React.createElement(
            'h1',
            null,
            'Detail View'
          ),
          React.createElement(
            'p',
            null,
            'Name: ',
            this.state.thing.name
          ),
          React.createElement(
            'p',
            null,
            'Type: ',
            this.state.thing.type
          ),
          React.createElement(
            'p',
            null,
            'Description: ',
            this.state.thing.description
          )
        );
      }
    }]);

    return DetailViewOfThingComponent;
  }(React.Component);

  R.DetailViewOfThingComponent = DetailViewOfThingComponent;
})();
//# sourceMappingURL=DetailViewOfThingComponent.js.map
