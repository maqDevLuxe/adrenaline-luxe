import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import windTunnel from "@/assets/wind-tunnel.jpg";
import carbonTexture from "@/assets/carbon-texture.jpg";
import { Layers, Wind, Gauge, Zap, Target, BarChart3 } from "lucide-react";

const techFeatures = [
  { icon: Wind, title: "CFD Simulation", desc: "Over 10,000 hours of computational fluid dynamics modeling per frame design." },
  { icon: Layers, title: "Variable Modulus", desc: "Different carbon orientations at 47 unique zones for optimized ride characteristics." },
  { icon: Gauge, title: "Aero Profiling", desc: "Kamm-tail tube profiles validated across 0-20° yaw angles in our wind tunnel." },
  { icon: Zap, title: "Power Transfer", desc: "BB86 oversized bottom bracket with asymmetric chainstays for zero flex." },
  { icon: Target, title: "Precision Fit", desc: "3D-printed titanium inserts allow micro-adjustable geometry across 12 contact points." },
  { icon: BarChart3, title: "Telemetry", desc: "Integrated power, cadence, and aerodynamic drag sensors in every pro-level frame." },
];

const TechPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 section-padding">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body">
          Engineering Excellence
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-16"
        >
          THE <span className="text-gradient-red">TECHNOLOGY</span>
        </motion.h1>

        {/* Hero tech image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mb-24"
        >
          <img src={windTunnel} alt="Wind tunnel testing" className="w-full aspect-[21/9] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Tech grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {techFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="border-glow p-8 group hover:glow-red transition-all"
            >
              <f.icon size={28} className="text-primary mb-4" />
              <h3 className="font-display text-sm tracking-wider mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Material section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">MATERIAL <span className="text-gradient-red">SCIENCE</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We use only Toray T1000G and M40X carbon fibers—the same materials trusted in aerospace and Formula 1. Our proprietary resin system cures at 830°C under 7 atmospheres of pressure, creating a composite that is 40% stronger than standard carbon at equivalent weight.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "40%", label: "Stronger" },
                { val: "18%", label: "Less Drag" },
                { val: "830°C", label: "Cure Temp" },
                { val: "7 atm", label: "Pressure" },
              ].map((s) => (
                <div key={s.label} className="border-glow p-4">
                  <p className="font-display text-lg text-gradient-red">{s.val}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={carbonTexture} alt="Carbon fiber material" className="w-full aspect-square object-cover" />
            <div className="absolute inset-0 border-glow" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TechPage;
