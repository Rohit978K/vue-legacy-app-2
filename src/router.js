import Vue from "vue";
import Router from "vue-router";
import Home from './components/HomePage.vue'
import Cards from './components/CardsPage.vue'
import Settings from './components/SettingsPage.vue'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cards',
            name: 'cards',
            component: Cards
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
        }
    ]
});

export default router;