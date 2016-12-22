var mountNode = document.querySelector('#some-selector');

class HelloMessage extends React.Component {
  render() {
    return <div>Hello Bob!</div>;
  }
}

ReactDOM.render(<HelloMessage />, mountNode);
