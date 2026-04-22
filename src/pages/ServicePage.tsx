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

  const accent = service.theme.accentHsl;
  const themeStyle = { "--service-accent": accent } as React.CSSProperties;

  return (
    <div style={themeStyle}>
      {/* Hero — image with quiet overlay */}
      <section className="relative h-[78vh] min-h-[560px] flex items-end overflow-hidden">
        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-50" width={1280} height={720} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        <div className="relative container mx-auto px-6 pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full border border-border/30 flex items-center justify-center text-primary/80">
                <service.icon className="w-4 h-4" strokeWidth={1.25} />
              </span>
              <span className="text-[11px] font-medium tracking-widest-2 uppercase text-primary/80">— {t("service.ourServices")}</span>
            </div>
            <h1 className="font-display font-light text-4xl md:text-6xl lg:text-7xl text-foreground mb-5 leading-[1.05] tracking-tight">{service.title}</h1>
            <p className="text-base md:text-lg italic font-light text-muted-foreground max-w-xl">
              {service.theme.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About + sidebar */}
      <section className="py-24 md:py-32 border-t border-border/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-7">
              <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-6 block">— {t("service.aboutService")}</span>
              <p className="text-foreground/85 font-light leading-relaxed text-lg md:text-xl">{service.longDescription}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-5 flex flex-col gap-10">
              {/* Availability */}
              <div className="border-l-2 border-primary/40 pl-5">
                <div className="flex items-center gap-2 mb-2">
                  {isInStock ? <Package className="w-3.5 h-3.5 text-primary/80" strokeWidth={1.5} /> : <WrenchIcon className="w-3.5 h-3.5 text-primary/80" strokeWidth={1.5} />}
                  <span className="text-[10px] tracking-widest-2 uppercase text-primary/80">{t("service.availability")}</span>
                </div>
                <p className="font-display font-light text-xl text-foreground mb-2">
                  {isInStock ? t("service.inStock") : t("service.customMade")}
                </p>
                <p className="text-xs font-light text-muted-foreground leading-relaxed">
                  {isInStock ? t("service.inStockDesc") : t("service.customMadeDesc")}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-[10px] tracking-widest-2 uppercase text-primary/80 mb-5">— {t("service.keyFeatures")}</h3>
                <div className="flex flex-col gap-3">
                  {service.features.map(f => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-1 text-primary/70" strokeWidth={1.5} />
                      <span className="text-sm font-light text-muted-foreground leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setBookingOpen(true)}
                className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-xs font-medium tracking-[0.22em] uppercase hover:bg-primary/90 transition-colors rounded-sm"
              >
                <CalendarDays className="w-3.5 h-3.5" strokeWidth={1.5} /> {t("service.bookService")}
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 border-t border-border/10">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-16 md:mb-20 text-center">
            <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-5 block">— {t("service.howItWorks")}</span>
            <h2 className="font-display font-light text-3xl md:text-5xl text-foreground leading-[1.15]">{t("service.ourProcess")}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/15 max-w-6xl mx-auto">
            {service.process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.12}>
                <div className="bg-background p-8 lg:p-10 h-full">
                  <span className="text-[10px] tracking-widest-2 uppercase text-primary/70 block mb-6">0{i + 1}</span>
                  <h3 className="font-display font-light text-xl text-foreground mb-3 leading-tight">{p.step}</h3>
                  <p className="text-xs font-light text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 border-t border-border/10">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-16 md:mb-20 text-center">
            <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-5 block">— {t("service.portfolio")}</span>
            <h2 className="font-display font-light text-3xl md:text-5xl text-foreground leading-[1.15]">{t("service.ourWork")}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border/10">
            {(serviceGallery.length > 0
              ? serviceGallery
              : [{ id: "fallback", image: service.image, titleEn: service.title, titleFr: service.title, titleRw: service.title }]
            ).map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.08}>
                <Link to="/gallery" className="block overflow-hidden aspect-square group relative bg-background">
                  <img src={item.image} alt={getGalleryTitle(item as typeof serviceGallery[number])} loading="lazy" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700" width={400} height={400} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <p className="text-foreground text-sm font-light font-display">{getGalleryTitle(item as typeof serviceGallery[number])}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — quiet */}
      <section className="py-24 md:py-32 border-t border-border/10">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <AnimatedSection>
            <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-6 block">— Begin</span>
            <h2 className="font-display font-light text-3xl md:text-5xl text-foreground mb-6 leading-[1.15]">{t("service.interested")} {service.title}?</h2>
            <p className="text-muted-foreground font-light mb-10 leading-relaxed">{t("service.requestQuote")}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 text-xs font-medium tracking-[0.22em] uppercase hover:bg-primary/90 transition-colors rounded-sm">
                {t("service.requestService")} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
              </Link>
              <button onClick={() => setBookingOpen(true)} className="group inline-flex items-center gap-3 text-foreground/90 px-7 py-3.5 text-xs font-medium tracking-[0.22em] uppercase border border-border/30 hover:border-primary/60 hover:text-primary transition-colors rounded-sm">
                <CalendarDays className="w-3.5 h-3.5" strokeWidth={1.5} /> {t("service.bookService")}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Other services */}
      <section className="py-24 md:py-32 border-t border-border/10">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-16 text-center">
            <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-5 block">— More</span>
            <h2 className="font-display font-light text-3xl md:text-4xl text-foreground">{t("service.exploreOther")}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/10 max-w-6xl mx-auto">
            {otherServices.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.08}>
                <Link to={`/services/${s.slug}`} className="group block bg-background p-8 h-full hover:bg-card transition-colors">
                  <span className="inline-flex w-10 h-10 rounded-full border border-border/30 items-center justify-center mb-5 text-primary/80 group-hover:border-primary/60 transition-colors">
                    <s.icon className="w-4 h-4" strokeWidth={1.25} />
                  </span>
                  <h3 className="font-display font-light text-base text-foreground mb-2 group-hover:text-primary transition-colors">{s.shortTitle}</h3>
                  <p className="text-xs font-light text-muted-foreground line-clamp-2 leading-relaxed">{s.description}</p>
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
