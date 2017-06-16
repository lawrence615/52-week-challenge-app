import firebase from 'firebase';
import firebaseUiAuthCss from 'firebaseui/dist/firebaseui.css';
import firebaseui from 'firebaseui';


const user = {
    displayName: '',
    email: '',
    emailVerified: false,
    photoURL: '',
    uid: ''
};

const getUser = () => {
    return user;
};

const authUser = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((theUser) => {
            checkUser(theUser);
            resolve(theUser);
        }, (error) => {
            console.log(error);
        })
    })
};

const logout = () => {
    firebase.auth().signOut().then(() => {
        // sign-out successfully
        window.location.reload();
    }, (error) => {
        console.log(error);
        window.location.reload();
    })
};


const checkUser = (theUser) => {
    if (theUser) {
        user.displayName = theUser.displayName;
        user.email = theUser.email;
        user.emailVerified = theUser.emailVerified;
        user.photoURL = theUser.photoURL;
        user.uid = theUser.uid;
    } else {
        user.displayName = '';
        user.email = '';
        user.emailVerified = false;
        user.photoURL = '';
        user.uid = '';
        initAuthUI()
    }
};


const initAuthUI = () => {
    const uiConfig = {
        signInSuccessUrl: '/dashboard',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '/'
    };

    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig)
};

export default {getUser, logout, authUser}


