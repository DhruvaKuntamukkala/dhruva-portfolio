# ===============================
# main.py — Resume Chatbot Backend
# ===============================

import os
from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA
from langchain_groq import ChatGroq


# -------------------------------
# Load environment variables
# -------------------------------
load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    raise RuntimeError("❌ GROQ_API_KEY not found. Add it to your .env file")

# -------------------------------
# FastAPI app setup
# -------------------------------
app = FastAPI(title="Resume Chatbot API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change to your domain later
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------
# Load & process resume
# -------------------------------
RESUME_PATH = "resume.pdf"

if not os.path.exists(RESUME_PATH):
    raise RuntimeError("❌ resume.pdf not found in backend folder")

loader = PyPDFLoader(RESUME_PATH)
documents = loader.load()

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=100
)
chunks = text_splitter.split_documents(documents)

# -------------------------------
# Create embeddings + vector DB
# -------------------------------
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

vectorstore = FAISS.from_documents(chunks, embeddings)

# -------------------------------
# LLM (Groq)
# -------------------------------
print("GROQ_API_KEY loaded:", bool(GROQ_API_KEY))

SYSTEM_PROMPT = """
You are an AI assistant representing the portfolio owner.
Answer as if you are the person themselves.
Use ONLY the provided resume context.
Be confident, clear, and professional.
If the resume does not contain the answer, say you do not have that information.
"""

llm = ChatGroq(
    groq_api_key=GROQ_API_KEY,
    model_name="llama3-70b-8192",
    temperature=0.3
)

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
    chain_type="stuff"
)

# -------------------------------
# Request schema
# -------------------------------
class ChatRequest(BaseModel):
    message: str

# -------------------------------
# API route
# -------------------------------
@app.post("/chat")
def chat(request: ChatRequest):
    query = f"{SYSTEM_PROMPT}\n\nQuestion: {request.message}"
    answer = qa_chain.run(query)
    return {"reply": answer}

# -------------------------------
# Health check
# -------------------------------
@app.get("/")
def root():
    return {"status": "Resume chatbot backend running ✅"}
