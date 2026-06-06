import { motion } from "motion/react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-sd-bg flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="max-w-2xl"
      >
        <p className="font-space tracking-widest uppercase text-sd-lime text-sm md:text-base mb-6">
          Coming Soon
        </p>
        <h1 className="font-bebas text-6xl md:text-[8vw] leading-none uppercase text-white mb-8">
          This page is<br/>
          <span className="text-sd-lime">under construction</span>
        </h1>
        <p className="font-space text-white/50 text-sm md:text-base tracking-wider max-w-md mx-auto">
          We're building something worth the wait. Check back soon.
        </p>
      </motion.div>
    </div>
  );
}
