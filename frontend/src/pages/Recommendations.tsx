import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { AIAssistant } from "@/components/AIAssistant";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import hotel1Img from "@/assets/hotel1.jpg";
import hotel2Img from "@/assets/hotel2.jpg";
import restaurant1Img from "@/assets/restaurant1.jpg";
import restaurant2Img from "@/assets/restaurant2.jpg";
import attraction1Img from "@/assets/attraction1.jpg";
import attraction2Img from "@/assets/attraction2.jpg";

interface RecommendationCardProps {
  title: string;
  description: string;
  rating: number;
  reviews: number;
  image: string;
  tags?: string[];
  actionLabel: string;
}

const RecommendationCard = ({ title, description, rating, reviews, image, tags, actionLabel }: RecommendationCardProps) => {
  return (
    <Card className="overflow-hidden border-0 bg-secondary hover:scale-[1.02] transition-transform">
      <div className="aspect-video relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {tags && tags.length > 0 && (
          <div className="absolute top-3 right-3 flex gap-2">
            {tags.map((tag) => (
              <Badge key={tag} className="bg-primary text-primary-foreground">{tag}</Badge>
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="font-semibold text-foreground">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
          </div>
          <Button>{actionLabel}</Button>
        </div>
      </div>
    </Card>
  );
};

const Recommendations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <AIAssistant />
      
      <main className="ml-64 mr-96 pt-16">
        <div className="p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Recommendations</h1>
            <p className="text-muted-foreground">Discover personalized suggestions for your upcoming trip.</p>
          </div>

          <div className="flex gap-3">
            <Button variant="outline">Distance</Button>
            <Button variant="outline">User Rating</Button>
            <Button>AI Recommended</Button>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Hotels</h2>
            <div className="grid grid-cols-2 gap-6">
              <RecommendationCard
                title="The Grand Vista Hotel"
                description="Luxury hotel with stunning views and top-notch amenities."
                rating={4.8}
                reviews={1245}
                image={hotel1Img}
                tags={["Eco-Friendly"]}
                actionLabel="Book Now"
              />
              <RecommendationCard
                title="Cozy Mountain Lodge"
                description="Rustic charm with a focus on local experiences and sustainability."
                rating={4.9}
                reviews={987}
                image={hotel2Img}
                tags={["Local Experience"]}
                actionLabel="Add to Trip"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Restaurants</h2>
            <div className="grid grid-cols-2 gap-6">
              <RecommendationCard
                title="The Seaside Bistro"
                description="Fresh seafood and ocean views, committed to sustainable sourcing."
                rating={4.7}
                reviews={789}
                image={restaurant1Img}
                tags={["Eco-Friendly"]}
                actionLabel="Add to Trip"
              />
              <RecommendationCard
                title="The Heritage Tavern"
                description="Traditional cuisine with locally sourced ingredients and a cozy atmosphere."
                rating={4.6}
                reviews={854}
                image={restaurant2Img}
                tags={["Local Experience"]}
                actionLabel="Add to Trip"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Attractions</h2>
            <div className="grid grid-cols-2 gap-6">
              <RecommendationCard
                title="The National Museum of History"
                description="Explore the rich history and culture of the region."
                rating={4.9}
                reviews={2500}
                image={attraction1Img}
                actionLabel="Add to Trip"
              />
              <RecommendationCard
                title="The Scenic Hiking Trail"
                description="Breathtaking views and a connection with nature on this popular trail."
                rating={4.8}
                reviews={3120}
                image={attraction2Img}
                actionLabel="Add to Trip"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recommendations;
