import BlogHero from "@/components/Blog/BlogHero";
import FeaturedBlog from "@/components/Blog/FeaturedBlog";
import LatestBlogs from "@/components/Blog/LatestBlogs";
import TrendingBlogs from "@/components/Blog/TrendingBlogs";
import BlogCard from "@/components/Blog/BlogCard";
import BlogSidebar from "@/components/Blog/BlogSidebar";

import serverApi from "@/lib/serverApi";

export const metadata = {
  title:
    "Industrial Blog | Welldone Metalworks",

  description:
    "Industrial engineering insights, stainless steel blogs, fabrication guides, and manufacturing knowledge from Welldone Metalworks.",
};

//
// FETCH DATA
//
async function fetchData() {
  try {
    const [
      blogsRes,
      categoriesRes,
      tagsRes,
    ] = await Promise.all([
      serverApi.get("/blogs"),

      serverApi.get(
        "/categories"
      ),

      serverApi.get("/tags"),
    ]);

    return {
      blogs:
        Array.isArray(
          blogsRes?.data
        )
          ? blogsRes.data
          : [],

      categories:
        Array.isArray(
          categoriesRes?.data
        )
          ? categoriesRes.data
          : [],

      tags:
        Array.isArray(
          tagsRes?.data
        )
          ? tagsRes.data
          : [],
    };
  } catch (error) {
    console.log(
      "BLOG PAGE ERROR:",
      error
    );

    return {
      blogs: [],
      categories: [],
      tags: [],
    };
  }
}

export default async function BlogPage() {
  const {
    blogs,
    categories,
    tags,
  } = await fetchData();

  //
  // FEATURED BLOG
  //
  const featuredBlog =
    Array.isArray(blogs)
      ? blogs.find(
          (blog) =>
            blog?.featured
        ) || blogs[0]
      : null;

  return (
    <>
      {/* HERO */}
      <BlogHero />

      {/* FEATURED BLOG */}
      {featuredBlog && (
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <FeaturedBlog
              blog={featuredBlog}
            />
          </div>
        </section>
      )}

      {/* LATEST BLOGS */}
      <LatestBlogs
        blogs={blogs}
      />

      {/* TRENDING BLOGS */}
      <TrendingBlogs
        blogs={blogs}
      />

      {/* ALL BLOGS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_350px] gap-12">
            {/* LEFT SIDE */}
            <div>
              {/* SECTION HEADER */}
              <div className="mb-14">
                <p className="uppercase tracking-widest text-[#cd2b14] font-semibold">
                  Latest Articles
                </p>

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
                  Explore Industrial
                  Blogs
                </h2>
              </div>

              {/* BLOG GRID */}
              {blogs.length >
              0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {blogs.map(
                    (blog) => (
                      <BlogCard
                        key={
                          blog?._id
                        }
                        blog={
                          blog
                        }
                      />
                    )
                  )}
                </div>
              ) : (
                <div className="bg-white rounded-[30px] p-12 shadow-xl border border-gray-100 text-center">
                  <h3 className="text-3xl font-black text-gray-900">
                    No Blogs Found
                  </h3>

                  <p className="text-gray-500 mt-4 text-lg">
                    Blogs will
                    appear here
                    once created
                    from admin
                    panel.
                  </p>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <BlogSidebar
              categories={
                categories
              }
              tags={tags}
            />
          </div>
        </div>
      </section>
    </>
  );
}