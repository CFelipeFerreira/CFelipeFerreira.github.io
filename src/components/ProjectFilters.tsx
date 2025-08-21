
import { Button } from "@/components/ui/button";
import { Filter, X, Code, Layers, Globe } from "lucide-react";

interface ProjectFiltersProps {
  selectedStack: string;
  selectedLanguage: string;
  selectedOpenSource: string;
  onStackChange: (stack: string) => void;
  onLanguageChange: (language: string) => void;
  onOpenSourceChange: (option: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  filteredCount: number;
  totalCount: number;
}

const ProjectFilters = ({
  selectedStack,
  selectedLanguage,
  selectedOpenSource,
  onStackChange,
  onLanguageChange,
  onOpenSourceChange,
  onClearFilters,
  hasActiveFilters,
  filteredCount,
  totalCount,
}: ProjectFiltersProps) => {
  const stacks = ["All", "Frontend", "Backend", "Fullstack"];
  const languages = ["All", "JavaScript", "TypeScript", "Python"];
  const openSourceOptions = ["All", "Open Source", "Private"];

  return (
    <div className="space-y-8">
      {/* Filter Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-primary/10 border border-primary/20">
            <Filter className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Filtros</h3>
        </div>
        <p className="text-muted-foreground text-sm">
          Refine sua busca pelos projetos
        </p>
      </div>

      {/* Filters Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Stack Filter */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            <span className="font-medium text-sm">Stack Tecnológico</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2">
            {stacks.map((stack) => (
              <Button
                key={stack}
                variant={selectedStack === stack ? "default" : "outline"}
                size="sm"
                onClick={() => onStackChange(stack)}
                className={`justify-start h-10 ${
                  selectedStack === stack
                    ? "bg-gradient-primary shadow-neon border-0 text-primary-foreground"
                    : "border-primary/20 hover:border-primary hover:bg-primary/10 hover:shadow-lg transition-all duration-200"
                }`}
              >
                {stack}
              </Button>
            ))}
          </div>
        </div>

        {/* Language Filter */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4 text-primary" />
            <span className="font-medium text-sm">Linguagem</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2">
            {languages.map((language) => (
              <Button
                key={language}
                variant={selectedLanguage === language ? "default" : "outline"}
                size="sm"
                onClick={() => onLanguageChange(language)}
                className={`justify-start h-10 ${
                  selectedLanguage === language
                    ? "bg-gradient-primary shadow-neon border-0 text-primary-foreground"
                    : "border-primary/20 hover:border-primary hover:bg-primary/10 hover:shadow-lg transition-all duration-200"
                }`}
              >
                {language}
              </Button>
            ))}
          </div>
        </div>

        {/* Open Source Filter */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <span className="font-medium text-sm">Código</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
            {openSourceOptions.map((option) => (
              <Button
                key={option}
                variant={selectedOpenSource === option ? "default" : "outline"}
                size="sm"
                onClick={() => onOpenSourceChange(option)}
                className={`justify-start h-10 ${
                  selectedOpenSource === option
                    ? "bg-gradient-primary shadow-neon border-0 text-primary-foreground"
                    : "border-primary/20 hover:border-primary hover:bg-primary/10 hover:shadow-lg transition-all duration-200"
                }`}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-card border border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
          <span className="text-sm font-medium">
            Mostrando <span className="text-primary font-bold">{filteredCount}</span> de{" "}
            <span className="text-muted-foreground">{totalCount}</span> projetos
          </span>
        </div>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground hover:bg-destructive/10 hover:border-destructive/20 transition-all duration-200"
          >
            <X className="h-4 w-4 mr-2" />
            Limpar Filtros
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectFilters;
