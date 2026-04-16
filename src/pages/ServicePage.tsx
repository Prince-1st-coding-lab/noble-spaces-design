import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getServiceBySlug, services } from "@/data/services";
import AnimatedSection from "@/components/AnimatedSection";

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || "");

  if (!service) return <Navigate to="/services/interior-design" replace />;

  const otherServices = services.filter(s => s.slug !== service.slug).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative container mx-auto px-4 pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Our Services</span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground">{service.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection className="lg:col-span-2">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">About This Service</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{service.longDescription}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display text-xl text-foreground mb-4">Key Features</h3>
                <div className="flex flex-col gap-3">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">How It Works</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Our Process</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.15}>
                <div className="relative bg-background border border-border rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center mb-4 font-display text-primary-foreground font-bold">{i + 1}</div>
                  <h3 className="font-display text-lg text-foreground mb-2">{p.step}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery placeholder using the service image in different crops */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Portfolio</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Our Work</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-xl overflow-hidden aspect-square">
                  <img src={service.image} alt={`${service.title} portfolio ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" width={400} height={400} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="gold-gradient rounded-3xl p-12 text-center">
              <h2 className="font-display text-3xl text-primary-foreground mb-4">Interested in {service.title}?</h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Request a free quote and let our experts create the perfect solution for you.</p>
              <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                Request Service <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-2xl text-foreground">Explore Other Services</h2>
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
    </div>
  );
};

export default ServicePage;
