import React, { useState } from 'react';
import axios from 'axios';

const AddMoney = ({ userId, wallet, setMessage, setUsers, users }) => {
    const [amount, setAmount] = useState('');

    const handleChange = (e) => setAmount(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the input amount
        if (!amount || isNaN(amount) || amount < 0) {
            setMessage("Please enter a valid amount.");
            return;
        }

        const newBalance = parseFloat(amount);

        // Prepare the request payload (body) including userId and the new balance
        const requestData = {
            userId,  // Pass the userId in the body
            wallet: newBalance
        };

        // Send the POST request with the payload (request body)
        axios.post(`http://127.0.0.1:8080/api/user/addMoney`,
            {
                userId,
                amount: newBalance  // Change wallet to amount
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

            .then(() => {
                if (Array.isArray(users)) {
                    // Update the user data locally
                    setUsers(users.map(user =>
                        user.id === userId
                            ? { ...user, wallet: newBalance }
                            : user
                    ));
                    setMessage(`Successfully added $${amount} to the wallet!`);
                    setAmount(''); // Clear the input field
                } else {
                    setMessage('Error: User data is not in the expected format.');
                }
            })
            .catch(error => {
                console.error('Error updating wallet balance:', error);
                setMessage('Error updating wallet balance.');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 d-flex flex-column align-items-center">
            <div className="amount-input-container mb-3">
                <label htmlFor={`amount-${userId}`} className="form-label">Enter Amount:</label>
                <input
                    className="form-control amount-input"
                    type="number"
                    id={`amount-${userId}`}
                    value={amount}
                    onChange={handleChange}
                    placeholder="Enter amount to add"
                />
            </div>
            <button type="submit" className="add-money-btn">Add Money</button>
        </form>
    );
};

export default AddMoney;
