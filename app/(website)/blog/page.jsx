import BlogHero from "@/components/Blog/BlogHero";
import FeaturedBlog from "@/components/Blog/FeaturedBlog";
import LatestBlogs from "@/components/Blog/LatestBlogs";
import TrendingBlogs from "@/components/Blog/TrendingBlogs";
import BlogCard from "@/components/Blog/BlogCard";
import BlogSidebar from "@/components/Blog/BlogSidebar";

import serverApi from "@/lib/serverApi";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = {
  title: "Metal Fabrication Blog | Welldone Metalworks",

  description:
    "Explore metal fabrication insights, MS fabrication guides, structural fabrication, gates, railings, staircases, sheds and industrial metalwork from Welldone Metalworks.",

  alternates: {
    canonical: "https://welldone-metalworks.in/blog",
  },

  openGraph: {
    title: "Metal Fabrication Blog | Welldone Metalworks",

    description:
      "Explore metal fabrication insights, MS fabrication guides and practical metalwork knowledge from Welldone Metalworks.",

    url: "https://welldone-metalworks.in/blog",

    siteName: "Welldone Metalworks",

    type: "website",
  },
};

/* =========================================================
   IMPORTANT
   Blog content comes from the external Render API.
   Force Next.js to request fresh data instead of using
   a previously generated static blog page.
========================================================= */

export const dynamic = "force-dynamic";

/* =========================================================
   FETCH BLOG DATA
========================================================= */

async function fetchData() {
  try {
    const [blogsRes, categoriesRes, tagsRes] =
      await Promise.all([
        serverApi.get("/blogs"),
        serverApi.get("/categories"),
        serverApi.get("/tags"),
      ]);

    /* =====================================================
       SERVER-SIDE DEBUGGING
       These logs appear in Vercel runtime logs, not
       Chrome Network.
    ===================================================== */

    console.log("========================================");
    console.log("BLOG API SUCCESS");
    console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
    console.log(
      "Blogs:",
      Array.isArray(blogsRes?.data)
        ? blogsRes.data.length
        : 0
    );
    console.log(
      "Categories:",
      Array.isArray(categoriesRes?.data)
        ? categoriesRes.data.length
        : 0
    );
    console.log(
      "Tags:",
      Array.isArray(tagsRes?.data)
        ? tagsRes.data.length
        : 0
    );

    console.log(
      "Blog titles:",
      Array.isArray(blogsRes?.data)
        ? blogsRes.data.map((blog) => blog?.title)
        : []
    );

    console.log("========================================");

    return {
      blogs: Array.isArray(blogsRes?.data)
        ? blogsRes.data
        : [],

      categories: Array.isArray(categoriesRes?.data)
        ? categoriesRes.data
        : [],

      tags: Array.isArray(tagsRes?.data)
        ? tagsRes.data
        : [],
    };
  } catch (error) {
    /* =====================================================
       SERVER-SIDE ERROR DEBUGGING
    ===================================================== */

    console.error("========================================");
    console.error("BLOG PAGE API ERROR");
    console.error(
      "API URL:",
      process.env.NEXT_PUBLIC_API_URL
    );
    console.error(
      "Message:",
      error?.message
    );
    console.error(
      "Status:",
      error?.response?.status
    );
    console.error(
      "Response:",
      error?.response?.data
    );
    console.error(
      "Code:",
      error?.code
    );
    console.error("========================================");

    return {
      blogs: [],
      categories: [],
      tags: [],
    };
  }
}

/* =========================================================
   BLOG PAGE
========================================================= */

