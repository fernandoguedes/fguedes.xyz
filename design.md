# Design — fguedes.xyz

A locked system for the professional site, writing archive, long-form articles,
and Lojinha. Every page shares the same type, colour, rules, controls, and
motion stance.

## Genre

Editorial-technical.

## Macrostructure family

- Home: Split Studio — professional positioning paired with the writing index.
- Content: Long Document — Sobre and posts use a 60–68ch reading measure.
- Archives: Index-First — links, dates, and categories are the interface.
- Commerce: Catalogue with F6 product grid — uniform records, square media.

## Theme

Custom, dark-first, with a fully designed light counterpart. Deep plum-black
paper and warm-white ink are animated by a restrained coral, teal, and mustard
triad. Colour identifies categories, active states, and occasional soft
surfaces; it is never decorative filler. Runtime values live in `tokens.css`;
raw colour values do not appear in page CSS.

## Typography

- Display: Newsreader, 400–700, roman only.
- Body: IBM Plex Sans, 400 and 600.
- Mono: IBM Plex Mono, 400 and 600, reserved for code and metadata.
- Prose measure: 60–68ch; display headings wrap anywhere when required.

## Spacing and rules

The 4-point named scale in `tokens.css` is mandatory. Whitespace and type create
the main section rhythm. Hairlines are reserved for semantic structures such as
tables and dialog chrome; soft colour washes may mark one important end-cap.

## Motion

- No section reveals or scroll-linked effects.
- Functional hover/press/media transitions only, using named easings.
- Reduced motion removes spatial effects and caps opacity changes at 150ms.

## Navigation and footer

- Navigation: N9 Edge-Aligned Minimal with the name as the home link, plus
  Sobre, Lojinha, and the theme control.
- Footer: Ft4 Dense Colophon with social links and build attribution.
- Theme selection respects the OS, persists manual choice, and is always
  available as a semantic button.

## CTA voice

Use direct Portuguese labels: “Ler o texto”, “Ver a coleção”, “Comprar no …”.
Links are typographic or rectangular outlined controls; never gradient pills.

## Per-page allowances

- Home may use the existing portrait and two existing record photographs.
- Content pages use only imagery already present in the article.
- Lojinha uses product photography from its YAML data.
- No generated imagery or decorative hero art.

## Exports

### CSS source of truth

The complete runtime contract is [`tokens.css`](tokens.css), concatenated by
Hugo Pipes before the theme and page styles. Its canonical shape is:

```css
:root { /* light */
  --color-paper: oklch(97% 0.018 85);
  --color-ink: oklch(19% 0.030 295);
  --color-accent: oklch(49% 0.170 35);
  --color-secondary: oklch(43% 0.100 195);
  --color-tertiary: oklch(47% 0.115 80);
  --font-display: "Newsreader", "Iowan Old Style", "Palatino Linotype", serif;
  --font-body: "IBM Plex Sans", "Segoe UI", sans-serif;
  --font-mono: "IBM Plex Mono", "SFMono-Regular", monospace;
}
.dark { /* complete dark overrides live in tokens.css */ }
```

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(97% 0.018 85);
  --color-paper-2: oklch(94% 0.028 82);
  --color-paper-3: oklch(90% 0.035 78);
  --color-ink: oklch(19% 0.030 295);
  --color-ink-2: oklch(38% 0.035 285);
  --color-muted: oklch(45% 0.030 280);
  --color-rule: oklch(82% 0.028 82);
  --color-rule-strong: oklch(65% 0.035 80);
  --color-accent: oklch(49% 0.170 35);
  --color-secondary: oklch(43% 0.100 195);
  --color-tertiary: oklch(47% 0.115 80);
  --color-accent-ink: oklch(98% 0.010 85);
  --color-focus: oklch(43% 0.100 195);
  --color-wash-warm: oklch(93% 0.040 35);
  --color-wash-cool: oklch(92% 0.035 195);

  --font-display: "Newsreader", "Iowan Old Style", serif;
  --font-body: "IBM Plex Sans", "Segoe UI", sans-serif;
  --font-mono: "IBM Plex Mono", "SFMono-Regular", monospace;

  --spacing-3xs: 0.25rem;
  --spacing-2xs: 0.5rem;
  --spacing-xs: 0.75rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  --spacing-3xl: 6rem;
  --spacing-4xl: 8rem;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-md: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.625rem;
  --text-2xl: 2.125rem;
  --text-3xl: 3rem;

  --radius-sm: 0.25rem;
  --radius-control: 0.375rem;
  --radius-panel: 1rem;
  --radius-card: 0;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

Apply the dark values from `tokens.css` under `.dark`; Tailwind utilities keep
the same semantic names.

