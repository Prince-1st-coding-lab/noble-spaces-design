import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutImg from "@/assets/about-team.jpg";
import heroImg from "@/assets/hero-home.jpg";

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
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={heroImg} alt="Noble Spaces studio" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative container mx-auto px-4 pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{t("about.title")}</span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground">{t("about.heading")}</h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden">
                <img src={aboutImg} alt="Noble Spaces team" loading="lazy" className="w-full h-full object-cover" width={1280} height={800} />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{t("about.whoWeAre")}</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">{t("about.craftingTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("about.story1")}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{t("about.story2")}</p>
              <Link to="/contact" className="gold-gradient text-primary-foreground px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                {t("about.workWithUs")} <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{t("about.missionLabel")}</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 max-w-3xl mx-auto">{t("about.missionTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">{t("about.missionDesc")}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading label={t("about.valuesLabel")} title={t("about.valuesTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.15}>
                <div className="bg-card border border-border rounded-xl p-8 text-center h-full">
                  <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
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
