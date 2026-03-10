import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 47, label: "Stage Wins" },
  { value: 12, label: "Grand Tours" },
  { value: 8, label: "World Championships" },
  { value: 156, label: "Pro Team Riders" },
];

const Counter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const steps = 50;
    const inc = target / steps;
    let c = 0;
    const t = setInterval(() => { c += inc; if (c >= target) { setVal(target); clearInterval(t); } else setVal(Math.round(c)); }, 40);
    return () => clearInterval(t);
  }, [inView, target]);
  return <span>{val}</span>;
};

const TournamentsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 section-padding">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body">Proven Results</p>
        <h2 className="text-3xl md:text-5xl font-bold">VICTORY <span className="text-gradient-red">COUNT</span></h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            className="text-center border-glow p-8"
          >
            <div className="text-4xl md:text-6xl font-display font-bold text-gradient-red mb-2">
              <Counter target={s.value} inView={inView} />
            </div>
            <p className="text-muted-foreground text-xs uppercase tracking-wider font-body">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TournamentsSection;
