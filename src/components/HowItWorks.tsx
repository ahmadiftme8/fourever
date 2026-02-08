import { motion } from "framer-motion";
import { CreditCard, Send, Zap } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    number: "01",
    title: "Subscribe",
    description: "Pay a simple flat rate of $2,000/month. No contracts, no surprises. Cancel anytime.",
  },
  {
    icon: Send,
    number: "02",
    title: "Assign",
    description: "Send us as many projects as you need. We integrate seamlessly with your agency workflow.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Deliver",
    description: "We work as your dedicated extension, delivering high-quality creative work on your timelines.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-4 block">
            The process
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground">
            Stupidly simple.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="text-primary" size={22} />
                </div>
                <span className="font-display font-bold text-muted-foreground/40 text-2xl">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
