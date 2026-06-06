import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const shapes = [
  { color: "bg-sd-lime", w: 24, h: 24, delay: 0 },
  { color: "bg-sd-coral", w: 20, h: 20, delay: 0.15 },
  { color: "bg-sd-blue", w: 16, h: 16, delay: 0.3 },
  { color: "bg-white", w: 12, h: 12, delay: 0.45 },
];

export function LoadingScreen({ onComplete }: { onComplete: () => void; key?: string }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto';
      setDone(true);
      setTimeout(onComplete, 800);
    }, 1800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[1000] bg-sd-bg flex flex-col justify-center items-center text-white p-8"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex items-center gap-2 mb-8">
        {shapes.map((s, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0, scale: 0 }}
            animate={done ? { y: -40, opacity: 0, scale: 0 } : { y: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: s.delay,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`${s.color} rounded-sm`}
            style={{ width: s.w, height: s.h }}
          />
        ))}
      </div>

      <motion.h1
        key="title"
        className="font-bebas text-5xl sm:text-7xl md:text-9xl uppercase tracking-widest text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        SquarDox
      </motion.h1>

      <motion.p
        className="font-space uppercase tracking-widest text-white/40 text-xs md:text-sm mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Let's create.
      </motion.p>
    </motion.div>
  );
}
