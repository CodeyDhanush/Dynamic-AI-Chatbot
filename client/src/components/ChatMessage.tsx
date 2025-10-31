import { SentimentBadge, type Sentiment } from "./SentimentBadge";
import { Bot, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sentiment?: Sentiment;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}
      data-testid={`message-${message.id}`}
    >
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarFallback className={isUser ? "bg-user-message text-white" : "bg-primary text-primary-foreground"}>
          {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
        </AvatarFallback>
      </Avatar>

      <div className={`flex flex-col gap-1 max-w-[80%] ${isUser ? "items-end" : ""}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isUser
              ? "bg-user-message text-white"
              : "bg-card text-card-foreground"
          }`}
        >
          <p className="text-base leading-relaxed whitespace-pre-wrap" data-testid={`text-message-${message.id}`}>
            {message.content}
          </p>
        </div>

        <div className={`flex items-center gap-2 ${isUser ? "flex-row-reverse" : ""}`}>
          <span className="text-xs text-muted-foreground" data-testid={`text-timestamp-${message.id}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          {message.sentiment && <SentimentBadge sentiment={message.sentiment} />}
        </div>
      </div>
    </div>
  );
}
