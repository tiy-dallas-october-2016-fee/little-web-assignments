'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

//

var Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map() {
    _classCallCheck(this, Map);

    return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
  }

  _createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('Map componentDidMount');
      this.googleMap = new google.maps.Map(this.map, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });

      var marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: this.googleMap,
        title: 'Hello World!'
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      console.log('Map componentWillUpdate', this.props);
      if (this.props.data === undefined) {
        console.log('Map props', this.props);
        return;
      }
      this.props.data.locations.forEach(function (loc) {
        console.log('loc', loc);
        var marker = new google.maps.Marker({
          position: { lat: loc.lat, lng: loc.lng },
          map: _this2.googleMap,
          title: 'Hello World!'
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      console.log('Map render');
      return React.createElement(
        'div',
        null,
        React.createElement('div', { ref: function ref(map) {
            _this3.map = map;
          }, style: { width: '100%', height: '400px' } })
      );
    }
  }]);

  return Map;
}(React.Component);

var AppComponent = function (_React$Component2) {
  _inherits(AppComponent, _React$Component2);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    var _this4 = _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).call(this));

    _this4.state = {
      apiResult: {
        locations: []
      }
    };
    return _this4;
  }

  _createClass(AppComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this5 = this;

      console.log('AppComponent componentDidMount');

      $.ajax({
        url: '/api/locations'
      }).done(function (data) {
        console.log('data!', data);
        _this5.setState({
          apiResult: data
        });
      });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      console.log('AppComponent updating');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'React works!',
        React.createElement(Map, { data: this.state.apiResult })
      );
    }
  }]);

  return AppComponent;
}(React.Component);

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
