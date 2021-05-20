import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAEQNDj1NQbNb4IuiG_f40ygcIvK-bN6n0",
    authDomain: "fir-sample-c9cbe.firebaseapp.com",
    projectId: "fir-sample-c9cbe",
    storageBucket: "fir-sample-c9cbe.appspot.com",
    messagingSenderId: "1021745884540",
    appId: "1:1021745884540:web:aabae27c71ce2d423c48f9"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export const db_todo = firebase.firestore().collection("todo");
export const db_user = firebase.firestore().collection("user");
export const storageImage = firebase.storage().ref();

export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
};
export const saveImage = (url) => {

};