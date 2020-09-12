let login = require('./components/login.vue').default;
let register = require('./components/register.vue').default;
let home = require('./components/Home.vue').default;

export const routes = [
	{path: '/', component: login, name: '/'},
	{path: '/register', component: register, name: 'register'},
	{path: '/home', component: home, name: 'home'}
]