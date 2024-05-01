import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import userStore from '../storage/modifyData';
import "./change.css"
const UpdateUsername: React.FC = observer(() => {
    const [username, setUsername] = useState('');

    const handleUpdate = () => {
        const newUser = { ...userStore.user, username };
        userStore.setUser(newUser);
    };
    return (
        <div>
            <input type="text" className="inputt" value={username} onChange={(e) => setUsername(e.target.value)} />
    <button className="button1" onClick={handleUpdate}>Update Username</button>
    </div>
);
});

export default UpdateUsername;
