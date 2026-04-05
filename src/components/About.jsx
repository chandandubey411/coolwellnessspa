import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const About = ({ isPreview = false }) => {
  const stats = [
    { label: "Expert Therapists", value: "12+", icon: Award },
    { label: "Happy Clients", value: "5000+", icon: Heart },
    { label: "Treatment Rooms", value: "8", icon: Sparkles },
  ];

  const highlights = [
    { title: "Personalized Care", desc: "Every touch is tailored to your body's specific rhythm and tension." },
    { title: "Pure Organic Oils", desc: "We source only the finest, cold-pressed botanical extracts for deep healing." },
    { title: "Tranquil Ambiance", desc: "A sound-isolated sanctuary designed to let the world fade away." },
  ];

  return (
    <section id="about" className={`py-24 md:py-32 relative overflow-hidden bg-primary text-white`}>
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-20 ${isPreview ? "" : "lg:flex-row-reverse"}`}>
          {/* Editorial Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: isPreview ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative group"
          >
            <div className="relative z-10 p-4 border border-secondary/20 rounded-2xl">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={isPreview ? "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop" : "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2000&auto=format&fit=crop"}
                  alt="Spa Sanctuary"
                  className="w-full h-[600px] object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
            
            {/* Floating Luxury Detail */}
            <motion.div
              initial={{ rotate: -10, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -top-10 -left-10 z-20 bg-secondary/20 backdrop-blur-xl border border-secondary/30 p-8 rounded-full hidden xl:flex items-center justify-center flex-col shadow-[0_0_20px_rgba(201,161,74,0.2)]"
            >
              <span className="text-secondary font-bold text-3xl">10Y</span>
              <span className="text-[8px] uppercase tracking-widest text-white/70">Excellence</span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 space-y-12"
          >
            <div>
              <span className="section-label-gold">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Beyond Relaxation,<br />
                <span className="text-secondary italic font-light">True Restoration.</span>
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
                Experience a haven where time slows down. At Cool Wellness Spa, we redefine the recovery journey through elite craftsmanship and botanical precision.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {highlights.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="mt-1 w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_rgba(201,161,74,0.8)] group-hover:scale-150 transition-transform" />
                  <div className="space-y-1">
                    <h4 className="text-secondary uppercase tracking-[0.2em] font-bold text-xs">{item.title}</h4>
                    <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-10 border-t border-white/5 pt-10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <h4 className="text-white font-heading text-2xl group-hover:text-secondary transition-colors mb-1">{stat.value}</h4>
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              {isPreview ? (
                <Link to="/about" className="btn-gold">
                  Explore Our Legacy
                </Link>
              ) : (
                <Link to="/contact" className="btn-outline-gold">
                  Inquire Now
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
