import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import taskappImage from "@/assets/project-taskapp.jpg";
import dashboardImage from "@/assets/project-dashboard.jpg";

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: t("ecommerceTitle"),
      description: t("ecommerceDesc"),
      image: ecommerceImage,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: t("taskAppTitle"),
      description: t("taskAppDesc"),
      image: taskappImage,
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: t("dashboardTitle"),
      description: t("dashboardDesc"),
      image: dashboardImage,
      technologies: ["Vue.js", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("projectsTitle")} <span className="text-gradient">{t("projects")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("projectsDescription")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border shadow-card overflow-hidden group hover:shadow-neon transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {t("code")}
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm"
                    className="flex-1 bg-gradient-primary text-primary-foreground hover:shadow-neon"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t("demo")}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:shadow-neon transition-all duration-300"
            asChild
          >
            <Link to="/projects">
              {t("seeMoreProjects")}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;