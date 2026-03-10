import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  { name: "Dr. Kai Müller", role: "Chief Engineer", bio: "Former F1 aerodynamicist. 15 years in composites." },
  { name: "Sofia Chen", role: "Design Director", bio: "Industrial design lead at Cervélo before joining VORTEX." },
  { name: "Marcus Bellini", role: "Pro Liaison", bio: "Ex-WorldTour rider. Translates race feedback to R&D." },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 section-padding bg-card border-y border-border">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body"
      >
        The Design Team
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold mb-16"
      >
        BUILT BY <span className="text-gradient-red">OBSESSIVES</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="border-glow p-8 hover:glow-red transition-all group"
          >
            <div className="w-16 h-16 bg-muted mb-6 flex items-center justify-center font-display text-xl text-primary">
              {t.name.charAt(0)}
            </div>
            <h3 className="font-display text-sm tracking-wider mb-1">{t.name}</h3>
            <p className="text-primary text-xs uppercase tracking-wider mb-3 font-body">{t.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
