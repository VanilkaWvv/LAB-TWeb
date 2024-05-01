import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
const HomePage: React.FC = () => {
    return (
        <div className="home">
            <div>
            <Link to="/login">
                <button className="buttoncustom">Log In</button>
            </Link>
            <Link to="/about">
                <button className="buttoncustom">About</button>
            </Link>
            </div>
            <h1>Pagina de Acasă</h1>
        </div>
    );
};

export default HomePage;
