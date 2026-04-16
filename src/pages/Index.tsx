import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImg from "@/assets/hero-home.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import officeImg from "@/assets/office.jpg";
import furnitureImg from "@/assets/furniture.jpg";

const testimonials = [
  { name: "Sarah M.", role: "Homeowner", text: "Noble Spaces transformed our home beyond our wildest dreams. The attention to detail and quality of craftsmanship is unmatched.", rating: 5 },
  { name: "Jean P.", role: "Business Owner", text: "Our office redesign boosted team morale and productivity. The modern furniture and layout are simply outstanding.", rating: 5 },
  { name: "Claire N.", role: "Hotel Manager", text: "From kitchen renovation to custom furniture, Noble Spaces delivered excellence at every step. Highly recommended!", rating: 5 },
];

const Index = () => {
  const { t } = useLanguage();

  const categories = [
    { title: t("home.kitchenDesigns"), image: kitchenImg, link: "/services/kitchen-design" },
    { title: t("home.officeInteriors"), image: officeImg, link: "/services/office-furniture" },
    { title: t("home.customFurniture"), image: furnitureImg, link: "/services/furniture-manufacturing" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury living room by Noble Spaces" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">{t("home.welcome")}</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 leading-tight">
              {t("home.tagline").split(",")[0]},<br /><span className="text-gold-gradient">{t("home.tagline").split(",")[1] || "Our Passion"}</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              {t("home.heroDesc")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="gold-gradient text-primary-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                {t("nav.getQuote")} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="border border-primary/30 text-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/10 transition-colors">
                {t("home.learnMore")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading label={t("home.whatWeDo")} title={t("home.categories")} description={t("home.categoriesDesc")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.15}>
                <Link to={cat.link} className="group block relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={cat.image} alt={cat.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={1280} height={720} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl text-foreground mb-1">{cat.title}</h3>
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t("home.explore")} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading label={t("home.ourServices")} title={t("home.completeSolutions")} description={t("home.servicesDesc")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.05}>
                <Link to={`/services/${s.slug}`} className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:gold-glow transition-all duration-300">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{s.shortTitle}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{s.description}</p>
                  <span className="text-primary text-sm font-medium mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t("home.learnMore")} <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading label={t("home.testimonials")} title={t("home.whatClientsSay")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((te, i) => (
              <AnimatedSection key={te.name} delay={i * 0.15}>
                <div className="bg-background border border-border rounded-xl p-8 relative">
                  <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: te.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{te.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{te.name}</p>
                    <p className="text-xs text-muted-foreground">{te.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="gold-gradient rounded-3xl p-12 md:p-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">{t("home.ctaTitle")}</h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">{t("home.ctaDesc")}</p>
              <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                {t("home.contactUs")} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
