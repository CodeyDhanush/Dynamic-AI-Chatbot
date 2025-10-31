import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sticky bottom-0 bg-background/80 backdrop-blur-xl border-t p-4">
      <div className="max-w-4xl mx-auto flex gap-2 items-end">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
          className="resize-none rounded-xl focus-visible:ring-2 min-h-[60px] max-h-[200px]"
          disabled={disabled}
          data-testid="input-chat-message"
        />
        <Button
          type="submit"
          size="icon"
          className="rounded-full h-12 w-12 shrink-0"
          disabled={!input.trim() || disabled}
          data-testid="button-send-message"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
      <div className="max-w-4xl mx-auto mt-2 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {input.length} characters
        </span>
      </div>
    </form>
  );
}
