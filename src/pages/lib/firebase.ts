import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqzerrrd3MgqcE2P0q6dSfbbZBuQIoIhw",
    authDomain: "phonepilot-74b95.firebaseapp.com",
    projectId: "phonepilot-74b95",
    storageBucket: "phonepilot-74b95.appspot.com",
    messagingSenderId: "748726693596",
    appId: "1:748726693596:web:8bb9bf1a7942a083294e19",
    measurementId: "G-4G9VJZG2VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
