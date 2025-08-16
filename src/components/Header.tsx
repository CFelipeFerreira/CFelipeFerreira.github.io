import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t("about"), href: "#about" },
    { name: t("skills"), href: "#skills" },
    { name: t("projects"), href: "#projects" },
    { name: t("contact"), href: "#contact" },
  ];

  const languageOptions = [
    { code: 'pt' as Language, name: 'Português', flag: '🇧🇷' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
    { code: 'it' as Language, name: 'Italiano', flag: '🇮🇹' },
    { code: 'ja' as Language, name: '日本語', flag: '🇯🇵' },
    { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
    { code: 'ko' as Language, name: '한국어', flag: '🇰🇷' },
    { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
    { code: 'tlh' as Language, name: 'tlhIngan Hol', flag: '🖖' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-gradient">
            Cainã Santos
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Theme and Language Controls */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hidden md:flex"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden md:flex">
                  <Globe size={18} className="mr-1" />
                  {languageOptions.find(l => l.code === language)?.flag}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languageOptions.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? "bg-accent" : ""}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Theme and Language Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="flex items-center"
                >
                  {theme === 'dark' ? <Sun size={18} className="mr-2" /> : <Moon size={18} className="mr-2" />}
                  {theme === 'dark' ? 'Light' : 'Dark'}
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Globe size={18} className="mr-2" />
                      {languageOptions.find(l => l.code === language)?.flag}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {languageOptions.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={language === lang.code ? "bg-accent" : ""}
                      >
                        <span className="mr-2">{lang.flag}</span>
                        {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;