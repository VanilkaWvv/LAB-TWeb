import React, { useState } from 'react';
interface LoginFormProps {
    switchToSignup: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ switchToSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Implement your login logic here
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
        </form>
    );
}

export default LoginForm;
