import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import TopPage from './components/TopPage.vue'
import Login from './components/Login.vue'
import UserReg from './components/UserReg.vue'

const routes = [
    {path: '/', component: TopPage},
    {path: '/login', component: Login},
    {path: '/reg', component: UserReg},
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
