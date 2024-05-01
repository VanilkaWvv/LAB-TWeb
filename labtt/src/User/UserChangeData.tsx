import React, { useState } from 'react';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import "./change.css"
import { MobXProviderContext } from 'mobx-react';
import { getFromLocalStorage, saveToLocalStorage } from '../storage/LocalStorage';
const UpdateUsername: React.FC = observer(() => {
    const { UserStore } = useContext(MobXProviderContext);
    const [targetUser, setTargetUser] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [deleteUser, setDeleteUser] = useState('');
    const handleUpdate = () => {
        const users = getFromLocalStorage('users') || [];
        const targetIndex = users.findIndex((user: any) => user.username === targetUser);
        if (targetIndex !== -1) {
            const newUser = { ...users[targetIndex] };
            if (username) newUser.username = username;
            if (password) newUser.password = password;
            users[targetIndex] = newUser;
            saveToLocalStorage('users', users);
            alert('Utilizatorul a fost actualizat!');
        } else {
            alert('Utilizatorul nu a fost găsit!');
        }
    };
    const handleDelete = () => {
        const users = getFromLocalStorage('users') || [];
        const updatedUsers = users.filter((user: any) => user.username !== deleteUser);
        saveToLocalStorage('users', updatedUsers);
        setDeleteUser('');
        alert('Utilizatorul a fost șters!');
    };
    return (
        <div className="user">
            <h1>User information update</h1>
            <input type="text" className="inputt" value={targetUser} onChange={(e) => setTargetUser(e.target.value)} placeholder="Enter username to update"/>
            <input type="text" className="inputt" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter new username"/>
            <input type="password" className="inputt" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password"/>
            <button className="button1" onClick={handleUpdate}>Update Username</button>
            <h1>User delete</h1>
            <input type="text" className="inputt" value={deleteUser} onChange={(e) => setDeleteUser(e.target.value)} placeholder="Enter username to delete"/>
            <button className="button1" onClick={handleDelete}>Delete User</button>
        </div>
    );
});

export default UpdateUsername;
