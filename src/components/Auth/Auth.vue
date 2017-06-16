<template>
    <div>
        <h4 style="text-align: center;">Welcome to 52 Week Challenge</h4>
        <p style="text-align: center;">Save without hustle...</p>
        <div id="firebaseui-auth-container"></div>
    </div>
</template>
<script>

    import Firebase from 'firebase';
    import firebaseui from 'firebaseui';

    export default{
        name: 'auth',
        mounted(){
            var uiConfig = {
                signInSuccessUrl: '/dashboard',
                signInOptions: [
                    Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    Firebase.auth.EmailAuthProvider.PROVIDER_ID
                ]
            };

            var ui = new firebaseui.auth.AuthUI(Firebase.auth());
            ui.start('#firebaseui-auth-container', uiConfig)
        }
    }
</script>
<style>

</style>