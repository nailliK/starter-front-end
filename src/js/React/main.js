// force production for builds
// process.env.NODE_ENV = 'production';

// global requisites
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// global variables
window.ReactDOM = ReactDOM;
window.React = React;
window.store = createStore(
  // reducers,
  applyMiddleware(reduxThunk)
);

// add CSS file
const link = document.createElement("link");
link.href = "/css/main.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen";
document.getElementsByTagName("head")[0].appendChild(link);
// add <app> element
const app = document.createElement('wrapper');
document.body.appendChild(app);

// containers
import FooContainer from './containers/foo';

// components
import App from './components/app';

// render and routing
const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={ManageCreativesContainer} />
          <Route path="/upload-creatives" component={UploadCreativeContainer} />
        </Route>
      </Router>
    </Provider>,
    document.querySelector('#app')
  );
};

// wait for DOM to load before initializing
if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
}
else {
  load();
}

// fade in our page
const classes = document.querySelector('body').className;
document.querySelector('body').className += (classes.length) ? ' body--loaded' : 'body--loaded';