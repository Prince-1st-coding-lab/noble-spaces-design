

## Update Services + Apply New Green/Brass Color Palette

I'll restructure the services list to your 15 entries with new copy, and reskin the site with the green + brass + cream palette from your reference image.

### 1. Services overhaul (`src/data/services.ts`)

Replace the current 12 services with **15 services** in this exact order, using your descriptions verbatim:

| # | Slug | Title | Icon | Availability |
|---|---|---|---|---|
| 1 | `wardrobes` | Wardrobes Manufacturing and Supply | `Shirt` | custom-made |
| 2 | `kitchen-installation` | Modern Kitchen Installations | `ChefHat` | custom-made |
| 3 | `tv-wall-installation` | Modern Media TV Wall Installation | `Tv` | custom-made |
| 4 | `office-equipment` | Office Equipment Supply | `Building2` | in-stock |
| 5 | `fabric-replacement` | Fabric Replacement Services | `Scissors` | in-stock |
| 6 | `sofa-cleaning` | Sofa Cleaning Services | `SprayCan` | in-stock |
| 7 | `curtains` | Curtains Supply and Installation | `Blinds` | in-stock |
| 8 | `soundproof` | Soundproof Installation | `Volume2` | custom-made |
| 9 | `wall-partitioning` | Wall Partitioning Works | `LayoutGrid` | custom-made |
| 10 | `baby-beds` | Baby Beds Manufacturing | `Baby` | custom-made |
| 11 | `sofa-manufacturing` | Sofa Manufacturing | `Armchair` | custom-made |
| 12 | `ceiling-installation` | Ceiling Installation | `Lamp` | in-stock |
| 13 | `carpet-cleaning` | Carpet Cleaning Services | `SprayCan` | in-stock |
| 14 | `pet-houses` | Pet Houses Manufacturing | `Dog` | custom-made |
| 15 | `dining-tables` | Dining Tables Manufacturing | `UtensilsCrossed` | custom-made |

For each service:
- Use your provided one-line description as `description`
- Generate a 2–3 sentence `longDescription` expanding on it
- Generate 6 relevant `features` and a 4-step `process` (Consultation → Design/Selection → Production/Service → Delivery/Installation, tailored per service)
- Reuse existing relevant images where they fit (kitchen, ceiling, soundproof, sofa, office, curtains, wall-partition, repair). For new services without an image (wardrobes, tv-wall, fabric-replacement, sofa-cleaning, baby-beds, carpet-cleaning, pet-houses, dining-tables), reuse the closest existing asset as a placeholder so nothing breaks. The Gallery thumbnails on each service page already pull from real photos via `getGalleryByService`.

### 2. Gallery service-tag remap (`src/data/gallery.ts`)

Update `serviceSlugs` on existing gallery items to point at the new slugs:
- TV wall photos (3) → `tv-wall-installation` + `interior-design` removed → `ceiling-installation` (for the LED one)
- Executive office, exec chairs (3) → `office-equipment`
- Bookshelf, file cabinet → `wardrobes`
- Modular shelving → `office-equipment` + `wall-partitioning`

### 3. Color palette update (`src/index.css`)

Switch from gold/dark-green to your reference palette:

| Token | Old | New | Hex source |
|---|---|---|---|
| `--background` | dark teal-green | very dark olive-black | `#0c0a08` |
| `--card` / `--green-medium` | dark green | deep forest green | `#2a3723` |
| `--secondary` / `--green-light` | mid green | sage | `#b9bba8` |
| `--foreground` / `--cream` | white | warm cream | `#e8e5dd` |
| `--primary` / `--accent` / `--gold` | yellow gold | warm brass/tan | `#dcbc98` |
| `--primary-foreground` | dark green | `#0c0a08` | |
| `--muted-foreground` | grey-green | muted sage | derived from `#b9bba8` |
| `--border` | dark green | subtle sage at low opacity | derived |

Update `.gold-gradient` to a brass-to-cream gradient (`#dcbc98` → `#e8e5dd`) and `.green-gradient` to forest-to-black (`#2a3723` → `#0c0a08`). Keep utility class names (`gold-gradient`, `text-gold-gradient`, `gold-glow`, `gold-border`) so no component code needs to change — they'll just render in the new brass tones.

### 4. Translations & navigation

- The existing services use hard-coded English titles (no i18n keys), so no translation file changes required for service titles
- No nav changes needed — services are auto-listed from `services.ts`

### 5. Files touched
- `src/data/services.ts` — full rewrite (15 services, new icons, new copy)
- `src/data/gallery.ts` — remap `serviceSlugs` to new slugs
- `src/index.css` — palette tokens + gradients
- No changes needed to: ServicePage, Header, Footer, Gallery, Index — they all read from the data + tokens above

### Notes
- Old service slugs (e.g. `/services/interior-design`, `/services/furniture-manufacturing`) will 404 → I'll keep the existing fallback `<Navigate to="/services/interior-design" />` but update it to `/services/wardrobes` (the new first entry) so any stale links land somewhere valid.
- "Interior Design" and "Furniture Manufacturing" / "Door Manufacturing" / "Furniture Repair" / "Maintenance" are dropped per your new list. If you want any of them kept, say which and I'll add them back.

