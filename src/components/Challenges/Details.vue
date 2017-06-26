<template>
    <div>
        <h4>{{ challengeDetails.title }}</h4>
        <hr>
        <deposit :savings_template='savingWeeks'></deposit>
    </div>
</template>

<script>

    import database from '../../database';
    import Deposit from './Deposit.vue';


    export default{
        components: {
            deposit: Deposit
        },
        data(){
            return {
                challenge_id: 0,
                challengeDetails: {},
                savingWeeks: [],
                checked: false
            }
        },

        mounted(){
            this.challenge_id = this.$route.params.challenge_id;

            this.fetchChallengeDetails(this.challenge_id);

        },
        methods: {
            fetchChallengeDetails(challenge_id){
                if (challenge_id === 0) {
                    return;
                }

                let self = this;

                database.getRef('user-challenges/' + challenge_id).on('value', function (snapshot) {
                    self.challengeDetails = snapshot.val();
                });

                this.showSavingsSheet();
            },

            showSavingsSheet(){
                let week_counter = 1;
                let start_date = moment(this.challengeDetails.start_date);
                let end_date = moment(this.challengeDetails.end_date);
                let initial_deposit_amount = 0;
                let total_deposited_amount = 0;

                while (end_date > start_date) {
                    this.savingWeeks.push({
                        'week_counter': week_counter++,
//                        'start': start_date.format("YYYY-MM-D"),
                        'start': start_date.format("D-MM-YY"),
//                        'end': start_date.add(1, 'week').format("YYYY-MM-D"),
                        'end': start_date.add(1, 'week').format("D-MM-YY"),
                        'deposit': initial_deposit_amount += this.challengeDetails.increment,
                        'total_deposited_amount': total_deposited_amount += initial_deposit_amount
                    });
                }
            }
        }

    }
</script>