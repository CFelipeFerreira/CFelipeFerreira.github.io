import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
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
      title: "Backend",
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
      title: "Database & Tools",
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
            Minhas <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6 bg-card border-border shadow-card">
              <div className={`h-1 w-full bg-gradient-to-r ${category.color} rounded-full mb-6`}></div>
              
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
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
      </div>
    </section>
  );
};

export default Skills;