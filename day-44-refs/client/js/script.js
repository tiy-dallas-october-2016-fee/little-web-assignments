var mountNode = document.querySelector('#react-root');

class AppComponent extends React.Component {

  //I am using the ref here to autofocus when the component is loaded.
  componentDidMount() {
    this.theInput.focus();
  }

  //If you wanted to do an API call based on a button click, maybe this way. Using the ref to get to the value.
  click() {
    console.log('the input', this.theInput, this.theInput.value);
    getData(this.theInput.value);
  }

  //Execute when key up happens? Do this!
  keyUpHappened(evt) {
    console.log(evt.keyCode, evt.target);
    if (evt.keyCode === 13) {
      getData(evt.target.value);
    }
  }

  getData(query) {
    $.ajax({
      url: 'https://api.github.com/search/users?q=' + query
    })
    .done((data) => {
      console.log('got that data!', data);
    });

  }

  render() {
    return <div>
      <input placeholder="input goes here" ref={(theDomElement) => { this.theInput = theDomElement; }} />
      <button onClick={() => {this.click(); }}>focus, bro</button>

      <input
        placeholder="put something in and hit enter"
        onKeyUp={(evt) => { this.keyUpHappened(evt); }} />

    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
