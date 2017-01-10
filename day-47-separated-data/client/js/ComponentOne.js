if (window.SD === undefined) { window.SD = {}; }

(function() {

  class ComponentOne extends React.Component {

    constructor() {
      super();

      this.state = {
        data: SD.MyDataPlace.data
      };
    }

    render() {
      return <div>Component One

        <ul>
          {this.state.data.map((name, index) => { return <li key={index}>{name}</li>})}
        </ul>

      </div>
    }
  }

  SD.ComponentOne = ComponentOne;

})();
