'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var AppComponent = function (_React$Component) {
  _inherits(AppComponent, _React$Component);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    var _this = _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).call(this));

    _this.state = {
      apiResult: {
        items: []
      }
    };
    _this.page = 1;
    return _this;
  }

  _createClass(AppComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('component did mount');
      this.callApi();
    }
  }, {
    key: 'callApi',
    value: function callApi(query, sort, page) {
      var _this2 = this;

      if (query === undefined || query === '') {
        query = 'pants';
      }

      if (sort === undefined) {
        sort = '';
      }

      if (page === undefined) {
        page = 1;
      }

      $.ajax({
        url: 'https://api.github.com/search/users?q=' + query + '&sort=' + sort + '&page=' + page
      }).done(function (data) {
        console.log('data', data);
        _this2.setState({
          apiResult: data
        });
      });
    }
  }, {
    key: 'search',
    value: function search() {
      console.log('search', this.queryInput.value);

      this.callApi(this.queryInput.value, this.sortInput.value, this.page);
    }
  }, {
    key: 'next',
    value: function next() {
      this.page += 1;
      this.search();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'search-options' },
          React.createElement('input', { placeholder: 'query', ref: function ref(input) {
              _this3.queryInput = input;
            } }),
          React.createElement('input', { placeholder: 'sort', ref: function ref(input) {
              _this3.sortInput = input;
            } }),
          React.createElement(
            'button',
            { onClick: function onClick() {
                _this3.search();
              } },
            'run search'
          )
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              _this3.next();
            } },
          'next'
        ),
        React.createElement(
          'ul',
          null,
          this.state.apiResult.items.map(function (item) {
            return React.createElement(
              'li',
              { key: item.id },
              item.login
            );
          })
        )
      );
    }
  }]);

  return AppComponent;
}(React.Component);

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
