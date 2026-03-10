import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 section-padding text-center relative overflow-hidden">
      {/* Background parallax text */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap parallax-text"
        animate={{ x: [0, 300] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        UPGRADE • DOMINATE • WIN • PERFORM • UPGRADE • DOMINATE • WIN •
      </motion.div>

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body"
        >
          Ready to Upgrade?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          ELEVATE YOUR<br /><span className="text-gradient-red">PERFORMANCE</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-lg mx-auto mb-10"
        >
          Join the ranks of elite athletes who trust VORTEX to deliver results when it matters most.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link
            to="/bikes"
            className="gradient-red-glow text-primary-foreground font-body text-sm uppercase tracking-wider px-10 py-4 hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            Shop Bikes
          </Link>
          <Link
            to="/contact"
            className="border border-foreground/30 text-foreground font-body text-sm uppercase tracking-wider px-10 py-4 hover:border-primary hover:text-primary transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
