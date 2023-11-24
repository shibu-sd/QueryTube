# Importing the required libraries
import re
import torch
from nltk.tokenize import word_tokenize
from youtube_transcript_api import YouTubeTranscriptApi
from transformers import AutoModelForQuestionAnswering, AutoTokenizer, pipeline

# Getting Youtube video ID from video link
def get_video_id(video_link):
    video_id = video_link.split("v=")[1][:11]
    return video_id

# Getting the youtube video link
def get_srt(video_id):
    srt = YouTubeTranscriptApi.get_transcript(video_id)
    return srt

# Text Preprocessing
def preprocess_text(srt):
    para = []
    for i in range(len(srt)):
        para.append(srt[i]['text'])

    captions = para

    processed_captions = []
    
    for caption in captions:
        # Tokenize the caption into words
        words = word_tokenize(caption)
        
        # Convert words to lowercase
        words = [word.lower() for word in words]
        
        # Remove punctuation and special characters
        words = [re.sub(r'[^a-zA-Z0-9]', '', word) for word in words]
        
        # Remove empty strings
        words = [word for word in words if word != '']
        
        # Join the processed words back into a sentence
        processed_caption = ' '.join(words)
        
        processed_captions.append(processed_caption)
    
    final_text = ' '.join(processed_captions)
    return final_text

# Creating the model
def create_model(query, text):
    model_name = "deepset/roberta-base-squad2"
    nlp = pipeline('question-answering', model=model_name, tokenizer=model_name, framework='pt', min_answer_length=10)

    QA_input = {
        'question':query,
        'context': text
    }
    res = nlp(QA_input)

    predicted_answer = res['answer']
    return predicted_answer

# Executing the model
def execute_model(query, video_link):
    video_id = get_video_id(video_link)
    srt = get_srt(video_id)
    text = preprocess_text(srt)
    predicted_answer = create_model(query, text)
    return predicted_answer

# Example Usage
# query = "What are the methods in a stack ? "
# video_link_endpoint = "https://www.youtube.com/watch?v=KcT3aVgrrpU"

# print(execute_model(query, video_link_endpoint))

# print(get_video_id("https://www.youtube.com/watch?v=KcT3aVgrrpU"))
