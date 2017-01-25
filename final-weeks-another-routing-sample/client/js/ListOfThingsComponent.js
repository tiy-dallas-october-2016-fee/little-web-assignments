if (window.R === undefined) { window.R = {}; }

(function() {

  class ListOfThingsComponent extends React.Component {

    constructor() {
      super();
      this.state = {
        things: []
      }
    }

    componentDidMount() {
      this.setState({
        things: R.Data.things
      });
    }

    render() {
      return <div className="list-of-things">
        <h1>List of things</h1>
        <ul>
          {this.state.things.map((x) => {
            return <R.ThingComponent key={x.id} id={x.id} name={x.name} />
          })}
        </ul>
      </div>
    }

  }

  R.ListOfThingsComponent = ListOfThingsComponent;

})();
