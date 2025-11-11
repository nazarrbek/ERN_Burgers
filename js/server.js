import express from "express";
import fetch from "node-fetch"; // или axios
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const OPENAI_KEY = "YOUR_API_KEY_HERE"; // сюда вставь свой ключ

app.post("/translate", async (req, res) => {
  const { text, target } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a translation assistant." },
          { role: "user", content: `Translate this text to ${target}: "${text}"` }
        ]
      }),
    });
    const data = await response.json();
    const translation = data.choices[0].message.content;
    res.json({ translation });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
