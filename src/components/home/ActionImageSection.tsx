import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import actionSport from "@/assets/action-sport.jpg";

const ActionImageSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.img
        src={actionSport}
        alt="Professional cyclist at high speed"
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h2
          className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-foreground/10 uppercase tracking-widest"
          animate={{ x: [0, -200] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          SPEED IS EVERYTHING • SPEED IS EVERYTHING •
        </motion.h2>
      </div>
    </section>
  );
};

export default ActionImageSection;
