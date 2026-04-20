import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { services } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";
import LocationMap from "@/components/LocationMap";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt="Noble Spaces" className="h-10 w-10 object-contain" />
              <h3 className="font-display text-2xl text-foreground">Noble Spaces</h3>
            </div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">{t("footer.tagline")}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("footer.about")}</p>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">{t("footer.services")}</h4>
            <div className="flex flex-col gap-2">
              {services.slice(0, 6).map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.shortTitle}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">{t("footer.moreServices")}</h4>
            <div className="flex flex-col gap-2">
              {services.slice(6).map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.shortTitle}</Link>
              ))}
              <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.portfolio")}</Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.gallery")}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">{t("footer.contact")}</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+250788906410" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +250 788 906 410
              </a>
              <a href="mailto:noblespaces4@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> noblespaces4@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" /> Kigali, Rwanda
              </div>
              <LocationMap height="160px" className="mt-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <p className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Noble Spaces. {t("footer.rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
