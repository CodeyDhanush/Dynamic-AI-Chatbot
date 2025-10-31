import { ChatMessage } from '../ChatMessage';

export default function ChatMessageExample() {
  const userMessage = {
    id: '1',
    role: 'user' as const,
    content: 'Hello! Can you help me understand sentiment analysis?',
    sentiment: 'positive' as const,
    timestamp: new Date(),
  };

  const aiMessage = {
    id: '2',
    role: 'assistant' as const,
    content: 'Of course! Sentiment analysis is a natural language processing technique used to determine the emotional tone behind text. It can identify whether the sentiment is positive, negative, or neutral.',
    sentiment: 'neutral' as const,
    timestamp: new Date(),
  };

  return (
    <div className="flex flex-col gap-4 max-w-4xl">
      <ChatMessage message={userMessage} />
      <ChatMessage message={aiMessage} />
    </div>
  );
}
