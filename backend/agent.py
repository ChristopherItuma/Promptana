from langchain.agents import create_agent
from langchain.messages import HumanMessage
from schema import PromptAnalyzer
from prompts import SYSTEM_PROMPT
from tools import inspect_prompt
from dotenv import load_dotenv
from langchain.agents.middleware import (
ToolRetryMiddleware, 
ModelRetryMiddleware, 
ModelFallbackMiddleware,
ToolCallLimitMiddleware
)
load_dotenv()

agent = create_agent(
model="gpt-5.4-mini",
system_prompt=SYSTEM_PROMPT,
response_format=PromptAnalyzer,
tools=[inspect_prompt],
middleware=[
  ToolRetryMiddleware(
    max_retries=3,
    backoff_factor=2.0,
    initial_delay=1.0
  ),
  ModelRetryMiddleware(
    max_retries=5,
    initial_delay=1.0,
    backoff_factor=2.0
  ),
  ToolCallLimitMiddleware(
    thread_limit=5,
    run_limit=5
  ),
  ModelFallbackMiddleware(
    "gpt-5.4"
  )
]
)

def agent_executor(prompt:str):
  response = agent.invoke(
    {
      "messages": [HumanMessage(content=prompt)]
    }
  )
  return response["structured_response"].model_dump()