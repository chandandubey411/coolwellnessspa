import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowDown, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-primary">
      {/* Immersive Parallax Background */}
      <motion.div 
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://cache.marriott.com/content/dam/marriott-renditions/SYXEB/syxeb-spa-5353-hor-wide.jpg"
          alt="Luxury Spa Path"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/60" />
      </motion.div>

      {/* Floating Sparkles Illustration (SVGs) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-10">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-1/4"
        >
          <Sparkles className="text-secondary w-12 h-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4"
        >
          <Sparkles className="text-secondary w-8 h-8" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ letterSpacing: "0.4em", opacity: 0 }}
            animate={{ letterSpacing: "0.6em", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-secondary font-bold text-[10px] uppercase tracking-[0.6em] mb-6 block text-glow-gold"
          >
            Sanctuary of Serenity
          </motion.span>
          
          <h1 className="text-5xl md:text-8xl font-bold font-heading text-white leading-[1.1] mb-8">
            RELAX. REFRESH.<br />
            <span className="italic text-secondary font-light">REJUVENATE.</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Indulge in an elite wellness journey where every sense is celebrated. Discover the art of tranquility in the heart of Rajhans Plaza, Indirapuram.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact" className="btn-gold group flex items-center gap-4">
              Book Appointment
              <Play size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="btn-outline-gold">
              Explore Our Menu
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-secondary/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
