import React, { useState } from 'react';
import './UserCard.css';  // Ensure the file exists in the correct path

const UserCard = ({ name, email, wallet, user_type, avatar, handleDelete, children }) => {
    const [showAddMoney, setShowAddMoney] = useState(false);

    const handleToggle = () => {
        setShowAddMoney(!showAddMoney);
    };

    return (
        <div className="user-card card">
            <img src={avatar} alt={`${name}'s avatar`} className="user-avatar card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Email: {email}</p>
                <p className="card-text">Wallet: ${wallet}</p>
                <p className="card-text">Type: {user_type}</p>

                <div className='btn-container d-flex justify-content-center mb-2'>
                    <button
                        className='add-money-btn'
                        onClick={handleToggle}
                    >
                        {showAddMoney ? 'Hide Add Money' : 'Add Money'}
                    </button>

                    <button
                        className='btn-delete'
                        onClick={handleDelete}
                    >
                        Delete User
                    </button>
                </div>

                {/* Conditionally render the Add Money form */}
                {showAddMoney && (
                    <div className="mt-3">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserCard;
