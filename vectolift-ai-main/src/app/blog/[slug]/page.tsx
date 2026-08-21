import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "../../../lib/blog-data";
import type { ContentSection } from "../../../lib/blog-data";
import { SITE_ORIGIN } from "../../../lib/site";
import Illustration from "../../svgs/svg-illustration";
import Illustration4 from "../../svgs/svg-illustration4";
import SocialLinks from "../../components/social-links";

// ---------------------------------------------------------------------------
// Static params — pre-render every slug at build time
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// ---------------------------------------------------------------------------
// Dynamic metadata per article
// ---------------------------------------------------------------------------
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const origin = SITE_ORIGIN || "https://vectolift.com";
  return {
    title: `${post.title} | Vectolift Blog`,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      siteName: "Vectolift",
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [`${origin}${post.heroImage}`],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [`${origin}${post.heroImage}`],
    },
  };
}

// ---------------------------------------------------------------------------
// Content renderer
// ---------------------------------------------------------------------------
function renderSection(section: ContentSection, i: number) {
  if (section.type === "callout") {
    return (
      <div
        key={i}
        className="my-8 rounded-xl border-l-4 border-primary bg-primary/5 px-6 py-5"
        dangerouslySetInnerHTML={{ __html: section.body }}
      />
    );
  }

  return (
    <div key={i} className="mb-8">
      {section.heading && (
        <h2 className="text-2xl font-semibold tracking-[-0.5px] text-slate-900 mb-4 mt-10 [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif]">
          {section.heading}
        </h2>
      )}
      {section.subheading && (
        <h3 className="text-xl font-semibold tracking-[-0.3px] text-slate-800 mb-3">
          {section.subheading}
        </h3>
      )}
      <div
        className="prose-blog"
        dangerouslySetInnerHTML={{ __html: section.body }}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);
  const origin = SITE_ORIGIN || "https://vectolift.com";

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      image: `${origin}${post.heroImage}`,
      author: { "@type": "Person", name: post.author.name },
      publisher: {
        "@type": "Organization",
        name: "Vectolift",
        logo: { "@type": "ImageObject", url: `${origin}/favicon.svg` },
      },
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${origin}/blog/${post.slug}`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: origin },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${origin}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${origin}/blog/${post.slug}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
        <nav className="mx-auto flex h-18 w-full max-w-324 items-center justify-between px-18 max-lg:px-5">
          <a className="flex items-center gap-3.5" href="/" aria-label="Vectolift home">
            <Illustration cid="article-logo" />
            <span className="text-[1.75rem] font-extrabold leading-none text-slate-900 max-lg:text-[1.35rem]">
              vectolift
            </span>
          </a>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-600 max-md:gap-3">
            <a className="hover:text-slate-900 transition-colors max-md:hidden" href="/#technology">Technology</a>
            <a className="hover:text-slate-900 transition-colors max-md:hidden" href="/#benefits">Benefits</a>
            <a className="hover:text-slate-900 transition-colors max-md:hidden" href="/calculator">Calculator</a>
            <a className="hover:text-slate-900 transition-colors max-md:hidden" href="/faq">FAQ</a>
            <a className="text-emerald-600 font-semibold" href="/blog">Blog</a>
            <a className="rounded-lg bg-primary px-4 py-2 text-color-003 hover:opacity-90 transition-opacity" href="/#hero">
              Contact Us
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* ── Breadcrumb ── */}
        <div className="px-18 pt-8 max-lg:px-6">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-232">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><a href="/" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li aria-hidden="true" className="text-slate-300">›</li>
              <li><a href="/blog" className="hover:text-slate-900 transition-colors">Blog</a></li>
              <li aria-hidden="true" className="text-slate-300">›</li>
              <li className="text-slate-700 font-medium truncate max-w-80">{post.title}</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ── */}
        <article className="px-18 pt-8 pb-20 max-lg:px-6">
          <div className="mx-auto max-w-232">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] uppercase tracking-[0.5px] border border-emerald-200">
                {post.category}
              </span>
              <span className="text-xs text-slate-500">{post.readingTime}</span>
            </div>

            <h1 className="text-[2.75rem] font-semibold leading-[1.1] tracking-[-1.5px] text-slate-900 max-md:text-[2rem] max-md:tracking-[-0.8px]">
              {post.title}
            </h1>

            {/* Author + dates */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 border-b border-slate-200 pb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm leading-4">{post.author.name}</p>
                  <p className="text-xs text-slate-500">{post.author.role}</p>
                </div>
              </div>
              <span className="text-slate-300 max-md:hidden">|</span>
              <time dateTime={post.publishedAt}>
                Published {new Date(post.publishedAt).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <span className="text-slate-300">·</span>
              <time dateTime={post.updatedAt}>
                Updated {new Date(post.updatedAt).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
              </time>
            </div>

            {/* Hero image */}
            <div className="mt-8 rounded-xl overflow-hidden aspect-[16/9]">
              <img
                src={post.heroImage}
                alt={post.heroAlt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ── Key Takeaways ── */}
            <div className="mt-10 rounded-xl border border-emerald-200 bg-emerald-50/50 p-6">
              <h2 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Key Takeaways
              </h2>
              <ul className="space-y-2">
                {post.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-6 text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Article Body ── */}
            <div className="mt-10 blog-article-body">
              {post.content.map((section, i) => renderSection(section, i))}
            </div>

            {/* ── Inline CTA ── */}
            <div className="mt-12 rounded-2xl bg-slate-950 text-white p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold [font-family:foundryGridnik,_'foundryGridnik_Fallback'] mb-2">
                  Stop Losing Revenue
                </p>
                <h3 className="text-2xl font-semibold tracking-[-0.5px]">
                  See how much missed calls cost your business
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Use our free calculator to find out — then let Vectolift answer every call for you.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  href="/calculator"
                  className="px-5 py-3 rounded-xl bg-primary text-slate-950 font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Try Calculator
                </Link>
                <a
                  href="/#hero"
                  className="px-5 py-3 rounded-xl border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* ── Related Articles ── */}
            {related.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-semibold tracking-[-0.5px] mb-6">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group flex flex-col rounded-xl border border-slate-200 overflow-hidden hover:border-emerald-300 hover:shadow-md transition-all"
                    >
                      <div className="overflow-hidden aspect-[16/10]">
                        <img
                          src={r.heroImage}
                          alt={r.heroAlt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-2 p-5 flex-1">
                        <span className="text-xs font-semibold text-emerald-600 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] uppercase tracking-[0.5px]">
                          {r.category}
                        </span>
                        <h3 className="text-lg font-semibold leading-[1.2] tracking-[-0.3px] group-hover:text-emerald-700 transition-colors">
                          {r.title}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">{r.excerpt}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-auto pt-2">
                          <span>{r.readingTime}</span>
                          <span>·</span>
                          <time dateTime={r.publishedAt}>
                            {new Date(r.publishedAt).toLocaleDateString("en-AU", { year: "numeric", month: "short", day: "numeric" })}
                          </time>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-288 flex-col gap-8 px-8 py-12">
          <div className="flex items-start justify-between gap-8 max-md:flex-col">
            <Illustration4 cid="article-footer-logo" />
            <div className="grid grid-cols-3 gap-12 text-xs font-medium leading-3 text-slate-600 max-md:grid-cols-1 max-md:gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-emerald-600 uppercase tracking-[1.2px]">Company</p>
                <a className="hover:text-slate-900" href="/#customers">Customers</a>
                <a className="hover:text-slate-900" href="mailto:vectolift@gmail.com">Contact</a>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-emerald-600 uppercase tracking-[1.2px]">Resources</p>
                <a className="hover:text-slate-900" href="/blog">Blog</a>
                <a className="hover:text-slate-900" href="/privacy">Privacy Policy</a>
                <a className="hover:text-slate-900" href="/faq">FAQ</a>
                <a className="hover:text-slate-900" href="/terms-and-conditions">Terms and Conditions</a>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-emerald-600 uppercase tracking-[1.2px]">Social</p>
                <SocialLinks />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-6 border-t border-slate-200 pt-6 text-xs font-medium text-slate-500 max-md:flex-col max-md:items-start">
            <p>© 2026 Vectolift. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-slate-900" href="/privacy">Privacy Policy</a>
              <a className="hover:text-slate-900" href="/terms-and-conditions">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
