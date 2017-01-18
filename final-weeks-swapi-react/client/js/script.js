if (window.SWAPI === undefined) { window.SWAPI = {}; }

(function() {
  var mountNode = document.querySelector('#react-root');

  class AppComponent extends React.Component {
    render() {
      return <div>
        <SWAPI.Example1 />
      </div>;
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);
})();
