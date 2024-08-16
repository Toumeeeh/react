import React, { useEffect, useState } from 'react';
import { requestForToken, onMessageListener } from '../firebase'; // Ensure the path is correct

const FirebaseTokenHandler = () => {
    const [deviceToken, setDeviceToken] = useState('');
    const [tokenFound, setTokenFound] = useState(false);
    const [notification, setNotification] = useState(null); // For storing notifications

    useEffect(() => {
        // Fetch the FCM token and set up notification listeners
        const initializeFirebase = async () => {
            try {
                const token = await requestForToken(setTokenFound);
                if (token) {
                    setDeviceToken(token);
                }
            } catch (error) {
                console.error('Error initializing Firebase:', error);
            }
        };

        initializeFirebase();

        // Listen for foreground notifications
        onMessageListener()
            .then(payload => {
                console.log('Foreground notification received:', payload);
                setNotification(payload.notification);
            })
            .catch(err => console.error('Error receiving foreground notification:', err));

    }, []);

    return (
        <div>
            <h1>Firebase Push Notification Token</h1>
            <p>
                {tokenFound ? (
                    <span>Your device token is: <strong>{deviceToken}</strong></span>
                ) : (
                    <span>No token generated yet or permission denied.</span>
                )}
            </p>

            {/* Display the notification when received */}
            {notification && (
                <div style={{ marginTop: '20px' }}>
                    <h2>New Notification</h2>
                    <p><strong>Title:</strong> {notification.title}</p>
                    <p><strong>Body:</strong> {notification.body}</p>
                </div>
            )}
        </div>
    );
};

export default FirebaseTokenHandler;
