import { useState, useEffect } from "react";
import { Menu, X, PhoneCall, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const activeStyle = "text-secondary font-bold text-glow-gold";
  const inactiveStyle = "text-white/70";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-3 shadow-2xl" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-0 group cursor-pointer focus:outline-none">
          <img 
            src="/logo.png" 
            alt="Cool Wellness Spa Logo" 
            className="h-16 md:h-20 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110 -ml-4"
          />
          <div className="flex flex-col -ml-4">
            <span className="text-xl md:text-2xl font-bold font-heading tracking-widest text-white leading-tight">
              COOL WELLNESS SPA
            </span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-secondary font-medium active-glow">
              Relax • Refresh • Rejuvenate
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => 
                `relative text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:text-secondary ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 w-full h-[1px] bg-secondary shadow-[0_0_10px_rgba(201,161,74,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919910979770"
            className="flex items-center gap-3 px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 bg-secondary text-primary border border-secondary shadow-[0_0_15px_rgba(201,161,74,0.3)] hover:bg-transparent hover:text-secondary"
          >
            <PhoneCall size={14} />
            Book Now
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-secondary hover:bg-secondary/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-primary z-[60] lg:hidden flex flex-col items-center justify-center gap-8 text-center"
          >
            <button 
              className="absolute top-8 right-8 text-secondary"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="mb-12">
              <img 
                src="/logo.png" 
                alt="Cool Wellness Spa Logo" 
                className="h-24 w-auto object-contain drop-shadow-2xl"
              />
              <div className="text-secondary tracking-[0.4em] uppercase text-[10px] font-bold mt-4">
                Sanctuary of Peace
              </div>
            </div>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <NavLink
                  to={link.href}
                  className={({ isActive }) => 
                    `text-3xl font-heading tracking-widest hover:text-secondary transition-colors ${isActive ? "text-secondary" : "text-white"}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                className="btn-gold"
                onClick={() => setIsOpen(false)}
              >
                Inquire Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
