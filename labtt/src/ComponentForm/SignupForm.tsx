import React, { useState } from 'react';
import './form.css';
import { getFromLocalStorage, saveToLocalStorage } from '../storage/LocalStorage';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!username || !password || !confirmPassword) {
            alert('Toate câmpurile sunt obligatorii!');
            return;
        }

        if (password !== confirmPassword) {
            alert('Parola și confirmarea parolei nu coincid!');
            return;
        }

        const users = getFromLocalStorage('users') || [];
        const userExists = users.some((user: any) => user.username === username);

        if (userExists) {
            alert('Utilizatorul există deja!');
            return;
        }

        const newUser = { username, password };
        users.push(newUser);
        saveToLocalStorage('users', users);

        alert('Înregistrare reușită!');
        navigate('/login');
    };

    return (
        <form className="myform" onSubmit={handleSubmit}>
            <h1>Create a new account</h1>
            <input type="text" className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="password" className="input" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <div className="log">
                <p className="paragraph">Already have an account?</p>
                <Link to="/login">
                    <button type="button" className="button">Log in</button>
                </Link>
            </div>
            <button type="submit" className="submit">Submit</button>
        </form>
    );
}

export default SignupForm;
