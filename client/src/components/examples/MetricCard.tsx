import { MetricCard } from '../MetricCard';
import { MessageSquare, TrendingUp, Clock } from 'lucide-react';

export default function MetricCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MetricCard
        title="Total Messages"
        value="1,234"
        icon={MessageSquare}
        trend={{ value: 12, isPositive: true }}
      />
      <MetricCard
        title="Avg Response Time"
        value="1.2s"
        icon={Clock}
        trend={{ value: 5, isPositive: true }}
      />
      <MetricCard
        title="Satisfaction"
        value="94%"
        icon={TrendingUp}
        trend={{ value: 3, isPositive: true }}
      />
    </div>
  );
}
