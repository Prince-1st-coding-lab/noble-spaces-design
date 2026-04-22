

## Fix Invisible Colors / Low Contrast

The site palette is correct, but borders and dividers are nearly invisible because the `--border` token bakes in a low alpha (`/ 0.18`) and the muted text is too desaturated for the dark green background. I'll fix the tokens so every separator, card edge, and secondary text becomes clearly visible — without changing the overall green + cream brand look.

### Changes (`src/index.css` only)

| Token | Current | New | Why |
|---|---|---|---|
| `--border` | `50 30% 70% / 0.18` | `50 40% 75% / 0.25` (stored as `50 40% 75%` and applied via separate alpha utility where needed) | Embedded alpha breaks Tailwind's `/opacity` syntax; bumping lightness + alpha makes dividers visible |
| `--sidebar-border` | same issue | same fix | Consistency |
| `--muted-foreground` | `50 25% 75%` | `50 35% 82%` | Brighter, more saturated cream so paragraph text reads cleanly on dark green |
| `--secondary` | `140 25% 22%` | `140 25% 28%` | Slight lift so hover states (`hover:bg-secondary`) are visible against `--card` (`140 35% 15%`) |
| `--card` | `140 35% 15%` | `140 35% 17%` | Tiny lift so card surfaces are distinguishable from the page background |
| `--input` | `140 25% 22%` | `140 25% 28%` | Form fields visible against background |

Also update the utility classes:
- `.gold-border` → bump to `hsl(50 75% 82% / 0.5)` (was 0.35) so primary-tinted borders pop
- Add a new `.divider` utility = `border-color: hsl(50 40% 75% / 0.25)` for hairline rules

### What this fixes visually

- Header bottom border, dropdown panel borders, footer top border → now visible
- Service cards on home + gallery → visible edges with stronger hover ring
- Testimonial cards, contact form inputs → distinct surfaces
- Body paragraph text → brighter, easier to read
- Mobile menu dividers → visible

### Files touched

- `src/index.css` only — token values + 1 utility tweak. No component code changes needed because everything reads from these tokens.

