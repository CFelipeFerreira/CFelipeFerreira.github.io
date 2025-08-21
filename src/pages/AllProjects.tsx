import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import taskappImage from "@/assets/project-taskapp.jpg";
import dashboardImage from "@/assets/project-dashboard.jpg";

interface Project {
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
}

const AllProjects = () => {
  const { t } = useLanguage();
  
  const allProjects: Project[] = [
    {
      id: 1,
      title: t("ecommerceTitle"),
      description: t("ecommerceDesc"),
      image: ecommerceImage,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
      stack: "Fullstack",
      language: "JavaScript",
      isOpenSource: true,
    },
    {
      id: 2,
      title: t("taskAppTitle"),
      description: t("taskAppDesc"),
      image: taskappImage,
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com",
      stack: "Fullstack",
      language: "TypeScript",
      isOpenSource: true,
    },
    {
      id: 3,
      title: t("dashboardTitle"),
      description: t("dashboardDesc"),
      image: dashboardImage,
      technologies: ["Vue.js", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
      stack: "Fullstack",
      language: "JavaScript",
      isOpenSource: true,
    },
    {
      id: 4,
      title: "Banking Dashboard",
      description: "Sistema bancário corporativo com análise de dados em tempo real",
      image: dashboardImage,
      technologies: ["React", "TypeScript", "D3.js", "Material-UI"],
      live: "https://example.com",
      stack: "Frontend",
      language: "TypeScript",
      isOpenSource: false,
    },
    {
      id: 5,
      title: "API Gateway Microservice",
      description: "Gateway de alto desempenho para arquitetura de microservices",
      image: taskappImage,
      technologies: ["Node.js", "Express", "Redis", "Docker"],
      github: "https://github.com",
      live: "https://example.com",
      stack: "Backend",
      language: "JavaScript",
      isOpenSource: true,
    },
    {
      id: 6,
      title: "Health Platform",
      description: "Plataforma de saúde digital para consultas médicas online",
      image: ecommerceImage,
      technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
      live: "https://example.com",
      stack: "Fullstack",
      language: "Python",
      isOpenSource: false,
    },
    {
      id: 7,
      title: "Mobile Design System",
      description: "Sistema de design responsivo para aplicações mobile",
      image: dashboardImage,
      technologies: ["React", "Styled Components", "Storybook"],
      github: "https://github.com",
      live: "https://example.com",
      stack: "Frontend",
      language: "TypeScript",
      isOpenSource: true,
    },
    {
      id: 8,
      title: "ML Model API",
      description: "API para deploy de modelos de machine learning em produção",
      image: taskappImage,
      technologies: ["Python", "FastAPI", "TensorFlow", "Docker"],
      live: "https://example.com",
      stack: "Backend",
      language: "Python",
      isOpenSource: false,
    },
    {
      id: 9,
      title: "Social Media Analytics",
      description: "Ferramenta de análise de redes sociais com métricas avançadas",
      image: ecommerceImage,
      technologies: ["Vue.js", "Node.js", "MongoDB", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
      stack: "Fullstack",
      language: "JavaScript",
      isOpenSource: true,
    },
  ];

  const [selectedStack, setSelectedStack] = useState<string>("All");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
  const [selectedOpenSource, setSelectedOpenSource] = useState<string>("All");

  const stacks = ["All", "Frontend", "Backend", "Fullstack"];
  const languages = ["All", "JavaScript", "TypeScript", "Python"];
  const openSourceOptions = ["All", "Open Source", "Private"];

  const filteredProjects = allProjects.filter((project) => {
    const stackMatch = selectedStack === "All" || project.stack === selectedStack;
    const languageMatch = selectedLanguage === "All" || project.language === selectedLanguage;
    const openSourceMatch = 
      selectedOpenSource === "All" || 
      (selectedOpenSource === "Open Source" && project.isOpenSource) ||
      (selectedOpenSource === "Private" && !project.isOpenSource);

    return stackMatch && languageMatch && openSourceMatch;
  });

  const clearFilters = () => {
    setSelectedStack("All");
    setSelectedLanguage("All");
    setSelectedOpenSource("All");
  };

  const hasActiveFilters = selectedStack !== "All" || selectedLanguage !== "All" || selectedOpenSource !== "All";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Todos os <span className="text-gradient">Projetos</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore minha coleção completa de projetos, desde aplicações frontend até sistemas backend complexos.
              </p>
            </div>

            {/* Filters */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-4 justify-center items-center mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Filtros:</span>
                </div>

                {/* Stack Filter */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-muted-foreground px-2 py-1">Stack:</span>
                  {stacks.map((stack) => (
                    <Button
                      key={stack}
                      variant={selectedStack === stack ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedStack(stack)}
                      className={selectedStack === stack ? "bg-gradient-primary" : "border-primary/30 hover:border-primary hover:bg-primary/10"}
                    >
                      {stack}
                    </Button>
                  ))}
                </div>

                {/* Language Filter */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-muted-foreground px-2 py-1">Linguagem:</span>
                  {languages.map((language) => (
                    <Button
                      key={language}
                      variant={selectedLanguage === language ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLanguage(language)}
                      className={selectedLanguage === language ? "bg-gradient-primary" : "border-primary/30 hover:border-primary hover:bg-primary/10"}
                    >
                      {language}
                    </Button>
                  ))}
                </div>

                {/* Open Source Filter */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-muted-foreground px-2 py-1">Código:</span>
                  {openSourceOptions.map((option) => (
                    <Button
                      key={option}
                      variant={selectedOpenSource === option ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedOpenSource(option)}
                      className={selectedOpenSource === option ? "bg-gradient-primary" : "border-primary/30 hover:border-primary hover:bg-primary/10"}
                    >
                      {option}
                    </Button>
                  ))}
                </div>

                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Limpar
                  </Button>
                )}
              </div>

              <div className="text-center">
                <span className="text-sm text-muted-foreground">
                  Mostrando {filteredProjects.length} de {allProjects.length} projetos
                </span>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="bg-card border-border shadow-card overflow-hidden group hover:shadow-neon transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Stack Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full font-medium">
                        {project.stack}
                      </span>
                    </div>

                    {/* Open Source Badge */}
                    {project.isOpenSource && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-neon-green/90 text-background text-xs rounded-full font-medium">
                          Open Source
                        </span>
                      </div>
                    )}
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
                      {project.isOpenSource && project.github && (
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
                      )}
                      
                      <Button 
                        size="sm"
                        className={`${project.isOpenSource && project.github ? 'flex-1' : 'w-full'} bg-gradient-primary text-primary-foreground hover:shadow-neon`}
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

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Nenhum projeto encontrado com os filtros selecionados.
                </p>
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="mt-4 border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllProjects;