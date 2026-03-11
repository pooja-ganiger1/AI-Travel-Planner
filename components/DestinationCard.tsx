import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  title: string;
  description: string;
  image?: string;
}

export default function DestinationCard({ title, description, image }: DestinationCardProps) {
  return (
    <Card className="group overflow-hidden border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <div className="h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center overflow-hidden relative">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"></div>
            <MapPin className="h-16 w-16 text-primary relative z-10" />
          </div>
        )}
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-white/40 text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
