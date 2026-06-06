import { motion } from "motion/react";

const experiments = [
  {
    id: "01",
    title: "Project Zero",
    challenge: "The brand was invisible in a saturated digital landscape. They needed to disrupt the usual tech aesthetic.",
    idea: "Strip everything back to raw brutalism combined with high-end editorial typography.",
    execution: "A fully custom WebGL experience. Interaction driven entirely by cursor velocity.",
    outcome: "400% increase in dwell time. Awwwards Site of the Month.",
    color: "bg-sd-lime",
    textColor: "text-sd-bg"
  },
  {
    id: "02",
    title: "Neon Echo",
    challenge: "A fashion label wanted a digital lookbook that felt like a night out in Tokyo.",
    idea: "Use sound-reactive visualizers combined with horizontal scrolling storytelling.",
    execution: "Custom generative shaders and a headless Shopify integration.",
    outcome: "Sold out experimental collection in 12 hours.",
    color: "bg-sd-coral",
    textColor: "text-sd-bg"
  },
  {
    id: "03",
    title: "Vault OS",
    challenge: "A fintech startup needed a CRM that didn't look like a 90s spreadsheet.",
    idea: "Design it like a command center. Dark mode only. Keyboard-first navigation.",
    execution: "React SPA with complex state orchestration and beautifully animated micro-interactions.",
    outcome: "Team efficiency up 60%. Zero onboarding required.",
    color: "bg-sd-blue",
    textColor: "text-sd-bg"
  }
];

export default function Experiments() {
  return (
    <div className="min-h-screen bg-sd-bg pt-32 pb-40 px-6 md:px-12">
      <header className="mb-24 md:mb-32">
        <h1 className="font-bebas text-5xl sm:text-7xl md:text-[8vw] uppercase leading-none">Experiments</h1>
        <p className="font-space max-w-xl text-lg md:text-2xl mt-6 md:mt-8 text-neutral-400">
          Not a portfolio. A catalog of our attempts to break rules and assemble something new.
        </p>
      </header>

      <div className="flex flex-col gap-40">
        {experiments.map((exp, index) => (
          <motion.article 
            key={exp.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 border-t border-neutral-800 pt-12"
          >
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="font-space text-sm tracking-widest text-neutral-500 uppercase">Experiment {exp.id}</span>
              <h2 className="font-bebas text-6xl md:text-8xl leading-none uppercase">{exp.title}</h2>
              <div className={`w-full aspect-[4/5] mt-8 ${exp.color} p-8 flex items-end overflow-hidden relative group`}>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className={`font-space font-bold text-5xl ${exp.textColor} uppercase mix-blend-multiply opacity-50`}>
                  {exp.id}
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
              <div className="flex flex-col gap-4">
                <h3 className="font-space uppercase tracking-widest text-sd-lime text-sm">Challenge</h3>
                <p className="font-inter text-lg md:text-xl text-neutral-300 leading-relaxed">{exp.challenge}</p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-space uppercase tracking-widest text-sd-coral text-sm">Idea</h3>
                <p className="font-inter text-lg md:text-xl text-neutral-300 leading-relaxed">{exp.idea}</p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-space uppercase tracking-widest text-sd-blue text-sm">Execution</h3>
                <p className="font-inter text-lg md:text-xl text-neutral-300 leading-relaxed">{exp.execution}</p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-space uppercase tracking-widest text-white text-sm">Outcome</h3>
                <p className="font-inter text-lg md:text-xl text-neutral-300 leading-relaxed">{exp.outcome}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
