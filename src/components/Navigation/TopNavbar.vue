<template>
    <el-menu router theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item class="white" index="0">#52 Week Challenge</el-menu-item>
        <el-menu-item index="1" route="/dashboard">Dashboard</el-menu-item>
        <el-submenu index="2" class="pull-right">
            <template slot="title">
                <img class="user-image" :src="user.photoURL"/>
                {{ user.displayName}}
            </template>
            <el-menu-item index="2-1">Profile</el-menu-item>
            <el-menu-item index="2-2">Logout</el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script>

    export default{
        components: {},
        props: ['user'],
        name: 'top-navbar',
        data(){
            return {
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        watch: {
            user: function (value) {
                this.user = value;
            }
        },
        mounted(){
            console.log('display_name changed to ' + this.user.photoURL);
        },
        methods: {
            handleSelect(key, keyPath) {
                if (key === '2-1') {
                    alert('show profile');
                } else if (key === '2-2') {
                    this.$emit('onLogout')
                }
            }
        }
    }
</script>
<style>
    .white, .white:hover {
        color: #FAFAFA;
    }

    .user-image {
        float: left;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 10px;
        margin-top: 20px;
    }

    .pull-right{
        float: right !important
    }
</style>