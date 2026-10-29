# DeployCrafter

Craft seamless deployments with zero-downtime confidence

## Overview

DeployCrafter is a deployment tool that deployment craftsmanship: visual pipelines, automated safety, instant recovery.

**Problem:** Deployments are fragile; rollbacks are slow; canary analysis is manual

**Solution:** Deployment craftsmanship: visual pipelines, automated safety, instant recovery

**Target Audience:** Platform engineers, SREs, DevOps teams

## Features

- Visual deployment pipeline designer
- Automated canary and blue-green strategies
- Instant rollback with state reconstruction
- Infrastructure drift detection and remediation
- Cost-aware deployment optimization

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Linting & Type Checking

```bash
npm run lint
npm run typecheck
```

## Deployment

This project is configured for static export (`output: 'export'`), making it deployable to:

- **Vercel**: Connect repo and deploy
- **Netlify**: Connect repo, build command `npm run build`, publish directory `out`
- **GitHub Pages**: Use GitHub Actions to build and deploy `out/` directory
- **Cloudflare Pages**: Connect repo, build command `npm run build`, output `out`
- **Any static host**: Upload the `out/` directory

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Landing page
│   ├── globals.css     # Global styles + Tailwind
│   └── components/     # Page-specific components
├── components/         # Shared components
├── lib/                # Utilities
├── public/             # Static assets
└── ...
```

## Brand

- **Primary Color**: #059669
- **Secondary Color**: #10b981
- **Background**: #ecfdf5
- **Text**: #064e3b

## License

MIT License - feel free to use for your own projects.

---

Built with ❤️ for developers.