import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import AnimatedSection from "@/components/AnimatedSection";
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
      <section className="relative pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3 block">
              {t("gallery.label")}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              {t("gallery.title")}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("gallery.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {galleryCategories.map(cat => {
              const active = filter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                    active
                      ? "gold-gradient text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30"
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
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filtered.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setSelected(item)}
                  className="group relative rounded-2xl overflow-hidden border border-border hover:ring-2 hover:ring-primary/40 transition-all aspect-square"
                >
                  <img
                    src={item.image}
                    alt={getTitle(item)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                    <p className="font-display text-sm text-foreground">{getTitle(item)}</p>
                    <span className="text-primary text-xs">{t("gallery.viewLarger")}</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">{t("gallery.empty")}</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-4xl p-0 bg-background border-border overflow-hidden">
          {selected && (
            <div className="relative">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:text-primary transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <img src={selected.image} alt={getTitle(selected)} className="w-full max-h-[75vh] object-contain bg-card" />
              <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border">
                <div>
                  <h3 className="font-display text-xl text-foreground">{getTitle(selected)}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mt-1">
                    {t(`gallery.filter${selected.category.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join("")}`)}
                  </p>
                </div>
                <Link
                  to={`/services/${selected.serviceSlugs[0]}`}
                  onClick={() => setSelected(null)}
                  className="gold-gradient text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  {t("gallery.bookSimilar")} <ArrowRight className="w-4 h-4" />
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
