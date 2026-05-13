# AI Infrastructure: On-Premises vs Cloud

A comprehensive, interactive single-page guide comparing **on-premises Nvidia GPU clusters** with **AWS / Azure managed AI cloud services** — covering architecture, services, inference flows, benchmarks, and decision frameworks.

---

## Overview

This project provides an in-depth visual comparison of two dominant approaches to running AI workloads:

| Aspect | On-Premises (Nvidia GPU) | Cloud (AWS / Azure) |
|--------|--------------------------|---------------------|
| **Hardware** | H100 SXM5, A100 80GB, NVLink | p5.48xlarge, NDv5 H100, Trainium2 |
| **Cost model** | CapEx — own the hardware | OpEx — pay per use |
| **Latency** | ~2–8ms first token | 10–150ms first token |
| **Scaling** | Fixed to owned capacity | Elastic auto-scale |
| **Ops complexity** | High — manage full stack | Low — fully managed |
| **Time to first call** | Weeks to months | Minutes |

## Features

- **Layer-by-Layer Stack Comparison** — Hardware, drivers, orchestration, frameworks, serving, storage, and MLOps across both deployment models
- **Interactive Architecture Diagrams** — Tabbed on-prem vs cloud request flow diagrams with animated data pipelines
- **Services Catalogue** — 12 detailed service cards covering Triton, vLLM, DeepSpeed, TensorRT, Bedrock, SageMaker, Azure OpenAI, and more
- **Step-by-Step Inference Walkthrough** — Side-by-side 5-step timeline comparing how inference requests are processed
- **Comparison Table** — 11-dimension head-to-head table (hardware, cost, latency, privacy, flexibility, ops, training, observability, security, time-to-deploy)
- **Key Metrics Dashboard** — 8 animated benchmark cards (H100 TFLOPS, vLLM throughput, NVLink bandwidth, Bedrock latency, etc.)
- **Decision Guide** — When to choose on-prem, when to choose cloud, and the hybrid approach
- **Dark / Light Mode** — Toggle between dark and light themes with `localStorage` persistence and OS preference detection
- **Fully Responsive** — Optimized layouts for desktop (1200px+), tablet (768px–1024px), phone (480px–768px), and small phone (< 480px)
- **Scroll Animations** — Intersection Observer–driven fade-in effects for cards, timelines, and metrics

## Project Structure

```
AI_Infra/
├── index.html      # Semantic HTML markup (page structure and content)
├── styles.css      # All styling — dark/light themes, layout, animations, responsive breakpoints
├── script.js       # Theme toggle, smooth scroll, IntersectionObserver animations, nav tracking
└── README.md       # This file
```

## Getting Started

No build step, no dependencies, no server required — just open the file in a browser.

### Option 1 — Open directly

Double-click `index.html` or open it in any modern browser:

```
File → Open → index.html
```

### Option 2 — Local dev server (optional)

For live reload during development:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .

# VS Code
# Install "Live Server" extension → right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8000`.

## Browser Compatibility

Tested and compatible with:

| Browser | Version | Status |
|---------|---------|--------|
| Google Chrome | 90+ | Fully supported |
| Microsoft Edge | 90+ | Fully supported |
| Mozilla Firefox | 88+ | Fully supported |
| Apple Safari | 15+ | Fully supported |
| Brave | 1.25+ | Fully supported |

### Key compatibility features

- `-webkit-backdrop-filter` for Safari nav blur
- `-webkit-mask-image` for Safari grid masking
- `-webkit-text-size-adjust` for iOS text scaling
- `-webkit-overflow-scrolling: touch` for smooth table scrolling on iOS
- `color-scheme` meta for native form/scrollbar theming
- CSS custom properties (CSS variables) for theme switching
- Standard `IntersectionObserver` API (supported in all listed browsers)
- No JavaScript frameworks or transpilation required

## Responsive Breakpoints

| Breakpoint | Target | Key Adaptations |
|------------|--------|-----------------|
| > 1024px | Desktop / Laptop | Full 2-column layouts, horizontal flow diagrams |
| 768px – 1024px | Tablet | Tighter spacing, smaller nav tabs |
| 480px – 768px | Large phone / Small tablet | Single-column grids, stacked timelines, hidden nav tabs |
| < 480px | Phone | Vertical flow diagrams, 2-column metrics, compact cards |
| < 360px | Small phone | Single-column metrics, minimal padding |

## Technology Stack

- **HTML5** — Semantic markup with accessibility attributes (`aria-label`, `rel="noopener"`)
- **CSS3** — Custom properties, grid, flexbox, keyframe animations, `@media` responsive queries
- **Vanilla JavaScript** — No frameworks, no build tools, no external dependencies
- **Google Fonts** — DM Sans (body), DM Mono (code/labels), Playfair Display (headings)

## License

© 2026 [PRATEEK DUTTA](https://prateekdutta2001.github.io/PrateekDutta.in/). This work is licensed under a [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

You are free to share and adapt this work for any purpose, provided you give appropriate credit.

