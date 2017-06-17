<template>
    <div class="challenge-description">
        <el-row v-if="showDescription">
            <el-button class="pull-right" type="primary" size="medium">Join</el-button>
            <br/>
            <p><strong>Title:</strong> {{ challenge.title }}</p>
            <p><strong>Description:</strong> {{ challenge.description }}</p>
            <p><strong>Deposit:</strong> {{ challenge.deposit | currency('Ksh. ') }}</p>
            <p><strong>Total:</strong> {{ challenge.total | currency('Ksh. ') }}</p>
            <p><strong>Start date:</strong>
                <el-date-picker v-model="start_date" type="date" placeholder="Pick start date"></el-date-picker>
            </p>
            <p><strong>End date:</strong>
                &nbsp;
                <el-date-picker v-model="end_date" type="date" placeholder="Pick start date"></el-date-picker>
            </p>
        </el-row>
        <el-row v-else>
            <p class="text-center">
                Choose a plan by clicking any of the above.
            </p>
        </el-row>
    </div>
</template>

<script>


    export default{
        name: 'challenge-description',
        props: ['challenge'],
        computed: null,
        data: function () {
            return {
                showDescription: false,
                start_date: '',
                end_date: ''
            }
        },
        watch: {
            challenge: function (challenge) {
                if (Object.keys(challenge).length === 0) {
                    this.showDescription = false;
                    console.log(Object.keys(challenge).length);
                } else {
                    this.showDescription = true;
                    console.log(Object.keys(challenge).length);
                }
            }
        },
        methods: {
            joinChallenge(){

            }
        }
    }

</script>

<style>
    .challenge-description {
        margin-top: 20px;
        padding: 20px;
        border: 2px solid #cccccc;
        border-radius: 8px;
    }
</style>