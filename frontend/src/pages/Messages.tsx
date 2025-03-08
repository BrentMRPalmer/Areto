import { useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatArea from "@/components/chat/ChatArea";

const Messages = () => {
  const contacts = [
    {
      id: "1",
      name: "Jason Wei",
      lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      name: "Kyle Miller",
      lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      name: "Raz Garzon",
      lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const [activeTab, setActiveTab] = useState<"connections" | "groups">(
    "connections"
  );
  const [activeContact, setActiveContact] = useState("Jason Wei");

  return (
    <div className="px-32 mt-12">
      <h1 className="text-5xl font-bold mb-6">My Messages</h1>
      <div className="flex flex-1 overflow-hidden border-t border-gray-200 h-screen min-h-[30vh] max-h-[75vh]">
        <ChatSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          contacts={contacts}
          activeContact={activeContact}
          setActiveContact={setActiveContact}
        />
        <ChatArea activeContact={activeContact} />
      </div>
    </div>
  );
};

export default Messages;
