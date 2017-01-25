if (window.EE === undefined) { window.EE = {}; }

(function() {

  class ListOfThingsComponent extends React.Component {

    constructor() {
      super();
      this.state = { items: [] };
    }

    keyUp(evt) {
      if (evt.keyCode === 13) {
        EE.Data.addItem(evt.target.value);
        evt.target.value = '';
      }
    }

    componentDidMount() {
      EE.Data.emitter.on('changed', () => {
        console.log('updating!');
        this.setState({
          items: EE.Data.getItems()
        })
      });
    }

    removeAtIndex(index) {
      EE.Data.removeItem(index);
    }

    render() {
      return <div>

        <input
          ref={(input) => { this.input = input; }}
          onKeyUp={(evt) => { this.keyUp(evt); }}
          placeholder="Enter a thing" />

        <ul>
          {this.state.items.map((x, index) => {
            return <li key={index} onClick={() => { this.removeAtIndex(index); }}>{x}</li>
          })}
        </ul>

      </div>;
    }

  }

  EE.ListOfThingsComponent = ListOfThingsComponent;

})();
