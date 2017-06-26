import Vue from 'vue';
import Vue2Filters from 'vue2-filters';
import App from './App.vue'
import router from './routes';
import firebase from 'firebase';
import VueFire from 'vuefire';
import database from './database'
import {firebaseConfig} from './firebase-conf';
import {
    Dropdown,
    Menu,
    MenuItem,
    Submenu,
    Card,
    Table,
    TableColumn,
    Button,
    Row,
    Col,
    CheckboxGroup,
    Checkbox,
    DatePicker,
    Icon
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

window.moment = require('moment');


Vue.use(Vue2Filters);
Vue.use(VueFire);


// configure language
locale.use(lang);

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
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
Vue.use(DatePicker);
Vue.use(Icon);


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
