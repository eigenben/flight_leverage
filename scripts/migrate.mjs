import { readdir, readFile, writeFile, mkdir, cp, stat } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';

const LEGACY_BLOG = 'legacy/source/blog';
const LEGACY_IMAGES = 'legacy/source/images';
const LEGACY_FAVICON = 'legacy/source/favicon.ico';
const OUT_CONTENT = 'src/content/blog';
const OUT_PUBLIC = 'public';

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function migrate() {
  // Create output directories
  await mkdir(OUT_CONTENT, { recursive: true });

  const entries = await readdir(LEGACY_BLOG);

  // Find published markdown files (not drafts)
  const markdownFiles = entries
    .filter((f) => /^\d{4}-\d{2}-\d{2}-.+\.markdown$/.test(f))
    .sort();

  console.log(`Found ${markdownFiles.length} published posts to migrate:\n`);

  for (const file of markdownFiles) {
    const nameWithoutExt = basename(file, '.markdown');
    const dateMatch = nameWithoutExt.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
    if (!dateMatch) continue;

    const [, year, month, day, slug] = dateMatch;
    const date = `${year}-${month}-${day}`;

    // Read original file
    const content = await readFile(join(LEGACY_BLOG, file), 'utf-8');

    // Parse frontmatter
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!fmMatch) {
      console.warn(`  SKIP (no frontmatter): ${file}`);
      continue;
    }

    const [, frontmatter, body] = fmMatch;

    // Build enriched frontmatter
    const newFrontmatter = `${frontmatter.trimEnd()}\ndate: ${date}\nslug: "${slug}"`;
    const newContent = `---\n${newFrontmatter}\n---\n${body}`;

    // Write to content collection
    const outFile = join(OUT_CONTENT, `${nameWithoutExt}.md`);
    await writeFile(outFile, newContent);
    console.log(`  ✓ Post: ${nameWithoutExt}`);

    // Copy associated image directory if it exists
    const imageDir = join(LEGACY_BLOG, nameWithoutExt);
    if (await exists(imageDir)) {
      const destDir = join(OUT_PUBLIC, 'blog', year, month, day, slug);
      await mkdir(destDir, { recursive: true });
      await cp(imageDir, destDir, { recursive: true });
      const images = await readdir(destDir);
      console.log(`    → Copied ${images.length} images to /blog/${year}/${month}/${day}/${slug}/`);
    }
  }

  // Copy site-wide images
  if (await exists(LEGACY_IMAGES)) {
    const destImages = join(OUT_PUBLIC, 'images');
    await cp(LEGACY_IMAGES, destImages, { recursive: true });
    console.log(`\n  ✓ Copied site images to /images/`);
  }

  // Copy favicon
  if (await exists(LEGACY_FAVICON)) {
    await cp(LEGACY_FAVICON, join(OUT_PUBLIC, 'favicon.ico'));
    console.log(`  ✓ Copied favicon.ico`);
  }

  console.log('\nMigration complete!');
}

migrate().catch(console.error);
