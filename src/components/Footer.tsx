const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg text-foreground">
          four<span className="text-primary">.</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#team" className="hover:text-foreground transition-colors">Team</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="mailto:hello@four.studio" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} four. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
