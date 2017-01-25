"use strict";

if (window.R === undefined) {
  window.R = {};
}

(function () {

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var mountNode = document.querySelector('#react-root');

  var router = React.createElement(
    Router,
    { history: ReactRouter.hashHistory },
    React.createElement(Route, { path: "/", component: R.ListOfThingsComponent }),
    React.createElement(Route, { path: "/detail/:id", component: R.DetailViewOfThingComponent })
  );

  ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=router.js.map
