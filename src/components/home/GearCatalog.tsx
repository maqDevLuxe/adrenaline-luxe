import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bikeWheel from "@/assets/bike-wheel.jpg";
import heroBike from "@/assets/hero-bike.jpg";
import carbonTexture from "@/assets/carbon-texture.jpg";
import windTunnel from "@/assets/wind-tunnel.jpg";

const gear = [
  { name: "VORTEX AERO PRO", price: "$12,499", category: "Road", img: heroBike },
  { name: "CARBON WHEELSET", price: "$3,299", category: "Components", img: bikeWheel },
  { name: "STEALTH FRAMESET", price: "$6,899", category: "Frames", img: carbonTexture },
  { name: "WIND TUNNEL PKG", price: "$2,499", category: "Aero", img: windTunnel },
  { name: "VORTEX TT", price: "$14,999", category: "Time Trial", img: heroBike },
  { name: "AERO HANDLEBAR", price: "$899", category: "Components", img: bikeWheel },
];

const GearCatalog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-24">
      <div className="section-padding mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body">Pro-Level Gear</p>
        <h2 className="text-3xl md:text-5xl font-bold">THE <span className="text-gradient-red">CATALOG</span></h2>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-6 md:px-12 lg:px-20 xl:px-32 pb-4" style={{ width: "max-content" }}>
          {gear.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="w-72 flex-shrink-0 group"
            >
              <div className="relative overflow-hidden mb-4 bg-muted aspect-[3/4]">
                <img src={g.img} alt={g.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm px-3 py-1">
                  <span className="text-xs uppercase tracking-wider text-primary font-body">{g.category}</span>
                </div>
              </div>
              <h3 className="font-display text-sm tracking-wider mb-1">{g.name}</h3>
              <p className="text-primary font-body font-semibold">{g.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GearCatalog;
