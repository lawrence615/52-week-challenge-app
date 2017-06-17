import Vue from 'vue';
import Vue2Filters from 'vue2-filters';
import App from './App.vue'
import router from './routes';
import firebase from 'firebase';
import VueFire from 'vuefire';
import database from './database'
import {firebaseConfig} from './firebase-conf';
import {Dropdown, Menu, MenuItem, Submenu, Card, Table, TableColumn, Button, Row, Col, Checkbox} from 'element-ui';


Vue.use(Vue2Filters);
Vue.use(VueFire);


// ElementUI Components
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Checkbox);


const initApp = () => {
    firebase.initializeApp(firebaseConfig);
    database.init();
};


initApp();

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App},
    data: {
        // authenticated: false
    },
    mounted(){
        console.log('Hello')
    }

});
