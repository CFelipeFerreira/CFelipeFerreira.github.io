import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { HeroScene3D } from "./Scene3D";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-14 lg:pt-16 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              {t("hello")}{" "}
              <span className="text-gradient">Cainã Santos</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground shadow-neon hover:shadow-neon hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t("viewProjects")}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t("contactButton")}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 lg:gap-4 justify-center lg:justify-start">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:text-accent hover:bg-accent/10"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:text-accent hover:bg-accent/10"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:text-accent hover:bg-accent/10"
                asChild
              >
                <a href="mailto:caina@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* 3D Scene */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-lg h-64 sm:h-80 lg:h-96">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full"></div>
              <HeroScene3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;