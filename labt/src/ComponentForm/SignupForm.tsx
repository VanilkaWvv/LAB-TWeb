import React, { useState } from 'react';
import './form.css';
import {saveToLocalStorage} from "../storage/LocalStorage";

interface SignupFormProps {
    switchToLogin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ switchToLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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

        saveToLocalStorage('user', { username, password });
    };

    return (
        <form className="myform" onSubmit={handleSubmit}>
            <h1>Create a new account</h1>
            <input type="text" className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="password" className="input" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <div className="log">
                <p className="paragraph">Already have an account?</p>
                <button type="button" className="button" onClick={switchToLogin}>Log in</button>
            </div>
            <button type="submit" className="submit">Submit</button>
        </form>
    );
}

export default SignupForm;
