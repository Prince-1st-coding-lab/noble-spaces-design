import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutImg from "@/assets/about-team.jpg";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Award, title: t("about.craftsmanship"), text: t("about.craftsmanshipDesc") },
    { icon: Target, title: t("about.customization"), text: t("about.customizationDesc") },
    { icon: Eye, title: t("about.modernDesign"), text: t("about.modernDesignDesc") },
    { icon: Heart, title: t("about.clientFirst"), text: t("about.clientFirstDesc") },
  ];

  return (
    <div>
      {/* Hero — minimal, text only */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 border-b border-border/10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-6 block">— {t("about.title")}</span>
            <h1 className="font-display font-light text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight">
              {t("about.heading")}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <AnimatedSection className="lg:col-span-6">
              <div className="overflow-hidden rounded-sm">
                <img src={aboutImg} alt="Noble Spaces team" loading="lazy" className="w-full h-full object-cover" width={1280} height={800} />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="lg:col-span-6">
              <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-5 block">— {t("about.whoWeAre")}</span>
              <h2 className="font-display font-light text-3xl md:text-4xl text-foreground mb-8 leading-[1.15]">{t("about.craftingTitle")}</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-5">{t("about.story1")}</p>
              <p className="text-muted-foreground font-light leading-relaxed mb-10">{t("about.story2")}</p>
              <Link to="/contact" className="group inline-flex items-center gap-3 text-primary text-xs font-medium tracking-[0.22em] uppercase border-b border-primary/40 pb-1 hover:border-primary transition-colors">
                {t("about.workWithUs")} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission — quiet block */}
      <section className="py-24 md:py-32 border-y border-border/10">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-6 block">— {t("about.missionLabel")}</span>
            <h2 className="font-display font-light italic text-3xl md:text-5xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-[1.2]">"{t("about.missionTitle")}"</h2>
            <p className="text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">{t("about.missionDesc")}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values — minimal, no boxes */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading label={t("about.valuesLabel")} title={t("about.valuesTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-px">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.12}>
                <div className="lg:px-8 text-center lg:border-r border-border/15 last:border-r-0 h-full">
                  <span className="inline-flex w-12 h-12 rounded-full border border-border/30 items-center justify-center mb-6 text-primary/80">
                    <v.icon className="w-4 h-4" strokeWidth={1.25} />
                  </span>
                  <h3 className="font-display font-light text-xl text-foreground mb-3">{v.title}</h3>
                  <p className="text-xs font-light text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
