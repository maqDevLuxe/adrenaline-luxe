import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Globe, Wrench } from "lucide-react";

const WarrantySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 section-padding">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body">Global Coverage</p>
        <h2 className="text-3xl md:text-5xl font-bold">LIFETIME <span className="text-gradient-red">WARRANTY</span></h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          { icon: Shield, title: "Lifetime Frame Warranty", desc: "Every VORTEX frame is covered for life against manufacturing defects." },
          { icon: Globe, title: "48-Country Network", desc: "Authorized service centers across 48 countries for immediate support." },
          { icon: Wrench, title: "Crash Replacement", desc: "50% off frame replacement within 2 years. Because racing happens." },
        ].map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.15 }}
            className="border-glow p-8 text-center"
          >
            <w.icon size={28} className="text-primary mx-auto mb-4" />
            <h3 className="font-display text-xs tracking-wider mb-3">{w.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WarrantySection;
