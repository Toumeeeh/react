import React, { useEffect, useState } from 'react';
import NavBar from "../../components/NavBar/NavBar.jsx";
import UserCard from "../../components/UserCard/UserCard.jsx";
import AddMoneyForm from "../../components/AddMoney/AddMoney.jsx";
import "./AddMoney.css";
import axios from "axios";

const AddMoney = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api/user/getAllUser')
            .then(response => {
                setUsers(response.data.data); // Access the data correctly
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                if (error.message === 'Network Error') {
                    setMessage('Network error: Unable to reach the server. Please check your connection.');
                } else if (error.response) {
                    setMessage(`Error: ${error.response.status} - ${error.response.statusText}`);
                } else {
                    setMessage('An unexpected error occurred.');
                }
            });
    }, []);
    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8080/api/user/delete/${id}`)
            .then(() => {
                setUsers(users.filter(user => user.id !== id));
                setMessage('User deleted successfully.');
            })
            .catch(error => {
                console.error('Error deleting user:', error);
                setMessage('Error deleting user.');
            });
    };

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <div className='containerr '>
                <div className='text '>Add Money to Wallet </div>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}

                {/* Cards Row */}
                <div className="row">
                    {users.map(user => (
                        <div className="col-md-6 mb-4" key={user.id}>
                            <UserCard
                                name={user.name}
                                email={user.email}
                                wallet={user.wallet}
                                user_type={user.user_type}
                                avatar={`http://127.0.0.1:8080/${user.avatar}`}  // Ensure the full path is used
                                handleDelete={() => handleDelete(user.id)}
                            >
                                <AddMoneyForm
                                    userId={user.id}
                                    wallet={user.wallet}
                                    setMessage={setMessage}
                                    setUsers={setUsers}
                                    users={users}
                                />
                            </UserCard>
                        </div>
                    ))}
                </div>

                {message && (
                    <div className='mt-3 alert alert-info'>
                        {message}
                    </div>
                )}
            </div>
        </>
    );
};

export default AddMoney;