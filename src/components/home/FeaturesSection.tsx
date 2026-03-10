import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wind, Layers, Gauge } from "lucide-react";
import windTunnel from "@/assets/wind-tunnel.jpg";

const features = [
  { icon: Wind, title: "Aero Dynamics", desc: "Wind-tunnel validated tube profiles reduce drag by 18% vs previous generation." },
  { icon: Layers, title: "Carbon Layup", desc: "Uni-directional T1000G carbon with variable modulus for optimal stiffness-to-weight." },
  { icon: Gauge, title: "Race Geometry", desc: "UCI-legal stack and reach ratios tuned for aggressive, race-winning positions." },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body"
          >
            Aerodynamic Engineering
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-12"
          >
            CUTTING THROUGH<br /><span className="text-gradient-red">THE AIR</span>
          </motion.h2>
          <div className="space-y-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="flex gap-5 group"
              >
                <div className="flex-shrink-0 w-12 h-12 border-glow flex items-center justify-center group-hover:glow-red transition-all">
                  <f.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm tracking-wider mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <img src={windTunnel} alt="Wind tunnel testing" className="w-full aspect-square object-cover" />
          <div className="absolute inset-0 border-glow" />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
