import React, { useState } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import LoginForm from './ComponentForm/LoginForm';
import SignupForm from './ComponentForm/SignupForm';
import { MyComponent } from './storage/StoreProvider';
import HomePage from "./Home page/Home";
import AccountPage from "./Home page/HeaderContent";
import About from "./Home page/About";
const App: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const switchForm = () => setIsLogin(!isLogin);
    return (
        <MyComponent>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginForm switchToSignup={switchForm} />} />
                <Route path="/signup" element={<SignupForm/>} />
                <Route path="/" element={<HomePage/>} />
                <Route path="/login/account" element={<AccountPage />} />
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
        </MyComponent>
    );
}

export default App;
