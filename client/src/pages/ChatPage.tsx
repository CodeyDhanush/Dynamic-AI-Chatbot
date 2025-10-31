import { useState, useRef, useEffect } from "react";
import { ChatMessage, type Message } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ChatHeader } from "@/components/ChatHeader";
import { TypingIndicator } from "@/components/TypingIndicator";
import { type Sentiment } from "@/components/SentimentBadge";
import { useToast } from "@/hooks/use-toast";

// Mock data - remove for production
const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! I'm your Dynamic AI Assistant. I can help you with various tasks and understand the sentiment of our conversation. How can I assist you today?",
    sentiment: "positive",
    timestamp: new Date(Date.now() - 5 * 60000),
  },
];

// Mock sentiment analysis function - will be replaced with real API
function analyzeSentiment(text: string): Sentiment {
  const positiveWords = ["happy", "great", "excellent", "wonderful", "love", "thanks", "good", "awesome", "perfect"];
  const negativeWords = ["sad", "bad", "terrible", "hate", "angry", "frustrated", "awful", "poor", "worst"];
  
  const lowerText = text.toLowerCase();
  const hasPositive = positiveWords.some(word => lowerText.includes(word));
  const hasNegative = negativeWords.some(word => lowerText.includes(word));
  
  if (hasPositive && !hasNegative) return "positive";
  if (hasNegative && !hasPositive) return "negative";
  return "neutral";
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      sentiment: analyzeSentiment(content),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response - replace with real OpenAI API call
    setTimeout(() => {
      const aiResponses = [
        "That's an interesting question! Let me help you with that. Based on what you've shared, I can provide you with detailed insights and recommendations.",
        "I understand what you're looking for. Here's what I can tell you about that topic, along with some practical examples.",
        "Great question! This is a complex topic that involves several factors. Let me break it down for you in a clear and organized way.",
        "I'd be happy to help you with that. From my analysis, here are the key points you should consider.",
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sentiment: "neutral",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleExport = () => {
    const conversationText = messages
      .map(msg => `[${msg.role.toUpperCase()}] ${msg.content}`)
      .join('\n\n');
    
    const blob = new Blob([conversationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `conversation-${new Date().toISOString()}.txt`;
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Conversation Exported",
      description: "Your conversation has been downloaded as a text file.",
    });
  };

  const handleClear = () => {
    setMessages([]);
    toast({
      title: "Conversation Cleared",
      description: "All messages have been removed.",
    });
  };

  const handleSettings = () => {
    toast({
      title: "Settings",
      description: "Settings panel would open here in the full version.",
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <ChatHeader
        title="AI Assistant"
        onExport={handleExport}
        onClear={handleClear}
        onSettings={handleSettings}
      />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-xs text-primary-foreground">AI</span>
              </div>
              <div className="rounded-2xl bg-card px-4 py-3 max-w-[80%]">
                <TypingIndicator />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      <ChatInput onSend={handleSendMessage} disabled={isTyping} />
    </div>
  );
}
