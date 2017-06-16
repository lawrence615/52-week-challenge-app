<template>

</template>
<script>

    import database from '../../database';

    export default{
        name: 'DepositCanvas',
        data(){
            return {
                challenge_id: this.$route.params.challenge_id
            }
        },
        mounted(){
//            console.log('>>> ' + this.challenge_id);
            console.log(this.$bindAsArray('classes', database.getRef(`user-challenges/${this.challenge_id}`)));
        }
    }

</script>