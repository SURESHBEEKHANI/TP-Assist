import { Card } from "@/components/ui/card";

interface DestinationCardProps {
  title: string;
  image: string;
}

export const DestinationCard = ({ title, image }: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden border-0 bg-secondary hover:scale-105 transition-transform cursor-pointer">
      <div className="aspect-video relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
    </Card>
  );
};
