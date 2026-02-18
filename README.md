# Ecogensus Website

Advanced Materials Science & Technology Platform. Built with Next.js, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What to Add

### Logo
- Add your Ecogensus logo to `public/logo.svg` or `public/logo.png`
- Update the hero section in `src/app/page.tsx` to use: `<Image src="/logo.svg" alt="Ecogensus" ... />`

### OG Image (for social sharing)
- Add `public/og-image.png` (1200×630px recommended) for professional appearance when shared on LinkedIn, Twitter, etc.

### Validation Logos
- Add company logos to `public/images/validation/` (e.g., uniper.png, cargill.png)
- Update Section C in `src/app/page.tsx` to render them

### What We Do Video
- Add your looping video to `public/what-we-do.mp4` (MP4, H.264 recommended)

### Founder Photo
- Add `public/founder.jpg` and update Section F in `src/app/page.tsx`

### White Paper PDF
- Add the foundational paper to `public/documents/constructive-thermochemistry.pdf`
- Update the link in `src/app/library/page.tsx` and `src/app/page.tsx`

### Email Capture
- Connect your email service (Mailchimp, ConvertKit) in `src/components/EmailCapture.tsx`
- Or add an API route at `src/app/api/subscribe/route.ts`

### Environment
- Set `NEXT_PUBLIC_SITE_URL` for production (e.g., `https://ecogensus.com`) for correct OG URLs

## Build

```bash
npm run build
npm start
```

## Structure

- **/** — Home (single-scroll landing)
- **/technology** — DOR process, Rhino platform, output streams
- **/rhino-mining** — US platform strategy, Lone Star, investment
- **/library** — White papers and resources
