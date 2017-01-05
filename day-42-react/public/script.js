'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var LunchComponent = function (_React$Component) {
  _inherits(LunchComponent, _React$Component);

  function LunchComponent() {
    _classCallCheck(this, LunchComponent);

    return _possibleConstructorReturn(this, (LunchComponent.__proto__ || Object.getPrototypeOf(LunchComponent)).apply(this, arguments));
  }

  _createClass(LunchComponent, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        { className: 'lunch-component' },
        this.props.place.name,
        ' ( ',
        this.props.place.location,
        ' )',
        React.createElement(
          'ol',
          null,
          this.props.place.favoriteFoods.map(function (food, index) {
            return React.createElement(
              'li',
              { key: index },
              food
            );
          })
        )
      );
    }
  }]);

  return LunchComponent;
}(React.Component);

var GithubApiSampleComponent = function (_React$Component2) {
  _inherits(GithubApiSampleComponent, _React$Component2);

  function GithubApiSampleComponent() {
    _classCallCheck(this, GithubApiSampleComponent);

    var _this2 = _possibleConstructorReturn(this, (GithubApiSampleComponent.__proto__ || Object.getPrototypeOf(GithubApiSampleComponent)).call(this));

    _this2.state = {
      apiResult: {
        results: []
      }
    };
    return _this2;
  }

  _createClass(GithubApiSampleComponent, [{
    key: 'clicky',
    value: function clicky() {
      var _this3 = this;

      $.ajax({
        url: 'http://swapi.co/api/people'
      }).done(function (data) {
        console.log('I got data!', data);

        _this3.setState({
          apiResult: data
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      console.log('rendering StarWars stuff');
      return React.createElement(
        'div',
        { className: 'github-api-sample-component' },
        React.createElement(
          'h2',
          null,
          'Github!'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this4.clicky();
            } },
          'load data'
        ),
        React.createElement(
          'ul',
          null,
          this.state.apiResult.results.map(function (char) {
            return React.createElement(
              'li',
              { key: char.url },
              char.name
            );
          })
        )
      );
    }
  }]);

  return GithubApiSampleComponent;
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

      var data = [{
        id: 1,
        name: 'Metropolitan Cafe',
        location: 'In this building',
        favoriteFoods: ['turkey sandwhich', 'reuben']
      }, {
        id: 2,
        name: 'Mudhen',
        location: 'Farmers Market',
        favoriteFoods: ['steak rice bowl']
      }, {
        id: 3,
        name: 'Jimmy Johns',
        location: 'West',
        favoriteFoods: ['turkey sandwhich', 'salt and vinegar chips']
      }];

      return React.createElement(
        'div',
        { className: 'app-component' },
        React.createElement(
          'ul',
          null,
          data.map(function (place) {
            return React.createElement(LunchComponent, { key: place.id, place: place });
          })
        ),
        React.createElement(GithubApiSampleComponent, null)
      );
    }
  }]);

  return AppComponent;
}(React.Component);

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
