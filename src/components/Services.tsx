import { motion } from "framer-motion";
import { Paintbrush, Layout, Code2, Film, PenTool, Globe } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Brand Design",
    description: "Identity systems, guidelines, and visual language that make agencies shine internationally.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "User-centered interfaces from wireframes to polished, pixel-perfect mockups.",
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional post-production, color grading, and editing for campaigns and content.",
  },
  {
    icon: Globe,
    title: "Motion Design",
    description: "Animations, explainers, and kinetic typography that captivate global audiences.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Fast, responsive, and accessible websites built with modern frameworks.",
  },
  {
    icon: PenTool,
    title: "Illustration",
    description: "Custom illustrations and iconography tailored to any brand voice.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-4 block">
            Capabilities
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            What we do.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            Everything your agency needs to deliver outstanding creative work — without growing headcount.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-6 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
