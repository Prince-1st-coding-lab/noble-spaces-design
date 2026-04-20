import { ExternalLink } from "lucide-react";
import { LOCATION, getOsmEmbedUrl, getDirectionsUrl } from "@/data/location";

interface LocationMapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  height?: string;
  showDirections?: boolean;
  className?: string;
}

const LocationMap = ({
  lat = LOCATION.lat,
  lng = LOCATION.lng,
  zoom = LOCATION.zoom,
  height = "400px",
  showDirections = true,
  className = "",
}: LocationMapProps) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-xl border border-border bg-card ${className}`}>
      <iframe
        title={`Map showing ${LOCATION.label}`}
        src={getOsmEmbedUrl(lat, lng, zoom)}
        style={{ width: "100%", height, border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {showDirections && (
        <a
          href={getDirectionsUrl(lat, lng)}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-card/95 backdrop-blur px-3 py-1.5 text-xs font-medium text-foreground border border-border shadow-sm hover:text-primary transition-colors"
        >
          <ExternalLink className="w-3 h-3" /> Get directions
        </a>
      )}
    </div>
  );
};

export default LocationMap;
