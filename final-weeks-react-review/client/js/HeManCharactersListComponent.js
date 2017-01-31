if (window.RR === undefined) { window.RR = {}; }

(function() {

  class HeManCharactersListComponent extends React.Component {

    constructor() {
      console.log('firing constructor');
      super();
      this.keyUpCount = 0;
    }

    keyUp(evt) {
      this.keyUpCount += 1;
      console.log('key up!', evt.keyCode, this.keyUpCount);
    }

    render() {
      return <div>
        <h2>Characters</h2>

        <input onKeyUp={(evt) => { this.keyUp(evt); }} />

      </div>
    }
  }

  RR.HeManCharactersListComponent = HeManCharactersListComponent;

})();
