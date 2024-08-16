import './user.css';
import UserCard from '../UserCard/UserCard';  // Import the UserCard component
import { useState, useEffect } from 'react';
import axios from 'axios';

// This component will now manage user data
const Users = () => {
    const [userData, setUserData] = useState([
        // Sample user data for initial state (if needed)
        // {
        //     id: 1,
        //     name: "John Doe",
        //     email: "johndoe@example.com",
        //     wallet: 100,
        //     userType: "Premium",
        // },
        // {
        //     id: 2,
        //     name: "Jane Smith",
        //     email: "janesmith@example.com",
        //     wallet: 50,
        //     userType: "Basic",
        // },
    ]);

    useEffect(() => {
        // Fetch user data from the API
        axios.get("https://a24b-149-34-244-155.ngrok-free.app /api/user/getAllUser")
            .then((res) => {
                setUserData(res.data);
            })
            .catch((err) => {
                console.error("Error fetching user data:", err);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`https://b4ab-185-107-56-71.ngrok-free.app/api/user/delete/${id}`)
            .then(() => {
                // Remove the user from the state after successful deletion
                setUserData(userData.filter(user => user.id !== id));
            })
            .catch((err) => {
                console.error("Error deleting user:", err);
            });
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className='explore'>Explore Users</div>
            </div>
            <div style={{ height: '65vh', overflow: 'scroll' }} className='mt-3 d-flex flex-wrap justify-content-center'>
                {userData.map((user) => (
                    <UserCard
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        wallet={user.wallet}
                        user_type={user.user_type}
                        avatar={user.avatar}
                        handleDelete={() => handleDelete(user.id)}
                    />
                ))}
            </div>
        </>
    );
};

export default Users;
