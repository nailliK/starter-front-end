// force production for builds
// process.env.NODE_ENV = 'production';

// add <app> element
var app = document.createElement('app');
document.body.appendChild(app);
// add <router-view> element
var routerView = app.appendChild(document.createElement('router-view'));

// dependencies
const Vue = require('vue');
const VueRouter = require('vue-router');
const Vuex = require('vuex');

Vue.use(VueRouter);
Vue.use(Vuex);

// global variables
window.base__lineHeight = (60.75 / 2);

// global store
window.store = new Vuex.Store({
	state: {
		foo: 'bar'
	}
});

// components
const App = require('./components/app.vue');
const Home = require('./components/home.vue');
const Foo = require('./components/foo.vue');

// router
const routes = [
	{ path: '/', component: Home },
	{ path: '/foo', redirect: 'foo/0' },
	{ path: '/foo/:id', component: Foo },
];

const router = new VueRouter({
	routes: routes,
	mode: 'history'
})

new Vue({
	router: router,
	el: 'app',
	render: h => h(App)
});

// fade in our page
const classes = document.querySelector('body').className;
document.querySelector('body').className += (classes.length) ? ' body--loaded' : 'body--loaded';