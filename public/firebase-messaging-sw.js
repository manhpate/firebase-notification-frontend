// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBeAayBKm4QqRvrS6g3PNH98xB5TQSacgs",
    authDomain: "app-pate.firebaseapp.com",
    databaseURL: "https://app-pate-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "app-pate",
    storageBucket: "app-pate.firebasestorage.app",
    messagingSenderId: "1001728301885",
    appId: "1:1001728301885:web:40cf112170826723e34354",
    measurementId: "G-B7L665BR5K"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'logo512.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
