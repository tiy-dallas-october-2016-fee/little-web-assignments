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
    React.createElement(Route, { path: "/",
      component: R.ListOfThingsComponent,
      onEnter: R.ListOfThingsComponent.willTransitionTo,
      onLeave: R.ListOfThingsComponent.willTransitionFrom }),
    React.createElement(Route, { path: "/detail/:id",
      component: R.DetailViewOfThingComponent,
      onEnter: R.DetailViewOfThingComponent.willTransitionTo,
      onLeave: R.DetailViewOfThingComponent.willTransitionFrom
    })
  );

  ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=router.js.map
