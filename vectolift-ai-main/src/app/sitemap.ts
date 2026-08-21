import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";
import { getAllPosts } from "../lib/blog-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts().map((post) => ({
    url: SITE_ORIGIN + "/blog/" + post.slug,
    lastModified: post.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
  {
    url: SITE_ORIGIN + "/",
    lastModified: "2026-08-12",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: SITE_ORIGIN + "/blog",
    lastModified: "2026-08-12",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  ...blogPosts,
  {
    url: SITE_ORIGIN + "/faq",
    lastModified: "2026-08-12",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: SITE_ORIGIN + "/calculator",
    lastModified: "2026-08-12",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: SITE_ORIGIN + "/privacy",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: SITE_ORIGIN + "/terms-and-conditions",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  ];
}
