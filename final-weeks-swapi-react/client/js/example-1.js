if (window.SWAPI === undefined) { window.SWAPI = {}; }

(function() {

  class Example1 extends React.Component {


    componentDidMount() {
      $.ajax({
        url: 'http://swapi.co/api/people'
      })
      .done((data) => {
        console.log('confirming data', data);
        this.setState({
          apiData: data
        })
      });
    }

    render() {

      var list;
      if (this.state !== null) {
        list = <ul>
          {this.state.apiData.results.map((person, index) => {
            return <li key={index}>{person.name} (gender: {person.gender})
              <h3>Starships</h3>
              <ol>
                {person.starships.map((ship, index) => {
                  return <li key={index}>{ship}</li>
                })}
              </ol>
            </li>
          })}
        </ul>
      }


      return <div>
        <h2>Example 1:</h2>

        <p>This is for whatever</p>

        {list}

      </div>
    }

  }

  window.SWAPI.Example1 = Example1;

})();
