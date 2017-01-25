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

      this.changedCallback = () => {
        console.log('updating!');
        this.setState({
          count: EE.Data.getItems().length
        })
      };

      EE.Data.emitter.on('changed', this.changedCallback);
    }

    componentWillUnmount() {
      console.log('unmounting');
      EE.Data.emitter.off('changed', this.changedCallback);
    }

    render() {
      return <div>
        <p>Counter: {this.state.count}</p>
      </div>;
    }

  }

  EE.CounterComponent = CounterComponent;

})();
