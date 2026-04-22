import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import LocationMap from "@/components/LocationMap";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { services } from "@/data/services";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { ...form },
      });
      if (error) throw error;
      toast({ title: t("contact.sent"), description: t("contact.sentDesc") });
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      toast({ title: t("contact.sent"), description: t("contact.sentDesc") });
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } finally {
      setSending(false);
    }
  };

  const inputCls = "w-full bg-transparent border-0 border-b border-border/25 px-0 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors text-sm font-light rounded-none";

  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 border-b border-border/10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="text-primary/80 text-[11px] font-medium tracking-widest-2 uppercase mb-6 block">— {t("contact.getInTouch")}</span>
            <h1 className="font-display font-light text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.05] tracking-tight">{t("contact.title")}</h1>
            <p className="text-muted-foreground font-light text-base max-w-xl leading-relaxed">{t("contact.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-[11px] tracking-widest-2 uppercase text-primary/80 mb-10">— {t("contact.info")}</h2>
              <div className="flex flex-col gap-8">
                {[
                  { icon: Phone, label: t("contact.phone"), value: "+250 788 906 410", href: "tel:+250788906410" },
                  { icon: Mail, label: t("contact.email"), value: "noblespaces4@gmail.com", href: "mailto:noblespaces4@gmail.com" },
                  { icon: MapPin, label: t("contact.location"), value: "Kigali, Kicukiro, Gikondo" },
                  { icon: Clock, label: t("contact.hours"), value: t("contact.hoursValue") },
                ].map((item, i) => {
                  const Inner = (
                    <>
                      <item.icon className="w-4 h-4 text-primary/70 mt-1 flex-shrink-0" strokeWidth={1.25} />
                      <div>
                        <p className="text-[10px] tracking-widest-2 uppercase text-muted-foreground/70 mb-1">{item.label}</p>
                        <p className="text-foreground font-light text-sm">{item.value}</p>
                      </div>
                    </>
                  );
                  return item.href ? (
                    <a key={i} href={item.href} className="flex items-start gap-4 group hover:text-primary transition-colors">{Inner}</a>
                  ) : (
                    <div key={i} className="flex items-start gap-4">{Inner}</div>
                  );
                })}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-8">
              <h2 className="text-[11px] tracking-widest-2 uppercase text-primary/80 mb-10">— {t("contact.sendMessage")}</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <div>
                  <label className="text-[10px] tracking-widest-2 uppercase text-muted-foreground/70 mb-2 block">{t("contact.fullName")}</label>
                  <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest-2 uppercase text-muted-foreground/70 mb-2 block">{t("contact.emailLabel")}</label>
                  <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest-2 uppercase text-muted-foreground/70 mb-2 block">{t("contact.phoneLabel")}</label>
                  <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="+250 7XX XXX XXX" />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest-2 uppercase text-muted-foreground/70 mb-2 block">{t("contact.serviceLabel")}</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className={inputCls}>
                    <option value="" className="bg-background">{t("contact.selectService")}</option>
                    {services.map(s => (
                      <option key={s.slug} value={s.shortTitle} className="bg-background">{s.shortTitle}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-[10px] tracking-widest-2 uppercase text-muted-foreground/70 mb-2 block">{t("contact.message")}</label>
                  <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`} placeholder={t("contact.messagePlaceholder")} />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" disabled={sending} className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs font-medium tracking-[0.22em] uppercase hover:bg-primary/90 transition-colors disabled:opacity-50 rounded-sm">
                    <Send className="w-3.5 h-3.5" strokeWidth={1.5} /> {sending ? "..." : t("contact.send")}
                  </button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <LocationMap height="420px" className="rounded-sm overflow-hidden border border-border/15" />
        </div>
      </section>
    </div>
  );
};

export default Contact;
