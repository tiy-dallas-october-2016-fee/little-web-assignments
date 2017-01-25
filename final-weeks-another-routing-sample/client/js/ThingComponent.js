if (window.R === undefined) { window.R = {}; }

(function() {

  class ThingComponent extends React.Component {

    render() {
      return <li className="thing">
        {this.props.name} <ReactRouter.Link to={'/detail/' + this.props.id}>details</ReactRouter.Link>
      </li>
    }

  }

  R.ThingComponent = ThingComponent;

})();
