import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { path: "/", label: "01 Manifesto" },
  { path: "/experiments", label: "02 Experiments" },
  { path: "/capabilities", label: "03 Capabilities" },
  { path: "/collective", label: "04 Collective" },
  { path: "/archive", label: "05 Archive" },
  { path: "/contact", label: "06 Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we are scrolled past a certain point
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center p-6 md:p-10 mix-blend-difference text-white pointer-events-none">
        <div className="pointer-events-auto">
          <Link to="/" className={cn("font-space font-bold text-2xl tracking-tighter uppercase z-50 transition-opacity duration-500", (location.pathname === '/' && !isScrolled) ? "hidden md:block md:opacity-0" : "opacity-100")}>
            SquarDox
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 font-space uppercase text-sm font-medium tracking-widest hover:text-sd-lime transition-colors pointer-events-auto"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#070707] flex flex-col justify-center items-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #FFFFFF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            <nav className="flex flex-col gap-4 items-center">
              {links.map((link, i) => (
                <div key={link.path} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "font-bebas text-4xl sm:text-6xl md:text-8xl hover:text-sd-lime transition-colors uppercase leading-[0.9] block",
                        location.pathname === link.path ? "text-sd-lime" : "text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
