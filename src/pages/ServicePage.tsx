import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Package, Wrench as WrenchIcon, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { getServiceBySlug, services } from "@/data/services";
import { getGalleryByService } from "@/data/gallery";
import AnimatedSection from "@/components/AnimatedSection";
import BookingModal from "@/components/BookingModal";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || "");
  const [bookingOpen, setBookingOpen] = useState(false);
  const { t, lang } = useLanguage();

  if (!service) return <Navigate to="/services/wardrobes" replace />;

  const otherServices = services.filter(s => s.slug !== service.slug).slice(0, 4);
  const isInStock = service.availability === "in-stock";
  const serviceGallery = getGalleryByService(service.slug);
  const getGalleryTitle = (item: typeof serviceGallery[number]) =>
    lang === "fr" ? item.titleFr : lang === "rw" ? item.titleRw : item.titleEn;

  // Per-service theme: accent color drives badges, dividers, glows on this page only.
  const accent = service.theme.accentHsl;
  const themeStyle = {
    "--service-accent": accent,
  } as React.CSSProperties;

  return (
    <div style={themeStyle}>
      {/* Hero with service-specific gradient overlay */}
      <section className="relative h-[60vh] min-h-[460px] flex items-end overflow-hidden">
        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" width={1280} height={720} />
        {/* Service-specific tinted overlay */}
        <div className="absolute inset-0" style={{ background: service.theme.gradient }} />
        {/* Bottom-to-transparent fade for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        {/* Decorative accent line */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent, hsl(${accent}), transparent)` }} />
        <div className="relative container mx-auto px-4 pb-14">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border" style={{ background: `hsl(${accent} / 0.15)`, borderColor: `hsl(${accent} / 0.4)` }}>
                <service.icon className="w-6 h-6" style={{ color: `hsl(${accent})` }} />
              </div>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: `hsl(${accent})` }}>{t("service.ourServices")}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 max-w-3xl">{service.title}</h1>
            <p className="text-lg md:text-xl italic text-muted-foreground max-w-2xl" style={{ color: `hsl(${accent} / 0.85)` }}>
              — {service.theme.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description + Features + Availability */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection className="lg:col-span-2">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">{t("service.aboutService")}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{service.longDescription}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="flex flex-col gap-6">
              {/* Availability Badge */}
              <div className={`border rounded-xl p-5 ${isInStock ? "border-green-500/30 bg-green-500/5" : "border-primary/30 bg-primary/5"}`}>
                <div className="flex items-center gap-3 mb-2">
                  {isInStock ? <Package className="w-5 h-5 text-green-400" /> : <WrenchIcon className="w-5 h-5 text-primary" />}
                  <span className="font-display text-lg text-foreground">{t("service.availability")}</span>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${isInStock ? "bg-green-500/20 text-green-400" : "bg-primary/20 text-primary"}`}>
                  {isInStock ? t("service.inStock") : t("service.customMade")}
                </span>
                <p className="text-sm text-muted-foreground mt-2">
                  {isInStock ? t("service.inStockDesc") : t("service.customMadeDesc")}
                </p>
              </div>

              {/* Key Features */}
              <div className="bg-card border rounded-xl p-6" style={{ borderColor: `hsl(${accent} / 0.25)` }}>
                <h3 className="font-display text-xl text-foreground mb-4">{t("service.keyFeatures")}</h3>
                <div className="flex flex-col gap-3">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: `hsl(${accent})` }} />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book button */}
              <button
                onClick={() => setBookingOpen(true)}
                className="gold-gradient text-primary-foreground px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <CalendarDays className="w-5 h-5" /> {t("service.bookService")}
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-3 block" style={{ color: `hsl(${accent})` }}>{t("service.howItWorks")}</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">{t("service.ourProcess")}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.15}>
                <div className="relative bg-background border rounded-xl p-6 h-full transition-colors" style={{ borderColor: `hsl(${accent} / 0.2)` }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-display font-bold"
                    style={{ background: `linear-gradient(135deg, hsl(${accent}), hsl(${accent} / 0.6))`, color: "hsl(var(--primary-foreground))" }}
                  >{i + 1}</div>
                  <h3 className="font-display text-lg text-foreground mb-2">{p.step}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-3 block" style={{ color: `hsl(${accent})` }}>{t("service.portfolio")}</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">{t("service.ourWork")}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(serviceGallery.length > 0
              ? serviceGallery
              : [{ id: "fallback", image: service.image, titleEn: service.title, titleFr: service.title, titleRw: service.title }]
            ).map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.1}>
                <Link to="/gallery" className="block rounded-xl overflow-hidden aspect-square group relative">
                  <img src={item.image} alt={getGalleryTitle(item as typeof serviceGallery[number])} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={400} height={400} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <p className="text-foreground text-sm font-medium">{getGalleryTitle(item as typeof serviceGallery[number])}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div
              className="rounded-3xl p-12 text-center"
              style={{ background: `linear-gradient(135deg, hsl(${accent}), hsl(${accent} / 0.7))` }}
            >
              <h2 className="font-display text-3xl text-primary-foreground mb-4">{t("service.interested")} {service.title}?</h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">{t("service.requestQuote")}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                  {t("service.requestService")} <ArrowRight className="w-5 h-5" />
                </Link>
                <button onClick={() => setBookingOpen(true)} className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-primary-foreground/10 transition-colors">
                  <CalendarDays className="w-5 h-5" /> {t("service.bookService")}
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-2xl text-foreground">{t("service.exploreOther")}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.1}>
                <Link to={`/services/${s.slug}`} className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center mb-3">
                    <s.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-base text-foreground mb-1 group-hover:text-primary transition-colors">{s.shortTitle}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{s.description}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} serviceName={service.title} />
    </div>
  );
};

export default ServicePage;
