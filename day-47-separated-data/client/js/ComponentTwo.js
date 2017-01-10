if (window.SD === undefined) { window.SD = {}; }

(function() {

  class ComponentTwo extends React.Component {
    render() {
      return <div>Component Two
        <div>Number of people: {SD.MyDataPlace.data.length}</div>
      </div>
    }
  }

  SD.ComponentTwo = ComponentTwo;

})();
