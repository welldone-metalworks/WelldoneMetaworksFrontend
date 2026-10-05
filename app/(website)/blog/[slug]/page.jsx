import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Tag,
} from "lucide-react";

import serverApi from "@/lib/serverApi";
import { getImageUrl } from "@/lib/imageUrl";

import BlogContent from "@/components/Blog/BlogContent";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import ShareButtons from "@/components/Blog/ShareButtons";
import RelatedBlogs from "@/components/Blog/RelatedBlogs";

/* =========================================================
   DATE FORMAT
========================================================= */

function formatDate(date) {
  if (!date) {
    return "Recently Published";
  }

  try {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "Recently Published";
  }
}

/* =========================================================
   READING TIME
========================================================= */

function getReadingTime(content = "") {
  const plainText = String(content)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const words = plainText ? plainText.split(/\s+/).filter(Boolean).length : 0;

  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

/* =========================================================
   FETCH BLOG DATA
========================================================= */

async function fetchBlog(slug) {
  try {
    const [blogRes, categoriesRes, tagsRes, blogsRes] = await Promise.all([
      serverApi.get(`/blogs/${slug}`),
      serverApi.get("/categories"),
      serverApi.get("/tags"),
      serverApi.get("/blogs"),
    ]);

    return {
      blog: blogRes?.data || null,

      categories: Array.isArray(categoriesRes?.data) ? categoriesRes.data : [],

      tags: Array.isArray(tagsRes?.data) ? tagsRes.data : [],

      relatedBlogs: Array.isArray(blogsRes?.data) ? blogsRes.data : [],
    };
  } catch (error) {
    console.error("SINGLE BLOG ERROR:", error);

    return {
      blog: null,
      categories: [],
      tags: [],
      relatedBlogs: [],
    };
  }
}

/* =========================================================
   SEO METADATA
========================================================= */

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const { blog } = await fetchBlog(slug);

  if (!blog) {
    return {
      title: "Blog | Welldone Metalworks",
      description:
        "Metal fabrication insights and project knowledge from Welldone Metalworks.",
    };
  }

  const title =
    blog?.metaTitle ||
    blog?.title ||
    "Metal Fabrication Blog | Welldone Metalworks";

  const description =
    blog?.metaDescription ||
    blog?.excerpt ||
    "Explore metal fabrication insights, MS fabrication guides and practical project knowledge from Welldone Metalworks.";

  const imageUrl = getImageUrl(blog?.featuredImage);

  const canonicalUrl =
    blog?.canonical || `https://welldone-metalworks.in/blog/${slug}`;

  return {
    title,
    description,

    keywords: Array.isArray(blog?.keywords)
      ? blog.keywords
      : blog?.keywords || [],

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Welldone Metalworks",
      type: "article",

      publishedTime: blog?.publishedAt || blog?.createdAt,

      modifiedTime: blog?.updatedAt,

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog?.title || "Welldone Metalworks",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function SingleBlogPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const { blog, categories, tags, relatedBlogs } = await fetchBlog(slug);

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!blog) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#f8fcfe] px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eaf7fd] text-[#1687c5]">
            <span className="text-2xl font-black">W</span>
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#1687c5]">
            Welldone Metalworks
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#12324a] sm:text-5xl">
            Article Not Found
          </h1>

          <p className="mt-4 text-sm leading-7 text-[#64748b]">
            The article you are looking for could not be found or may have been
            removed.
          </p>

          <Link
            href="/blog"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#1687c5] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0b6fa8]"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  /* =======================================================
     DATA
  ======================================================= */

  const imageSrc = getImageUrl(blog?.featuredImage);

  const readingTime = getReadingTime(blog?.content);

  const publishedDate = blog?.publishedAt || blog?.createdAt;

  /* =======================================================
     RELATED BLOGS
  ======================================================= */

  const filteredRelatedBlogs = relatedBlogs
    .filter(
      (item) =>
        item?._id !== blog?._id &&
        (item?.status === "published" || !item?.status),
    )
    .filter(
      (item) =>
        !blog?.category?._id || item?.category?._id === blog?.category?._id,
    )
    .slice(0, 3);

  const finalRelatedBlogs =
    filteredRelatedBlogs.length > 0
      ? filteredRelatedBlogs
      : relatedBlogs
          .filter(
            (item) =>
              item?._id !== blog?._id &&
              (item?.status === "published" || !item?.status),
          )
          .slice(0, 3);

  /* =======================================================
     ARTICLE JSON-LD
  ======================================================= */

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: blog?.title,

    description: blog?.metaDescription || blog?.excerpt || "",

    image: [imageSrc],

    datePublished: blog?.publishedAt || blog?.createdAt,

    dateModified: blog?.updatedAt || blog?.publishedAt || blog?.createdAt,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://welldone-metalworks.in/blog/${slug}`,
    },

    publisher: {
      "@type": "Organization",
      name: "Welldone Metalworks",
      url: "https://welldone-metalworks.in",
    },

    author: {
      "@type": "Organization",
      name: "Welldone Metalworks",
    },
  };

  /* =======================================================
     BREADCRUMB JSON-LD
  ======================================================= */

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://welldone-metalworks.in/",
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://welldone-metalworks.in/blog",
      },

      {
        "@type": "ListItem",
        position: 3,
        name: blog?.title,
        item: `https://welldone-metalworks.in/blog/${slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-[#12324a]">
      {/* ===================================================
          STRUCTURED DATA
      =================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* ===================================================
          ARTICLE HERO
      =================================================== */}

      <section className="relative overflow-hidden bg-[#12324a] px-4 pb-16 pt-10 text-white sm:px-6 lg:pb-20 lg:pt-12">
        {/* Grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative ring */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full border-[65px] border-[#1687c5]/10" />

        <div className="relative mx-auto w-full max-w-[1280px]">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-9 flex flex-wrap items-center gap-1.5 text-xs text-white/50"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <ChevronRight size={13} />

            <Link href="/blog" className="transition hover:text-white">
              Blog
            </Link>

            <ChevronRight size={13} />

            <span className="max-w-[260px] truncate text-white/80 sm:max-w-md">
              {blog?.title}
            </span>
          </nav>

          {/* Category */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#46a9d8]" />

            <span className="text-xs font-bold text-white">
              {blog?.category?.name || "Metal Fabrication"}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[64px]">
            {blog?.title}
          </h1>

          {/* Excerpt */}
          {blog?.excerpt && (
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              {blog.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="mt-8 flex flex-wrap gap-5">
            <div className="inline-flex items-center gap-2.5">
              <CalendarDays size={17} className="text-[#46a9d8]" />

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                  Published
                </p>

                <p className="mt-0.5 text-sm font-semibold text-white/85">
                  {formatDate(publishedDate)}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2.5">
              <Clock3 size={17} className="text-[#46a9d8]" />

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                  Reading Time
                </p>

                <p className="mt-0.5 text-sm font-semibold text-white/85">
                  {readingTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          ARTICLE AREA
      =================================================== */}

      <section className="bg-[#f8fcfe] px-4 py-10 sm:px-6 lg:py-14">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <article className="min-w-0">
              {/* Featured Image */}
              <div className="relative overflow-hidden rounded-2xl border border-[#dceff7] bg-white shadow-[0_15px_45px_rgba(15,76,110,0.10)]">
                <div className="relative aspect-[16/9] min-h-[260px] w-full sm:min-h-[420px] lg:min-h-[520px]">
                  <img
                    src={imageSrc}
                    alt={blog?.title || "Welldone Metalworks blog"}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Article */}
              <div className="mt-7 rounded-2xl border border-[#dceff7] bg-white p-6 shadow-[0_8px_30px_rgba(15,76,110,0.05)] sm:p-8 lg:p-10">
                {/* Intro */}
                {(blog?.metaDescription || blog?.excerpt) && (
                  <div className="mb-10 rounded-xl border border-[#dceff7] bg-[#f8fcfe] p-5 sm:p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1687c5]">
                      <CheckCircle2 size={15} />
                      Article Overview
                    </div>

                    <p className="text-sm leading-7 text-[#475569] sm:text-base">
                      {blog?.metaDescription || blog?.excerpt}
                    </p>
                  </div>
                )}

                {/* Content */}
                <BlogContent content={blog?.content} />

                {/* Tags */}
                {blog?.tags?.length > 0 && (
                  <div className="mt-12 border-t border-[#dceff7] pt-8">
                    <div className="mb-4 flex items-center gap-2">
                      <Tag size={17} className="text-[#1687c5]" />

                      <h3 className="text-lg font-black text-[#12324a]">
                        Related Topics
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag, index) => {
                        const tagName = tag?.name || tag;

                        const tagSlug = tag?.slug || "";

                        return (
                          <Link
                            key={tag?._id || index}
                            href={tagSlug ? `/blog/tag/${tagSlug}` : "/blog"}
                            className="rounded-lg border border-[#dceff7] bg-[#f8fcfe] px-3 py-2 text-xs font-semibold text-[#475569] transition hover:border-[#bfe4f3] hover:bg-[#eff9fe] hover:text-[#1687c5]"
                          >
                            #{tagName}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="mt-10">
                  <ShareButtons blog={blog} />
                </div>
              </div>

              {/* Related Blogs */}
              {finalRelatedBlogs.length > 0 && (
                <div className="mt-10">
                  <RelatedBlogs blogs={finalRelatedBlogs} />
                </div>
              )}
            </article>

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="lg:sticky lg:top-24">
              <div className="space-y-5">
                <BlogSidebar categories={categories} tags={tags} />

                {/* CTA */}
                <div className="relative overflow-hidden rounded-2xl bg-[#12324a] p-6 text-white shadow-[0_15px_40px_rgba(18,50,74,0.15)]">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border-[28px] border-[#1687c5]/20" />

                  <div className="relative">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#46a9d8]">
                      Have a Project?
                    </p>

                    <h3 className="mt-2 text-2xl font-black leading-tight">
                      Need Custom Metal Fabrication?
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/60">
                      Discuss your requirements for mild steel fabrication,
                      structural work, gates, staircases or sheds.
                    </p>

                    <Link
                      href="/contact"
                      className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-[#1687c5] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#0b6fa8]"
                    >
                      Discuss Your Project
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
