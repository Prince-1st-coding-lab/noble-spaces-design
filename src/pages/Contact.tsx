import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

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
        body: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
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

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-card">
        <div className="container mx-auto px-4 pt-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">{t("contact.getInTouch")}</span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t("contact.title")}</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">{t("contact.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection>
              <div className="flex flex-col gap-6">
                <h2 className="font-display text-2xl text-foreground">{t("contact.info")}</h2>
                <a href="tel:+250788906410" className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("contact.phone")}</p>
                    <p className="text-foreground font-medium">+250 788 906 410</p>
                  </div>
                </a>
                <a href="mailto:noblespaces4@gmail.com" className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("contact.email")}</p>
                    <p className="text-foreground font-medium">noblespaces4@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-5">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("contact.location")}</p>
                    <p className="text-foreground font-medium">Kigali, Rwanda</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-5">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("contact.hours")}</p>
                    <p className="text-foreground font-medium">{t("contact.hoursValue")}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="font-display text-2xl text-foreground mb-6">{t("contact.sendMessage")}</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">{t("contact.fullName")}</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">{t("contact.emailLabel")}</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">{t("contact.phoneLabel")}</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" placeholder="+250 7XX XXX XXX" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">{t("contact.serviceLabel")}</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors">
                      <option value="">{t("contact.selectService")}</option>
                      <option>Interior Design</option>
                      <option>Furniture Manufacturing</option>
                      <option>Sofa Design</option>
                      <option>Office Furniture</option>
                      <option>Kitchen Design</option>
                      <option>Wall Partitioning</option>
                      <option>Ceiling Installation</option>
                      <option>Curtains & Carpets</option>
                      <option>Door Manufacturing</option>
                      <option>Soundproofing</option>
                      <option>Furniture Repair</option>
                      <option>Maintenance</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-muted-foreground mb-1.5 block">{t("contact.message")}</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder={t("contact.messagePlaceholder")} />
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" disabled={sending} className="gold-gradient text-primary-foreground px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50">
                      <Send className="w-5 h-5" /> {sending ? "..." : t("contact.send")}
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-xl overflow-hidden h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="font-display text-xl text-foreground">Kigali, Rwanda</p>
              <p className="text-sm text-muted-foreground">{t("contact.visitShowroom")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
