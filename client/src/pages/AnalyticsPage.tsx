import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Clock, TrendingUp, Smile, Frown, Minus, Activity } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Mock data for charts
const messageFrequency = [
  { name: "Mon", messages: 45 },
  { name: "Tue", messages: 62 },
  { name: "Wed", messages: 58 },
  { name: "Thu", messages: 71 },
  { name: "Fri", messages: 83 },
  { name: "Sat", messages: 39 },
  { name: "Sun", messages: 42 },
];

const sentimentData = [
  { name: "Positive", value: 65, color: "hsl(142, 76%, 36%)" },
  { name: "Neutral", value: 25, color: "hsl(220, 14%, 71%)" },
  { name: "Negative", value: 10, color: "hsl(0, 84%, 60%)" },
];

const recentActivity = [
  { time: "2 minutes ago", action: "Conversation with User #2341", sentiment: "positive" },
  { time: "15 minutes ago", action: "Conversation with User #2340", sentiment: "neutral" },
  { time: "1 hour ago", action: "Conversation with User #2339", sentiment: "positive" },
  { time: "2 hours ago", action: "Conversation with User #2338", sentiment: "negative" },
  { time: "3 hours ago", action: "Conversation with User #2337", sentiment: "positive" },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2" data-testid="text-analytics-title">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground">
            Track chatbot performance, user interactions, and conversation insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
            title="User Satisfaction"
            value="94%"
            icon={TrendingUp}
            trend={{ value: 3, isPositive: true }}
          />
          <MetricCard
            title="Active Sessions"
            value="47"
            icon={Activity}
            trend={{ value: 8, isPositive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Message Frequency</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={messageFrequency}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="messages" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sentiment Distribution</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="ml-8 space-y-2">
                {sentimentData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-sm text-muted-foreground">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const sentimentIcons = {
                  positive: { icon: Smile, color: "text-sentiment-positive" },
                  neutral: { icon: Minus, color: "text-sentiment-neutral" },
                  negative: { icon: Frown, color: "text-sentiment-negative" },
                };
                const { icon: Icon, color } = sentimentIcons[activity.sentiment as keyof typeof sentimentIcons];

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover-elevate active-elevate-2 border"
                    data-testid={`activity-item-${index}`}
                  >
                    <div className={`w-8 h-8 rounded-full bg-card flex items-center justify-center ${color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
