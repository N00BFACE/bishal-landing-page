# Bishal Landing Page

A responsive landing page for Form Pages - WPForms Addon, built with modern HTML5, SASS, and vanilla JavaScript.

## Features

- Semantic HTML5 markup
- Responsive design (desktop, tablet, mobile)
- SASS-based styling with BEM methodology
- YouTube video modal integration
- No CSS frameworks (pure custom CSS)

## Preview

Open `index.html` in your browser to view the landing page.

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/N00BFACE/bishal-landing-page.git
   cd bishal-landing-page
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the SASS watcher:
   ```bash
   pnpm watch
   ```

4. Open `index.html` in your browser.

## Project Structure

```
bishal-shrestha/
├── index.html              # Main landing page
├── package.json            # Project dependencies
├── pnpm-lock.yaml          # Lock file
├── assets/
│   ├── css/
│   │   ├── styles.scss     # Main SASS entry point
│   │   ├── styles.css      # Compiled CSS
│   │   ├── styles.css.map  # Source map
│   │   ├── _variables.scss # Colors, fonts, breakpoints
│   │   ├── _global.scss    # Base styles
│   │   ├── _buttons.scss   # Button components
│   │   └── ...             # Section-specific styles
│   ├── js/
│   │   └── index.js        # Video modal functionality
│   └── images/
│       ├── thumbnail.png   # Video thumbnail
│       └── screenshot-*.png
└── README.md
```

## SASS Architecture

The styles are organized into modular SCSS partials:

| File | Description |
|------|-------------|
| `_variables.scss` | Colors, typography, breakpoints |
| `_global.scss` | Base styles, container, typography |
| `_buttons.scss` | Button components |
| `_header.scss` | Header section |
| `_hero.scss` | Hero section |
| `_video-card.scss` | Featured video card |
| `_video-modal.scss` | YouTube modal overlay |
| `_features.scss` | Features grid |
| `_testimonials.scss` | Testimonials section |
| `_showcase.scss` | Showcase section |
| `_screenshots.scss` | Screenshots gallery |
| `_secondary-features.scss` | Secondary features |
| `_use-cases.scss` | Use cases section |
| `_footer-cta.scss` | Footer CTA |
| `_footer.scss` | Footer |

## Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm watch` | Watch SCSS files and compile on changes |

## Technologies Used

- HTML5
- SASS/SCSS
- Vanilla JavaScript
- Google Fonts (Arvo, Lato)

## Author

Bishal Shrestha

## License

ISC
