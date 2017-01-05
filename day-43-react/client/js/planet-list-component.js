window.SW = window.SW || {};

(function() {



  class PlanetComponent extends React.Component {

    constructor() {
      super();
      this.state = {
        isSelected: false
      };
    }

    toggle() {
      console.log('toggle');
      this.setState({
        isSelected: !this.state.isSelected
      })
    }

    render() {

      var currentClass = 'planet';
      var extraInfo;

      var selectedClass;
      if (this.state.isSelected) {
        currentClass += ' on';

        extraInfo = <div>
          <div>Climage: {this.props.planet.climate}</div>
          <div>Created: {this.props.planet.created}</div>
        </div>
      }


      return <li className={currentClass} onClick={() => { this.toggle(); }}>
        {this.props.planet.name}
        {extraInfo}
        </li>;
    }
  }



  class PlanetListComponent extends React.Component {

    constructor() {
      super();
    }

    componentDidMount() {
      console.log('PlanetListComponent.componentDidMount');

      this.loadThePlanets();
    }

    componentWillUnmount() {
      console.log('PlanetListComponent.componentWillUnmount');
    }

    loadThePlanets() {
      console.log('load the planets');

      $.ajax({
        url: 'http://swapi.co/api/planets/'
      })
      .done((data) => {
        console.log('Do I have data?', data);
        this.setState({
          apiData: data
        })
      });
    }

    render() {
      console.log('render', this.state);

      var theList;

      if (this.state != null) {
        theList = <ul>
          {this.state.apiData.results.map((planet) => { return <PlanetComponent key={planet.url} planet={planet} />})}
        </ul>;
      }


      return <div className="planet-list">
        <h1>Planet List</h1>

        {theList}

      </div>
    }

  }

  SW.PlanetListComponent = PlanetListComponent;

})();
