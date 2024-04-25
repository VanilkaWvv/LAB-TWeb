import "./data.css"
import React, { useState, useEffect } from 'react';
import { getFromLocalStorage } from '../storage/LocalStorage';

interface User {
    username: string;
    password: string;
}

const UserInfo: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            // Simulate a delay of 2 seconds
            await new Promise(resolve => setTimeout(resolve, 2000));

            const savedUser = getFromLocalStorage('user');
            if (savedUser) {
                setUser(savedUser);
            }
            setLoading(false);
        };

        loadUser();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {user ? (
                <div className="data">
                    <p className="p1">User: {user.username}</p>
                    <p className="p2">Password: {user.password}</p>
                    <br/>
                </div>
            ) : (
                <p>No user data found.</p>
            )}
        </div>
    );
}

export default UserInfo;
