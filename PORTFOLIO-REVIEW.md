# Portfolio cleanup review

Reviewed on 2 November 2026. This is a recommendation list; the items below have not been deleted as part of this review.

## Content worth simplifying

1. **Empty Fake News Detection repository.** The project card points to `Puneet-3/Fake_News_Detection_BERT`, which has size 0 and no source language reported by GitHub. Publish the implementation or remove this card until there is reviewable work.
2. **Too many equally prominent projects.** After the additions, there are 11 cards. Consider highlighting PayFlow, MedAI, Paper Trading, and one or two AI projects, then placing the rest in an expandable archive.
3. **Overlapping computer-vision projects.** Posture Detection and Human Pose Estimation communicate similar skills. Keep both only if their descriptions clearly explain different engineering contributions.
4. **Basic UI clone among stronger full-stack work.** Spotify Player UI adds less evidence than the wallet, trading, and healthcare projects. It is a candidate for the archive.
5. **Unexplained metrics.** About shows `15+ projects shipped` and `5k+ data samples`; Experience repeats `25%`, `30%`, and `22%` improvements without methodology or a report link. Add evidence and scope, or replace them with concrete contributions. The CGPA also appears twice in About.
6. **Decorative technical labels.** Labels such as `narrative.txt`, `academic_history.json`, `agentic nodes`, and chapter markers add visual noise. Plain labels would make the portfolio faster for recruiters to scan.
7. **Artificial loading screen.** `src/app/page.js` delays dismissal by 900 ms regardless of whether content is ready. Consider removing this delay.
8. **Multiple animated effects.** Typing text, portrait tilt, scroll reveals, counters, ambient blobs, and a progress bar compete for attention. Keep the effects that help navigation and ensure reduced-motion preferences are respected.
9. **Older school entry.** JNV Fatehabad is optional once university education, internships, and projects provide enough evidence. Retain it if it matters to your story.

## Unused files and development leftovers

10. **Unused 3D components:** `src/components/AboutCanvas.jsx`, `HeroCanvas.jsx`, `Hero3D.jsx`, and `Hero3DSkeleton.jsx` are not imported by the current page/component tree. Their associated `three`, `@react-three/fiber`, `@react-three/drei`, and `@types/three` dependencies are removal candidates if no 3D version is planned. The footer currently claims the site uses Three.js even though the visible hero uses an image.
11. **Unused navigation/reveal code:** `src/components/StoryRail.jsx` and `src/hooks/useScrollReveal.js` have no importers in the current source tree.
12. **Unused image variants:** `src/assets/hero.png`, `puneet_avatar_no_bg.png`, `puneet_glass_head.png`, `puneet_origami.png`, and `puneet_pixar_avatar.png` are unused by the current page. The glass-head asset is referenced only by the unused AboutCanvas component.
13. **Starter assets:** `src/assets/react.svg` and `src/assets/vite.svg` have no source references.
14. **Unreferenced public files:** `public/resume.pdf`, `public/puneet_sketch.jpg`, and `public/icons.svg` have no source references. The active resume is `public/Puneet_resume_oct.pdf`; the visible sketch is imported from `src/assets/puneet_sketch.jpg`. Check any direct external links before deleting public URLs.
15. **Vite leftovers:** The README describes a React/Vite starter, while the application uses Next.js. `vite` and `@vitejs/plugin-react` are not used by the package scripts. ESLint also uses the Vite-specific React Refresh configuration.
16. **Broken lint command:** `package.json` runs `next lint` with Next.js 16. Replace it with a direct ESLint command and a Next.js-appropriate configuration in a tooling cleanup.
17. **Duplicate font loading:** The same Google Fonts stylesheet appears in `src/app/layout.js` and as an `@import` in `src/app/globals.css`. Use one loading strategy.
18. **Placeholder portfolio domain:** Metadata and JSON-LD use `https://puneetpanwar.dev`, while Vercel reports `puneet-portfolio-psi.vercel.app`. Confirm ownership and routing, then use the actual public URL consistently.

## Project-link notes

- PayFlow uses its documented branch preview URL. The card explicitly describes simulated funds.
- Paper Trading now uses Vercel's stable project domain, `https://stock-trading-platform-seven.vercel.app/`, instead of an older deployment-specific preview.
- MedAI retains its configured `https://v0-med-ai-p.vercel.app/` domain and now uses the repository's canonical capitalization. Its description matches the current Next.js 16 project and omits the unsupported accuracy claim.
- Sarkari Scam Detector's documented preview requires Vercel sign-in; the button says so. Voice Cart and Eco-Loop have source links only because their documentation does not provide a hosted app URL.
- Hosting configuration and READY deployment records were checked through Vercel. HTTPS checks returned 200 for PayFlow, Paper Trading, and MedAI. Sarkari Scam Detector redirected to Vercel sign-in as expected. Browser access was unavailable, so visual layout and complete app workflows were not verified.

## Photo removal

The existing local deletions of `public/my-photo.jpg` and `public/my-photo-depth.png` are included in the update. Neither path is referenced by the current source. The separate illustrated portrait, `src/assets/puneet_sketch.jpg`, remains in use by the hero. Removing files from the current branch does not erase them from older Git history.
