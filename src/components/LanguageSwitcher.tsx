import { useLanguage, Language } from "@/contexts/LanguageContext";

const langs: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "rw", label: "KIN" },
  { code: "fr", label: "FR" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-px text-[10px] tracking-widest-2 uppercase">
      {langs.map((l, i) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-2 py-1 transition-colors ${
            lang === l.code ? "text-primary" : "text-muted-foreground/60 hover:text-foreground"
          } ${i > 0 ? "border-l border-border/15" : ""}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
