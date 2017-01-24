var mountNode = document.querySelector('#react-root');


var DataObject = {
  counter: 0,
  callbacks: [],

  incrementCount: function() {
    console.log('this before', this);
    this.counter += 1;
    this.callbacks.forEach((cb) => {
      cb();
    });
    console.log('this after', this);
  },

  //Call this to keep track of who wants to know when the state changed.
  registerCallback: function(cb) {
    this.callbacks.push(cb);
  }
};



class FirstComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    DataObject.registerCallback(() => {
      this.setState({
        count: DataObject.counter
      });
    })
  }

  clicky() {
    DataObject.incrementCount();
  }

  render() {
    return <div>Count: {this.state.count}
      <button onClick={() => { this.clicky(); }}>increment</button>
    </div>
  }
}

class SecondComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    DataObject.registerCallback(() => {
      this.setState({
        count: DataObject.counter
      });
    })
  }

  clicky() {
    DataObject.incrementCount();
  }

  render() {
    return <div>This other count: {this.state.count}
      <button onClick={() => { this.clicky(); }}>increment</button>
    </div>
  }
}







class AppComponent extends React.Component {
  render() {
    return <div>

      <FirstComponent />

      <SecondComponent />

    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
