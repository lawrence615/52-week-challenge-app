<template>
    <div class="join">
        <el-card>
            <div class="text-center">
                <el-row>
                    <div>
                        <h2>Choose a savings plan</h2>
                        <div class="text-center" style="display: inline-flex">
                            <div class="challenge-plan" :class="{ active:isActive(challenge.deposit)}"
                                 @click="onPlanClicked(challenge_plan)"
                                 v-for="challenge_plan in orderBy(challenge_plans_arr, 'deposit')">
                                <img class="challenge-plan-icon" :src="challenge_plan.icon" width="100" height="100"/>
                                <div>{{ challenge_plan.title }}</div>
                            </div>
                        </div>
                    </div>
                </el-row>
            </div>
        </el-card>
        <challenge-description @challenge-joined="onChallengeJoined" :challenge='challenge'></challenge-description>
    </div>
</template>


<script>

    import database from  '../../database';
    import auth from  '../../auth';
    import ChallengeDescription from './ChallengeDescription.vue';


    const user = auth.getUser();


    export default{
        name: 'join',
        components: {
            challengeDescription: ChallengeDescription
        },
        data: function () {
            return {
                challenge_plans_arr: [],
                data: {},
                challenge: {},
//                isActive: false,
                activePlan: 0,
                user
            }
        },
        mounted(){
            let self = this;

            database.getRef('challenges').on("child_added", function (snapshot) {
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
                this.activePlan = challenge.deposit;
                this.challenge = challenge;
            },
            isActive(deposit){
                if (this.activePlan === 0) {
                    console.log('No plan selected');
                    return;
                }
                console.log(deposit);
                if (deposit === this.activePlan) {
                    return true;
                }

                return '';
            },
            onChallengeJoined(value){
                database.getRef('user-challenges').push({
                    'challenge_id': value.challenge_id,
                    'end_date': value.end_date,
                    'increment': value.increment,
                    'start_date': value.start_date,
                    'title': value.title,
                    'user_id': user.uid
                });
                this.$router.push({name: 'dashboard'})
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