import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border section-padding py-16">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      <div>
        <h3 className="text-xl font-bold tracking-widest mb-4">
          <span className="text-foreground">VOR</span>
          <span className="text-gradient-red">TEX</span>
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Engineering the future of elite cycling performance since 2012.
        </p>
      </div>
      <div>
        <h4 className="text-xs font-display tracking-widest mb-4 text-muted-foreground">Navigation</h4>
        <div className="flex flex-col gap-2">
          {["Home", "Bikes", "Technology", "Contact"].map((l) => (
            <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-sm text-secondary-foreground hover:text-primary transition-colors">
              {l}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-xs font-display tracking-widest mb-4 text-muted-foreground">Support</h4>
        <div className="flex flex-col gap-2 text-sm text-secondary-foreground">
          <span>Warranty Claims</span>
          <span>Dealer Locator</span>
          <span>Sizing Guide</span>
          <span>FAQ</span>
        </div>
      </div>
      <div>
        <h4 className="text-xs font-display tracking-widest mb-4 text-muted-foreground">Connect</h4>
        <div className="flex flex-col gap-2 text-sm text-secondary-foreground">
          <span>Instagram</span>
          <span>YouTube</span>
          <span>Strava</span>
          <span>Newsletter</span>
        </div>
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-xs text-muted-foreground">© 2026 VORTEX Performance. All rights reserved.</p>
      <p className="text-xs text-muted-foreground">Engineered with obsession.</p>
    </div>
  </footer>
);

export default Footer;
