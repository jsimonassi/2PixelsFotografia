import firebase from 'firebase/app';
import 'firebase/firestore';

export function loadFirebase() {
    console.log("Loading firebase");
    try{
        var firebaseConfig = {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            projectId: process.env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID,
            measurementId: process.env.FIREBASE_MEASUREMENT_ID
        };
        firebase.initializeApp(firebaseConfig);
        //firebase.analytics();
    }catch(error){
        console.log("error", error);
    }
    return firebase;
}
