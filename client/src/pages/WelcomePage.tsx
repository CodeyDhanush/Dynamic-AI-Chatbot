import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Brain, TrendingUp, Zap, Bot, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Overlay */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(142_76%_36%)_0%,transparent_50%)] opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap className="h-4 w-4" />
              Powered by Advanced AI
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              Dynamic AI Chatbot
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience intelligent conversations with advanced NLP, sentiment analysis, and contextual understanding
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link href="/chat">
                <Button size="lg" className="text-lg px-8 py-6" data-testid="button-start-chatting">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Chatting
                </Button>
              </Link>
              <Link href="/analytics">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 backdrop-blur-sm bg-background/50" data-testid="button-view-analytics">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Analytics
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-elevate">
              <CardHeader className="gap-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>NLP Understanding</CardTitle>
                <CardDescription>
                  Advanced natural language processing with intent recognition and contextual memory for seamless conversations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate">
              <CardHeader className="gap-2">
                <div className="w-12 h-12 rounded-lg bg-user-message/10 flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-user-message" />
                </div>
                <CardTitle>Sentiment Analysis</CardTitle>
                <CardDescription>
                  Real-time emotion detection that adapts responses based on user sentiment for personalized interactions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate">
              <CardHeader className="gap-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Responses</CardTitle>
                <CardDescription>
                  Generative AI models deliver dynamic, contextual responses that improve over time through learning
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate">
              <CardHeader className="gap-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Contextual Memory</CardTitle>
                <CardDescription>
                  Maintains conversation flow across messages, understanding references and building on previous exchanges
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate">
              <CardHeader className="gap-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Track performance metrics, user interactions, and conversation trends with detailed visual insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate">
              <CardHeader className="gap-2">
                <div className="w-12 h-12 rounded-lg bg-user-message/10 flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-user-message" />
                </div>
                <CardTitle>Multi-Platform Ready</CardTitle>
                <CardDescription>
                  API-based architecture enables easy integration with web, mobile, Slack, Telegram, and more
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Intelligent Conversations?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start chatting with our AI assistant and discover how advanced NLP and sentiment analysis create truly engaging interactions
          </p>
          <Link href="/chat">
            <Button size="lg" className="text-lg px-8 py-6" data-testid="button-get-started">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
