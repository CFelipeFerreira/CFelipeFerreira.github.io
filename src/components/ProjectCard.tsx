
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github?: string;
    live: string;
    stack: "Frontend" | "Backend" | "Fullstack";
    language: string;
    isOpenSource: boolean;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useLanguage();

  const getStackColor = (stack: string) => {
    switch (stack) {
      case "Frontend":
        return "bg-neon-blue/20 text-neon-blue border-neon-blue/30";
      case "Backend":
        return "bg-neon-green/20 text-neon-green border-neon-green/30";
      case "Fullstack":
        return "bg-neon-purple/20 text-neon-purple border-neon-purple/30";
      default:
        return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <Card className="group bg-card/50 backdrop-blur-sm border-border/50 shadow-card overflow-hidden hover:shadow-neon hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-3 py-1 text-xs rounded-full font-medium border ${getStackColor(project.stack)}`}>
            {project.stack}
          </span>
        </div>

        <div className="absolute top-3 right-3 flex gap-2">
          {project.isOpenSource ? (
            <span className="px-2 py-1 bg-neon-green/90 text-background text-xs rounded-full font-medium flex items-center gap-1">
              <Eye className="h-3 w-3" />
              Open Source
            </span>
          ) : (
            <span className="px-2 py-1 bg-muted/90 text-muted-foreground text-xs rounded-full font-medium flex items-center gap-1">
              <Lock className="h-3 w-3" />
              Private
            </span>
          )}
        </div>

        {/* Language Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 bg-background/80 backdrop-blur-sm text-foreground text-xs rounded-md font-medium border border-border/50">
            {project.language}
          </span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          {project.isOpenSource && project.github && (
            <Button 
              variant="outline" 
              size="sm"
              className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-lg transition-all duration-300"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                {t("code")}
              </a>
            </Button>
          )}
          
          <Button 
            size="sm"
            className={`${project.isOpenSource && project.github ? 'flex-1' : 'w-full'} bg-gradient-primary text-primary-foreground hover:shadow-neon hover:scale-105 transition-all duration-300`}
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
  );
};

export default ProjectCard;
