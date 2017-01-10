if (window.SD === undefined) { window.SD = {}; }

(function() {
  var mountNode = document.querySelector('#react-root');

  class AppComponent extends React.Component {
    render() {
      return <div className="container">
        <h2>Two Components</h2>

        <SD.ComponentOne />

        <hr />

        <SD.ComponentTwo />
      </div>;
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);
})();
