import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
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
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={heroImg} alt="Portfolio" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative container mx-auto px-4 pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{t("portfolio.label")}</span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground">{t("portfolio.title")}</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl">{t("portfolio.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading label={t("portfolio.label")} title={t("portfolio.title")} description={t("portfolio.dragHint")} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((p, i) => (
              <AnimatedSection key={i} delay={(i % 2) * 0.15}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden group">
                  <BeforeAfterSlider beforeImage={p.before} afterImage={p.after} beforeAlt={`${getTitle(p)} before`} afterAlt={`${getTitle(p)} after`} />
                  <div className="p-6">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary">{p.category}</span>
                    <h3 className="font-display text-2xl text-foreground mt-2">{getTitle(p)}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.location}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{t("portfolio.ctaTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{t("portfolio.ctaDesc")}</p>
            <Link to="/contact" className="gold-gradient text-primary-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
              {t("home.contactUs")} <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
