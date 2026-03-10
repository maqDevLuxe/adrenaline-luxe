import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import carbonTexture from "@/assets/carbon-texture.jpg";

const MaterialSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          className="relative order-2 lg:order-1"
        >
          <img src={carbonTexture} alt="Carbon fiber material closeup" className="w-full aspect-[4/3] object-cover" />
          <div className="absolute inset-0 border-glow" />
        </motion.div>
        <div className="order-1 lg:order-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body"
          >
            Material Innovation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            T1000G <span className="text-gradient-red">CARBON</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground leading-relaxed mb-6"
          >
            Our proprietary layup process uses Toray T1000G—the highest tensile strength carbon fiber available—combined with aerospace-grade resin systems. Each frame undergoes 127 quality inspections.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { val: "T1000G", label: "Carbon Grade" },
              { val: "127", label: "Quality Checks" },
              { val: "830°C", label: "Cure Temperature" },
              { val: "15:1", label: "Stiffness Ratio" },
            ].map((s) => (
              <div key={s.label} className="border-glow p-4">
                <p className="font-display text-lg text-gradient-red">{s.val}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MaterialSection;
