
## Add Google Maps to Contact Page + Footer

You'll provide coordinates next — I'll wire them into a live map using OpenStreetMap's free embed (no API key required, works instantly).

### What I'll build

**1. Reusable `LocationMap` component** (`src/components/LocationMap.tsx`)
- Accepts `lat`, `lng`, `zoom`, and `height` props
- Uses an `<iframe>` with OpenStreetMap embed URL — free, no key, no setup
- Includes a "View larger map / Get directions" link that opens Google Maps in a new tab using the same coordinates (`https://www.google.com/maps?q=LAT,LNG`)
- Styled with the existing card/border tokens to match the luxury theme

**2. Contact page (`src/pages/Contact.tsx`)**
- Replace the current placeholder block (the centered `MapPin` icon with "Kigali, Rwanda" text) with `<LocationMap height="400px" />`
- Keep the existing rounded card frame and border styling

**3. Footer (`src/components/Footer.tsx`)**
- Add a compact `<LocationMap height="160px" />` mini-map inside the existing "Contact" column, below the address line
- Rounded corners, subtle border, click opens directions in Google Maps

**4. Coordinates storage**
- Store the lat/lng as constants in `src/data/services.ts` (or a new `src/data/location.ts`) so both Contact and Footer read from one source — easy to update later

### Why OpenStreetMap embed (not Google Maps JS API)
- No API key, no billing setup, no domain restrictions
- Works immediately in production
- Still provides a "Get directions" link to Google Maps for users who want turn-by-turn navigation
- If you later want the official Google Maps JS API with custom markers/styling, that requires a Google Cloud API key — we can swap in a second pass

### After you paste coordinates
I'll plug them into `src/data/location.ts` and the maps will render on Contact and Footer immediately.
