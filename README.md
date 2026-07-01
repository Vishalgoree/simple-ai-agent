# 🤖 Simple AI Agent using Express.js & Ollama

A simple AI Agent built with **Node.js**, **Express.js**, and **Ollama (Llama 3.2)**. The project provides a REST API that accepts user prompts and returns AI-generated responses.

---

## 🚀 Features

- ✅ Health Check API
- ✅ AI Chat API
- ✅ Express.js Backend
- ✅ Ollama Integration
- ✅ Local AI Model (Llama 3.2)
- ✅ No API Key Required
- ✅ Free to Run

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Ollama
- Llama 3.2
- JavaScript

---

## 📂 Project Structure

```text
simple-ai-agent/
│── node_modules/
│── .env
│── .gitignore
│── package.json
│── package-lock.json
└── server.js
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Vishalgoree/simple-ai-agent.git
```

Go to the project folder

```bash
cd simple-ai-agent
```

Install dependencies

```bash
npm install
```

---

## 📥 Install Ollama

Download Ollama:

https://ollama.com/download

Download the model:

```bash
ollama pull llama3.2
```

Start Ollama:

```bash
ollama serve
```

---

## ▶️ Run the Project

```bash
node server.js
```

Server:

```text
http://localhost:3000
```

---

# 📌 API Endpoints

## Health Check

### Request

```http
GET /
```

### Response

```json
{
  "status": "OK",
  "message": "AI Agent Running Successfully 🚀"
}
```

---

## Chat API

### Request

```http
POST /chat
```

### Body

```json
{
    "prompt":"Explain Artificial Intelligence"
}
```

### Response

```json
{
    "reply":"Artificial Intelligence is..."
}
```

---

## 👨‍💻 Author

**Vishal Gore**

GitHub:

https://github.com/Vishalgoree

---

⭐ If you like this project, don't forget to star the repository.