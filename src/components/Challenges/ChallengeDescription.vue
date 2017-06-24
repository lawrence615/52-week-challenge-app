<template>
    <div class="challenge-description">
        <el-row v-if="showDescription">
            <p>{{ challenge.title }}
                <el-button class="pull-right" type="primary" size="medium" @click="joinChallenge(challenge)">Join
                </el-button>
            </p>
            <hr/>
            <p><strong>Description:</strong> {{ challenge.description }}</p>
            <p><strong>Deposit:</strong> {{ challenge.deposit | currency('Ksh. ') }}</p>
            <p><strong>Total:</strong> {{ challenge.total | currency('Ksh. ') }}</p>
            <p><strong>Start date:</strong>
                <el-date-picker @change="onStartDateChange" v-model="start_date" type="date"
                                placeholder="Pick start date"></el-date-picker>
            </p>
            <p><strong>End date:</strong>
                &nbsp;
                {{ endDate }}
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
        data: function () {
            return {
                showDescription: false,
                start_date: '',
                end_date: '',
                pickStartDate: {
                    shortcuts: [{
                        text: 'Today',
                        onClick(picker){
                            picker.$emit('pick', new Date())
                        }
                    }
                    ]
                },
                challenge_data: {}
            }
        },
        computed: {
            endDate(){
                if (this.end_date == null) {
                    return;
                }
                return moment(this.end_date).add(52, "weeks").format("YYYY-MM-D");
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
            joinChallenge(challenge){

                this.challenge_data = {
                    'challenge_id': challenge.key,
                    'start_date': moment(this.start_date).format("YYYY-MM-D"),
                    'end_date': this.endDate,
                    'increment': challenge.deposit,
                    'title': challenge.title,
                };

                this.$emit('challenge-joined', this.challenge_data);
            },
            onStartDateChange(date){
                if (date == null) {
                    return;
                }
                this.end_date = date;
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