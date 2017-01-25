if (window.R === undefined) { window.R = {}; }

(function() {

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var mountNode = document.querySelector('#react-root');

  var router = <Router history={ReactRouter.hashHistory}>
      <Route path="/" component={R.ListOfThingsComponent} />
      <Route path="/detail/:id" component={R.DetailViewOfThingComponent} />
    </Router>;

  ReactDOM.render(router, mountNode);

})();
