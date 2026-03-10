import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/bikes", label: "Bikes" },
  { to: "/tech", label: "Technology" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 section-padding py-5 flex items-center justify-between bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <Link to="/" className="font-display text-xl md:text-2xl font-bold tracking-widest">
        <span className="text-foreground">VOR</span>
        <span className="text-gradient-red">TEX</span>
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`font-body text-sm uppercase tracking-wider transition-colors duration-200 ${
              location.pathname === link.to ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/bikes"
          className="gradient-red-glow text-primary-foreground font-body text-sm uppercase tracking-wider px-6 py-2.5 hover:opacity-90 transition-opacity"
        >
          Shop Now
        </Link>
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-body text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
