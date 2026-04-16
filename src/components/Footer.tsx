import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { services } from "@/data/services";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl text-foreground mb-2">Noble Spaces</h3>
          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Your Space, Our Passion</p>
          <p className="text-sm text-muted-foreground leading-relaxed">Delivering high-quality interior design and furniture solutions with craftsmanship, customization, and modern design excellence.</p>
        </div>

        <div>
          <h4 className="font-display text-lg text-foreground mb-4">Services</h4>
          <div className="flex flex-col gap-2">
            {services.slice(0, 6).map(s => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.shortTitle}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-foreground mb-4">More Services</h4>
          <div className="flex flex-col gap-2">
            {services.slice(6).map(s => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.shortTitle}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-foreground mb-4">Contact</h4>
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
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-border py-6">
      <p className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Noble Spaces. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
