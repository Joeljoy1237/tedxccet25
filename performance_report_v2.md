# Performance Report V2

## Status Update
Great progress! The most critical network bottlenecks (massive background images) have been resolved. However, **rendering performance (FPS)** is still severely impacted by the grain filter.

## Current Findings

### ✅ Resolved: Large Assets
- Background images have been converted to WebP (`bg2.webp`, etc.).
- `Video_Generation_Complete.mp4` and other unused large files have been removed.
- `PreviousTalks` now uses `img.youtube.com` with `next/image` instead of loading heavy iframes immediately.

### ⚠️ Critical: "Grain" Filter (FPS Killer)
The SVG `feTurbulence` filter is still active in `Hero2.tsx` and `Hero.tsx`. This specific filter forces the browser to calculate complex noise per-pixel every frame, which is disastrous for performance on high-DPI screens and mobile devices.

**Location:** `app/landingpage/components/Hero2.tsx`
```tsx
.grain {
  background-image: url("data:image/svg+xml,...feTurbulence...");
}
```

### ⚠️ Moderate: 3D Physics Simulation
The `Lanyard` component runs a continuous physics simulation. While it looks cool, it consumes significant CPU/GPU resources.
- **Current State:** It is loaded via `next/dynamic` (Good).
- **Issue:** It runs even when the user scrolls past it.
- **Recommendation:** Conditionally render it only when in the viewport, or pause the simulation when out of view.

## Next Steps

1.  **DISABLE THE GRAIN FILTER**: This is the single biggest action you can take right now to improve smoothness.
    -   In `Hero2.tsx`, remove or comment out the `.grain` class in the `<style jsx>` block.
    -   Remove the `<div className="absolute inset-0 grain ..."></div>` element.

2.  **Optimize Lanyard**:
    -   If `Lanyard` is only needed in the Hero section, ensure it unmounts or pauses when the user scrolls down.

3.  **Review `SmoothScroll`**:
    -   Lenis is generally efficient, but ensure `smoothWheel: true` doesn't conflict with other scroll observers if you see jittery scrolling.

## Summary
Network load is fixed. Now focus on **Rendering Performance** by removing the grain filter.
