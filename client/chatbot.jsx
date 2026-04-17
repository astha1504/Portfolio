import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await axios.post("http://localhost:5000/chat", { messages: newMessages });
      setMessages([...newMessages, res.data.reply]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, an error occurred." }]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-[300px] bg-white shadow-lg rounded-lg p-4 text-sm border">
      <div className="h-64 overflow-y-auto mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`${msg.role === "user" ? "text-right" : "text-left"} mb-1`}>
            <span className="inline-block bg-gray-100 p-2 rounded">{msg.content}</span>
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Ask something..."
        className="w-full border p-2 rounded"
      />
    </div>
  );
}
