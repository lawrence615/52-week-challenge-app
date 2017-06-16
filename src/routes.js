import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from './auth'
import Dashboard from './components/Dashboard/Dashboard.vue';
import DepositCanvas from './components/Deposits/DepositCanvas.vue';
import Join from './components/Challenges/Join.vue';


Vue.use(VueRouter);


const routes = [
    {path: '/'},
    {path: '/dashboard', name: 'dashboard', component: Dashboard},
    {path: '/deposit/:challenge_id', name: 'deposit', component: DepositCanvas},
    {path: '/challenges/join', name: 'challenges_join', component: Join},
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    auth.authUser().then(() => {
        next()
    })
});

export default router;
