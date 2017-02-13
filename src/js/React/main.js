import "babel-polyfill";
import ReactDOM from "react-dom";
import React from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reduxThunk from "redux-thunk";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
// import top level app component & containers
import App from "./app";
import TodosContainer from "./containers/todos.container";
// import reducers
import reducers from "./reducers";

// build the redux store
const store = createStore(
    reducers,
    applyMiddleware(reduxThunk)
);

// add CSS file
const link = document.createElement('link');
link.href = '/css/main.css';
link.type = 'text/css';
link.rel = 'stylesheet';
link.media = 'screen';
document.getElementsByTagName('head')[0].appendChild(link);

// add <app> element
var app = document.createElement('app');
document.body.appendChild(app);

// render & handle SPA routing
const load = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={TodosContainer}/>
                </Route>
            </Router>
        </Provider>,
        document.querySelector('app')
    );
};

// wait for DOM to load before initializing
if (document.readyState !== 'complete') {
    document.addEventListener('DOMContentLoaded', load);
}
else {
    load();
}
