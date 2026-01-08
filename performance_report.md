# Performance Investigation Report

## Executive Summary
The "massive loss in performance" is caused by a combination of extremely large image assets, expensive rendering filters, and continuous 3D physics simulations. The application is attempting to load over **20MB of images** for the background slideshow alone, while simultaneously calculating per-pixel noise filters and running a 3D physics engine.

## Critical Findings

### 1. Excessive Asset Sizes (Major Network Bottleneck)
The `BackgroundSlideshow` component loads images from `public/images`. Several of these are unoptimized and massive:
- **`bg2.jpg`**: 11.2 MB (Should be < 200KB)
- **`bg4.jpg`**: 9.9 MB (Should be < 200KB)
- **`bg1.gif`**: 15.3 MB (Present in folder, potentially used)
- **`Video_Generation_Complete.mp4`**: 11.3 MB (In public folder, check if used)

Loading these files will freeze the network and delay the First Contentful Paint (FCP) significantly, even with Next.js image optimization (which has to process these huge files first).

### 2. Expensive SVG "Grain" Filter (Major Rendering Bottleneck)
In `Hero2.tsx` and `Hero.tsx`, a global style adds a grain effect using an SVG `feTurbulence` filter:
```css
.grain {
  background-image: url("data:image/svg+xml,...feTurbulence...");
}
```
Applying this filter to a full-screen `fixed` overlay forces the browser to re-calculate noise for every pixel on the screen. On high-resolution displays (Retina/4K) or mobile devices, this destroys the frame rate (FPS).

### 3. Continuous 3D Physics Simulation (CPU/GPU Load)
The `Lanyard.tsx` component runs a Rapier physics simulation via `@react-three/rapier`.
- It updates geometry every frame (`useFrame`).
- It runs even when not interacting.
- It uses high-resolution textures (`Volunteer.png` is 1.8MB).

## Recommendations

### Immediate Fixes
1.  **Compress Images**: Resize `bg2.jpg` and `bg4.jpg` to 1920x1080 and compress them (WebP/AVIF). Target size should be ~100-200KB each.
2.  **Disable Grain Filter**: Comment out the `.grain` class usage in `Hero2.tsx` to restore FPS. If a grain effect is needed, use a static, semi-transparent PNG noise pattern instead of a live SVG filter.
3.  **Optimize 3D Textures**: Resize `Volunteer.png` and `Organizer_tag.png` to smaller dimensions (e.g., 512x512).

### Long-term Improvements
1.  **Lazy Loading**: Ensure the `Lanyard` component is only loaded when visible or after main content loads.
2.  **Video Cleanup**: Remove unused large video files (`Video_Generation_Complete.mp4`, `theme.mp4` if unused) to reduce repository size and deploy times.
