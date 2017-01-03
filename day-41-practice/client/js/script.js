

(function() {

  var mountNode = document.querySelector('#react-root');


  class PersonComponent extends React.Component {

    constructor() {
      super();
      console.log('firing PersonComponent constructor!');

      this.state = {
        currentClass: ''
      };
    }

    toggle() {

      //you can get to the current value by using this.state.currentClass

      if (this.state.currentClass === 'on') {
        this.setState({
          currentClass: ''
        });
      }
      else {
        this.setState({
          currentClass: 'on'
        });
      }


    }

    render() {
      console.log('the props for this component: ', this.props);

      return <li className={this.state.currentClass} onClick={() => { this.toggle(); }}>
        <div>First Name: {this.props.firstName}</div>
        <div>Last Name: {this.props.lastName}</div>
        <div>Age: {this.props.age}</div>
      </li>
    }

  }


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
        return <PersonComponent key={person.id} firstName={person.firstName} lastName={person.lastName} age={person.age} />;
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
