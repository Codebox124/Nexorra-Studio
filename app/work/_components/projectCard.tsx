import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  category?: string;
  image?: string;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  description,
  image,
  onClick,
}: ProjectCardProps) {
  return (
    <Card className="w-full p-0 bg-[#fffdf8]/2 backdrop-blur-2xl border-[#fffdf8]/10 shadow-none rounded-lg overflow-hidden hover:border-[#9804bc]/50 transition-all duration-300 group">
      <CardHeader className="p-0">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-auto group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </CardHeader>

      <CardContent className="px-4">
        <h3 className="text-2xl font-medium text-[#fffdf8] mb-3 group-hover:text-[#9804bc] transition-colors">
          {title}
        </h3>
        <p className="text-[#fffdf8]/70 text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          onClick={onClick}
          className="w-fit justify-between group/btn bg-transparent border border-[#9804bc] text-white text-sm hover:bg-[#9804bc]/30 hover:text-white transition-all duration-300"
        >
          View Details
          <ChevronRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
}
