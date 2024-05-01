import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFromLocalStorage } from '../storage/LocalStorage';

interface LoginFormProps {
    switchToSignup: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ switchToSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const users = getFromLocalStorage('users');
        const user = users.find((user: any) => user.username === username && user.password === password);
        if (user) {
            setMessage('Autentificare reușită!');
            navigate('/login/account');
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
                <Link to="/signup">
                    <button type="button" className="button" onClick={switchToSignup}>Sign up</button>
                </Link>
            </div>
            <button type="submit" className="submit">Submit</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default LoginForm;
