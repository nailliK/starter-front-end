// force production for builds
// process.env.NODE_ENV = 'production';

// add CSS file
const link = document.createElement("link");
link.href = "/css/main.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen";
document.getElementsByTagName("head")[0].appendChild(link);
// add <app> element
const app = document.createElement('app');
document.body.appendChild(app);
// add <router-view> element
const routerView = app.appendChild(document.createElement('router-view'));

// dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Vuex);

// global store
window.store = new Vuex.Store({
	state: {
		foo: 'bar'
	}
});

// components
import App from './components/app.vue';
import Home from './components/home.vue';
import Foo from './components/foo.vue';

// router
const routes = [
	{ path: '/', component: Home },
	{ path: '/todos', component: Home },
	{ path: '/todos/:id', component: Foo },
];

const router = new VueRouter({
	routes: routes,
	mode: 'history'
})

new Vue({
	router,
	el: 'app',
	render: h => h(App)
});

// fade in our page
const classes = document.querySelector('body').className;
document.querySelector('body').className += (classes.length) ? ' body--loaded' : 'body--loaded';