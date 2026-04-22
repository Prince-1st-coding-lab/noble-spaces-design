import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Instagram, Facebook } from "lucide-react";
import { services } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/logo.png";

const SOCIALS = {
  instagram: "https://www.instagram.com/noblespaces",
  facebook: "https://www.facebook.com/noblespaces",
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const linkBase = "text-[11px] font-medium tracking-[0.22em] uppercase transition-colors hover:text-primary";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/10" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Noble Spaces" className="h-10 w-10 object-contain transition-opacity group-hover:opacity-80" />
          <div className="leading-tight">
            <span className="font-display font-light text-lg text-foreground tracking-wide block">Noble Spaces</span>
            <p className="text-[9px] tracking-widest-2 uppercase text-primary/70 mt-0.5">your space, our passion</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`${linkBase} ${isActive("/") ? "text-primary" : "text-foreground/80"}`}>{t("nav.home")}</Link>
          <Link to="/about" className={`${linkBase} ${isActive("/about") ? "text-primary" : "text-foreground/80"}`}>{t("nav.about")}</Link>

          <div className="relative group">
            <button className={`flex items-center gap-1.5 ${linkBase} ${location.pathname.startsWith("/services") ? "text-primary" : "text-foreground/80"}`}>
              {t("nav.services")} <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" strokeWidth={1.5} />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-background/95 backdrop-blur-xl border border-border/15 shadow-2xl p-3 w-72 grid gap-px rounded-sm">
                {services.map(s => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="px-4 py-2.5 text-xs font-light text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors rounded-sm">
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/portfolio" className={`${linkBase} ${isActive("/portfolio") ? "text-primary" : "text-foreground/80"}`}>{t("nav.portfolio")}</Link>
          <Link to="/gallery" className={`${linkBase} ${isActive("/gallery") ? "text-primary" : "text-foreground/80"}`}>{t("nav.gallery")}</Link>
          <Link to="/contact" className={`${linkBase} ${isActive("/contact") ? "text-primary" : "text-foreground/80"}`}>{t("nav.contact")}</Link>

          <div className="flex items-center gap-1 pl-6 border-l border-border/15">
            <LanguageSwitcher />
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/70 hover:text-primary transition-colors p-2">
              <Instagram className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
            <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground/70 hover:text-primary transition-colors p-2">
              <Facebook className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
          </div>
        </nav>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border/10 animate-fade-in">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-1">
            {[
              { to: "/", label: t("nav.home") },
              { to: "/about", label: t("nav.about") },
            ].map(l => (
              <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="text-foreground/80 hover:text-primary py-3 text-xs font-medium tracking-[0.22em] uppercase border-b border-border/10">{l.label}</Link>
            ))}

            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between text-foreground/80 hover:text-primary py-3 text-xs font-medium tracking-[0.22em] uppercase border-b border-border/10">
              {t("nav.services")} <ChevronDown className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} strokeWidth={1.5} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-px py-2 border-b border-border/10">
                {services.map(s => (
                  <Link key={s.slug} to={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="text-xs font-light text-muted-foreground hover:text-primary py-2">
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            )}

            {[
              { to: "/portfolio", label: t("nav.portfolio") },
              { to: "/gallery", label: t("nav.gallery") },
              { to: "/contact", label: t("nav.contact") },
            ].map(l => (
              <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="text-foreground/80 hover:text-primary py-3 text-xs font-medium tracking-[0.22em] uppercase border-b border-border/10">{l.label}</Link>
            ))}

            <div className="py-5 flex items-center justify-between">
              <LanguageSwitcher />
              <div className="flex items-center gap-2">
                <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/70 hover:text-primary transition-colors p-2">
                  <Instagram className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground/70 hover:text-primary transition-colors p-2">
                  <Facebook className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
