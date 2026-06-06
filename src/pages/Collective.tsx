import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const members = [
  {
    id: "visionary",
    name: "Ketki Pawar",
    title: "The Visionary",
    role: "Art Director",
    skills: ["Visual Storytelling", "Brand Systems", "Creative Direction"],
    bgColor: "bg-sd-bg",
    accentColor: "text-sd-lime",
    font: "font-bebas",
    theme: "dark"
  },
  {
    id: "maker",
    name: "Sumeet Gawde",
    title: "The Maker",
    role: "Graphic Designer",
    skills: ["Posters", "Campaigns", "Packaging"],
    bgColor: "bg-white",
    accentColor: "text-sd-coral",
    font: "font-space",
    theme: "light"
  },
  {
    id: "architect",
    name: "Sudiksha Pawar",
    title: "The Architect",
    role: "Web Developer",
    skills: ["Interfaces", "Systems", "Experiences"],
    bgColor: "bg-sd-blue",
    accentColor: "text-sd-bg",
    font: "font-inter",
    theme: "light"
  },
  {
    id: "builder",
    name: "Vinay Dangodra",
    title: "The Builder",
    role: "Web Developer",
    skills: ["CRM Systems", "Applications", "Automation"],
    bgColor: "bg-sd-coral",
    accentColor: "text-sd-lime",
    font: "font-bebas font-outline",
    theme: "dark"
  }
];

export default function Collective() {
  return (
    <div className="w-full relative">
      {members.map((member, idx) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className={cn(
            "min-h-screen w-full flex flex-col justify-center px-6 md:px-20 relative overflow-hidden",
            member.bgColor,
            member.theme === "dark" ? "text-white" : "text-black"
          )}
        >
          <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          <div className="relative z-10 max-w-5xl">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-space uppercase tracking-widest text-sm md:text-xl font-bold mb-4"
            >
              {member.role}
            </motion.p>
            
            <motion.h1 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={cn(
                "text-5xl sm:text-6xl md:text-[8vw] leading-none uppercase mb-2 break-words xl:break-normal",
                member.font,
                member.id === "builder" ? "text-transparent stroke-white stroke-2" : ""
              )}
              style={member.id === "builder" ? { WebkitTextStroke: "2px currentColor" } : {}}
            >
              {member.name}
            </motion.h1>

            <motion.h2 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={cn(
                "text-3xl sm:text-4xl md:text-7xl uppercase font-bebas",
                member.accentColor
              )}
            >
              "{member.title}"
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              {member.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className={cn(
                    "px-4 py-2 border rounded-full font-space text-sm uppercase tracking-wider",
                    member.theme === "dark" ? "border-white/30" : "border-black/30"
                  )}
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-10 right-10 z-20">
             <div className={cn("font-space text-xl md:text-3xl font-bold opacity-50", member.theme === "dark" ? "text-white" : "text-black")}>
               0{idx + 1} / 0{members.length}
             </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
