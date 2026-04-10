# Flight Leverage

A blog about travel hacking techniques and strategies for earning and redeeming airline miles and hotel points for premium cabin travel.

Built with [Astro](https://astro.build), Tailwind CSS, and TypeScript. Migrated from a legacy Middleman static site.

## Project Structure

```
src/
  content/blog/       # Markdown blog posts (content collection)
  components/         # Astro components (Header, Footer, PostCard)
  layouts/            # Page layouts (Base, BlogPost)
  pages/              # Routes (homepage, blog post dynamic route, RSS feed)
  styles/             # Global CSS / Tailwind
public/
  blog/               # Blog post images, organized by date/slug
  images/             # Site-wide images (logo, profile photo)
legacy/               # Original Middleman site (preserved for reference)
scripts/              # One-time migration script
```

## Development

```sh
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview the production build locally
```

## URL Structure

Blog posts are served at `/blog/YYYY/MM/DD/slug/` to preserve the original URL structure from the legacy site.
