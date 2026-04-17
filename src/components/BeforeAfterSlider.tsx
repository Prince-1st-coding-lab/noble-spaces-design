import { useRef, useState, useCallback, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeAlt = "Before", afterAlt = "After" }: BeforeAfterSliderProps) => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };
    const handleUp = () => setIsDragging(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl select-none cursor-ew-resize bg-card"
      onMouseDown={(e) => { setIsDragging(true); updatePosition(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); updatePosition(e.touches[0].clientX); }}
    >
      {/* After (full) */}
      <img src={afterImage} alt={afterAlt} className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} />
      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold tracking-wider z-10">
        {t("portfolio.after")}
      </span>

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src={beforeImage} alt={beforeAlt} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-foreground/80 text-background text-xs font-semibold tracking-wider">
          {t("portfolio.before")}
        </span>
      </div>

      {/* Handle */}
      <div className="absolute top-0 bottom-0 w-1 bg-primary pointer-events-none shadow-lg" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full gold-gradient flex items-center justify-center shadow-xl">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary-foreground">
            <path d="M8 18l-6-6 6-6M16 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
