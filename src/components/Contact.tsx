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
    <section id="contact" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("contactTitle")} <span className="text-gradient">{t("contactSubtitle")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("contactDescription")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">{t("contactInfoTitle")}</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 bg-card border-border">
                  <a
                    href={info.href}
                    className="flex items-center space-x-4 hover:text-primary transition-colors"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t("socialLinksTitle")}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`border-border hover:border-primary ${social.color} transition-all duration-300`}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-border shadow-card">
            <h3 className="text-2xl font-bold mb-6">{t("contactFormTitle")}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">{t("name")}</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("namePlaceholder")}
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("emailPlaceholder")}
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="message">{t("message")}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("messagePlaceholder")}
                  required
                  className="mt-2 min-h-[120px]"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary text-primary-foreground shadow-neon hover:shadow-neon hover:scale-105 transition-all duration-300"
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
