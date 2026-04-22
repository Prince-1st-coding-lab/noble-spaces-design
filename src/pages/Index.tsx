import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImg from "@/assets/hero-home.jpg";
import tvWallImg from "@/assets/gallery/tv-wall-marble.jpg";
import execOfficeImg from "@/assets/gallery/executive-office.jpg";
import bookshelfImg from "@/assets/gallery/bookshelf-desk.jpg";

const testimonials = [
  { name: "Sarah M.", role: "Homeowner", text: "Noble Spaces transformed our home beyond our wildest dreams. The attention to detail and quality of craftsmanship is unmatched." },
  { name: "Jean P.", role: "Business Owner", text: "Our office redesign boosted team morale and productivity. The modern furniture and layout are simply outstanding." },
  { name: "Claire N.", role: "Hotel Manager", text: "From kitchen renovation to custom furniture, Noble Spaces delivered excellence at every step. Highly recommended!" },
];

const Index = () => {
  const { t } = useLanguage();

  const categories = [
    { title: t("home.tvWalls"), image: tvWallImg, link: "/services/tv-wall-installation" },
    { title: t("home.officeInteriors"), image: execOfficeImg, link: "/services/office-equipment" },
    { title: t("home.customFurniture"), image: bookshelfImg, link: "/services/wardrobes" },
  ];

  return (
    <div>
      {/* Hero — quiet, editorial */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury living room by Noble Spaces" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        <div className="relative container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="max-w-2xl">
            <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-8 block">
              — {t("home.welcome")}
            </span>
            <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-[1.05] tracking-tight">
              {t("home.tagline").split(",")[0]},
              <br />
              <span className="italic text-primary/90 font-light">{t("home.tagline").split(",")[1] || "Our Passion"}</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-md leading-relaxed font-light">
              {t("home.heroDesc")}
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <Link to="/contact" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors rounded-sm">
                {t("nav.getQuote")}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/about" className="group inline-flex items-center gap-3 text-foreground/90 px-7 py-3.5 text-xs font-medium tracking-[0.2em] uppercase border border-border/30 hover:border-primary/60 hover:text-primary transition-colors rounded-sm">
                {t("home.learnMore")}
              </Link>
            </div>
          </motion.div>
        </div>
        {/* tiny scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <span className="text-[10px] tracking-widest-2 uppercase text-muted-foreground/60">scroll</span>
        </div>
      </section>

      {/* Featured Categories — calm grid */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <SectionHeading label={t("home.whatWeDo")} title={t("home.categories")} description={t("home.categoriesDesc")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/15">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.1}>
                <Link to={cat.link} className="group block relative aspect-[4/5] overflow-hidden bg-background">
                  <img src={cat.image} alt={cat.title} loading="lazy" className="w-full h-full object-cover opacity-70 transition-all duration-1000 group-hover:opacity-90 group-hover:scale-[1.03]" width={1280} height={1600} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display font-light text-2xl text-foreground mb-3">{cat.title}</h3>
                    <span className="text-primary/90 text-[10px] font-medium tracking-widest-2 uppercase inline-flex items-center gap-2 transition-all">
                      {t("home.explore")} <span className="w-6 h-px bg-primary/60 transition-all group-hover:w-10" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Services — minimalist list */}
      <section className="py-28 md:py-36 border-t border-border/10">
        <div className="container mx-auto px-6">
          <SectionHeading label={t("home.ourServices")} title={t("home.completeSolutions")} description={t("home.servicesDesc")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-px max-w-6xl mx-auto">
            {services.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.03}>
                <Link to={`/services/${s.slug}`} className="group flex items-start gap-5 py-7 border-b border-border/15 hover:border-primary/40 transition-colors">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full border border-border/30 flex items-center justify-center text-primary/80 group-hover:border-primary/60 group-hover:text-primary transition-colors">
                    <s.icon className="w-4 h-4" strokeWidth={1.25} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-light text-lg text-foreground mb-1.5 group-hover:text-primary transition-colors">{s.shortTitle}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-light line-clamp-2">{s.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-1.5" strokeWidth={1.25} />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — quiet, no boxes */}
      <section className="py-28 md:py-36 border-t border-border/10">
        <div className="container mx-auto px-6">
          <SectionHeading label={t("home.testimonials")} title={t("home.whatClientsSay")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto">
            {testimonials.map((te, i) => (
              <AnimatedSection key={te.name} delay={i * 0.15}>
                <div className="relative">
                  <Quote className="w-6 h-6 text-primary/30 mb-6" strokeWidth={1.25} />
                  <p className="font-display font-light text-foreground/90 text-lg md:text-xl leading-relaxed mb-8 italic">
                    "{te.text}"
                  </p>
                  <div className="pt-6 border-t border-border/15">
                    <p className="text-sm text-foreground font-medium">{te.name}</p>
                    <p className="text-[11px] tracking-widest-2 uppercase text-muted-foreground/70 mt-1">{te.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — restrained */}
      <section className="py-28 md:py-36 border-t border-border/10">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-6 block">— Begin</span>
              <h2 className="font-display font-light text-3xl md:text-5xl text-foreground mb-6 leading-[1.15]">{t("home.ctaTitle")}</h2>
              <p className="text-muted-foreground font-light mb-10 leading-relaxed">{t("home.ctaDesc")}</p>
              <Link to="/contact" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors rounded-sm">
                {t("home.contactUs")}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
