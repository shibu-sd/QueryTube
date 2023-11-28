import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Model.css'; // Import your CSS file

function Model() {
    const [question, setQuestion] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [answer, setAnswer] = useState('');

    const handlePredict = async () => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/predict',
                { question, videoLink },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            setAnswer(response.data.answer);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="model-container">
            <h1 className="model-title">QueryTube</h1>
            <div className="model-inputs">
                <label htmlFor="question">Query :</label>
                <input
                    type="text"
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <label htmlFor="videoLink">Video Link :</label>
                <input
                    type="text"
                    id="videoLink"
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)}
                />
            </div>
            <button className="predict-button" onClick={handlePredict}>
                Predict
            </button>
            {answer && (
                <div className="model-answer">
                    <h2>Answer :</h2>
                    <p>{answer}</p>
                </div>
            )}

        </div>
        </div>
    );
}

export default Model;
