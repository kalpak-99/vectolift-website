import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "../../lib/blog-data";
import { SITE_ORIGIN } from "../../lib/site";
import LegalShell from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Blog — AI Receptionist Insights for Trade Businesses | Vectolift",
  description:
    "Practical guides on AI receptionists, missed-call revenue recovery, and scaling home service businesses. Written for Australian plumbers, electricians, and HVAC teams.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — AI Receptionist Insights for Trade Businesses | Vectolift",
    description:
      "Practical guides on AI receptionists, missed-call revenue recovery, and scaling home service businesses.",
    type: "website",
    siteName: "Vectolift",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — AI Receptionist Insights | Vectolift",
    description:
      "Practical guides on AI receptionists and revenue recovery for trade businesses.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Vectolift Blog",
      description:
        "Practical guides on AI receptionists, missed-call revenue recovery, and scaling home service businesses.",
      url: `${SITE_ORIGIN || "https://vectolift.com"}/blog`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_ORIGIN || "https://vectolift.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE_ORIGIN || "https://vectolift.com"}/blog`,
        },
      ],
    },
  ];

  return (
    <LegalShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero ── */}
      <section className="px-18 pt-20 pb-16 max-lg:px-6 max-lg:pt-14 max-lg:pb-10">
        <div className="mx-auto max-w-232">
          <p className="text-sm font-semibold uppercase tracking-[1.2px] text-color-002 [font-family:foundryGridnik,_'foundryGridnik_Fallback']">
            Blog
          </p>
          <h1 className="mt-4 text-[4rem] font-semibold leading-[1.05] tracking-[-2px] max-md:text-[2.5rem]">
            AI Receptionist Insights for Trade Businesses
          </h1>
          <p className="mt-5 max-w-176 text-lg leading-7 text-color-002/75">
            Practical strategies to answer more calls, book more jobs, and grow your home service business with AI.
          </p>
        </div>
      </section>

      {/* ── Featured Article ── */}
      <section className="px-18 pb-12 max-lg:px-6">
        <div className="mx-auto max-w-232">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl border border-black/10 bg-white p-2 shadow-sm transition-all hover:shadow-md hover:border-black/20"
          >
            <div className="overflow-hidden rounded-xl aspect-[16/10]">
              <img
                src={featured.heroImage}
                alt={featured.heroAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-4 max-lg:p-2">
              <div className="flex items-center gap-3">
                <span className="inline-block rounded-full bg-color-002 px-3 py-1 text-xs font-semibold text-color-001 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] uppercase tracking-[0.5px]">
                  {featured.category}
                </span>
                <span className="text-xs text-color-002/50">{featured.readingTime}</span>
              </div>
              <h2 className="text-2xl font-semibold leading-[1.2] tracking-[-0.5px] text-color-002 group-hover:text-color-002/70 transition-colors lg:text-3xl">
                {featured.title}
              </h2>
              <p className="text-sm leading-6 text-color-002/65 line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-color-002/50 mt-auto">
                <span>{featured.author.name}</span>
                <span>·</span>
                <time dateTime={featured.publishedAt}>
                  {new Date(featured.publishedAt).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Post Grid ── */}
      <section className="px-18 pb-24 max-lg:px-6 max-lg:pb-16">
        <div className="mx-auto max-w-232">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-black/20"
              >
                <div className="overflow-hidden aspect-[16/10]">
                  <img
                    src={post.heroImage}
                    alt={post.heroAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="inline-block rounded-full bg-color-002 px-3 py-1 text-xs font-semibold text-color-001 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] uppercase tracking-[0.5px]">
                      {post.category}
                    </span>
                    <span className="text-xs text-color-002/50">{post.readingTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold leading-[1.2] tracking-[-0.3px] text-color-002 group-hover:text-color-002/70 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-6 text-color-002/65 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-color-002/50 mt-auto pt-2">
                    <span>{post.author.name}</span>
                    <span>·</span>
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </LegalShell>
  );
}
