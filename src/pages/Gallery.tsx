import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const imageProjects = [
  { title: "Meridian Rebrand", category: "Brand Design", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop" },
  { title: "Flux Dashboard", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop" },
  { title: "Nomad Studios", category: "Web Development", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop" },
  { title: "Solaris Identity", category: "Brand Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop" },
  { title: "Kinetic App", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop" },
  { title: "Prism Packaging", category: "Illustration", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop" },
  { title: "Atlas Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" },
  { title: "Bloom Campaign", category: "Brand Design", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop" },
];

const videoProjects = [
  { title: "Aura Motion Reel", category: "Motion Design", thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop" },
  { title: "Vortex Explainer", category: "Video Editing", thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop" },
  { title: "Drift Title Sequence", category: "Motion Design", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop" },
  { title: "Zenith Product Film", category: "Video Editing", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop" },
  { title: "Echo Social Spots", category: "Motion Design", thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop" },
  { title: "Pulse Brand Film", category: "Video Editing", thumbnail: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&h=600&fit=crop" },
];

type Tab = "images" | "videos";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<Tab>("images");

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="ghost" size="sm" asChild className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
              <Link to="/">
                <ArrowLeft size={16} /> Back home
              </Link>
            </Button>

            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-foreground mb-4">
              All work.
            </h1>
            <p className="text-muted-foreground font-body text-lg mb-10 max-w-xl">
              A selection of projects across brand, digital, motion, and development — for agencies worldwide.
            </p>

            {/* Tabs */}
            <div className="flex gap-1 mb-12 border-b border-border">
              <button
                onClick={() => setActiveTab("images")}
                className={`px-5 py-3 text-sm font-display font-semibold tracking-wide transition-colors relative ${
                  activeTab === "images" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Images
                {activeTab === "images" && (
                  <motion.div
                    layoutId="gallery-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-5 py-3 text-sm font-display font-semibold tracking-wide transition-colors relative ${
                  activeTab === "videos" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Videos
                {activeTab === "videos" && (
                  <motion.div
                    layoutId="gallery-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </div>
          </motion.div>

          {/* Images Grid */}
          {activeTab === "images" && (
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {imageProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-end p-5">
                    <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-xs font-body font-medium tracking-widest uppercase text-primary-foreground/70 mb-1">
                        {project.category}
                      </p>
                      <h3 className="font-display font-bold text-lg text-primary-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Videos Grid */}
          {activeTab === "videos" && (
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {videoProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group relative overflow-hidden rounded-xl aspect-video"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex flex-col items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-center">
                      <div className="w-14 h-14 rounded-full border-2 border-primary-foreground/80 flex items-center justify-center mb-3 mx-auto">
                        <Play size={22} className="text-primary-foreground/80 ml-0.5" />
                      </div>
                      <p className="text-xs font-body font-medium tracking-widest uppercase text-primary-foreground/70 mb-1">
                        {project.category}
                      </p>
                      <h3 className="font-display font-bold text-lg text-primary-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Gallery;
