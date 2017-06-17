<template>
    <div class="join">
        <el-card>
            <div class="text-center">
                <el-row>
                    <div>
                        <h2>Choose a savings plan</h2>
                        <div class="text-center" style="display: inline-flex">
                            <div class="challenge-plan" @click="onPlanClicked(challenge_plan)"
                                 v-for="challenge_plan in orderBy(challenge_plans_arr, 'deposit')">
                                <img class="challenge-plan-icon" :src="challenge_plan.icon" width="100" height="100"/>
                                <div>{{ challenge_plan.title }}</div>
                            </div>
                        </div>
                    </div>
                </el-row>
            </div>
        </el-card>
        <challenge-description :challenge='challenge'></challenge-description>
    </div>
</template>


<script>

    import database from  '../../database';
    import ChallengeDescription from './ChallengeDescription.vue';


    export default{
        name: 'join',
        components: {
            challengeDescription: ChallengeDescription
        },
        data: function () {
            return {
                challenge_plans_arr: [],
                data: {},
                challenge: {}
            }
        },
        mounted(){
            let self = this;
            let refChallenges = database.getRef('challenges');
            refChallenges.on("child_added", function (snapshot) {
                self.data = {
                    'key': snapshot.key,
                    'deposit': snapshot.val().deposit,
                    'description': snapshot.val().description,
                    'icon': snapshot.val().icon,
                    'title': snapshot.val().title,
                    'total': snapshot.val().total,
                };

                self.challenge_plans_arr.push(self.data);
            });
        },
        methods: {
            onPlanClicked(challenge){
                this.challenge = challenge;
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

    img.challenge-plan-icon {

    }

</style>