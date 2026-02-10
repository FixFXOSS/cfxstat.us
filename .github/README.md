# FixFX Links

A link aggregation hub for FiveM resources, documentation, and community support servers. Built with TanStack Start and deployed on Cloudflare Workers.

[![Build status](https://github.com/CodeMeAPixel/FixFX-LinkInBio/actions/workflows/test-build.yml/badge.svg)](https://github.com/CodeMeAPixel/FixFX-LinkInBio/actions)
[![Lint status](https://github.com/CodeMeAPixel/FixFX-LinkInBio/actions/workflows/validate-linting.yml/badge.svg)](https://github.com/CodeMeAPixel/FixFX-LinkInBio/actions)
[![Format status](https://github.com/CodeMeAPixel/FixFX-LinkInBio/actions/workflows/validate-formatting.yml/badge.svg)](https://github.com/CodeMeAPixel/FixFX-LinkInBio/actions)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](LICENSE)
[![Deployed on Cloudflare Workers](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Workers-orange.svg)](https://workers.cloudflare.com/)

## Features

- **Categorized Links**: Organize resources into community, documentation, tools, and support server categories
- **Pagination**: 8 links per page with easy navigation
- **Deep Linking**: Share direct links to categories and individual resources
- **Responsive Design**: Dark-themed glassmorphic UI with smooth animations
- **Image & Icon Support**: Mix Lucide icons with custom images for link icons
- **Color Customization**: 40+ Tailwind color options for visual variety

## Getting Started

Install dependencies:

```bash
bun install
```

Start development server:

```bash
bun run dev
```

Build for production:

```bash
bun run build
```

## Project Structure

```
src/
├── routes/         # TanStack Router file-based routes
├── components/     # React components
│   ├── layouts/    # Page layouts (LinkHubContent)
│   ├── ui/         # UI components (BackgroundEffects)
│   └── icons/      # Icon components (FixFXIcon)
├── data/          # Static data
│   ├── categories.ts    # Link categories and resources
│   ├── profile.ts       # Profile information
│   └── social-links.ts  # Social media links
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── styles.css     # Global Tailwind CSS styles
└── lib/           # Library code
```

## Customization

### Adding Categories

Edit `src/data/categories.ts` to add or modify link categories:

```typescript
{
  id: "category-id",
  name: "Category Name",
  icon: "BookOpen",  // Lucide icon or image path like "/logo.png"
  color: "text-blue-500",
  links: [
    {
      id: "link-id",
      title: "Link Title",
      url: "https://example.com",
      icon: "FileText",
      description: "Link description",
      color: "bg-blue-500"
    }
  ]
}
```

### Available Colors

40+ colors are supported for links:
- Blues: blue-400/500/600
- Purples: purple-500/600
- Reds: red-500/600
- Pinks: pink-500/600, rose-500
- Oranges/Ambers: orange-500/600, amber-500/600
- Yellows: yellow-500/600
- Greens: green-500/600, emerald-500/600, lime-500, teal-500
- Cyans: cyan-500/600, sky-500
- Indigos/Violets: indigo-500/600, violet-500/600, fuchsia-500
- Grays: gray-400/500/600/700/800, slate-500

## Deployment

This project is configured for deployment on Cloudflare Workers.

### Prerequisites

- Cloudflare account with Workers enabled
- Wrangler CLI installed: `npm install -g wrangler`

### Deploy

Authenticate with Cloudflare:

```bash
wrangler login
```

Deploy to Cloudflare Workers:

```bash
bun run deploy
```

The site will be available at `https://your-project.workers.dev`.

### Custom Domain

To use a custom domain, update `wrangler.jsonc`:

```jsonc
routes = [
  { pattern = "links.fixfx.wiki", zone_name = "fixfx.wiki" }
]
```

Then redeploy. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## Technology Stack

- **Framework**: TanStack Start with React 19
- **Routing**: TanStack Router (file-based)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Build Tool**: Vite with TanStack Start plugin
- **Deployment**: Cloudflare Workers
- **Utilities**: clsx, tailwind-merge

## Browser Support

Modern browsers with ES2020+ support:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Setting up your development environment
- Code style and standards
- Commit conventions
- Testing requirements
- Deployment process

## Code of Conduct

This project is committed to providing a welcoming and inclusive environment. Please review our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

## Security

For security concerns and vulnerability reporting, please see [SECURITY.md](SECURITY.md). **Do not** open public issues for security vulnerabilities.

## License

This project is licensed under the [GNU Affero General Public License v3](../LICENSE) (AGPL-3.0). See the LICENSE file for details.

## Contact

Questions or suggestions? Reach out:
- **Email**: [hey@codemeapixel.dev](mailto:hey@codemeapixel.dev)
- **GitHub**: [CodeMeAPixel/FixFX-LinkInBio](https://github.com/CodeMeAPixel/FixFX-LinkInBio)
- **Site**: [https://links.fixfx.wiki](https://links.fixfx.wiki)

