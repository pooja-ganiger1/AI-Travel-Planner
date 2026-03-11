"use client";

import { useState } from "react";
import { BoltStyleChat } from "@/components/ui/bolt-style-chat";
import { askAI } from "@/lib/bytez";

interface Message {
  role: "user" | "ai";
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (message: string, modelId: string = "qwen") => {
    // Prevent multiple simultaneous requests
    if (isLoading) {
      const warningMessage: Message = {
        role: "ai",
        content: "⏳ Please wait for the current response to complete before sending another message.",
      };
      setMessages((prev) => [...prev, warningMessage]);
      return;
    }

    // Add user message
    const userMessage: Message = { role: "user", content: message };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await askAI(message, modelId as "qwen");
      
      // Ensure response is a string
      let responseText = "";
      if (typeof response === "string") {
        responseText = response;
      } else if (response && typeof response === "object") {
        responseText = JSON.stringify(response, null, 2);
      } else {
        responseText = String(response);
      }
      
      const aiMessage: Message = { role: "ai", content: responseText };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      let errorMsg = "Sorry, I encountered an error. Please try again.";
      
      if (error instanceof Error) {
        // Check for rate limiting error
        if (error.message.includes("Rate limited")) {
          errorMsg = "⏳ Rate limit reached. Please wait a moment before sending another message. Free accounts can only process one request at a time.";
        } else {
          errorMsg = error.message;
        }
      } else if (typeof error === "string") {
        if (error.includes("Rate limited")) {
          errorMsg = "⏳ Rate limit reached. Please wait a moment before sending another message.";
        } else {
          errorMsg = error;
        }
      } else if (error && typeof error === "object") {
        errorMsg = JSON.stringify(error);
      }
      
      const errorMessage: Message = {
        role: "ai",
        content: errorMsg,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BoltStyleChat
      title="Where will you"
      subtitle="Plan your dream trip with AI-powered travel assistance."
      announcementText="AI Travel Assistant"
      announcementHref="#"
      placeholder="Ask about destinations, itineraries, or travel tips..."
      onSend={handleSend}
      messages={messages}
      isLoading={isLoading}
    />
  );
}
