import { motion } from "framer-motion";
import teamAlex from "@/assets/team-alex.jpg";
import teamMaya from "@/assets/team-maya.jpg";
import teamJordan from "@/assets/team-jordan.jpg";
import teamSam from "@/assets/team-sam.jpg";

const members = [
  {
    name: "Alex Chen",
    role: "Creative Director",
    image: teamAlex,
    bio: "10+ years leading brand campaigns for top-tier agencies.",
  },
  {
    name: "Maya Rodriguez",
    role: "UI/UX Designer",
    image: teamMaya,
    bio: "Crafts intuitive digital experiences that users love.",
  },
  {
    name: "Jordan Park",
    role: "Full-Stack Developer",
    image: teamJordan,
    bio: "Builds performant, scalable web applications from scratch.",
  },
  {
    name: "Sam Williams",
    role: "Motion Designer",
    image: teamSam,
    bio: "Brings brands to life with animation and visual storytelling.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-4 block">
            The team
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground">
            Meet your four.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-1">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm font-body">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
