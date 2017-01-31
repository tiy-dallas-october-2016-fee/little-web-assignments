var mountNode = document.querySelector('#react-root');

class LunchComponent extends React.Component {
  render() {
    return <li className="lunch-component">
    {this.props.place.name} ( {this.props.place.location} )
      <ol>
        {/* yo dawg, I heard you like comments */}
        {this.props.place.favoriteFoods.map((food, index) => { return <li key={index}>{food}</li>; })}
      </ol>
    </li>
  }
}








class GithubApiSampleComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      apiResult: {
        results: []
      }
    };
  }

  clicky() {

    $.ajax({
      url: 'http://swapi.co/api/people'
    })
    .done((data) => {
      console.log('I got data!', data);

      this.setState({
        apiResult: data
      });
    });

  }

  render() {
    console.log('rendering StarWars stuff');
    return <div className="github-api-sample-component">
      <h2>Github!</h2>
      <button onClick={() => this.clicky()}>load data</button>

      <ul>
        {this.state.apiResult.results.map((char) => {
          return <li key={char.url}>{char.name}</li>;
        })}
      </ul>
    </div>
  }
}






class AppComponent extends React.Component {
  render() {

    var data = [
      {
        id: 1,
        name: 'Metropolitan Cafe',
        location: 'In this building',
        favoriteFoods: ['turkey sandwhich', 'reuben']
      },
      {
        id: 2,
        name: 'Mudhen',
        location: 'Farmers Market',
        favoriteFoods: ['steak rice bowl']
      },
      {
        id: 3,
        name: 'Jimmy Johns',
        location: 'West',
        favoriteFoods: ['turkey sandwhich', 'salt and vinegar chips']
      }
    ];


    return <div className="app-component">
      <ul>
        {data.map((place) => { return <LunchComponent key={place.id} place={place} />; })}
      </ul>
      <GithubApiSampleComponent />
    </div>
  }
}

ReactDOM.render(<AppComponent />, mountNode);
