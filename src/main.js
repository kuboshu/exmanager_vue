import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import TopPage from './components/TopPage.vue'
import Login from './components/Login.vue'
import UserReg from './components/UserReg.vue'
import Result from './components/SearchResult.vue'
import View from './components/View.vue'
import UserTop from './components/UserTop.vue'
import ManageArticle from './components/ManageArticle.vue'
import ManageGroup from './components/ManageGroup.vue'
import ManageAccount from './components/ManageAccount.vue'

const routes = [
    {path: '/', component: TopPage},
    {path: '/login', component: Login},
    {path: '/reg', component: UserReg},
    {path: '/result', component: Result},
    {path: '/view', component: View},
    {path: '/usertop', component: UserTop},
    {path: '/manage_article', component: ManageArticle},
    {path: '/manage_group', component: ManageGroup},
    {path: '/manage_account', component: ManageAccount},
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
