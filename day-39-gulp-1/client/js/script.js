var mountNode = document.querySelector('#some-selector');


class AnotherComponent extends React.Component {
  render() {
    console.log('props', this.props);

    return <div className="the-class-name">You greeting a fellow named {this.props.name}</div>
  }
}



class HelloMessage extends React.Component {
  render() {
    var name = 'Johnny';

    return <div>
      <p>Hello {name}!</p>
      <AnotherComponent name={name} />
    </div>;
  }
}

ReactDOM.render(<HelloMessage />, mountNode);
