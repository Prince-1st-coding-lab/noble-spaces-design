import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImg from "@/assets/hero-home.jpg";
import kitchen from "@/assets/kitchen.jpg";
import office from "@/assets/office.jpg";
import interior from "@/assets/interior-design.jpg";
import furniture from "@/assets/furniture.jpg";
import sofa from "@/assets/sofa.jpg";
import ceiling from "@/assets/ceiling.jpg";

const projects = [
  { titleEn: "Modern Kitchen Renovation", titleFr: "Rénovation de Cuisine Moderne", titleRw: "Igikoni Cyahinduwe", category: "Kitchen", before: ceiling, after: kitchen, location: "Kigali, Nyarutarama" },
  { titleEn: "Executive Office Transformation", titleFr: "Transformation de Bureau Exécutif", titleRw: "Ihindurwa ry'Ibiro", category: "Office", before: interior, after: office, location: "Kigali, Kacyiru" },
  { titleEn: "Luxury Living Room", titleFr: "Salon de Luxe", titleRw: "Salo y'Ubwiza", category: "Interior", before: furniture, after: sofa, location: "Kigali, Kibagabaga" },
  { titleEn: "Premium Interior Design", titleFr: "Design d'Intérieur Premium", titleRw: "Ubudizayinari Bukomeye", category: "Interior", before: heroImg, after: interior, location: "Kigali, Gisozi" },
];

const Portfolio = () => {
  const { t, lang } = useLanguage();

  const getTitle = (p: typeof projects[number]) =>
    lang === "fr" ? p.titleFr : lang === "rw" ? p.titleRw : p.titleEn;

  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 border-b border-border/10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-6 block">— {t("portfolio.label")}</span>
            <h1 className="font-display font-light text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.05] tracking-tight">{t("portfolio.title")}</h1>
            <p className="text-muted-foreground font-light text-base max-w-xl leading-relaxed">{t("portfolio.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {projects.map((p, i) => (
              <AnimatedSection key={i} delay={(i % 2) * 0.15}>
                <div className="group">
                  <div className="overflow-hidden rounded-sm border border-border/15 mb-6">
                    <BeforeAfterSlider beforeImage={p.before} afterImage={p.after} beforeAlt={`${getTitle(p)} before`} afterAlt={`${getTitle(p)} after`} />
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <span className="text-[10px] tracking-widest-2 uppercase text-primary/80">— {p.category}</span>
                      <h3 className="font-display font-light text-2xl md:text-3xl text-foreground mt-3">{getTitle(p)}</h3>
                      <p className="text-xs font-light text-muted-foreground mt-2">{p.location}</p>
                    </div>
                    <span className="text-[10px] tracking-widest-2 uppercase text-muted-foreground/60 hidden sm:block">0{i + 1} / 0{projects.length}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border/10">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-6 block">— Begin</span>
            <h2 className="font-display font-light text-3xl md:text-5xl text-foreground mb-6 leading-[1.15]">{t("portfolio.ctaTitle")}</h2>
            <p className="text-muted-foreground font-light max-w-xl mx-auto mb-10 leading-relaxed">{t("portfolio.ctaDesc")}</p>
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs font-medium tracking-[0.22em] uppercase hover:bg-primary/90 transition-colors rounded-sm">
              {t("home.contactUs")} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
