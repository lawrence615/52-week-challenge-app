<template>
    <div id="app">
        <div v-show="user.uid">
            <top-navbar :user='user' @onLogout="onLogout"></top-navbar>
            <el-row id="app-row" :gutter="20">
                <el-col :span="4">
                    <side-navbar id="side-navbar"></side-navbar>
                </el-col>
                <el-col class="app-content" :span="19">
                    <router-view></router-view>
                </el-col>
            </el-row>
        </div>
        <div id="not_authenticated" style="text-align: center;" v-show="!user.uid">
            <h4>Welcome to 52 Week Challenge</h4>
            <h6>Saving without hustle...</h6>
            <br>
            <br>
            <p>To get started, Sign in using on of the options below;</p>
            <div id="firebaseui-auth-container"></div>
        </div>
    </div>
</template>

<script>

    import auth from './auth';

    import TopNavbar from './components/Navigation/TopNavbar.vue';
    import SideNavbar from './components/Navigation/SideNavbar.vue';


    const user = auth.getUser();

    export default {
        name: 'app',
        components: {
            topNavbar: TopNavbar,
            sideNavbar: SideNavbar
        },
        data () {
            return {
                authenticated: false,
                user
            }
        },
        mounted(){


        },
        methods: {
            onLogout(){
                auth.logout();
            }
        }
    }
</script>

<style>

    #not_authenticated {
        margin-top: 40px;
    }

    .app-content {
        margin-top: 40px;
    }

    #app-row {
        height: 100%;
    }

</style>
