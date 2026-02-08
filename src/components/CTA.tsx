import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-foreground mb-6 leading-tight">
            Ready to scale
            <br />
            <span className="text-gradient">your agency?</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body mb-10 max-w-xl mx-auto leading-relaxed">
            Stop hiring freelancers. Stop managing contractors. Get a dedicated team of four 
            for less than the cost of one full-time hire.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:hello@four.studio" className="gap-2">
                Get in touch <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="outline_light" size="lg" asChild>
              <a href="#how-it-works">Learn more</a>
            </Button>
          </div>

          <p className="text-muted-foreground/60 text-sm mt-8 font-body">
            No contracts · Cancel anytime · Start within 48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
