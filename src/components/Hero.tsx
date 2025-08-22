import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { HeroScene3D } from "./Scene3D";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              {t("hello")}{" "}
              <span className="text-gradient">Cainã Santos</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-8 lg:mb-10 justify-center lg:justify-start">
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
            <div className="flex gap-4 lg:gap-6 justify-center lg:justify-start">
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

          {/* Enhanced 3D Scene */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-lg h-72 sm:h-96 lg:h-[28rem] xl:h-[32rem]">
              <div className="absolute inset-0 bg-gradient-primary opacity-15 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-accent opacity-10 blur-2xl rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <HeroScene3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;