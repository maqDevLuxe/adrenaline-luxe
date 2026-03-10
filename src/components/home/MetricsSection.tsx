import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const metrics = [
  { value: 6.8, suffix: "kg", label: "Frame Weight" },
  { value: 72, suffix: "km/h", label: "Top Speed" },
  { value: 0.21, suffix: "CdA", label: "Drag Coefficient" },
  { value: 340, suffix: "W", label: "Power Transfer" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setVal(target); clearInterval(timer); }
      else setVal(current);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="text-4xl md:text-6xl font-display font-bold text-gradient-red">
      {target < 1 ? val.toFixed(2) : val < 10 ? val.toFixed(1) : Math.round(val)}
      <span className="text-lg md:text-2xl text-muted-foreground ml-1">{suffix}</span>
    </span>
  );
};

const MetricsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 section-padding bg-card border-y border-border">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body">Performance Data</p>
        <h2 className="text-3xl md:text-5xl font-bold">THE <span className="text-gradient-red">NUMBERS</span></h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <Counter target={m.value} suffix={m.suffix} inView={inView} />
            <p className="text-muted-foreground text-xs uppercase tracking-wider mt-3 font-body">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
