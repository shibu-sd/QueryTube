import React from 'react';
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
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar