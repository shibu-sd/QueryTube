import React from 'react'

function Description() {
    return (
        <div className="content">
            <div className="section1">
                <img
                    src="https://github.com/hammercait/fylo-dark-theme-landing-page/blob/master/images/illustration-intro.png?raw=true"
                    alt="people and folders"
                />
                <div className="mountain">
                    <div className="mountain-words">
                        <h1>
                            Talk to your creators.
                        </h1>
                        <h2>
                            QueryTube takes the link of any YouTube video and
                            prompts you to ask anything related to that and answers
                            the query within seconds.
                        </h2>
                        <button className="get-started">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="section2">
                <div className="features">
                    <div className="tile access">
                        <img
                            src="https://raw.githubusercontent.com/hammercait/fylo-dark-theme-landing-page/658fd0afb4462e6a7e94996ab981bb7d5b336997/images/icon-access-anywhere.svg"
                            alt="access icon"
                        />
                        <h3>Access your files, anywhere</h3>
                        <p>
                            The ability to use a smartphone, tablet, or computer to access
                            your account means your files follow you everywhere.
                        </p>
                    </div>
                    <div className="tile security">
                        <img
                            src="https://raw.githubusercontent.com/hammercait/fylo-dark-theme-landing-page/658fd0afb4462e6a7e94996ab981bb7d5b336997/images/icon-security.svg"
                            alt="security icon"
                        />
                        <h3>Security you can trust</h3>
                        <p>
                            2-factor authentication and user-controlled encryption are
                            just a couple of the security features we allow to help secure
                            your files.
                        </p>
                    </div>
                    <div className="tile real-time">
                        <img
                            src="https://raw.githubusercontent.com/hammercait/fylo-dark-theme-landing-page/658fd0afb4462e6a7e94996ab981bb7d5b336997/images/icon-collaboration.svg"
                            alt="clock icon"
                        />
                        <h3>Real-time collaboration</h3>
                        <p>
                            Securely share files and folders with friends, family, and
                            colleagues for live collaboration. No email attachments
                            required.
                        </p>
                    </div>
                    <div className="tile storage">
                        <img
                            src="https://raw.githubusercontent.com/hammercait/fylo-dark-theme-landing-page/658fd0afb4462e6a7e94996ab981bb7d5b336997/images/icon-any-file.svg"
                            alt="storage icon"
                        />
                        <h3>Store any type of file</h3>
                        <p>
                            Whether you're sharing holidays, photos, or work documents,
                            Fylo as you covered, allowing for all file types to be securely
                            stored and shared.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description