import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t("about"), href: "#about" },
    { name: t("skills"), href: "#skills" },
    { name: t("projects"), href: "#projects" },
    { name: t("contact"), href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/CFelipeFerreira",
      label: t("github"),
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/caina-fsantos",
      label: t("linkedin"),
    },
    {
      icon: Mail,
      href: "mailto:caina.ffsantos@gmail.com",
      label: t("email"),
    },
  ];

  return (
    <footer className="py-8 lg:py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg lg:text-xl font-bold text-gradient mb-3 lg:mb-4">Cainã Santos</h3>
            <p className="text-muted-foreground text-xs lg:text-sm max-w-xs">
              {t("footerDescription")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 lg:mb-4 text-sm lg:text-base">{t("quickLinks")}</h4>
            <nav className="space-y-1.5 lg:space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-xs lg:text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-3 lg:mb-4 text-sm lg:text-base">{t("connect")}</h4>
            <div className="flex space-x-2 lg:space-x-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="border-border hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-110 w-8 h-8 lg:w-10 lg:h-10"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-3 w-3 lg:h-4 lg:w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 lg:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs lg:text-sm text-muted-foreground">
            <p>
              © {currentYear} {t("allRights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;