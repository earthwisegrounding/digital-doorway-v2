# Digital Doorway — "The Threshold"

A static marketing site for a small agency that builds websites for local
businesses at a flat $499. No build step, no dependencies, no framework —
one HTML file, one stylesheet, one small script.

**Live:** https://earthwisegrounding.github.io/digital-doorway-v2/

## The concept

The site is laid out like a piece of print: warm paper, deep ink, a single
oxidised-amber accent, and a display serif (Instrument Serif) set against a
clean grotesque (Instrument Sans) with a mono face for the small structural
labels.

One signature interaction carries the "doorway" idea. The hero holds two
identical typographic layers — ink on paper, and cream on a lit interior. A
soft circular aperture of warm light follows the pointer, revealing the lit
layer beneath. Nothing moves, nothing swaps: the light simply opens, the way
a door left ajar throws a wedge across a floor. On touch devices the light
drifts slowly on its own; under `prefers-reduced-motion` it holds still.

## Structure

```
index.html      markup and copy
css/style.css   the whole design system
js/main.js      aperture, reveal-on-scroll, sticky hairline, mailto form
.nojekyll       so GitHub Pages serves the files verbatim
```

## Notes

Business names, results, quotes and contact details are placeholders for a
demonstration build.
