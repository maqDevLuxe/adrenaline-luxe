import { motion } from "framer-motion";

const partners = ["OLYMPIC CYCLING", "TEAM INEOS", "UAE EMIRATES", "MOVISTAR", "TREK", "CANYON", "RAPHA", "SRAM"];

const PartnersSection = () => (
  <section className="py-16 border-y border-border overflow-hidden">
    <div className="section-padding mb-8">
      <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground text-center">
        Trusted by World Champions
      </p>
    </div>
    <div className="flex animate-slide-left">
      {[...partners, ...partners].map((p, i) => (
        <div key={i} className="flex-shrink-0 px-12 flex items-center">
          <span className="font-display text-sm tracking-widest text-carbon-grey whitespace-nowrap hover:text-primary transition-colors duration-200">
            {p}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default PartnersSection;
