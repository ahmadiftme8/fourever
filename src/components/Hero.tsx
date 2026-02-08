import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block text-sm font-body font-medium tracking-widest uppercase text-primary mb-6">
              Your dedicated creative team
            </span>
          </motion.div>

          <motion.h1
            className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Four creatives.
            <br />
            <span className="text-gradient">One flat rate.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A dedicated team of four professionals for your agency — unlimited projects, 
            one simple monthly fee. Scale your output without scaling your overhead.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact" className="gap-2">
                Start a conversation <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="outline_light" size="lg" asChild>
              <a href="#how-it-works">See how it works</a>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="text-center">
              <div className="font-display font-bold text-3xl md:text-4xl text-foreground">$2k</div>
              <div className="text-sm mt-1">per month</div>
            </div>
            <div className="w-px h-10 bg-border hidden md:block" />
            <div className="text-center">
              <div className="font-display font-bold text-3xl md:text-4xl text-foreground">4</div>
              <div className="text-sm mt-1">professionals</div>
            </div>
            <div className="w-px h-10 bg-border hidden md:block" />
            <div className="text-center">
              <div className="font-display font-bold text-3xl md:text-4xl text-foreground">∞</div>
              <div className="text-sm mt-1">projects</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
