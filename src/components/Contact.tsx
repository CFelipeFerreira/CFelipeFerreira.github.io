import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({  
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: t("messageSent"),
      description: t("thankYou"),
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("email"),
      value: "caina.ffsantos@gmail.com",
      href: "mailto:caina.ffsantos@gmail.com",
    },
    {
      icon: Phone,
      label: t("phone"),
      value: "+55 (18) 99197-4507",
      href: "tel:+5518991974507",
    },
    {
      icon: MapPin,
      label: t("location"),
      value: "Araçatuba, SP",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: t("github"),
      href: "https://github/CFelipeFerreira.com",
      color: "hover:text-neon-purple",
    },
    {
      icon: Linkedin,
      label: t("linkedin"),
      href: "https://linkedin/in/caina-fsantos/.com",
      color: "hover:text-neon-blue",
    },
    {
      icon: Twitter,
      label: t("twitter"),
      href: "https://twitter.com",
      color: "hover:text-neon-green",
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-20 bg-dark-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {t("contactTitle")} <span className="text-gradient">{t("contactSubtitle")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            {t("contactDescription")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8">{t("contactInfoTitle")}</h3>
            
            <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-3 lg:p-4 bg-card border-border hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <a
                    href={info.href}
                    className="flex items-center space-x-3 lg:space-x-4 hover:text-primary transition-colors"
                  >
                    <div className="p-2 lg:p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm lg:text-base">{info.label}</p>
                      <p className="text-muted-foreground text-xs lg:text-sm">{info.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">{t("socialLinksTitle")}</h4>
              <div className="flex space-x-3 lg:space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`border-border hover:border-primary ${social.color} transition-all duration-300 transform hover:scale-110`}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 lg:p-8 bg-card border-border shadow-card order-1 lg:order-2">
            <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">{t("contactFormTitle")}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm lg:text-base">{t("name")}</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("namePlaceholder")}
                  required
                  className="mt-1 lg:mt-2 text-sm lg:text-base"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm lg:text-base">{t("email")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("emailPlaceholder")}
                  required
                  className="mt-1 lg:mt-2 text-sm lg:text-base"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm lg:text-base">{t("message")}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("messagePlaceholder")}
                  required
                  className="mt-1 lg:mt-2 min-h-[100px] lg:min-h-[120px] text-sm lg:text-base"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary text-primary-foreground shadow-neon hover:shadow-neon hover:scale-105 transition-all duration-300 text-sm lg:text-base"
              >
                {t("sendMessage")}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
