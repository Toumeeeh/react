importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDLw2We7SH0x49Ic8a-pyD52tNMWRCTHnQ",
    authDomain: "myproject-bf96a.firebaseapp.com",
    databaseURL: "https://myproject-bf96a-default-rtdb.firebaseio.com",
    projectId: "myproject-bf96a",
    storageBucket: "myproject-bf96a.appspot.com",
    messagingSenderId: "1098383732124",
    appId: "1:1098383732124:web:74f72f0cbc9561ea4d6c59",
    measurementId: "G-Q6G16FBS0E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png' // You can customize the icon
    };

    // Show notification
    self.registration.showNotification(notificationTitle, notificationOptions);
});
