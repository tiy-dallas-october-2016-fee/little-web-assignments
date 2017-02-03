if (window.R === undefined) { window.R = {}; }

(function() {

  class DetailViewOfThingComponent extends React.Component {

    static willTransitionTo(transition, replaceWith) {
      console.log('willTransitionTo DetailViewOfThingComponent', transition, replaceWith);
    }

    static willTransitionFrom() {
      console.log('willTransitionFrom DetailViewOfThingComponent', arguments);
    }

    componentDidMount() {
      console.log('componentDidMount', this.props.params.id);

      var thing = R.Data.findById(this.props.params.id);
      this.setState({
        thing: thing
      })

    }

    render() {
      console.log('render', this.state);

      if (this.state === null || this.state.thing === undefined) {
        return <div className="detail-view"></div>;
      }

      return <div className="detail-view">
        <h1>Detail View</h1>
        <p>Name: {this.state.thing.name}</p>
        <p>Type: {this.state.thing.type}</p>
        <p>Description: {this.state.thing.description}</p>
      </div>
    }

  }

  R.DetailViewOfThingComponent = DetailViewOfThingComponent;

})();
