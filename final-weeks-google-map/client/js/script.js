var mountNode = document.querySelector('#react-root');


//

class Map extends React.Component {

  componentDidMount() {
    console.log('Map componentDidMount');
    this.googleMap = new google.maps.Map(this.map, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });

    var marker = new google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map: this.googleMap,
      title: 'Hello World!'
    });

  }

  componentDidUpdate() {
    console.log('Map componentWillUpdate', this.props);
    if (this.props.data === undefined) {
      console.log('Map props', this.props);
      return;
    }
    this.props.data.locations.forEach((loc) => {
      console.log('loc', loc);
      var marker = new google.maps.Marker({
        position: { lat: loc.lat, lng: loc.lng },
        map: this.googleMap,
        title: 'Hello World!'
      });
    });
  }

  render() {
    console.log('Map render');
    return <div>
      <div ref={(map) => { this.map = map; }} style={{width: '100%', height: '400px'}}></div>
    </div>
  }
}


class AppComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      apiResult: {
        locations: []
      }
    }
  }

  componentDidMount() {
    console.log('AppComponent componentDidMount')

    $.ajax({
      url: '/api/locations'
    })
    .done((data) => {
      console.log('data!', data);
      this.setState({
        apiResult: data
      })
    });
  }

  componentWillUpdate() {
    console.log('AppComponent updating');
  }

  render() {
    return <div>

      <Map data={this.state.apiResult} />

    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
