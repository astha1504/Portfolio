import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: messages.map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      })),
    });

    const result = await chat.sendMessage(messages[messages.length - 1].content);
    const reply = result.response.text();

    res.json({ reply: { role: "assistant", content: reply } });
  } catch (error) {
    console.error("Gemini error:", error.message);
    res.status(500).json({ error: "Failed to get Gemini response" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
