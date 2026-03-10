import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 section-padding">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body">
          Get In Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-16"
        >
          CONTACT <span className="text-gradient-red">US</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {submitted ? (
              <div className="border-glow p-12 text-center">
                <h3 className="font-display text-xl mb-3">MESSAGE <span className="text-gradient-red">SENT</span></h3>
                <p className="text-muted-foreground">We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-6"
              >
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-body block mb-2">Name</label>
                  <input
                    required
                    className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-body block mb-2">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-body block mb-2">Subject</label>
                  <select className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors">
                    <option>Sales Inquiry</option>
                    <option>Pro Team Sponsorship</option>
                    <option>Warranty Claim</option>
                    <option>Dealer Application</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-body block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="gradient-red-glow text-primary-foreground font-body text-sm uppercase tracking-wider px-10 py-3 hover:opacity-90 transition-opacity w-full"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {[
              { icon: MapPin, title: "Headquarters", lines: ["VORTEX Performance GmbH", "Industriestraße 42", "71034 Böblingen, Germany"] },
              { icon: Mail, title: "Email", lines: ["sales@vortex-bikes.com", "support@vortex-bikes.com"] },
              { icon: Phone, title: "Phone", lines: ["+49 7031 XXX XXX", "Mon-Fri 9:00-18:00 CET"] },
            ].map((info) => (
              <div key={info.title} className="border-glow p-8">
                <info.icon size={20} className="text-primary mb-3" />
                <h3 className="font-display text-xs tracking-wider mb-3">{info.title}</h3>
                {info.lines.map((l) => (
                  <p key={l} className="text-muted-foreground text-sm">{l}</p>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
