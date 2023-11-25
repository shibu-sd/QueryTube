import React from 'react'

function Navbar() {
    return (
        <header>
            <div className="navbar">
                <img
                    src="https://raw.githubusercontent.com/hammercait/fylo-dark-theme-landing-page/658fd0afb4462e6a7e94996ab981bb7d5b336997/images/logo.svg"
                    className="logo"
                    alt="logo"
                />
                <div className="right-nav">
                    <a href="#">Features</a>
                    <a href="#">Team</a>
                    <a href="#">Sign In</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar