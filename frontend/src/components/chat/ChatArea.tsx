import { useState } from "react";
import { Send } from "lucide-react";

interface ChatAreaProps {
  activeContact: string;
}

export default function ChatArea({ activeContact }: ChatAreaProps) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      // Message sending logic
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Messages go here */}
      </div>
      <div className="p-6 border-t border-gray-200">
        <div className="flex justify-center mb-4">
          <button className="border border-gray-300 rounded-full py-2 px-8 text-sm font-medium">
            Invite to Merge
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Message ${activeContact}`}
            className="flex-1 border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button
            onClick={handleSendMessage}
            className="bg-black text-white rounded-full p-3"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
