import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from './logo1.png';

function Navbar() {
    return (
        <header>
            <div className="navbar">
                <img
                    src={logo1}
                    className="logo1"
                    alt="logo"
                />
                <div className="right-nav">
                    <Link to="/">Home</Link>
                    <Link to="/model">Model</Link> 
                </div>
            </div>
        </header>
    );
}

export default Navbar;
