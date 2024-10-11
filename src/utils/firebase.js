
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQdsXRXJzCzOXqfZrAY52sntAt6THYIks",
    authDomain: "postapplication-48f9e.firebaseapp.com",
    databaseURL: "https://postapplication-48f9e-default-rtdb.firebaseio.com",
    projectId: "postapplication-48f9e",
    storageBucket: "postapplication-48f9e.appspot.com",
    messagingSenderId: "713453488133",
    appId: "1:713453488133:web:23018a5714535e773e346c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
