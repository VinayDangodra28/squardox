import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const archiveItems = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  type: ["poster", "website", "branding", "campaign"][Math.floor(Math.random() * 4)],
  height: Math.floor(Math.random() * 3 + 2) * 100, // random height for masonry 200-400
  color: ["bg-neutral-800", "bg-neutral-900", "bg-sd-lime/20", "bg-sd-coral/20", "bg-sd-blue/20"][Math.floor(Math.random() * 5)]
}));

const filters = ["all", "poster", "website", "branding", "campaign"];

export default function Archive() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [items, setItems] = useState(archiveItems);

  useEffect(() => {
    if (activeFilter === "all") {
      setItems(archiveItems);
    } else {
      setItems(archiveItems.filter(item => item.type === activeFilter));
    }
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-sd-bg pt-32 pb-40 px-4 md:px-8">
      <header className="mb-16 md:mb-20">
         <h1 className="font-bebas text-5xl sm:text-7xl md:text-[8vw] uppercase leading-none">Archive</h1>
         
         <div className="flex flex-wrap gap-2 md:gap-4 mt-8 md:mt-12">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "font-space px-6 py-2 rounded-full uppercase tracking-widest text-sm transition-all border",
                  activeFilter === filter 
                    ? "bg-white text-black border-white" 
                    : "border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-400"
                )}
              >
                {filter}
              </button>
            ))}
         </div>
      </header>

      {/* Basic Masonry via CSS Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className={cn(
              "w-full rounded-sm overflow-hidden break-inside-avoid relative group cursor-pointer",
              item.color
            )}
            style={{ height: `${item.height}px` }}
          >
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="font-space uppercase tracking-widest text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
                {item.type}
              </span>
            </div>
            <div className="absolute top-4 left-4 font-inter text-white/30 text-xs">A-{item.id.toString().padStart(3, '0')}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
