import { Mail, Phone, MapPin, ChevronRight, Flower2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Full Body Massage",
    "Aroma Therapy",
    "Deep Tissue Massage",
    "Facial & Skin Care",
    "Steam & Sauna",
    "Thai Massage",
  ];

  const socialIcons = [
    { Icon: FaFacebookF, href: "#" },
    { Icon: FaInstagram, href: "#" },
    { Icon: FaTwitter, href: "#" },
  ];

  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden border-t border-white/5 relative">
      {/* Decorative Blur Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none opacity-40 translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand Identity Column */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <Link to="/" className="flex items-center gap-0 group focus:outline-none">
              <img 
                src="/logo.png" 
                alt="Cool Wellness Spa Logo" 
                className="h-20 w-auto object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-110 -ml-4"
              />
              <div className="flex flex-col -ml-4">
                <span className="text-2xl font-bold font-heading tracking-[0.2em] text-white group-hover:text-secondary transition-all duration-500">
                  COOL WELLNESS SPA
                </span>
                <span className="text-[10px] tracking-[0.6em] uppercase text-secondary/70 font-bold mt-2">
                  Sanctuary of Restoration
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed text-center md:text-left max-w-sm">
              Providing elite wellness craftsmanship and a sanctuary of absolute peace in Indirapuram for over 10 years. Your journey to total restoration begins here.
            </p>
            <div className="flex justify-center md:justify-start gap-5">
              {socialIcons.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ y: -5, borderColor: "#C9A14A" }}
                  className="w-12 h-12 border border-white/10 rounded-2xl flex items-center justify-center text-white/40 hover:text-secondary transition-all bg-white/5"
                >
                  <item.Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:ml-10">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-secondary/50">Discovery</h3>
            <ul className="space-y-5">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-secondary hover:translate-x-3 transition-all flex items-center gap-3 group"
                  >
                    <ChevronRight size={14} className="text-secondary/20 group-hover:text-secondary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations Highlight */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-secondary/50">Expertise</h3>
            <ul className="space-y-5">
              {services.map((service) => (
                <li key={service} className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-4 group cursor-default">
                  <div className="w-1 h-1 bg-secondary/20 rounded-full group-hover:w-4 transition-all" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Global Contact Info */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-secondary/50">The Sanctuary</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-5 group">
                <div className="p-3 rounded-xl bg-white/5 text-secondary border border-white/10">
                  <MapPin size={22} />
                </div>
                <address className="not-italic text-white/40 text-sm font-light leading-relaxed group-hover:text-white transition-colors">
                  Shop no. - FF 119, Rajhans Plaza, Orange County, Indirapuram, Ghaziabad, UP 201014
                </address>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="p-3 rounded-xl bg-white/5 text-secondary border border-white/10">
                  <Phone size={22} />
                </div>
                <a href="tel:+919910979770" className="text-white/40 text-sm font-light hover:text-secondary transition-colors font-bold">
                  +91-9910979770
                </a>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="p-3 rounded-xl bg-white/5 text-secondary border border-white/10">
                  <Mail size={22} />
                </div>
                <a href="mailto:cvirat009@gmail.com" className="text-white/40 text-sm font-light hover:text-white transition-colors break-all">
                  cvirat009@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Legacy Bar */}
        <div className="pt-12 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">
            © {currentYear} COOL WELLNESS SPA. All Rights Reserved.
          </p>
          <div className="flex gap-12">
             <Link to="/contact" className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-secondary transition-colors">Privacy Policy</Link>
             <Link to="/contact" className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-secondary transition-colors">Terms of Sanctuary</Link>
          </div>
        </div>
      </div>

      {/* Hero Visual flourish at bottom */}
      <div className="absolute -bottom-32 -left-32 opacity-[0.02] pointer-events-none rotate-45 select-none">
        <Flower2 size={600} className="text-secondary" />
      </div>
    </footer>
  );
};

export default Footer;
