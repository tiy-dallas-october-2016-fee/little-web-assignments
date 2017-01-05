window.MyPersonApp = window.MyPersonApp || {};

(function() {

  var mountNode = document.querySelector('#react-root');

  class AppComponent extends React.Component {


    divClick() {
      console.log('You clicked on that div!');
    }




    render() {

      var data = [{
          firstName: 'Jane',
          lastName: 'Doe',
          age: 35,
          id: 1
        },
        {
          firstName: 'Bob',
          lastName: 'Dole',
          age: 86,
          id: 2
        },
        {
          firstName: 'Stephen',
          lastName: 'Spielberg',
          age: 68,
          id: 3
        }
      ];


      var myGreeting = 'Hello there!';

      var theListItemComponents = data.map((person) => {
        console.log('what is this?', this.state);
        return <MyPersonApp.PersonComponent key={person.id} firstName={person.firstName} lastName={person.lastName} age={person.age} />;
      });

      console.log('what is in that variable?', theListItemComponents);

      return <div className="app-component">

        <p onClick={() => { console.log('hello'); }}>{myGreeting}</p>

        <div onClick={() => { this.divClick(); }}>click me as well bro</div>

        <ul>
          {theListItemComponents}
        </ul>

      </div>;
    }
  }

  var MyCoolObject = {};

  ReactDOM.render(<AppComponent />, mountNode);

})();
