import About from "../components/About";
import { motion } from "framer-motion";

const PageHeader = ({ title }) => (
  <div className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2500&auto=format&fit=crop"
        className="w-full h-full object-cover blur-sm brightness-50"
        alt="Banner"
      />
      <div className="absolute inset-0 bg-primary/40 gradient-to-t from-primary/60" />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center"
    >
      <h1 className="text-5xl md:text-7xl font-bold font-heading text-white uppercase tracking-widest">{title}</h1>
      <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
    </motion.div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="page-fade-in">
      <PageHeader title="About Us" />
      <About isPreview={false} />
    </div>
  );
};

export default AboutPage;
export { PageHeader };
