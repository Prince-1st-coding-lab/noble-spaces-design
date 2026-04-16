import AnimatedSection from "./AnimatedSection";

interface Props {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ label, title, description, light }: Props) => (
  <AnimatedSection className="text-center mb-12">
    {label && <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{label}</span>}
    <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl mb-4 ${light ? "text-foreground" : "text-foreground"}`}>{title}</h2>
    {description && <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>}
  </AnimatedSection>
);

export default SectionHeading;
