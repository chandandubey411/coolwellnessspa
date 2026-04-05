import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../data/spaData";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-primary overflow-hidden relative">
      {/* Decorative Gold Rings */}
      <div className="absolute top-1/2 left-0 w-96 h-96 border border-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] border border-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-label-gold">Client Voices</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            The Sanctuary <span className="text-secondary italic">Experience</span>
          </h2>
          <div className="gold-divider-luxury mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto relative h-[450px] md:h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className="absolute inset-0 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="w-40 h-40 md:w-64 md:h-80 shrink-0 relative p-1 border border-secondary/20 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-full h-full object-cover rounded-2xl filter brightness-90 grayscale-[0.2]"
                />
                <div className="absolute -bottom-4 -right-4 bg-secondary p-4 rounded-2xl text-primary shadow-2xl">
                  <Quote size={28} />
                </div>
              </div>

              <div className="flex-1 space-y-8 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-secondary text-secondary shadow-[0_0_10px_rgba(201,161,74,0.5)]" />
                  ))}
                </div>

                <p className="text-white/70 text-xl font-light italic leading-relaxed font-serif">
                  "{testimonials[index].feedback}"
                </p>

                <div className="space-y-1">
                  <h4 className="text-secondary text-xl font-bold uppercase tracking-widest">{testimonials[index].name}</h4>
                  <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-0 right-0 md:bottom-20 md:right-0 flex gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 shadow-[0_0_15px_rgba(201,161,74,0.2)]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Floating Slide Progress */}
        <div className="flex justify-center gap-4 mt-20">
          {testimonials.map((_, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ width: i === index ? 40 : 8, backgroundColor: i === index ? "#C9A14A" : "rgba(255,255,255,0.1)" }}
              className="h-1 rounded-full cursor-pointer"
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
