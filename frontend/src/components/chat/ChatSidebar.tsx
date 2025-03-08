"use client"

import type { Dispatch, SetStateAction } from "react"

interface Contact {
  id: string
  name: string
  lastMessage: string
}

interface ChatSidebarProps {
  activeTab: "connections" | "groups"
  setActiveTab: Dispatch<SetStateAction<"connections" | "groups">>
  contacts: Contact[]
  activeContact: string
  setActiveContact: Dispatch<SetStateAction<string>>
}

export default function ChatSidebar({ activeTab, setActiveTab, contacts, activeContact, setActiveContact }: ChatSidebarProps) {
  return (
    <div className="w-96 border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex rounded-full bg-gray-100 p-1 mb-4">
          <button
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
              activeTab === "connections" ? "bg-black text-white" : ""
            }`}
            onClick={() => setActiveTab("connections")}
          >
            Connections
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
              activeTab === "groups" ? "bg-black text-white" : ""
            }`}
            onClick={() => setActiveTab("groups")}
          >
            Groups
          </button>
        </div>

        <div className="space-y-2">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`p-4 rounded-lg border border-gray-200 cursor-pointer ${
                activeContact === contact.name ? "border-gray-400" : ""
              }`}
              onClick={() => setActiveContact(contact.name)}
            >
              <h3 className="font-bold">{contact.name}</h3>
              <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

