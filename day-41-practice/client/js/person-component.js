window.MyPersonApp = window.MyPersonApp || {};

(function() {

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

  var someOtherVariable = 7;

  MyPersonApp.PersonComponent = PersonComponent;

})();
