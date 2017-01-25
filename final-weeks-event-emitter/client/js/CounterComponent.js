if (window.EE === undefined) { window.EE = {}; }

(function() {

  class CounterComponent extends React.Component {

    constructor() {
      super();
      this.state = {
        count: 0
      }
    }

    componentDidMount() {
      EE.Data.emitter.on('changed', () => {
        console.log('updating!');
        this.setState({
          count: EE.Data.getItems().length
        })
      });
    }

    render() {
      return <div>
        <p>Counter: {this.state.count}</p>
      </div>;
    }

  }

  EE.CounterComponent = CounterComponent;

})();
