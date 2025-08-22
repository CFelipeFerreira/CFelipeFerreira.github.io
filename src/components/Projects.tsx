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
    <section id="projects" className="py-16 lg:py-24 bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            {t("projectsTitle")} <span className="text-gradient">{t("projects")}</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg lg:text-xl">
            {t("projectsDescription")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border shadow-card overflow-hidden group hover:shadow-neon transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-4 lg:mb-6 text-sm lg:text-base">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6 lg:mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-xs lg:text-sm rounded-full border border-primary/20 font-medium transition-colors hover:bg-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 lg:gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {t("code")}
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm"
                    className="flex-1 bg-gradient-primary text-primary-foreground hover:shadow-neon hover:scale-105 transition-all duration-300"
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

        <div className="text-center mt-12 lg:mt-16">
          <Button 
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:shadow-neon hover:scale-105 transition-all duration-300 px-8 py-4 text-base lg:text-lg"
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