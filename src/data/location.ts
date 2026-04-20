// Update these coordinates with the exact location when ready
export const LOCATION = {
  lat: -1.9536,
  lng: 30.0606,
  label: "Kigali, Rwanda",
  zoom: 15,
};

// OpenStreetMap embed URL (free, no API key)
export const getOsmEmbedUrl = (lat: number, lng: number, zoom: number = 15) => {
  const delta = 0.01 / Math.max(1, zoom / 15);
  const bbox = [lng - delta, lat - delta, lng + delta, lat + delta].join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
};

// Google Maps directions link
export const getDirectionsUrl = (lat: number, lng: number) =>
  `https://www.google.com/maps?q=${lat},${lng}`;
