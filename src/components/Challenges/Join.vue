<template>
    <el-card>
        <div class="text-center">
            <el-row>
                <div>
                    <h2>Choose a savings plan</h2>
                    <div class="text-center" style="display: inline-flex">
                        <div class="challenge-plan" @click="onPlanClicked(25)" v-for="challenge_plan in challenge_plans_arr">
                            <img :src="challenge_plan.icon" width="100" height="100"/>
                            <div>{{ challenge_plan.title }}</div>
                        </div>
                    </div>
                </div>
            </el-row>
        </div>
    </el-card>
</template>
<script>

    import database from  '../../database';

//    let refChallenges = database.getRef('challenges');

    export default{
        name: 'join',
        data: function () {
            return {
                challenge_plans_arr: [],
                data: {}
            }
        },
        mounted(){
            let self = this;
//            refChallenges.on("child_added", function (snapshot) {
//                self.data = {
//                    'key': snapshot.key,
//                    'deposit': snapshot.val().deposit,
//                    'description': snapshot.val().description,
//                    'icon': snapshot.val().icon,
//                    'title': snapshot.val().title,
//                    'total': snapshot.val().total,
//                };
//
//                self.challenge_plans_arr.push(self.data);
//            });
        },
        methods: {
            onPlanClicked(id){
                alert(id);
            }
        }
    }
</script>
<style>

    .challenge-plan {
        padding: 20px;
        cursor: pointer;
    }

    .challenge-plan div {
        margin-top: 10px;
        max-width: 200px;
        font-weight: 400;
    }

</style>