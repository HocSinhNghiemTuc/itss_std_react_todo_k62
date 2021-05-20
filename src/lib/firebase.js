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
export const db = firebase.firestore().collection("todo");
// export const getFirebaseItems = async () => {
//     try {
//         const  = await db.get();
//         return snapshot.docs.map(
//             (doc) => ({...doc.data(), id: doc.id})
//         );
//     } catch (err) {
//         console.log(err);
//         return [];
//     }
// }