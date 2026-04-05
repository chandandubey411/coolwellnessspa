import { motion } from "framer-motion";
import { gallery } from "../data/spaData";
import { Maximize2, Sparkles } from "lucide-react";

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label-gold"
          >
            Visual Sanctuary
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            A Glimpse of <span className="text-secondary italic text-glow-gold">Infinity</span>
          </motion.h2>
          <div className="gold-divider-luxury mx-auto" />
          <p className="text-white/40 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Step into the sacred geometry of our sanctuary through these captured moments of pure tranquility.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-[2rem] border border-white/5 bg-luxury"
            >
              <img
                src={image}
                alt={`Spa Visual ${index + 1}`}
                className="w-full h-auto object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              
              {/* Luxury Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-secondary" size={20} />
                    <span className="text-white font-heading text-xl font-bold uppercase tracking-widest">Sanctuary Detail</span>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center shadow-2xl"
                  >
                    <Maximize2 size={18} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Background Texture (SVGs) */}
        <div className="mt-24 text-center">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold">More visuals coming soon to our legacy collection</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
