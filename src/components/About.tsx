import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Code, Database, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const stats = [
    { icon: Code, label: t("projects"), value: "50+" },
    { icon: Database, label: t("technologies"), value: "20+" },
    { icon: Globe, label: t("yearsOfExperience"), value: "3+" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("about")} <span className="text-gradient">{t("me")}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-2xl rounded-full"></div>
              <img
                src="/lovable-uploads/c9289022-a067-420b-9e38-6dc38ff69be2.png"
                alt="Cainã Santos - Desenvolvedor Fullstack"
                className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-card"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{t("aboutTitle")}</h3>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>{t("aboutDescription")}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center bg-dark-surface border-border">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            {/* Download CV Button */}
            <Button 
              size="lg"
              className="bg-gradient-accent text-primary-foreground shadow-neon hover:shadow-neon hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              {t("downloadCV")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;