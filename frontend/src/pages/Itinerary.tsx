import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { AIAssistant } from "@/components/AIAssistant";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MapPin, Coffee, Utensils, Moon, Calendar } from "lucide-react";

const Itinerary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <AIAssistant />
      
      <main className="ml-64 mr-96 pt-16">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Day 1: San Francisco Adventure</h1>
              <p className="text-muted-foreground">October 26, 2024</p>
            </div>
            <Button className="gap-2">
              <Sparkles className="w-4 h-4" />
              AI Optimize
            </Button>
          </div>

          <div className="grid grid-cols-[280px_1fr] gap-6">
            <div className="space-y-6">
              <Card className="p-6 bg-secondary border-0">
                <h3 className="font-semibold text-foreground mb-4">Smart Itinerary Builder</h3>
              </Card>

              <Card className="p-6 bg-secondary border-0">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">FILTERS</h4>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">Budget Range</label>
                    <Slider defaultValue={[1000]} max={2000} step={100} className="mb-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>$500</span>
                      <span>$2000</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">Travel Type</label>
                    <div className="space-y-2">
                      <Badge className="bg-primary text-primary-foreground w-full justify-center py-2">Adventure</Badge>
                      <Badge variant="outline" className="w-full justify-center py-2">Relax</Badge>
                      <Badge variant="outline" className="w-full justify-center py-2">Culture</Badge>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">Dining Preferences</label>
                    <div className="space-y-2">
                      <Badge variant="outline" className="w-full justify-center py-2">Casual</Badge>
                      <Badge variant="outline" className="w-full justify-center py-2">Fine Dining</Badge>
                      <Badge className="bg-primary text-primary-foreground w-full justify-center py-2">Street Food</Badge>
                    </div>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="p-6 bg-secondary border-0 hover:bg-secondary/80 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">Morning: Golden Gate Bridge Bike Tour</h3>
                    <p className="text-sm text-muted-foreground mt-1">9:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-secondary border-0 hover:bg-secondary/80 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">Afternoon: Alcatraz Island Visit</h3>
                    <p className="text-sm text-muted-foreground mt-1">1:00 PM - 4:00 PM</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-secondary border-0 hover:bg-secondary/80 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Utensils className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">Evening: Fisherman's Wharf Dinner</h3>
                    <p className="text-sm text-muted-foreground mt-1">6:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-secondary border-0 hover:bg-secondary/80 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Moon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">Night: City Lights Bookstore</h3>
                    <p className="text-sm text-muted-foreground mt-1">9:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-secondary border-0">
                <h3 className="text-lg font-semibold text-foreground mb-4">Sync with Calendar</h3>
                <div className="flex gap-3">
                  <Button variant="secondary" className="flex-1 gap-2">
                    <Calendar className="w-4 h-4" />
                    Google Calendar
                  </Button>
                  <Button variant="secondary" className="flex-1 gap-2">
                    <Calendar className="w-4 h-4" />
                    Apple Calendar
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Itinerary;
