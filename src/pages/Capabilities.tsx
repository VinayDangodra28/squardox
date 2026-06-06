import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "Branding",
    examples: ["Brand Identity", "Visual Language", "Motion Guidelines", "Tone of Voice", "Packaging"],
    color: "text-sd-lime"
  },
  {
    title: "Websites",
    examples: ["Experimental UX", "E-Commerce", "WebGL Experiences", "Headless Architectures", "Landing Pages"],
    color: "text-sd-coral"
  },
  {
    title: "Social Media",
    examples: ["Campaigns", "Content Strategy", "Asset Production", "Grid Curation", "Short-Form Video"],
    color: "text-sd-blue"
  },
  {
    title: "CRM Systems",
    examples: ["Custom Dashboards", "Process Automation", "Internal Tools", "Data Visualization", "API Integrations"],
    color: "text-white"
  },
  {
    title: "Ad Campaigns",
    examples: ["Art Direction", "Copywriting", "Media Buying Strategy", "OOH Billboards", "Digital Posters"],
    color: "text-sd-lime"
  }
];

export default function Capabilities() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-sd-bg pt-32 pb-40 px-6 md:px-12 flex flex-col justify-center">
      <div className="flex flex-col border-t border-neutral-800">
        {capabilities.map((cap, idx) => (
          <motion.div 
            key={idx}
            className="group relative border-b border-neutral-800 flex flex-col lg:flex-row justify-between items-start lg:items-center py-8 sm:py-12 lg:py-16 px-0 lg:px-8 cursor-pointer"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => setHoveredIdx(hoveredIdx === idx ? null : idx)}
          >
            {/* Hover Background */}
            <div 
              className={cn(
                "absolute inset-0 bg-neutral-900/50 transition-opacity duration-500 pointer-events-none",
                hoveredIdx === idx ? "opacity-100" : "opacity-0"
              )}
            />

            <h2 className={cn(
              "font-bebas text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase relative z-10 transition-colors duration-500",
              hoveredIdx === idx ? cap.color : "text-white/40"
            )}>
              {cap.title}
            </h2>

            <div className="relative z-10 mt-8 md:mt-0 flex flex-col items-start md:items-end gap-2 md:text-right">
              {cap.examples.map((ex, i) => (
                <span 
                  key={i} 
                  className={cn(
                    "font-space text-lg md:text-xl transition-all duration-300 transform",
                    hoveredIdx === idx ? "opacity-100 translate-x-0 text-white" : "opacity-0 translate-x-4 md:-translate-x-4 pointer-events-none absolute md:relative"
                  )}
                  style={{ transitionDelay: hoveredIdx === idx ? `${i * 50}ms` : '0ms' }}
                >
                  {ex}
                </span>
              ))}
              {/* Show compact list when not hovered on mobile */}
              <div className="md:hidden font-space text-neutral-500 text-sm flex flex-wrap gap-2 block group-hover:hidden">
                 {cap.examples.slice(0,3).join(", ")}...
              </div>
            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
}
