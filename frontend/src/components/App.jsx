import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [answer, setAnswer] = useState('');

  const handlePredict = async () => {
    try {
      console.log('Request payload:', { question, videoLink });
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
    <div className="App">
      <h1>QueryTube</h1>
      <div>
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="videoLink">videoLink:</label>
        <input
          type="text"
          id="videoLink"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
      </div>
      <button onClick={handlePredict}>Predict</button>
      {answer && (
        <div>
          <h2>Answer :</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;