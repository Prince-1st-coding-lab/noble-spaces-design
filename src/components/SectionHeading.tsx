import AnimatedSection from "./AnimatedSection";

interface Props {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}

const SectionHeading = ({ label, title, description, align = "center" }: Props) => (
  <AnimatedSection className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
    {label && (
      <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-5 block">
        — {label}
      </span>
    )}
    <h2 className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-foreground mb-5 leading-[1.15]">
      {title}
    </h2>
    {description && (
      <p className={`text-muted-foreground text-base leading-relaxed font-light ${align === "center" ? "max-w-xl mx-auto" : "max-w-xl"}`}>
        {description}
      </p>
    )}
  </AnimatedSection>
);

export default SectionHeading;
