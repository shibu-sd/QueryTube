from model import execute_model
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS (Cross-Origin Resource Sharing) to allow requests from the React app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You might want to restrict this to the actual origin of your React app in a production setting
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict(data: dict):
    try:
        question = data.get("question", "")
        videoLink = data.get("videoLink", "")

        answer = execute_model(query = question, video_link = videoLink)

        return {"question": question, "answer": answer}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
