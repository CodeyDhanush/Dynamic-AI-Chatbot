import { SentimentBadge } from '../SentimentBadge';

export default function SentimentBadgeExample() {
  return (
    <div className="flex gap-2">
      <SentimentBadge sentiment="positive" />
      <SentimentBadge sentiment="neutral" />
      <SentimentBadge sentiment="negative" />
    </div>
  );
}
