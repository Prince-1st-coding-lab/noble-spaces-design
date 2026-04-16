import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-card">
        <div className="container mx-auto px-4 pt-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Get In Touch</span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Ready to transform your space? Reach out and let's start the conversation.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="flex flex-col gap-6">
                <h2 className="font-display text-2xl text-foreground">Contact Information</h2>
                <a href="tel:+250788906410" className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+250 788 906 410</p>
                  </div>
                </a>
                <a href="mailto:noblespaces4@gmail.com" className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">noblespaces4@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-5">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Kigali, Rwanda</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-5">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Working Hours</p>
                    <p className="text-foreground font-medium">Mon - Sat: 8AM - 6PM</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="font-display text-2xl text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Full Name</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Phone</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" placeholder="+250 7XX XXX XXX" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Service Interested In</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors">
                      <option value="">Select a service</option>
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
                    <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="gold-gradient text-primary-foreground px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                      <Send className="w-5 h-5" /> Send Message
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-xl overflow-hidden h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="font-display text-xl text-foreground">Kigali, Rwanda</p>
              <p className="text-sm text-muted-foreground">Visit our showroom for an in-person consultation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
