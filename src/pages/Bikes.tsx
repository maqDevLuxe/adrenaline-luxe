import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBike from "@/assets/hero-bike.jpg";
import bikeWheel from "@/assets/bike-wheel.jpg";
import carbonTexture from "@/assets/carbon-texture.jpg";

const bikes = [
  { name: "VORTEX AERO PRO", price: "$12,499", weight: "6.8kg", desc: "Our flagship aero road bike. Wind-tunnel optimized for maximum speed.", img: heroBike },
  { name: "VORTEX CLIMBER", price: "$10,999", weight: "5.9kg", desc: "Ultralight carbon construction for when the road goes vertical.", img: carbonTexture },
  { name: "VORTEX TT", price: "$14,999", weight: "7.2kg", desc: "Time trial weapon. UCI-legal with integrated storage and hydration.", img: bikeWheel },
  { name: "VORTEX GRAVEL", price: "$8,499", weight: "7.8kg", desc: "Carbon gravel machine. Adventure-ready with race-day capability.", img: heroBike },
  { name: "VORTEX ENDURANCE", price: "$9,999", weight: "7.1kg", desc: "All-day comfort meets pro-level performance for long distances.", img: carbonTexture },
  { name: "VORTEX TRACK", price: "$11,499", weight: "6.2kg", desc: "Velodrome domination. Maximum stiffness, zero compliance.", img: bikeWheel },
];

const BikesPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 section-padding">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body"
        >
          The Collection
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          OUR <span className="text-gradient-red">BIKES</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-lg mb-16"
        >
          Every frame is hand-laid with T1000G carbon fiber. Every detail is race-proven. Choose your weapon.
        </motion.p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden bg-muted aspect-[4/3] mb-4">
                <img src={b.img} alt={b.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-3 py-1">
                  <span className="text-xs font-body text-primary">{b.weight}</span>
                </div>
              </div>
              <h3 className="font-display text-sm tracking-wider mb-1">{b.name}</h3>
              <p className="text-muted-foreground text-sm mb-2">{b.desc}</p>
              <p className="text-primary font-body font-semibold text-lg">{b.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BikesPage;
