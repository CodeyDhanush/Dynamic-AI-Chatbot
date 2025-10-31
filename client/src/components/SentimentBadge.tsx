import { Badge } from "@/components/ui/badge";
import { Smile, Frown, Minus } from "lucide-react";

export type Sentiment = "positive" | "negative" | "neutral";

interface SentimentBadgeProps {
  sentiment: Sentiment;
  className?: string;
}

export function SentimentBadge({ sentiment, className }: SentimentBadgeProps) {
  const config = {
    positive: {
      icon: Smile,
      label: "Positive",
      className: "bg-sentiment-positive/20 text-sentiment-positive border-sentiment-positive/30",
    },
    negative: {
      icon: Frown,
      label: "Negative",
      className: "bg-sentiment-negative/20 text-sentiment-negative border-sentiment-negative/30",
    },
    neutral: {
      icon: Minus,
      label: "Neutral",
      className: "bg-sentiment-neutral/20 text-sentiment-neutral border-sentiment-neutral/30",
    },
  };

  const { icon: Icon, label, className: sentimentClass } = config[sentiment];

  return (
    <Badge
      variant="outline"
      className={`${sentimentClass} ${className} flex items-center gap-1 text-xs font-semibold`}
      data-testid={`badge-sentiment-${sentiment}`}
    >
      <Icon className="h-3 w-3" />
      <span>{label}</span>
    </Badge>
  );
}
