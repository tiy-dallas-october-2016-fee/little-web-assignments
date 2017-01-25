if (window.EE === undefined) { window.EE = {}; }

(function() {

  var mountNode = document.querySelector('#react-root');

  class AppComponent extends React.Component {
    render() {
      return <div>
        <header>
          <h1>Event Emitter Example</h1>
          <EE.CounterComponent />
        </header>

        <p>This is an example that uses an event emitter to keep multiple components in sync, without having to actually connect them explicitly.</p>

        <EE.ListOfThingsComponent />
        <EE.CounterComponent />

        <footer><EE.CounterComponent /></footer>
      </div>;
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);

})();
