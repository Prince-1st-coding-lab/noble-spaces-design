import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "250788906410";
  const message = encodeURIComponent("Hello Noble Spaces! I'm interested in your services.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-background/90 backdrop-blur border border-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
    </a>
  );
};

export default WhatsAppButton;
