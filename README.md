# Promptana 🧠

### Understand the anatomy of your prompts.

Promptana is an AI-powered prompt auditing tool that helps developers analyze, diagnose, and improve system prompts before using them in production AI applications.

Instead of relying on guesswork, Promptana evaluates prompts using a structured framework to uncover ambiguity, hallucination risks, weak constraints, and missing components.

Audit. Improve. Ship better prompts.

---

## Features

- Analyze prompts using a fixed evaluation framework
- Detect hallucination and ambiguity risks
- Identify missing prompt components
- Generate actionable improvements
- Rewrite prompts using best practices
- Explain *why* improvements matter
- Structured scoring system
- FastAPI backend + React frontend

---

## What Promptana Evaluates

Promptana analyzes the anatomy of a prompt across multiple dimensions:

- Clarity
- Specificity
- Hallucination Risk
- Ambiguity
- Constraints
- Missing Elements
- Strengths
- Weaknesses
- Improvements
- Prompt Rewrite Suggestions

---

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios
- React Icons
- React Toastify

### Backend
- FastAPI
- LangChain
- LangGraph
- Pydantic

---

## Project Structure

```text
Promptana/
├── frontend/
├── backend/
├── .gitignore
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <your-repository-url>
cd Promptana
```

### Backend Setup

```bash
cd backend

python -m venv .venv

# Windows
.venv\Scripts\activate

# Mac/Linux
source .venv/bin/activate

pip install -r requirements.txt
```

Create a `.env` file:

```env
OPENAI_API_KEY=your_api_key
LANGSMITH_API_KEY=your_api_key
```

Run backend:

```bash
fastapi dev
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Future Improvements

- Prompt version comparison
- Authentication
- Prompt history
- Shareable reports
- Saved analyses
- Prompt templates

---

Built while learning AI engineering 🚀