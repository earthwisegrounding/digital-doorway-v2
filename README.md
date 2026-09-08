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

The doorway is a shape, not an effect. One arched silhouette is used at four
scales: the hero opening, the three portfolio plates, the guarantee that
closes the FAQ, and the lit doorway the page ends on.

The hero holds two identical typographic layers — ink on paper, and cream on
a dark interior. The arch is a mask over the second, standing on the floor
line and sliding horizontally with the pointer, so words cross the threshold
and light up as it passes. Nothing swaps and nothing reflows; only the light
moves.

A phone has no pointer and no room to stand a door beside a headline, so
below 760px the opening is drawn rather than cut — three receding frames set
into the hero's negative space, behind the type — and the moment of crossing
moves to the top edge of the dark Work section, which opens as it arrives.
Under `prefers-reduced-motion` everything holds still in its final state.

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
