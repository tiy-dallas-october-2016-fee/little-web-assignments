'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.SWAPI === undefined) {
  window.SWAPI = {};
}

(function () {
  var Example1 = function (_React$Component) {
    _inherits(Example1, _React$Component);

    function Example1() {
      _classCallCheck(this, Example1);

      return _possibleConstructorReturn(this, (Example1.__proto__ || Object.getPrototypeOf(Example1)).apply(this, arguments));
    }

    _createClass(Example1, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        $.ajax({
          url: 'http://swapi.co/api/people'
        }).done(function (data) {
          console.log('confirming data', data);
          _this2.setState({
            apiData: data
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {

        var list;
        if (this.state !== null) {
          list = React.createElement(
            'ul',
            null,
            this.state.apiData.results.map(function (person, index) {
              return React.createElement(
                'li',
                { key: index },
                person.name,
                ' (gender: ',
                person.gender,
                ')',
                React.createElement(
                  'h3',
                  null,
                  'Starships'
                ),
                React.createElement(
                  'ol',
                  null,
                  person.starships.map(function (ship, index) {
                    return React.createElement(
                      'li',
                      { key: index },
                      ship
                    );
                  })
                )
              );
            })
          );
        }

        return React.createElement(
          'div',
          null,
          React.createElement(
            'h2',
            null,
            'Example 1:'
          ),
          React.createElement(
            'p',
            null,
            'This is for whatever'
          ),
          list
        );
      }
    }]);

    return Example1;
  }(React.Component);

  window.SWAPI.Example1 = Example1;
})();
//# sourceMappingURL=example-1.js.map
