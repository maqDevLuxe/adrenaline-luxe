import { motion } from "framer-motion";
import heroBike from "@/assets/hero-bike.jpg";

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBike} alt="VORTEX carbon fiber racing bike" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
    </div>

    {/* Parallax background text */}
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap parallax-text"
      animate={{ x: [0, -500] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      SPEED • CARBON • PERFORMANCE • AERODYNAMICS • VORTEX •
    </motion.div>

    {/* Content */}
    <div className="relative z-10 text-center section-padding">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-6"
      >
        Carbon Fiber Engineering
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6"
      >
        BORN TO<br />
        <span className="text-gradient-red">DOMINATE</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="font-body text-muted-foreground max-w-md mx-auto mb-10 text-lg"
      >
        Pro-level carbon fiber bikes engineered for those who refuse to settle for second place.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex gap-4 justify-center"
      >
        <a href="/bikes" className="gradient-red-glow text-primary-foreground font-body text-sm uppercase tracking-wider px-8 py-3 hover:opacity-90 transition-opacity">
          Explore Bikes
        </a>
        <a href="/tech" className="border border-foreground/30 text-foreground font-body text-sm uppercase tracking-wider px-8 py-3 hover:border-primary hover:text-primary transition-colors">
          Our Tech
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
    </motion.div>
  </section>
);

export default HeroSection;
