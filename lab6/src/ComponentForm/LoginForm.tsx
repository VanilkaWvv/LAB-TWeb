import React, { useState } from 'react';
import { getFromLocalStorage } from '../storage/LocalStorage';

interface LoginFormProps {
    switchToSignup: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ switchToSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const users = getFromLocalStorage('users');
        const user = users.find((user: any) => user.username === username && user.password === password);
        if (user) {
            setMessage('Autentificare reușită!');
        } else {
            setMessage('Nume de utilizator sau parolă incorectă!');
        }
    };

    return (
        <form className="myform" onSubmit={handleSubmit}>
            <h1>Log in</h1>
            <input type="text" className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="log">
                <p className="paragraph">Don't have an account?</p>
                <button type="button" className="button" onClick={switchToSignup}>Sign up</button>
            </div>
            <button type="submit" className="submit">Submit</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default LoginForm;
