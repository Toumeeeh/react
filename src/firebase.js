import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

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
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request for Token
export const requestForToken = async (setTokenFound) => {
    try {
        const currentToken = await getToken(messaging, { vapidKey: "BIl3UvgeWF7a4e-DuyUrKcW_r72YHHL2xugXflkZ8Y2XNX6KHKe3lwpW_9pye8qrTe--2rgDdUC5Rtl1YxIc17g" });
        if (currentToken) {
            setTokenFound(true);
            console.log("Current token for client: ", currentToken);
            return currentToken; // Returning the token
        } else {
            console.log("No registration token available. Request permission to generate one.");
            setTokenFound(false);
        }
    } catch (err) {
        console.log("An error occurred while retrieving token: ", err);
    }
};

// Listen for messages when the app is in the foreground
export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log("Message received in foreground: ", payload);
            resolve(payload);
        });
    });