export default async function BlogPage() {
  const {
    blogs,
    categories,
    tags,
  } = await fetchData();

  /* =======================================================
     FILTER ONLY PUBLISHED BLOGS

     Accept:
     status === "published"

     Also keep blogs without a status for backwards
     compatibility with older blog records.
  ======================================================= */

  const publishedBlogs = blogs.filter(
    (blog) =>
      blog?.status === "published" ||
      !blog?.status
  );

  /* =======================================================
     FEATURED BLOG

     Priority:
     1. Blog marked featured
     2. First published blog
     3. null
  ======================================================= */

  const featuredBlog =
    publishedBlogs.find(
      (blog) => blog?.featured
    ) ||
    publishedBlogs[0] ||
    null;

  /* =======================================================
     LATEST BLOGS

     Exclude the featured blog so it doesn't immediately
     appear again in the Latest section.
  ======================================================= */

  const latestBlogs = publishedBlogs
    .filter(
      (blog) =>
        blog?._id !== featuredBlog?._id
    )
    .slice(0, 6);

  /* =======================================================
     ALL REMAINING BLOGS

     Exclude featured blog from the main grid to avoid
     showing the same article twice.
  ======================================================= */

  const remainingBlogs = publishedBlogs.filter(
    (blog) =>
      blog?._id !== featuredBlog?._id
  );

  return (
    <main className="min-h-screen bg-white text-[#12324a]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <BlogHero />

      {/* =====================================================
          FEATURED BLOG
      ===================================================== */}

      {featuredBlog && (
        <section className="bg-white px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto w-full max-w-[1280px]">
            <FeaturedBlog blog={featuredBlog} />
          </div>
        </section>
      )}

      {/* =====================================================
          LATEST BLOGS
      ===================================================== */}

      {latestBlogs.length > 0 && (
        <LatestBlogs blogs={latestBlogs} />
      )}

      {/* =====================================================
          TRENDING BLOGS
      ===================================================== */}

      {publishedBlogs.length > 2 && (
        <TrendingBlogs blogs={publishedBlogs} />
      )}

      {/* =====================================================
          ALL BLOGS
      ===================================================== */}

      <section className="bg-[#f8fcfe] px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto w-full max-w-[1280px]">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="min-w-0">

              {/* =================================================
                  HEADER
              ================================================= */}

              <div className="mb-9">

                <div className="mb-3 flex items-center gap-3">

                  <span className="h-px w-8 bg-[#1687c5]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1687c5]">
                    Knowledge Centre
                  </span>

                </div>

                <h2 className="text-3xl font-black tracking-tight text-[#12324a] sm:text-4xl">
                  Latest Metal Fabrication Articles
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#64748b] sm:text-base">
                  Practical insights, fabrication guides and
                  industry knowledge to help you make better
                  decisions for your metalwork projects.
                </p>

              </div>

              {/* =================================================
                  BLOG GRID
              ================================================= */}

              {remainingBlogs.length > 0 ? (

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                  {remainingBlogs.map((blog) => (

                    <BlogCard
                      key={blog?._id}
                      blog={blog}
                    />

                  ))}

                </div>

              ) : (

                /*
                 * If there is only one published article,
                 * it is already displayed as Featured Blog.
                 *
                 * Therefore we show a smaller message here
                 * instead of incorrectly saying that there
                 * are no articles at all.
                 */

                featuredBlog ? (

                  <div className="rounded-2xl border border-[#dceff7] bg-white px-6 py-10 text-center shadow-[0_10px_35px_rgba(15,76,110,0.06)]">

                    <p className="text-sm font-medium text-[#64748b]">
                      More fabrication articles will appear
                      here as they are published.
                    </p>

                  </div>

                ) : (

                  <div className="rounded-2xl border border-[#dceff7] bg-white px-6 py-16 text-center shadow-[0_10px_35px_rgba(15,76,110,0.06)]">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf7fd] text-[#1687c5]">

                      <span className="text-xl font-black">
                        W
                      </span>

                    </div>

                    <h3 className="mt-5 text-2xl font-black text-[#12324a]">
                      No Articles Available
                    </h3>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748b]">
                      New fabrication articles and project
                      insights will appear here soon.
                    </p>

                  </div>

                )

              )}

            </div>

            {/* =================================================
                RIGHT SIDEBAR
            ================================================= */}

            <aside className="lg:sticky lg:top-28 lg:self-start">

              <BlogSidebar
                categories={categories}
                tags={tags}
              />

            </aside>

          </div>

        </div>
      </section>

    </main>
  );
}