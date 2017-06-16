<template>
    <el-row>
        <!--<el-col :span="15">-->
        <el-card style="padding: 60px">
            <div class="text-center">
                <h3>{{ empty_view_settings.title }} </h3>
                <p>{{ empty_view_settings.message}} </p>
                <el-button @click="joinChallenge(empty_view_settings.route_name)" type="primary" size="large">
                    {{ empty_view_settings.button_text }}
                </el-button>
            </div>
        </el-card>
        <!--</el-col>-->
    </el-row>
</template>

<script>
    export default{
        name: 'empty-view',
        props: ['empty_view_settings'],
        methods: {
            joinChallenge(route_name){
                this.$router.push({name: route_name})
            }
        }
    }
</script>