import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "compact";
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  variant = "default" 
}: FeatureCardProps) {
  if (variant === "compact") {
    return (
      <div className="flex items-start gap-3">
        <Icon className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <Icon className="h-12 w-12 text-amber-500 mb-4" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
