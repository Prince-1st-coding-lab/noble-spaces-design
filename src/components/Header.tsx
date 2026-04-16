import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Noble Spaces" className="h-12 w-12 object-contain" />
          <div>
            <span className="font-display text-xl text-foreground tracking-wide">Noble Spaces</span>
            <p className="text-[10px] tracking-[0.2em] uppercase text-primary">Your Space, Our Passion</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}>Home</Link>
          <Link to="/about" className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-foreground"}`}>About</Link>
          
          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-primary ${location.pathname.startsWith("/services") ? "text-primary" : "text-foreground"}`}>
              Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-card border border-border rounded-lg shadow-xl p-4 w-72 grid gap-1">
                {services.map(s => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="px-3 py-2 rounded-md text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/contact" className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-foreground"}`}>Contact</Link>
          
          <a href="tel:+250788906410" className="gold-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Phone className="w-4 h-4" /> Get a Quote
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-foreground hover:text-primary py-2">Home</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="text-foreground hover:text-primary py-2">About</Link>
            
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between text-foreground hover:text-primary py-2">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-2">
                {services.map(s => (
                  <Link key={s.slug} to={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-primary py-1">
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-foreground hover:text-primary py-2">Contact</Link>
            <a href="tel:+250788906410" className="gold-gradient text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold text-center mt-2">
              <Phone className="w-4 h-4 inline mr-2" /> Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
