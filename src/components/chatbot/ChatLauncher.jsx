import React, { useState } from "react";
import ChatBot from "./ChatBot";

const ChatLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
   <button
  onClick={() => setIsOpen(!isOpen)}
  className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 animate-bounce"
>
  <i className="ri-chat-3-line text-2xl" />
</button>

      {/* Chat Window */}
      <ChatBot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ChatLauncher;
