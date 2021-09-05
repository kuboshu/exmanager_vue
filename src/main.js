import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import TopPage from './components/TopPage.vue'
import LoginPage from './components/LoginPage.vue'
import UserRegPage from './components/UserRegPage.vue'
import Result from './components/SearchResult.vue'
import View from './components/View.vue'
import UserTopPage from './components/UserTopPage.vue'
import ManageArticle from './components/ManageArticle.vue'
import ManageGroup from './components/ManageGroup.vue'
import ManageAccount from './components/ManageAccount.vue'
import EditArticle from './components/EditArticle.vue'
import NewArticle from './components/NewArticle.vue'
import DraftTop from './components/DraftTop.vue'
import ConfirmPublish from './components/ConfirmPublish.vue'
import './assets/tailwind.css'

const routes = [
    {path: '/', component: TopPage},
    {path: '/login', component: LoginPage},
    {path: '/reg', component: UserRegPage},
    {path: '/result', component: Result},
    {path: '/view', component: View},
    {path: '/usertop', component: UserTopPage},
    {path: '/manage_article', component: ManageArticle},
    {path: '/manage_group', component: ManageGroup},
    {path: '/manage_account', component: ManageAccount},
    {path: '/edit_article', component: EditArticle},
    {path: '/newarticle', component: NewArticle},
    {path: '/drafttop', component: DraftTop},
    {path: '/confirmpublish', component: ConfirmPublish},
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
