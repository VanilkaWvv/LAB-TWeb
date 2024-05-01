import "./data.css";
import React, { useState, useEffect } from 'react';
import { getFromLocalStorage } from '../storage/LocalStorage';

interface User {
    username: string;
    password: string;
}

const UserInfo: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUsers = async () => {
            // Simulate a delay of 2 seconds
            await new Promise(resolve => setTimeout(resolve, 2000));

            const savedUsers = getFromLocalStorage('users');
            if (savedUsers) {
                setUsers(savedUsers);
            }
            setLoading(false);
        };

        loadUsers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {users.length > 0 ? (
                users.map((user, index) => (
                    <div key={index} className="data">
                        <p className="p1">User {index + 1}: {user.username}</p>
                        <p className="p2">Password: {user.password}</p>
                    </div>
                ))
            ) : (
                <p>No user data found.</p>
            )}
        </div>
    );
}

export default UserInfo;
