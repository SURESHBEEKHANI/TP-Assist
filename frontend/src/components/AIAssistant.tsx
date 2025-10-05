import { Send, Mic, Sun, Info, ChevronRight, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/travel/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: input }),
      });

      const data = await response.json();

      if (response.ok) {
        const assistantMessage: Message = {
          role: "assistant",
          content: data.answer,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        const errorMessage: Message = {
          role: "assistant",
          content: `Error: ${data.detail || "Failed to get response"}`,
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      const errorMessage: Message = {
        role: "assistant",
        content: "Failed to connect to the server. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Minimize/Maximize Button */}
      <Button
        onClick={() => setIsMinimized(!isMinimized)}
        className="fixed right-96 top-4 z-50 h-10 w-10 rounded-full shadow-lg"
        size="icon"
        style={{ right: isMinimized ? '0' : '24rem' }}
      >
        {isMinimized ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </Button>

      {/* AI Assistant Panel */}
      <div
        className={`w-96 border-l border-border bg-card h-screen fixed top-0 flex flex-col transition-all duration-300 ${isMinimized ? 'right-[-24rem]' : 'right-0'
          }`}
      >
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">AI Travel Assistant</h2>
        </div>

        <div className="flex-1 p-4 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="flex-1 space-y-4 mb-4 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent pr-2">
              {messages.length === 0 ? (
                <div className="text-sm text-muted-foreground text-center mt-8">
                  Ask me anything about your trip planning...
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg ${msg.role === "user"
                      ? "bg-primary text-primary-foreground ml-4"
                      : "bg-secondary text-foreground mr-4"
                      }`}
                  >
                    <div className="text-sm leading-relaxed">
                      {msg.content.split('\n').map((line, i) => {
                        if (line.startsWith('###')) {
                          return <h3 key={i} className="font-bold text-base mt-3 mb-2">{line.replace(/^###\s*/, '')}</h3>;
                        }
                        if (line.startsWith('##')) {
                          return <h2 key={i} className="font-bold text-lg mt-3 mb-2">{line.replace(/^##\s*/, '')}</h2>;
                        }
                        if (line.includes('**')) {
                          const parts = line.split(/\*\*(.*?)\*\*/g);
                          return (
                            <p key={i} className="mb-1">
                              {parts.map((part, j) =>
                                j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                              )}
                            </p>
                          );
                        }
                        if (line.trim().startsWith('-')) {
                          return <li key={i} className="ml-4 mb-1">{line.replace(/^-\s*/, '')}</li>;
                        }
                        if (line.trim() === '---') {
                          return <hr key={i} className="my-2 border-border" />;
                        }
                        return line.trim() ? <p key={i} className="mb-1">{line}</p> : <br key={i} />;
                      })}
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="p-3 rounded-lg bg-secondary text-foreground mr-4">
                  <div className="text-sm">Thinking...</div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground">Live Updates</h3>

                <Card className="p-3 bg-secondary border-0">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Sun className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-foreground">Weather in Paris</div>
                      <div className="text-xs text-muted-foreground">Sunny, 25°C</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-3 bg-secondary border-0">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Info className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-foreground">Travel Advisory</div>
                      <div className="text-xs text-muted-foreground">No major advisories</div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything..."
                  className="flex-1 bg-secondary border-0"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  disabled={isLoading}
                />
                <Button size="icon" variant="ghost">
                  <Mic className="w-4 h-4" />
                </Button>
                <Button size="icon" onClick={handleSend} disabled={isLoading}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
