<template>
    <el-menu class="el-menu-vertical" theme="dark" router>
        <el-menu-item index="1" route="/dashboard"><i class="el-icon-menu"></i>Dashboard</el-menu-item>
        <el-menu-item index="2" route="/challenges/join"><i class="el-icon-setting"></i>Challenges</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>Invites</el-menu-item>
        <el-menu-item index="4"><i class="el-icon-setting"></i>Leader board</el-menu-item>
    </el-menu>
</template>
<script>

    export default{
        name:'side-navbar'
    }

</script>
<style>
    .el-menu-vertical{
        min-height: 650px;
    }
</style>