// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBeAayBKm4QqRvrS6g3PNH98xB5TQSacgs",
    authDomain: "app-pate.firebaseapp.com",
    databaseURL: "https://app-pate-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "app-pate",
    storageBucket: "app-pate.firebasestorage.app",
    messagingSenderId: "1001728301885",
    appId: "1:1001728301885:web:40cf112170826723e34354",
    measurementId: "G-B7L665BR5K"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };