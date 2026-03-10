import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  { name: "Marco V.", team: "Team Movistar", quote: "The VORTEX Aero Pro is the stiffest, most responsive bike I've ever raced. It's a weapon." },
  { name: "Emma K.", team: "Olympic Gold 2024", quote: "I switched to VORTEX mid-season and immediately dropped 14 watts at 50km/h. The numbers don't lie." },
  { name: "Tadej P.", team: "UAE Emirates", quote: "Carbon quality is unmatched. You feel the precision in every pedal stroke." },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 section-padding bg-card border-y border-border">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body">Pro Athlete Reviews</p>
        <h2 className="text-3xl md:text-5xl font-bold">RIDER <span className="text-gradient-red">TESTIMONY</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            className="border-glow p-8"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-6 italic">"{r.quote}"</p>
            <p className="font-display text-xs tracking-wider">{r.name}</p>
            <p className="text-primary text-xs font-body">{r.team}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
