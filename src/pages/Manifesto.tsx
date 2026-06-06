import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Overall scroll height increased to 2000vh for more breathing room

  // Intro Phase (0 to 0.10)
  const introOpacity = useTransform(scrollYProgress, [0.05, 0.10], [1, 0]);
  const introY = useTransform(scrollYProgress, [0.05, 0.10], [0, -50]);
  const introVis = useTransform(scrollYProgress, v => v < 0.12 ? "visible" : "hidden") as any;

  // Escaping objects - separate visibility, stays visible longer
  const escVis = useTransform(scrollYProgress, v => v < 0.22 ? "visible" : "hidden") as any;

  const esc1Y = useTransform(scrollYProgress, [0.02, 0.18], ["120vh", "-120vh"]);
  const esc1R = useTransform(scrollYProgress, [0.02, 0.18], [0, -35]);
  const esc1S = useTransform(scrollYProgress, [0.02, 0.18], [0.5, 1.5]);

  const esc2Y = useTransform(scrollYProgress, [0.04, 0.20], ["120vh", "-120vh"]);
  const esc2R = useTransform(scrollYProgress, [0.04, 0.20], [0, 45]);
  const esc2X = useTransform(scrollYProgress, [0.04, 0.20], [0, 60]);
  const esc2S = useTransform(scrollYProgress, [0.04, 0.20], [0.5, 1.3]);

  const esc3Y = useTransform(scrollYProgress, [0.03, 0.19], ["120vh", "-100vh"]);
  const esc3R = useTransform(scrollYProgress, [0.03, 0.19], [0, 15]);
  const esc3S = useTransform(scrollYProgress, [0.03, 0.19], [0.7, 1.2]);


  // Experiments Glimpse (0.13 to 0.33) - smoother fades
  const expOpacity = useTransform(scrollYProgress, [0.13, 0.20, 0.26, 0.33], [0, 1, 1, 0]);
  const expScale = useTransform(scrollYProgress, [0.13, 0.33], [0.95, 1.05]);
  const expVis = useTransform(scrollYProgress, v => v > 0.11 && v < 0.35 ? "visible" : "hidden") as any;

  // Capabilities Glimpse (0.34 to 0.54) - smoother fades
  const capOpacity = useTransform(scrollYProgress, [0.34, 0.40, 0.48, 0.54], [0, 1, 1, 0]);
  const capScale = useTransform(scrollYProgress, [0.34, 0.54], [0.95, 1.05]);
  const capVis = useTransform(scrollYProgress, v => v > 0.32 && v < 0.56 ? "visible" : "hidden") as any;
  const capX1 = useTransform(scrollYProgress, [0.34, 0.54], [0, -300]);
  const capX2 = useTransform(scrollYProgress, [0.34, 0.54], [0, 300]);

  // Collective Glimpse (0.55 to 0.75) - smoother fades
  const colOpacity = useTransform(scrollYProgress, [0.55, 0.61, 0.69, 0.75], [0, 1, 1, 0]);
  const colScale = useTransform(scrollYProgress, [0.55, 0.75], [0.95, 1.05]);
  const colVis = useTransform(scrollYProgress, v => v > 0.53 && v < 0.77 ? "visible" : "hidden") as any;
  const colGap = useTransform(scrollYProgress, [0.55, 0.75], [4, 60]);

  // Archive Glimpse (0.76 to 0.92) - wider range, stays longer
  const arcOpacity = useTransform(scrollYProgress, [0.76, 0.82, 0.88, 0.92], [0, 1, 1, 0]);
  const arcScale = useTransform(scrollYProgress, [0.76, 0.92], [0.95, 1.05]);
  const arcVis = useTransform(scrollYProgress, v => v > 0.74 && v < 0.94 ? "visible" : "hidden") as any;
  const arcPersp = useTransform(scrollYProgress, [0.76, 0.92], [50, 15]);

  // Contact / End (0.86 to 1.0) - appears earlier, stays much longer
  const conOpacity = useTransform(scrollYProgress, [0.86, 0.93], [0, 1]);
  const conVis = useTransform(scrollYProgress, v => v > 0.84 ? "visible" : "hidden") as any;
  const conY = useTransform(scrollYProgress, [0.86, 1], [50, 0]);

  return (
    <div ref={containerRef} className="relative bg-sd-bg h-[2000vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* PHASE 0: Intro & Escaping Projects */}
        <motion.div 
          style={{ opacity: introOpacity, y: introY, visibility: introVis }} 
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-50 text-white"
        >
          <motion.h1 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-bebas text-[15vw] leading-[0.8] mb-8 uppercase text-white drop-shadow-2xl"
          >
            SquarDox
          </motion.h1>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-space uppercase tracking-widest text-sm md:text-lg flex flex-col gap-2 text-white/70"
          >
            <p>Four people.</p>
            <p>Too many ideas.</p>
            <p>Not enough sleep.</p>
          </motion.div>
        </motion.div>

        {/* Escaping Projects Animation */}
        <motion.div style={{ y: esc1Y, rotate: esc1R, scale: esc1S, visibility: escVis }} className="absolute left-[5%] md:left-[10%] z-20 w-24 sm:w-32 md:w-64 h-36 sm:h-48 md:h-80 bg-sd-coral rounded-sm shadow-2xl flex items-center justify-center border border-white/20">
            <span className="font-bebas text-black text-2xl sm:text-3xl md:text-6xl opacity-40 -rotate-90 tracking-widest">CREATE</span>
        </motion.div>
        <motion.div style={{ y: esc2Y, rotate: esc2R, x: esc2X, scale: esc2S, visibility: escVis }} className="absolute right-[5%] md:right-[15%] z-20 w-28 sm:w-40 md:w-72 h-28 sm:h-40 md:h-72 bg-sd-blue rounded-full shadow-2xl flex items-center justify-center blur-[1px]">
            <span className="font-space font-bold text-black text-xs sm:text-sm md:text-2xl opacity-40 uppercase tracking-widest">VISION</span>
        </motion.div>
        <motion.div style={{ y: esc3Y, rotate: esc3R, scale: esc3S, visibility: escVis }} className="absolute left-[5%] sm:left-[10%] md:left-[35%] z-20 w-[120px] sm:w-[160px] md:w-[400px] h-[80px] sm:h-[120px] md:h-[300px] bg-sd-lime shadow-2xl flex flex-col justify-between p-2 sm:p-3 md:p-8">
            <div className="w-full h-0.5 sm:h-1 md:h-2 bg-black/20" />
            <span className="font-bebas text-[24px] sm:text-[32px] md:text-[80px] leading-none text-black opacity-40 self-end">BRAND</span>
        </motion.div>

        {/* PHASE 1: Experiments */}
        <motion.div 
          style={{ opacity: expOpacity, scale: expScale, visibility: expVis }} 
          className="absolute inset-0 flex items-center justify-center z-30 px-4"
        >
          {/* Animated Background Elements for visual richness */}
          <motion.div style={{ y: useTransform(scrollYProgress, [0.13, 0.33], [200, -200]), rotate: -15 }} className="absolute left-[5%] md:left-[15%] top-[20%] w-48 h-64 bg-sd-coral/20 border border-sd-coral/40 backdrop-blur-md hidden md:flex items-center justify-center border-dashed">
            <span className="font-bebas text-sd-coral text-4xl -rotate-90 tracking-widest">IDEAS</span>
          </motion.div>
          <motion.div style={{ y: useTransform(scrollYProgress, [0.13, 0.33], [-100, 300]), rotate: 10 }} className="absolute right-[5%] md:right-[15%] top-[40%] w-64 h-48 bg-sd-blue/20 border border-sd-blue/40 backdrop-blur-md hidden md:flex items-center justify-center rounded-[50px]">
            <span className="font-bebas text-sd-blue text-4xl tracking-widest">BUILD</span>
          </motion.div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
              <p className="font-space tracking-widest uppercase text-sd-coral text-xs sm:text-sm md:text-base mb-4 sm:mb-6 bg-sd-bg/50 px-3 sm:px-4 py-1 rounded-full backdrop-blur-md border border-white/10">Manifesto 01</p>
              <h2 className="font-bebas text-[10vw] sm:text-5xl md:text-[7vw] leading-none uppercase max-w-6xl mx-auto mb-6 sm:mb-10 text-white drop-shadow-2xl">
                  We don't sell websites.<br/>
                  <span className="text-sd-coral">We build digital first impressions.</span>
              </h2>
              <p className="font-space text-xs sm:text-sm md:text-base uppercase tracking-widest text-white/30 border border-dashed border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                Experiments — Coming Soon
              </p>
          </div>
        </motion.div>

        {/* PHASE 2: Capabilities */}
        <motion.div 
          style={{ opacity: capOpacity, scale: capScale, visibility: capVis }} 
          className="absolute inset-0 flex items-center justify-center z-30 px-4"
        >
          <div className="absolute inset-0 flex flex-col justify-center gap-6 md:gap-16 opacity-10 pointer-events-none -rotate-3 overflow-hidden">
             <motion.div style={{ x: capX1 }} className="whitespace-nowrap font-bebas text-[15vw] md:text-[10vw] tracking-wider text-sd-lime">BRANDING BRANDING BRANDING BRANDING BRANDING</motion.div>
             <motion.div style={{ x: capX2 }} className="whitespace-nowrap font-bebas text-[15vw] md:text-[10vw] tracking-wider text-white">EXPERIENCES EXPERIENCES EXPERIENCES EXPERIENCES</motion.div>
             <motion.div style={{ x: capX1 }} className="whitespace-nowrap font-bebas text-[15vw] md:text-[10vw] tracking-wider text-sd-lime">SOCIAL SOCIAL SOCIAL SOCIAL SOCIAL</motion.div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
              <p className="font-space tracking-widest uppercase text-sd-lime text-xs sm:text-sm md:text-base mb-4 sm:mb-6 bg-sd-bg/50 px-3 sm:px-4 py-1 rounded-full backdrop-blur-md border border-white/10">Manifesto 02</p>
              <h2 className="font-bebas text-[10vw] sm:text-5xl md:text-[7vw] leading-none uppercase max-w-6xl mx-auto mb-6 sm:mb-10 text-white drop-shadow-2xl">
                  We don't design posts.<br/>
                  <span className="text-sd-lime">We create reasons to stop scrolling.</span>
              </h2>
              <p className="font-space text-xs sm:text-sm md:text-base uppercase tracking-widest text-white/30 border border-dashed border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                Capabilities — Coming Soon
              </p>
          </div>
        </motion.div>

        {/* PHASE 3: Collective */}
        <motion.div 
          style={{ opacity: colOpacity, scale: colScale, visibility: colVis }} 
          className="absolute inset-0 flex items-center justify-center z-30 px-4"
        >
          <motion.div style={{ gap: colGap }} className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none px-4">
             <div className="w-full max-w-[12vw] h-[80vh] bg-white mix-blend-overlay rounded-t-full" />
             <div className="w-full max-w-[12vw] h-[60vh] bg-sd-coral mix-blend-overlay rounded-b-full" />
             <div className="w-full max-w-[12vw] h-[90vh] bg-sd-blue mix-blend-overlay rounded-full" />
             <div className="w-full max-w-[12vw] h-[70vh] bg-sd-lime mix-blend-overlay border border-white" />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center text-center">
              <p className="font-space tracking-widest uppercase text-sd-blue text-xs sm:text-sm md:text-base mb-4 sm:mb-6 bg-sd-bg/50 px-3 sm:px-4 py-1 rounded-full backdrop-blur-md border border-white/10">Manifesto 03</p>
              <h2 className="font-bebas text-[10vw] sm:text-5xl md:text-[7vw] leading-none uppercase max-w-6xl mx-auto mb-6 sm:mb-10 text-white drop-shadow-2xl">
                  Not an agency.<br/>
                  <span className="text-sd-blue">A shared digital mind.</span>
              </h2>
              <p className="font-space text-xs sm:text-sm md:text-base uppercase tracking-widest text-white/30 border border-dashed border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                Collective — Coming Soon
              </p>
          </div>
        </motion.div>

        {/* PHASE 4: Archive */}
        <motion.div 
          style={{ opacity: arcOpacity, scale: arcScale, visibility: arcVis }} 
          className="absolute inset-0 flex items-center justify-center z-30 px-4"
        >
          <motion.div 
            className="absolute inset-0 opacity-[0.25] pointer-events-none overflow-hidden" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)', 
              backgroundSize: '80px 80px', 
              transform: useTransform(arcPersp, p => `perspective(1000px) rotateX(${p}deg) scale(2.5)`), 
              transformOrigin: 'top center' 
            }} 
          />

          <div className="relative z-10 flex flex-col items-center text-center">
              <p className="font-space tracking-widest uppercase text-neutral-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 bg-sd-bg/50 px-3 sm:px-4 py-1 rounded-full backdrop-blur-md border border-white/10">Manifesto 04</p>
              <h2 className="font-bebas text-[10vw] sm:text-5xl md:text-[7vw] leading-none uppercase max-w-6xl mx-auto mb-6 sm:mb-10 text-white drop-shadow-2xl">
                  Everything we've ever touched.<br/>
                  <span className="text-neutral-500">Archived.</span>
              </h2>
              <p className="font-space text-xs sm:text-sm md:text-base uppercase tracking-widest text-white/30 border border-dashed border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                Archive — Coming Soon
              </p>
          </div>
        </motion.div>

        {/* PHASE 5: Contact */}
        <motion.div 
          style={{ opacity: conOpacity, y: conY, visibility: conVis }} 
          className="absolute inset-0 flex items-center justify-center z-30 bg-sd-bg px-4"
        >
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #FFFFFF 2px, transparent 2px)', backgroundSize: '60px 60px' }} />
          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-sm md:max-w-none">
              <p className="font-space tracking-widest uppercase text-sd-lime text-xs sm:text-sm md:text-base mb-6 sm:mb-8">Let's talk</p>
              <h2 className="font-bebas text-[15vw] sm:text-5xl md:text-[10vw] leading-none uppercase max-w-5xl mx-auto mb-10 sm:mb-16 text-white drop-shadow-2xl">
                  Ready to build something?
              </h2>
              <Link to="/contact" className="w-full md:w-auto px-6 md:px-16 py-4 md:py-8 border-2 border-sd-lime text-sd-lime font-space uppercase tracking-widest font-bold hover:bg-sd-lime hover:text-black transition-all duration-300 text-sm sm:text-base md:text-2xl shadow-[0_0_40px_rgba(223,255,0,0.2)] hover:shadow-[0_0_60px_rgba(223,255,0,0.4)]">
                  Get in Touch
              </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
