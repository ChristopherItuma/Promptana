from langchain.agents import create_agent
from langchain.messages import HumanMessage
from schema import PromptAnalyzer
from prompts import SYSTEM_PROMPT
from tools import inspect_prompt
from dotenv import load_dotenv

load_dotenv()

agent = create_agent(
model="gpt-5.4-mini",
system_prompt=SYSTEM_PROMPT,
response_format=PromptAnalyzer,
tools=[inspect_prompt],
)

def agent_executor(prompt:str):
  response = agent.invoke(
    {
      "messages": [HumanMessage(content=prompt)]
    }
  )
  return response["structured_response"].model_dump()