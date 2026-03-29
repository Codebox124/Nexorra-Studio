import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  category?: string;
  image?: string;
  onClick?: () => void;
}

export function ProjectCard({ title, description, image, onClick }: ProjectCardProps) {
  return (
    <Card className="w-full p-0 bg-card border-border shadow-none rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 group">
      <CardHeader className="p-0">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </CardHeader>

      <CardContent className="px-5 pt-4 pb-2">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-2">
        <Button
          onClick={onClick}
          className="w-fit bg-transparent border border-primary/50 text-foreground text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
        >
          View Details
          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
}
