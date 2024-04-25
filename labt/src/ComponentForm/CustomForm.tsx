import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
const MyForm = () => {
    const [isLogin, setIsLogin] = useState(false);

    return isLogin ? <LoginForm switchToSignup={() => setIsLogin(false)} /> : <SignupForm switchToLogin={() => setIsLogin(true)} />;
}

export default MyForm;
