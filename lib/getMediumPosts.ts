import Parser from "rss-parser";

const MEDIUM_RSS_URL = "https://medium.com/feed/@amaann";

export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;      // always string
  snippet: string;
  authorName: string;
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  const parser = new Parser({
    customFields: {
      item: ["content:encoded", "media:content"],
    },
  });

  const feed = await parser.parseURL(MEDIUM_RSS_URL);

  return feed.items.map(item => {
    let thumbnail: string | null = (item as any).enclosure?.url || null;

    // Use <media:content> if available
    if ((item as any)["media:content"]?.["$"]?.url) {
      thumbnail = (item as any)["media:content"]["$"].url;
    }

    // Fallback: first <img> from content:encoded
    if (!thumbnail && (item as any)["content:encoded"]) {
      const match = (item as any)["content:encoded"].match(/<img[^>]+src="([^">]+)"/);
      if (match) thumbnail = match[1];
    }

    return {
      title: item.title ?? "Untitled",
      link: item.link ?? "#",
      pubDate: item.pubDate ?? "",
      thumbnail: thumbnail ?? "/images/Placeholder.jpg", // fallback
      snippet: item.contentSnippet ?? "",
      authorName: item.creator ?? "Amaan",
    };
  });
}
