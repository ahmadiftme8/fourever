import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Meridian Rebrand",
    category: "Brand Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
  },
  {
    title: "Flux Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop",
  },
  {
    title: "Nomad Studios",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
  },
  {
    title: "Aura Motion Reel",
    category: "Motion Design",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-sm font-body font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
              Selected work
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-foreground">
              Featured projects.
            </h2>
          </div>
          <Button variant="outline_light" size="lg" asChild>
            <Link to="/gallery" className="gap-2">
              See all <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs font-body font-medium tracking-widest uppercase text-primary-foreground/70 mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-display font-bold text-xl text-primary-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
