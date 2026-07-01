import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const OLLAMA_URL = process.env.OLLAMA_URL;

app.get("/", (req, res) => {
    res.json({
        status: "OK",
        message: "AI Agent Running Successfully 🚀"
    });
});

app.post("/chat", async (req, res) => {

    try {

        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({
                error: "Prompt is required"
            });
        }

        const response = await axios.post(`${OLLAMA_URL}/api/generate`, {
            model: "llama3.2",
            prompt: prompt,
            stream: false
        });

        res.json({
            reply: response.data.response
        });

    } catch (error) {

        console.log(error.message);

        res.status(500).json({
            error: error.message
        });

    }

});

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});