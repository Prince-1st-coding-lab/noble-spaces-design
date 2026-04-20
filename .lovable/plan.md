
## Add Real Project Images to Services + Build Unified Gallery Page

I'll embed your 9 uploaded photos as real project work across the relevant service pages, and create a dedicated **Gallery** page that showcases all of them in one filterable grid.

### Image → Service mapping

| # | Image | Assigned to service(s) | Category tag |
|---|---|---|---|
| 1 | Wooden bookshelf with built-in desk | Furniture Manufacturing | Bookshelf / Study |
| 2 | Black executive leather chair | Office Furniture | Office Chair |
| 3 | Black ergonomic chair (city window) | Office Furniture | Executive Chair |
| 4 | Luxury wood-paneled executive office | Interior Design + Office Furniture | Executive Office |
| 5 | File cabinet with binders + safe | Furniture Manufacturing | Storage Cabinet |
| 6 | White modular office shelving | Office Furniture + Wall Partitioning | Modular Storage |
| 7 | TV wall unit – marble + wood slats | Interior Design | TV Wall Unit |
| 8 | TV wall – wood slats + console | Interior Design | TV Wall Unit |
| 9 | TV wall – warm LED + herringbone | Interior Design + Ceiling Installation | TV Wall + Cove Lighting |

### What I'll build

**1. Save assets** — copy all 9 uploads into `src/assets/gallery/` with descriptive filenames (e.g. `bookshelf-desk.jpg`, `exec-chair-black.jpg`, `tv-wall-marble.jpg`, etc.)

**2. New gallery data file** (`src/data/gallery.ts`)
- Single source of truth: array of `{ id, image, titleEn/Fr/Rw, category, serviceSlugs[] }`
- Each item tagged with one or more service slugs so service pages can filter by their own work

**3. Service pages get real photos** (`src/pages/ServicePage.tsx`)
- Replace the current "6 copies of the hero image" gallery grid with images filtered from `gallery.ts` matching the current service's slug
- Falls back to the hero image only if a service has no tagged photos yet
- Each thumbnail links to the new Gallery page

**4. New Gallery page** (`src/pages/Gallery.tsx`, route `/gallery`)
- Hero section with title + intro
- **Category filter chips** (All, Office, Interior, Furniture, TV Walls, Storage)
- Responsive masonry-style grid (2 cols mobile / 3 cols tablet / 4 cols desktop)
- Click any image → lightbox modal (using existing `Dialog` component) with title, category, and "Book similar" CTA
- Smooth Framer Motion fade-in on filter change

**5. Navigation + translations**
- Add "Gallery" link to Header nav and Footer (between Portfolio and Contact)
- Add translation keys (`nav.gallery`, `gallery.title`, `gallery.subtitle`, `gallery.filterAll`, `gallery.viewLarger`, etc.) for English, Kinyarwanda, and French
- Register `/gallery` route in `App.tsx`

**6. Home page touch-up** (optional, light)
- The existing "Signature Categories" section on the homepage will pull 3 standout images from the gallery (TV wall, executive office, bookshelf) so the homepage immediately reflects real work

### Visual direction
- Cards: rounded-2xl, subtle border, hover scale + gold ring
- Lightbox: dark backdrop, image fills viewport with rounded corners, caption bar at bottom
- Filter chips: pill-shaped, gold-gradient when active

### Difference vs existing Portfolio page
- **Portfolio** = before/after slider comparisons (4 transformation projects)
- **Gallery** = pure showcase grid of finished work, filterable by category, with lightbox — these 9 photos are completed pieces, not before/after pairs, so the gallery format fits them better
