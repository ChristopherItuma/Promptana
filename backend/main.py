#My AI agent to help me 
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from agent import agent_executor
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
app = FastAPI()

# List of allowed origins (e.g., your frontend URL)
origins = [
    "http://localhost:5173",
    "https://your-app-domain.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # Allows specific origins
    allow_credentials=True,           # Allows cookies and auth headers
    allow_methods=["*"],              # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],              # Allows all request headers
)

class PromptRequest(BaseModel):
    prompt:str

@app.get("/")
def home():
    return {"message": "Promptana API is live"}

@app.post("/analyze-prompt")
def analyze_prompt(data:PromptRequest):
  response = agent_executor(data.prompt)
  return JSONResponse(content={"result":response}, status_code=200)


