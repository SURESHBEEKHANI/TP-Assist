import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { AIAssistant } from "@/components/AIAssistant";
import { StatsCard } from "@/components/StatsCard";
import { DestinationCard } from "@/components/DestinationCard";
import { Card } from "@/components/ui/card";
import { Sun, MapPin, Plane } from "lucide-react";
import tropicalImg from "@/assets/tropical.jpg";
import mountainImg from "@/assets/mountain.jpg";
import cityImg from "@/assets/city.jpg";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <AIAssistant />
      
      <main className="ml-64 mr-96 pt-16">
        <div className="p-8 space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back, Sarah</h1>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <StatsCard title="Upcoming Trips" value="2" />
            <StatsCard title="Saved Destinations" value="15" />
            <StatsCard title="Budget Overview" value="$5,000" />
            <StatsCard title="Sustainable Travel Score" value="85%" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Explore Destinations</h2>
            <div className="grid grid-cols-3 gap-6">
              <DestinationCard title="Tropical Getaway" image={tropicalImg} />
              <DestinationCard title="Mountain Adventure" image={mountainImg} />
              <DestinationCard title="City Exploration" image={cityImg} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Current Trip Itinerary</h2>
            <Card className="p-6 bg-secondary border-0">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Sun className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">Day 1: Arrival and Exploration</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Morning: Arrive at destination, check into hotel. Afternoon: Explore local markets and landmarks. Evening: Enjoy a welcome dinner.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">Day 2: Cultural Immersion</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Morning: Visit historical sites and museums. Afternoon: Participate in a local workshop or cultural event. Evening: Attend a traditional performance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Plane className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">Day 3: Departure</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Morning: Enjoy a final breakfast. Afternoon: Depart from destination.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