### DTCG `tokens.json`

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "oklch(97% 0.018 85)", "$type": "color" },
    "paper-2": { "$value": "oklch(94% 0.028 82)", "$type": "color" },
    "paper-3": { "$value": "oklch(90% 0.035 78)", "$type": "color" },
    "ink": { "$value": "oklch(19% 0.030 295)", "$type": "color" },
    "ink-2": { "$value": "oklch(38% 0.035 285)", "$type": "color" },
    "muted": { "$value": "oklch(45% 0.030 280)", "$type": "color" },
    "rule": { "$value": "oklch(82% 0.028 82)", "$type": "color" },
    "rule-strong": { "$value": "oklch(65% 0.035 80)", "$type": "color" },
    "accent": { "$value": "oklch(49% 0.170 35)", "$type": "color" },
    "secondary": { "$value": "oklch(43% 0.100 195)", "$type": "color" },
    "tertiary": { "$value": "oklch(47% 0.115 80)", "$type": "color" },
    "accent-ink": { "$value": "oklch(98% 0.010 85)", "$type": "color" },
    "focus": { "$value": "oklch(43% 0.100 195)", "$type": "color" },
    "wash-warm": { "$value": "oklch(93% 0.040 35)", "$type": "color" },
    "wash-cool": { "$value": "oklch(92% 0.035 195)", "$type": "color" }
  },
  "font": {
    "display": { "$value": ["Newsreader", "Iowan Old Style", "serif"], "$type": "fontFamily" },
    "body": { "$value": ["IBM Plex Sans", "Segoe UI", "sans-serif"], "$type": "fontFamily" },
    "mono": { "$value": ["IBM Plex Mono", "SFMono-Regular", "monospace"], "$type": "fontFamily" }
  },
  "space": {
    "3xs": { "$value": "0.25rem", "$type": "dimension" },
    "2xs": { "$value": "0.5rem", "$type": "dimension" },
    "xs": { "$value": "0.75rem", "$type": "dimension" },
    "sm": { "$value": "1rem", "$type": "dimension" },
    "md": { "$value": "1.5rem", "$type": "dimension" },
    "lg": { "$value": "2rem", "$type": "dimension" },
    "xl": { "$value": "3rem", "$type": "dimension" },
    "2xl": { "$value": "4rem", "$type": "dimension" },
    "3xl": { "$value": "6rem", "$type": "dimension" },
    "4xl": { "$value": "8rem", "$type": "dimension" }
  },
  "text": {
    "xs": { "$value": "0.75rem", "$type": "dimension" },
    "sm": { "$value": "0.875rem", "$type": "dimension" },
    "md": { "$value": "1rem", "$type": "dimension" },
    "lg": { "$value": "1.25rem", "$type": "dimension" },
    "xl": { "$value": "1.625rem", "$type": "dimension" },
    "2xl": { "$value": "2.125rem", "$type": "dimension" },
    "3xl": { "$value": "3rem", "$type": "dimension" }
  },
  "duration": {
    "short": { "$value": "120ms", "$type": "duration" },
    "medium": { "$value": "220ms", "$type": "duration" },
    "long": { "$value": "360ms", "$type": "duration" }
  },
  "radius": {
    "small": { "$value": "0.25rem", "$type": "dimension" },
    "control": { "$value": "0.375rem", "$type": "dimension" },
    "panel": { "$value": "1rem", "$type": "dimension" },
    "card": { "$value": "0", "$type": "dimension" }
  }
}
```

Dark-mode DTCG consumers should create a `dark` mode that replaces the colour
group with the `.dark` values from `tokens.css`.

### shadcn/ui CSS variables

```css
:root {
  --background: 97% 0.018 85;
  --foreground: 19% 0.030 295;
  --card: 94% 0.028 82;
  --card-foreground: 19% 0.030 295;
  --popover: 94% 0.028 82;
  --popover-foreground: 19% 0.030 295;
  --primary: 49% 0.170 35;
  --primary-foreground: 98% 0.010 85;
  --secondary: 92% 0.035 195;
  --secondary-foreground: 38% 0.035 285;
  --muted: 90% 0.035 78;
  --muted-foreground: 45% 0.030 280;
  --accent: 49% 0.170 35;
  --accent-foreground: 98% 0.010 85;
  --border: 82% 0.028 82;
  --input: 82% 0.028 82;
  --ring: 43% 0.100 195;
  --radius: 0.375rem;
}

.dark {
  --background: 15% 0.022 295;
  --foreground: 94% 0.015 85;
  --card: 19% 0.026 292;
  --card-foreground: 94% 0.015 85;
  --popover: 19% 0.026 292;
  --popover-foreground: 94% 0.015 85;
  --primary: 76% 0.150 38;
  --primary-foreground: 16% 0.020 295;
  --secondary: 20% 0.040 220;
  --secondary-foreground: 78% 0.020 85;
  --muted: 23% 0.030 288;
  --muted-foreground: 68% 0.025 85;
  --accent: 76% 0.150 38;
  --accent-foreground: 16% 0.020 295;
  --border: 34% 0.030 290;
  --input: 34% 0.030 290;
  --ring: 76% 0.110 195;
}
```
