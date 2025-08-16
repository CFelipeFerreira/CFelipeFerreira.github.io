import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("hello")}{" "}
              <span className="text-gradient">Cainã Santos</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
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
            <div className="flex gap-4 justify-center lg:justify-start">
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

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full transform scale-110"></div>
              <img
                src={heroImage}
                alt="Desenvolvimento tecnológico"
                className="relative z-10 max-w-md w-full h-auto rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;