import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const questions = [
  "What are you building?",
  "What are you fixing?",
  "What are you dreaming about?"
];

export default function Contact() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(["", "", ""]);
  
  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(step + 1); // move to final traditional form fields if needed
    }
  };

  const isComplete = step >= questions.length;

  return (
    <div className="min-h-screen bg-sd-bg pt-32 pb-40 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="font-bebas text-5xl sm:text-6xl md:text-[8vw] uppercase leading-none">We're</h1>
          <h1 className="font-bebas text-5xl sm:text-6xl md:text-[8vw] uppercase leading-none text-sd-lime">Listening</h1>
        </div>
        
        <div className="mt-20 font-space text-neutral-500 max-w-sm">
          <p>Tell us about your project.</p>
          <p className="mt-4">We do not accept every project. We work with founders and creators who want to build something unforgettable.</p>
        </div>
      </div>

      <div className="flex flex-col justify-center min-h-[40vh] lg:min-h-0">
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-8 w-full"
            >
              <h2 className="font-space text-3xl md:text-5xl font-bold text-white">
                {questions[step]}
              </h2>
              <textarea
                autoFocus
                className="w-full bg-transparent border-b-2 border-neutral-700 focus:border-sd-lime outline-none py-4 font-inter text-xl text-white resize-none transition-colors"
                rows={3}
                placeholder="Type your answer..."
                value={answers[step]}
                onChange={(e) => {
                  const newAnswers = [...answers];
                  newAnswers[step] = e.target.value;
                  setAnswers(newAnswers);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    if(answers[step].trim() !== '') handleNext();
                  }
                }}
              />
              <div className="flex justify-between items-center mt-8">
                <span className="font-space text-neutral-500">0{step + 1} / 03</span>
                <button 
                  onClick={handleNext}
                  disabled={answers[step].trim() === ''}
                  className="font-space uppercase tracking-widest text-sm bg-white text-black px-8 py-4 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-sd-lime transition-colors"
                >
                  Next
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="final"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-8 w-full"
            >
              <h2 className="font-space text-3xl font-bold text-sd-lime">
                Almost done.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-neutral-700 outline-none py-4 font-inter text-white focus:border-sd-lime transition-colors"/>
                <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-neutral-700 outline-none py-4 font-inter text-white focus:border-sd-lime transition-colors"/>
              </div>
              <button className="font-space uppercase tracking-widest bg-sd-lime text-black px-8 py-6 w-full font-bold mt-8 hover:bg-white transition-colors">
                Send Message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
