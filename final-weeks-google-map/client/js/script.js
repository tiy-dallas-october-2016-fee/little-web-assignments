var mountNode = document.querySelector('#react-root');


//


class AppComponent extends React.Component {

  componentDidMount() {
    console.log('this map', this.map);
    this.googleMap = new google.maps.Map(this.map, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 10
    });
  }

  render() {
    return <div>React works!

      <div ref={(map) => { this.map = map; }} style={{width: '100%', height: '400px'}}></div>

    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
