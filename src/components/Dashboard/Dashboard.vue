<template>
    <div>
        <h3 v-if="tableData.length > 0">{{ title }}</h3>
        <br/>

        <el-table v-if="tableData.length > 0" :data="tableData" stripe>
            <el-table-column prop="key" label="#" width="50"></el-table-column>
            <el-table-column prop="title" label="Title"></el-table-column>
            <el-table-column prop="increment" label="Deposit amount"></el-table-column>
            <el-table-column prop="start_date" label="Start date"></el-table-column>
            <el-table-column prop="end_date" label="End date"></el-table-column>
            <el-table-column label="Operations">
                <template scope="scope">
                    <el-button @click="challengeDetails" size="small">Details</el-button>
                    <el-button @click.native.prevent="challengeSave(tableData[scope.$index].key)" type="primary"
                               size="small">Save
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <empty-view v-else :empty_view_settings='empty_view_settings'></empty-view>
    </div>
</template>

<script>
    import auth from '../../auth';
    import database from '../../database';
    import EmptyView from '../Shared/Empty.vue';


    export default{
        components: {
            emptyView: EmptyView
        },
        data(){
            return {
                title: 'Your challenges',
                tableData: [],
                data: {},
                empty_view_settings: {
                    'title': 'No Challenges',
                    'message': 'You do not have any challenges yet. Join one by clicking the "Join a challenge" button below.',
                    'button_text': 'Join a challenge',
                    'action': 'new_page',
                    'route_name': 'challenges_join'
                }
            }
        },
        mounted(){
            const user = auth.getUser();
            if (user.uid) {
                let self = this;
                let refUserChallenges = database.getRef('user-challenges');

                refUserChallenges.orderByChild('user_id').equalTo(user.uid).on("child_added", function (snapshot) {

                    self.data = {
                        'key': snapshot.key,
                        'challenge_id': snapshot.val().challenge_id,
                        'title': snapshot.val().title,
                        'increment': snapshot.val().increment,
                        'start_date': snapshot.val().start_date,
                        'end_date': snapshot.val().end_date,
                    };

                    console.log(self.data);
                    self.tableData.push(self.data);
                });
            }

        },
        methods: {
            challengeDetails(){
                alert('Show savings');
            },
            challengeSave(key){
                this.$router.push({name: 'deposit', params: {challenge_id: key}})
            }
        }
    }
</script>