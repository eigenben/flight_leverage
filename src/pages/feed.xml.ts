import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const sorted = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Flight Leverage',
    description: 'Techniques in Travel Hacking',
    site: context.site!,
    items: sorted.slice(0, 6).map((post) => {
      const d = post.data.date;
      const year = d.getUTCFullYear();
      const month = String(d.getUTCMonth() + 1).padStart(2, '0');
      const day = String(d.getUTCDate()).padStart(2, '0');
      return {
        title: post.data.title,
        pubDate: post.data.date,
        link: `/blog/${year}/${month}/${day}/${post.data.slug}/`,
      };
    }),
  });
}
