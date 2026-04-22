import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { galleryItems, galleryCategories, GalleryCategory, GalleryItem } from "@/data/gallery";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const getTitle = (item: GalleryItem) =>
    lang === "fr" ? item.titleFr : lang === "rw" ? item.titleRw : item.titleEn;

  const filtered = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter(i => i.category === filter)),
    [filter]
  );

  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 border-b border-border/10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-6 block">— {t("gallery.label")}</span>
            <h1 className="font-display font-light text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.05] tracking-tight">
              {t("gallery.title")}
            </h1>
            <p className="text-muted-foreground font-light text-base max-w-xl leading-relaxed">
              {t("gallery.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters — quiet inline */}
      <section className="py-8 sticky top-20 z-30 bg-background/90 backdrop-blur-xl border-b border-border/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center">
            {galleryCategories.map(cat => {
              const active = filter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`text-[11px] font-medium tracking-[0.22em] uppercase transition-colors pb-1 border-b ${
                    active
                      ? "text-primary border-primary/60"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  {t(cat.labelKey)}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border/10"
            >
              {filtered.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  onClick={() => setSelected(item)}
                  className="group relative overflow-hidden bg-background aspect-square"
                >
                  <img
                    src={item.image}
                    alt={getTitle(item)}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-left translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-display font-light text-sm text-foreground">{getTitle(item)}</p>
                    <span className="text-primary/80 text-[10px] tracking-widest-2 uppercase mt-1 block">{t("gallery.viewLarger")}</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground/70 font-light py-16">{t("gallery.empty")}</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-4xl p-0 bg-background border-border/20 overflow-hidden">
          {selected && (
            <div className="relative">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:text-primary transition-colors border border-border/20"
                aria-label="Close"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <img src={selected.image} alt={getTitle(selected)} className="w-full max-h-[75vh] object-contain bg-card" />
              <div className="p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border/15">
                <div>
                  <p className="text-[10px] uppercase tracking-widest-2 text-primary/80 mb-2">
                    {t(`gallery.filter${selected.category.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join("")}`)}
                  </p>
                  <h3 className="font-display font-light text-2xl text-foreground">{getTitle(selected)}</h3>
                </div>
                <Link
                  to={`/services/${selected.serviceSlugs[0]}`}
                  onClick={() => setSelected(null)}
                  className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 text-[11px] font-medium tracking-[0.22em] uppercase hover:bg-primary/90 transition-colors rounded-sm"
                >
                  {t("gallery.bookSimilar")} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
