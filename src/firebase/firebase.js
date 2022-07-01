import {getFirestore} from "@firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEO6jPij8ZxXD2T-oRYpy0r7-VJ9Ej72w",
    authDomain: "request-app01.firebaseapp.com",
    projectId: "request-app01",
    storageBucket: "request-app01.appspot.com",
    messagingSenderId: "250036911840",
    appId: "1:250036911840:web:e85cee9e11dcd6aaa8da85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);