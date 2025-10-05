import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
}

export const StatsCard = ({ title, value, icon: Icon }: StatsCardProps) => {
  return (
    <Card className="p-6 bg-secondary border-0 hover:bg-secondary/80 transition-colors">
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="text-3xl font-bold text-foreground">{value}</div>
      </div>
    </Card>
  );
};
