## Plan

1. Copy `user-uploads://sea-group-singapore-1068x712.jpg` → `src/assets/case-sea-group.jpg`.
2. In `src/components/site/VietGuysCaseStudies.tsx`:
   - Import the asset: `import seaGroupImg from "@/assets/case-sea-group.jpg"`.
   - Replace `image: "/images/sea-group.jpg"` in the Sea Group case item with `seaGroupImg`.
   - Update the `<img>` tag to keep `object-cover` but change `object-position` based on active state so the **sea logo** (right-center of image) stays visible when the card is collapsed:
     - When collapsed (narrow): `object-position: 62% center` to keep the logo in frame.
     - When expanded: `object-position: center`.
   - Slightly increase image opacity from `0.7` → `0.85` so the photo reads clearly, while the existing dark gradient overlay keeps text legible.

No other cards or layout changes.