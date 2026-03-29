"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, X, Calendar, Users, Code } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    description: string;
    image?: string;
    href?: string;
    category?: string;
    fullDescription?: string;
    technologies?: string[];
    year?: string;
    client?: string;
    gallery?: string[];
  };
}

export function ProjectDialog({ open, onOpenChange, project }: ProjectDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-4xl scrollbar-hide max-h-[90vh] overflow-y-auto bg-background border-border text-foreground p-0">
        {/* Close */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-50 rounded-full p-2 bg-secondary/60 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300"
        >
          <X className="h-4 w-4 text-foreground" />
        </button>

        {/* Hero image */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <DialogHeader>
            <DialogTitle className="text-3xl sm:text-4xl font-semibold text-foreground mb-2">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
              {project.fullDescription || project.description}
            </DialogDescription>
          </DialogHeader>

          {/* Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-border">
            {project.category && (
              <div className="flex items-start gap-3">
                <Code className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Category</p>
                  <p className="text-sm text-foreground">{project.category}</p>
                </div>
              </div>
            )}
            {project.year && (
              <div className="flex items-start gap-3">
                <Calendar className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Year</p>
                  <p className="text-sm text-foreground">{project.year}</p>
                </div>
              </div>
            )}
            {project.client && (
              <div className="flex items-start gap-3">
                <Users className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Client</p>
                  <p className="text-sm text-foreground">{project.client}</p>
                </div>
              </div>
            )}
          </div>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs text-muted-foreground uppercase tracking-wider">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-3 py-1.5 text-xs bg-secondary border border-border rounded-full text-foreground/80 hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs text-muted-foreground uppercase tracking-wider">
                Project Gallery
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative aspect-video overflow-hidden rounded-xl border border-border group"
                  >
                    <img
                      src={img}
                      alt={`${project.title} - Image ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          {project.href && (
            <div className="pt-2">
              <Button
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:brightness-110 border-none transition-all duration-300 shadow-[0_0_40px_-10px_hsl(72_100%_50%/0.3)]"
                asChild
              >
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Visit Live Project
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
