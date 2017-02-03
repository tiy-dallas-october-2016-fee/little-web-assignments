if (window.R === undefined) { window.R = {}; }

(function() {

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var mountNode = document.querySelector('#react-root');

  var router = <Router history={ReactRouter.hashHistory}>
      <Route path="/"
        component={R.ListOfThingsComponent}
        onEnter={R.ListOfThingsComponent.willTransitionTo}
        onLeave={R.ListOfThingsComponent.willTransitionFrom} />
      <Route path="/detail/:id"
        component={R.DetailViewOfThingComponent}
        onEnter={R.DetailViewOfThingComponent.willTransitionTo}
        onLeave={R.DetailViewOfThingComponent.willTransitionFrom}
        />
    </Router>;

  ReactDOM.render(router, mountNode);

})();
