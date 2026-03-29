"use client";

import { useEffect, useState } from "react";

const images = [
  { label: "Collaborative Workspace", image: "/culture/Office.jpg" },
  { label: "Team Workshop", image: "/culture/Workshop.jpg" },
  { label: "Creative Sessions", image: "/culture/Creative.jpg" },
  { label: "Team Activities", image: "/culture/Team.jpg" },
  { label: "Product Launch", image: "/culture/Launch.jpg" },
  { label: "Client Meetings", image: "/culture/Meeting.jpg" },
];

const Culture = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearTimeout(t);
  }, [activeImage]);

  return (
    <section className="py-24 md:py-40 px-6 md:px-8 bg-background border-t border-border">
      <div className="max-w-360 mx-auto">
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">
            Our Culture
          </p>
          <h2 className="text-4xl md:text-7xl font-semibold text-foreground">
            Behind the{" "}
            <em className="font-display italic font-normal">scenes</em>
          </h2>
        </div>

        {/* Image viewer */}
        <div className="mb-8">
          <div className="aspect-video bg-card border border-border rounded-2xl relative overflow-hidden">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ${
                  activeImage === idx
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <img
                  src={img.image}
                  alt={img.label}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeImage === idx
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {img.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;
