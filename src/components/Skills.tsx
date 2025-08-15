import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/contexts/LanguageContext";
import { skillDescriptions } from "@/data/skillDescriptions";

const Skills = () => {
  const { language, t } = useLanguage();
  const skillCategories = [
    {
      title: t("frontend"),
      color: "from-neon-blue to-neon-purple",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      title: t("backend"),
      color: "from-neon-purple to-neon-green",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "NestJS", level: 80 },
        { name: "Python", level: 75 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      title: t("databaseTools"),
      color: "from-neon-green to-neon-blue",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Docker", level: 85 },
        { name: "Git", level: 95 },
        { name: "AWS", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("skillsTitle")} <span className="text-gradient">{t("skills")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'pt' 
              ? "Tecnologias e ferramentas que domino para criar soluções completas"
              : language === 'en'
              ? "Technologies and tools I master to create complete solutions"
              : language === 'es'
              ? "Tecnologías y herramientas que domino para crear soluciones completas"
              : language === 'fr'
              ? "Technologies et outils que je maîtrise pour créer des solutions complètes"
              : language === 'it'
              ? "Tecnologie e strumenti che padroneggio per creare soluzioni complete"
              : language === 'ja'
              ? "完全なソリューションを作成するために習得したテクノロジーとツール"
              : language === 'zh'
              ? "我掌握的技术和工具，用于创建完整的解决方案"
              : language === 'ko'
              ? "완전한 솔루션을 만들기 위해 숙달한 기술과 도구"
              : language === 'ru'
              ? "Технологии и инструменты, которыми я владею для создания полных решений"
              : "nugh DIch chenmoH lo'taHvIS DIch"
            }
          </p>
        </div>

        <TooltipProvider>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6 bg-card border-border shadow-card">
                <div className={`h-1 w-full bg-gradient-to-r ${category.color} rounded-full mb-6`}></div>
                
                <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="text-sm font-medium cursor-help hover:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              {skillDescriptions[language]?.[skill.name] || skillDescriptions.en[skill.name]}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Skills;