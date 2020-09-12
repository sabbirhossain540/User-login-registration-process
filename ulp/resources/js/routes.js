let login = require('./components/login.vue').default;
let register = require('./components/register.vue').default;

export const routes = [
	{path: '/', component: login, name: '/'},
	{path: '/register', component: register, name: 'register'}
]