import { Send, Mic, Sun, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const AIAssistant = () => {
  return (
    <div className="w-96 border-l border-border bg-card h-screen fixed right-0 top-0 flex flex-col">
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">AI Travel Assistant</h2>
      </div>

      <div className="flex-1 p-4">
        <div className="h-full flex flex-col">
          <div className="flex-1 space-y-4 mb-4">
            <div className="text-sm text-muted-foreground text-center mt-8">
              Ask me anything about your trip planning...
            </div>
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
              />
              <Button size="icon" variant="ghost">
                <Mic className="w-4 h-4" />
              </Button>
              <Button size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
