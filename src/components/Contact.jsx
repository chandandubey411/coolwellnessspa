import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle, XCircle, Loader2 } from "lucide-react";

const InfoCard = ({ icon: Icon, title, content, link }) => (
  <motion.a
    whileHover={{ y: -5 }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group p-8 rounded-[2rem] card-luxury border-white/5 flex flex-col items-center text-center gap-4 transition-all"
  >
    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(201,161,74,0.15)] group-hover:bg-secondary group-hover:text-primary transition-all">
      <Icon size={24} />
    </div>
    <div className="space-y-1">
      <h4 className="text-secondary uppercase tracking-[0.2em] font-bold text-[10px]">{title}</h4>
      <p className="text-white font-heading text-lg font-bold group-hover:text-glow-gold transition-all">{content}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // User will insert key later

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Sanctuary Request Received Successfully!");
        event.target.reset();
      } else {
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      setStatus("error");
      setResult("A disturbance occurred. Please try again or call us directly.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Immersive Dark Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary via-luxury to-primary" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label-gold"
          >
            Connect With Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Embrace The <span className="text-secondary italic">Tranquility</span>
          </motion.h2>
          <div className="gold-divider-luxury mx-auto" />
          <p className="text-white/40 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Our wellness consultants are ready to curate your specialized journey. Reach out to begin your restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          {/* Contact Details & Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoCard 
                icon={Phone} 
                title="Speak With Us" 
                content="+91 99109 79770" 
                link="tel:+919910979770"
              />
              <InfoCard 
                icon={Mail} 
                title="Email Us" 
                content="cvirat009@gmail.com" 
                link="mailto:cvirat009@gmail.com"
              />
              <InfoCard 
                icon={MapPin} 
                title="Our Sanctuary" 
                content="Indirapuram, UP" 
                link="https://goo.gl/maps/..."
              />
              <InfoCard 
                icon={Clock} 
                title="Our Wisdom Hours" 
                content="10 AM - 10 PM Daily" 
                link="#"
              />
            </div>

            {/* Google Maps Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[350px] rounded-[3rem] overflow-hidden border border-secondary/10 shadow-2xl group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.678111634739!2d77.36029049999999!3d28.639407900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbcfabb4e601%3A0x1ca24dc901293521!2sCool%20Wellness%20Spa%20in%20Indirapuram!5e0!3m2!1sen!2sin!4v1712317112345!5m2!1sen!2sin"
                className="w-full h-full grayscale-[0.8] contrast-[1.2] invert-[0.9] hue-rotate-[180deg]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Indirapuram Spa Map"
              />
              <div className="absolute inset-0 bg-secondary/5 opacity-40 pointer-events-none group-hover:opacity-10 transition-opacity" />
            </motion.div>
          </div>

          {/* Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 glass-dark rounded-[3.5rem] border border-secondary/10 shadow-2xl flex flex-col justify-between"
          >
            <div className="mb-10 text-center lg:text-left">
              <h3 className="text-3xl font-heading font-bold text-white mb-2 tracking-wide uppercase">Request A Session</h3>
              <p className="text-white/30 text-sm font-light">Fill in your coordinates and our concierge will reach out to schedule your journey.</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-8">
              <div className="space-y-6">
                {/* Modern Inputs */}
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-primary/50 border-b border-white/10 p-4 pt-10 text-white font-light focus:outline-none focus:border-secondary transition-all rounded-2xl group-hover:bg-primary/80"
                    placeholder=" "
                    id="name"
                  />
                  <label htmlFor="name" className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 transition-all pointer-events-none group-focus-within:text-secondary">Your Name</label>
                </div>

                <div className="relative group">
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-primary/50 border-b border-white/10 p-4 pt-10 text-white font-light focus:outline-none focus:border-secondary transition-all rounded-2xl group-hover:bg-primary/80"
                    placeholder=" "
                    id="phone"
                  />
                  <label htmlFor="phone" className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 transition-all pointer-events-none group-focus-within:text-secondary">Phone Number / WhatsApp</label>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-primary/50 border-b border-white/10 p-4 pt-10 text-white font-light focus:outline-none focus:border-secondary transition-all rounded-2xl group-hover:bg-primary/80 resize-none"
                    placeholder=" "
                    id="message"
                  />
                  <label htmlFor="message" className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 transition-all pointer-events-none group-focus-within:text-secondary">Desired Service / Preferred Time</label>
                </div>
              </div>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full py-5 btn-gold flex items-center justify-center gap-4 group disabled:opacity-50 disabled:grayscale transition-all`}
                >
                  {status === "sending" ? (
                    <>Processing Sanctuary Request <Loader2 className="animate-spin" size={16} /></>
                  ) : (
                    <>Summon Tranquility <Send size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </motion.button>
                
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl flex items-center gap-3 text-sm font-bold ${
                      status === "success" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {status === "success" ? <CheckCircle size={18} /> : <XCircle size={18} />}
                    {result}
                  </motion.div>
                )}
              </div>
            </form>

            <div className="mt-12 flex items-center justify-center gap-6 text-white/30 text-[9px] uppercase tracking-widest font-bold">
              <span className="flex items-center gap-2"><MessageCircle size={14} className="text-secondary" /> Instant Response</span>
              <span className="flex items-center gap-2"><Clock size={14} className="text-secondary" /> Concierge Available</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
