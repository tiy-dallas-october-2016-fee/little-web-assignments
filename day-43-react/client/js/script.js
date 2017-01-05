window.SW = window.SW || {};

(function() {

  var mountNode = document.querySelector('#react-root');

  class AppComponent extends React.Component {

    componentDidMount() {
      console.log('AppComponent.componentDidMount');
    }

    componentWillUnmount() {
      console.log('AppComponent.componentWillUnmount');
    }

    render() {
      console.log('AppComponent.render');
      return <div>
        <SW.InputComponent />
        <SW.PlanetListComponent />
      </div>;
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);

})();
