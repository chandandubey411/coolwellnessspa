import { motion } from "framer-motion";
import { services } from "../data/spaData";
import { Clock, IndianRupee, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Services = ({ isPreview = false }) => {
  const displayedServices = isPreview ? services.slice(0, 3) : services;

  return (
    <section id="services" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Blur and Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, #C9A14A 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label-gold"
          >
            Curated Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Our Elite <span className="text-secondary italic">Menu du Spa</span>
          </motion.h2>
          <div className="gold-divider-luxury mx-auto" />
          <p className="text-white/50 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Embark on a customized sanctuary journey where traditional wisdom meets clinical precision.
          </p>
        </div>

        {/* Luxury Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -15 }}
              className="group relative h-[550px] overflow-hidden rounded-[2.5rem] card-luxury border-white/5"
            >
              {/* Background Full Image */}
              <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover filter brightness-50 contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-end text-white text-left">
                <div className="absolute top-10 left-10 p-3 rounded-2xl bg-secondary/20 backdrop-blur-md border border-secondary/30 text-secondary shadow-[0_0_15px_rgba(201,161,74,0.3)]">
                  <service.icon size={24} />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-3xl font-heading font-bold letter-spacing-[0.05em] group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between pb-6 border-b border-white/10 group-hover:border-secondary/40 transition-colors">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white/80">
                      <Clock size={16} className="text-secondary" />
                      {service.duration}
                    </div>
                    <div className="flex items-center gap-1 text-secondary text-2xl font-bold font-heading">
                      <span className="text-xs mr-1 text-white/40">From</span>
                      <IndianRupee size={16} />
                      {service.price.split(' ')[0].replace('₹', '')}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 text-secondary uppercase font-bold tracking-[0.25em] text-[10px] py-1 border-b border-transparent group-hover:border-secondary transition-all"
                    >
                      Book Your Session <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Hover Decorative Sparkle */}
              <motion.div
                className="absolute top-10 right-10 opacity-0 group-hover:opacity-60 transition-opacity"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={24} className="text-secondary" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA Footer Section */}
        <div className="mt-24 text-center">
          {isPreview ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/services" className="btn-gold group">
                Full Collection Menu <ArrowRight className="inline-block ml-3 group-hover:ml-5 transition-all" size={16} />
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-10">
              <div className="p-12 glass-dark rounded-[3rem] border border-secondary/10">
                <h4 className="text-xl text-white font-bold mb-4 uppercase tracking-[0.2em] font-heading">Personalized Sessions</h4>
                <p className="text-white/40 font-light max-w-xl mx-auto mb-8">
                  Not sure which treatment suits you best? Our senior spa consultants are available for immediate private consultations to curate a journey unique to your needs.
                </p>
                <Link to="/contact" className="btn-outline-gold">
                  Book A Consultation
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
