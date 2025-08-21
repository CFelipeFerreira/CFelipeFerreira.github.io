
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";
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
  const allProjects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com carrinho de compras, pagamentos integrados e painel administrativo avançado",
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
      title: "Task Management App",
      description: "Sistema colaborativo de gestão de tarefas com notificações em tempo real e sincronização entre dispositivos",
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
      title: "Analytics Dashboard",
      description: "Dashboard interativo para análise de dados com gráficos dinâmicos e relatórios personalizáveis em tempo real",
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
      description: "Sistema bancário corporativo com análise de dados em tempo real, gestão de contas e transações seguras",
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
      description: "Gateway de alto desempenho para arquitetura de microservices com cache distribuído e balanceamento de carga",
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
      description: "Plataforma de saúde digital para consultas médicas online com prontuário eletrônico e telemedicina",
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
      description: "Sistema de design responsivo e componentes reutilizáveis para aplicações mobile com documentação completa",
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
      description: "API robusta para deploy de modelos de machine learning em produção com monitoramento e escalabilidade automática",
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
      description: "Ferramenta avançada de análise de redes sociais com métricas de engajamento, sentiment analysis e relatórios automatizados",
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
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-primary/10 border border-primary/20">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">
                  Portfólio <span className="text-gradient">Completo</span>
                </h1>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                Explore minha coleção completa de projetos, desde aplicações frontend elegantes 
                até sistemas backend robustos e soluções fullstack complexas.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-16 bg-card/30 backdrop-blur-sm border-y border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <ProjectFilters
              selectedStack={selectedStack}
              selectedLanguage={selectedLanguage}
              selectedOpenSource={selectedOpenSource}
              onStackChange={setSelectedStack}
              onLanguageChange={setSelectedLanguage}
              onOpenSourceChange={setSelectedOpenSource}
              onClearFilters={clearFilters}
              hasActiveFilters={hasActiveFilters}
              filteredCount={filteredProjects.length}
              totalCount={allProjects.length}
            />
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="p-4 rounded-full bg-muted/50 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nenhum projeto encontrado</h3>
                  <p className="text-muted-foreground mb-6">
                    Não foi possível encontrar projetos que correspondam aos filtros selecionados.
                  </p>
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-lg transition-all duration-300"
                  >
                    Limpar filtros
                  </Button>
                </div>
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
