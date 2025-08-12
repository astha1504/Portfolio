import React, { useState, useRef, useEffect } from "react";

const ChatBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! I'm Astha's personal bot. Ask me anything about her!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const botKnowledge = [
    {
      questions: ["hi", "hello", "hey", "hola"],
      answer: "Hello! How can I help you learn about Astha?",
    },
    {
      questions: ["what is your name", "who are you"],
      answer: "I'm Astha's personal assistant bot. Nice to meet you!",
    },
    {
      questions: ["what does astha do", "what is astha's profession", "what's astha's job"],
      answer: "Astha is a talented Web Developer and UI/UX Designer.",
    },
    {
      questions: ["what technologies does astha use", "what are astha's skills", "what programming languages does astha know"],
      answer: "Astha is proficient in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, GSAP, and more! You can check her skills section for details.",
    },
    {
      questions: ["where is astha from", "where does astha live"],
      answer: "Astha is currently based in Kanpur, Uttar Pradesh, India.",
    },
    {
      questions: ["how can i contact astha", "what is astha's email", "what is astha's linkedin", "connect with astha"],
      answer: "You can find all of Astha's contact information and social media links in the 'Connect with Me' section below!",
    },
    {
      questions: ["tell me about astha's projects", "what projects has astha worked on"],
      answer: "Astha has worked on several exciting projects. Take a look at her 'Projects' section to see them in action!",
    },
    {
      questions: ["what are astha's achievements", "has astha won any awards"],
      answer: "Astha has a dedicated 'Achievements' section where you can find information about her accomplishments and recognitions.",
    },
    {
      questions: ["does astha have a resume", "can i see astha's resume", "view resume"],
      answer: "Yes, you can download or view Astha's resume in the 'Resume' section of this portfolio.",
    },
    {
      questions: ["bye", "goodbye", "see you"],
      answer: "Goodbye! Feel free to ask more questions if you have them.",
    },
    {
      questions: ["what is astha's education", "where did astha study"],
      answer: "Astha has pursued her Bachelor of Technology in Computer Science from XYZ University. (Replace with your actual education)",
    },
    {
      questions: ["what are astha's hobbies", "what does astha do in her free time"],
      answer: "Astha enjoys exploring new technologies, reading, and occasionally dabbling in digital art in her free time.",
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    const response = getBotResponse(input.trim());
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
      setTyping(false);
    }, 600);
  };

  const getBotResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    for (const item of botKnowledge) {
      if (item.questions.some((q) => lowerQuery.includes(q))) {
        return item.answer;
      }
    }
    return "I'm not sure about that. Try asking something else about Astha!";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 w-full max-w-sm h-[70vh] bg-gray-900 text-white shadow-2xl rounded-lg flex flex-col z-50">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">Chat with Astha's Bot</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white text-2xl"
          aria-label="Close chatbot"
        >
          <i className="ri-close-line"></i>
        </button>
      </div>

      {/* Chat History */}
      <div className="chat-history flex-grow overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message p-3 my-2 rounded-lg max-w-[80%] ${
              msg.sender === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-gray-700 text-white mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {typing && (
          <div className="message p-3 my-2 rounded-lg max-w-[80%] bg-gray-700 text-white mr-auto animate-pulse">
            Typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <form onSubmit={handleSendMessage} className="flex gap-2 p-4 border-t border-gray-700">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about Astha..."
          className="flex-grow p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
