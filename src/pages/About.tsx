import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-team.jpg";
import heroImg from "@/assets/hero-home.jpg";

const values = [
  { icon: Award, title: "Craftsmanship", text: "Every project reflects meticulous attention to detail and superior quality." },
  { icon: Target, title: "Customization", text: "Tailored solutions designed around your unique vision and lifestyle." },
  { icon: Eye, title: "Modern Design", text: "Contemporary aesthetics that blend timeless elegance with innovation." },
  { icon: Heart, title: "Client First", text: "Your satisfaction drives every decision we make." },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <img src={heroImg} alt="Noble Spaces studio" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative container mx-auto px-4 pb-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">About Us</span>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Our Story</h1>
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
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Who We Are</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">Crafting Exceptional Spaces Since Day One</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Noble Spaces is a premier interior design and furniture company dedicated to transforming spaces into works of art. We combine creative vision with technical expertise to deliver solutions that exceed expectations.</p>
            <p className="text-muted-foreground leading-relaxed mb-6">Our team of skilled designers, craftsmen, and project managers work collaboratively to bring your vision to life. From residential homes to commercial offices, we approach every project with the same level of dedication and attention to detail.</p>
            <Link to="/contact" className="gold-gradient text-primary-foreground px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
              Work With Us <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Our Mission</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 max-w-3xl mx-auto">Delivering High-Quality Interior & Furniture Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">We are committed to creating spaces that inspire, comfort, and endure. Through craftsmanship, customization, and modern design, we transform your environment into something extraordinary.</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Values */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading label="Our Values" title="What Drives Us" />
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

export default About;
