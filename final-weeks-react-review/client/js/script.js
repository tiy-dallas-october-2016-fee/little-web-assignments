(function() {

  var mountNode = document.querySelector('#react-root');

  class AppComponent extends React.Component {
    render() {
      return <div>Review!
        <RR.HeManCharactersListComponent />
      </div>;
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);

})();
