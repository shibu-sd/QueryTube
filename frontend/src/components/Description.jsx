import React from 'react'
import icon1 from './icons/icon1.png'
import icon2 from './icons/icon2.png'
import icon3 from './icons/icon3.png'
import icon4 from './icons/icon4.png'

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
                            src={icon1}
                            alt="tick icon"
                        />
                        <h3>Works with any video</h3>
                        <p>
                            The ability to use QueryTube on literally any
                            YouTube video and get the answer.
                        </p>
                    </div>
                    <div className="tile security">
                        <img
                            src={icon2}
                            alt="fast icon"
                        />
                        <h3>Lightning Fast</h3>
                        <p>
                            Just enter your video link and query and get
                            the result within a few seconds.
                        </p>
                    </div>
                    <div className="tile real-time">
                        <img
                            src={icon3}
                            alt="optimized icon"
                        />
                        <h3>Optimized ML Algorithm</h3>
                        <p>
                            The backend algorithm is optimized frequently to
                            enhance user experience and give the most efficient
                            results.
                        </p>
                    </div>
                    <div className="tile storage">
                        <img
                            src={icon4}
                            alt="extension icon"
                        />
                        <h3>Now available as Extension</h3>
                        <p>
                            QueryTube is also available as an extension which takes
                            the user experience to even next-level and get the desired
                            results within a few clicks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description