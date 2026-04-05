import { motion } from "framer-motion";
import { Check, Sparkles, Star, Zap } from "lucide-react";
import { pricing } from "../data/spaData";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-primary relative">
      {/* Immersive background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-20">
          <span className="section-label-gold">Membership & Packages</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Invest In Your <span className="text-secondary italic">Inner Harmony</span>
          </h2>
          <div className="gold-divider-luxury mx-auto" />
          <p className="text-white/50 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Curated wellness journeys designed for deep restoration and long-term vitality. Choose your path to tranquility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative p-10 rounded-[3rem] card-luxury ${
                plan.recommended 
                  ? "border-secondary/40 shadow-[0_0_40px_rgba(201,161,74,0.15)] ring-1 ring-secondary/20" 
                  : "border-white/5"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-secondary text-primary font-bold text-[10px] px-6 py-2 rounded-full uppercase tracking-widest shadow-2xl flex items-center gap-2">
                  <Star size={12} />
                  Signature Choice
                </div>
              )}

              <div className="mb-10 text-center flex flex-col items-center">
                <div className={`w-16 h-16 rounded-3xl mb-6 flex items-center justify-center ${plan.recommended ? "bg-secondary/20 text-secondary" : "bg-white/5 text-white/40"}`}>
                  {index === 0 ? <Check size={28} /> : index === 1 ? <Sparkles size={28} /> : <Zap size={28} />}
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2 uppercase tracking-widest">{plan.title}</h3>
                <div className="flex items-end justify-center gap-1 group">
                  <span className="text-4xl md:text-5xl font-heading font-bold text-secondary text-glow-gold transition-all group-hover:scale-110">
                    {plan.price}
                  </span>
                  <span className="text-[10px] uppercase text-white/30 pb-2 tracking-widest font-bold">/ Project Session</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/5 mb-10" />

              <ul className="space-y-6 mb-12 flex-1 text-left">
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-4 text-white/60 text-sm font-light hover:text-white transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-secondary" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full py-4 rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 block ${
                  plan.recommended 
                    ? "btn-gold" 
                    : "btn-outline-gold"
                }`}
              >
                Inquire For Details
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Floating Luxury Detail */}
        <div className="mt-24 p-10 glass-dark rounded-[3.5rem] border border-secondary/10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-heading font-bold text-white mb-2 uppercase tracking-widest">Custom VIP Experiences</h4>
            <p className="text-white/40 text-sm font-light max-w-xl">
              We offer exclusive private sessions and full-day sanctuary takeovers for groups or individuals seeking absolute solitude.
            </p>
          </div>
          <Link to="/contact" className="btn-gold whitespace-nowrap">
            Curate Your Day
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
