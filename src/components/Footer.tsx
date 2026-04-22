import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { services } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";
import LocationMap from "@/components/LocationMap";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border/10 mt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Noble Spaces" className="h-10 w-10 object-contain" />
              <div className="leading-tight">
                <h3 className="font-display font-light text-xl text-foreground">Noble Spaces</h3>
                <p className="text-[9px] tracking-widest-2 uppercase text-primary/70 mt-0.5">your space, our passion</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6 max-w-xs">{t("footer.about")}</p>
            <div className="flex items-center gap-2">
              <a href="https://www.instagram.com/noblespaces" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-border/25 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors">
                <Instagram className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
              <a href="https://www.facebook.com/noblespaces" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-border/25 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors">
                <Facebook className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-widest-2 uppercase text-primary/80 mb-5">{t("footer.services")}</h4>
            <div className="flex flex-col gap-2.5">
              {services.slice(0, 7).map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="text-xs font-light text-muted-foreground hover:text-primary transition-colors">{s.shortTitle}</Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] tracking-widest-2 uppercase text-primary/80 mb-5">{t("footer.moreServices")}</h4>
            <div className="flex flex-col gap-2.5">
              {services.slice(7).map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="text-xs font-light text-muted-foreground hover:text-primary transition-colors">{s.shortTitle}</Link>
              ))}
              <Link to="/portfolio" className="text-xs font-light text-muted-foreground hover:text-primary transition-colors">{t("nav.portfolio")}</Link>
              <Link to="/gallery" className="text-xs font-light text-muted-foreground hover:text-primary transition-colors">{t("nav.gallery")}</Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] tracking-widest-2 uppercase text-primary/80 mb-5">{t("footer.contact")}</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+250788906410" className="flex items-center gap-3 text-xs font-light text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5 text-primary/70" strokeWidth={1.5} /> +250 788 906 410
              </a>
              <a href="mailto:noblespaces4@gmail.com" className="flex items-center gap-3 text-xs font-light text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5 text-primary/70" strokeWidth={1.5} /> noblespaces4@gmail.com
              </a>
              <div className="flex items-start gap-3 text-xs font-light text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary/70 mt-0.5" strokeWidth={1.5} /> Kigali, Kicukiro, Gikondo
              </div>
              <LocationMap height="140px" className="mt-3 rounded-sm overflow-hidden border border-border/15" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/10">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] font-light text-muted-foreground/70">© {new Date().getFullYear()} Noble Spaces. {t("footer.rights")}</p>
          <p className="text-[10px] tracking-widest-2 uppercase text-muted-foreground/60">Kigali · Rwanda</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
