import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const langs: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "rw", label: "KIN" },
  { code: "fr", label: "FR" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <Globe className="w-4 h-4 text-muted-foreground" />
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
            lang === l.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
