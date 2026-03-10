import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { title: "Aero vs. Weight: The 2026 Equation", date: "Mar 2, 2026", tag: "Engineering" },
  { title: "Inside the Wind Tunnel with Team VORTEX", date: "Feb 18, 2026", tag: "R&D" },
  { title: "Carbon Layup: Why Orientation Matters", date: "Feb 5, 2026", tag: "Materials" },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 section-padding bg-card border-y border-border">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body">Performance Blog</p>
          <h2 className="text-3xl md:text-5xl font-bold">LATEST <span className="text-gradient-red">INSIGHTS</span></h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            className="border-glow p-8 group hover:glow-red transition-all"
          >
            <span className="text-xs uppercase tracking-wider text-primary font-body">{p.tag}</span>
            <h3 className="font-display text-sm tracking-wider mt-4 mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="text-muted-foreground text-xs font-body">{p.date}</p>
            <ArrowUpRight size={16} className="text-muted-foreground mt-4 group-hover:text-primary transition-colors" />
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
