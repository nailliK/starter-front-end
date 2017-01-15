// force production for builds
// process.env.NODE_ENV = 'production';

// add CSS file
var link = document.createElement("link");
link.href = "/css/main.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen";
document.getElementsByTagName("head")[0].appendChild(link);
// add <app> element
var app = document.createElement('wrapper');
document.body.appendChild(app);

// components
const App = require('./components/app.jsx');

// fade in our page
const classes = document.querySelector('body').className;
document.querySelector('body').className += (classes.length) ? ' body--loaded' : 'body--loaded';