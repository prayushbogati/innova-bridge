# Innova Bridge — Design System Reference

## Colors

### Brand / Primary (gradient-based)
| Token | Hex | Usage |
|---|---|---|
| `primary-indigo` | `#4F46E5` | Gradient start (buttons, logo, headings) |
| `primary-violet` | `#7C3AED` | Gradient end (buttons, logo, headings) |
| `primary-blue` | `#2563EB` | Secondary accent (links, active nav) |

Most CTAs ("Enroll Now", "Explore Trainings") use a **left-to-right gradient**: `#4F46E5 → #7C3AED`. Recreate with:
```css
background: linear-gradient(90deg, #4F46E5 0%, #7C3AED 100%);
```

### Dark surfaces (hero, footer, navbar)
| Token | Hex | Usage |
|---|---|---|
| `dark-bg` | `#0A0E1A` | Primary dark background |
| `dark-surface` | `#12162B` | Cards/panels on dark bg |
| `dark-border` | `#1F2540` | Dividers on dark bg |

### Light surfaces
| Token | Hex | Usage |
|---|---|---|
| `light-bg` | `#FFFFFF` | Main content background |
| `light-alt` | `#F7F8FC` | Alternating section background |
| `border-light` | `#E5E7EB` | Card borders, dividers |

### Text
| Token | Hex | Usage |
|---|---|---|
| `text-heading` | `#111827` | Headings on light bg |
| `text-body` | `#4B5563` | Paragraph text on light bg |
| `text-muted` | `#6B7280` | Secondary/meta text |
| `text-on-dark` | `#F9FAFB` | Headings on dark bg |
| `text-on-dark-muted` | `#9CA3AF` | Body text on dark bg |

### Semantic / icon accent colors
Your stat icons and category badges use distinct flat colors — keep these consistent per meaning, not random:
| Token | Hex | Used for |
|---|---|---|
| `accent-purple` | `#8B5CF6` | Students/people icons |
| `accent-blue` | `#3B82F6` | Education/graduation icons |
| `accent-green` | `#10B981` | Success/placement rate, checkmarks |
| `accent-orange` | `#F97316` | Labs/hands-on icons |
| `accent-pink` | `#EC4899` | Highlights/quote blocks |
| `accent-teal` | `#06B6D4` | Global/community icons |

---

## Typography

Screenshots show a geometric, slightly rounded sans-serif for headings with a more neutral sans for body — a common, safe pairing:

- **Headings:** `Sora` or `Plus Jakarta Sans` (bold, tight tracking, geometric feel matches "Build. Deploy. Automate. Succeed.")
- **Body:** `Inter` (excellent readability, pairs well with either heading font)

```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');
```

### Type scale
| Element | Size | Weight | Line height |
|---|---|---|---|
| H1 (hero) | 48–56px | 800 | 1.1 |
| H2 (section) | 32–36px | 700 | 1.2 |
| H3 (card title) | 20–22px | 600 | 1.3 |
| Body large | 18px | 400 | 1.6 |
| Body | 16px | 400 | 1.6 |
| Small/meta | 14px | 500 | 1.4 |
| Stat number | 28–32px | 700 | 1.1 |

---

## Spacing

Stick to Tailwind's default 4px-based scale — your screenshots follow consistent, predictable spacing that maps cleanly to it:

- Card padding: `p-6` to `p-8` (24–32px)
- Section vertical padding: `py-16` to `py-24` (64–96px)
- Gap between grid cards: `gap-6` (24px)
- Gap between stat items: `gap-4` (16px)

## Radius & shadow

| Element | Radius | Shadow |
|---|---|---|
| Cards | `rounded-2xl` (16px) | `shadow-sm`, `hover:shadow-md` |
| Buttons | `rounded-lg` (8px) | none / subtle on hover |
| Icon badges (circular) | `rounded-full` | none |
| Images/hero banners | `rounded-2xl` to `rounded-3xl` | `shadow-lg` |
| Input fields | `rounded-lg` (8px) | inset border, no shadow |

## Dark mode

You have a moon-icon toggle in the nav, so plan for it from day one using Tailwind's `dark:` variant with `class` strategy (not `media`), so users can toggle manually:

```js
// tailwind.config.js
darkMode: 'class'
```
