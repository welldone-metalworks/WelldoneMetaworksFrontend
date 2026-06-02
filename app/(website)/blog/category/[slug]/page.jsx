import BlogCard from "@/components/Blog/BlogCard";
import BlogSidebar from "@/components/Blog/BlogSidebar";

import serverApi from "@/lib/serverApi";

//
// SEO METADATA
//
export async function generateMetadata({
  params,
}) {
  //
  // NEXTJS 16 FIX
  //
  const resolvedParams =
    await params;

  const slug =
    resolvedParams?.slug || "";

  const formattedSlug =
    slug.replaceAll(
      "-",
      " "
    );

  return {
    title: `${formattedSlug} Blogs | Welldone Metalworks`,

    description: `Explore industrial blogs related to ${formattedSlug}.`,
  };
}

//
// FETCH CATEGORY BLOGS
//
async function fetchCategoryBlogs(
  slug
) {
  try {
    const [
      blogsRes,
      categoriesRes,
      tagsRes,
    ] = await Promise.all([
      serverApi.get(
        `/blogs/category/${slug}`
      ),

      serverApi.get(
        "/categories"
      ),

      serverApi.get("/tags"),
    ]);

    return {
        //
        // BLOGS
        //
        blogs: Array.isArray(
          blogsRes?.data
        )
          ? blogsRes.data
          : [],
      
        //
        // CATEGORIES
        //
        categories:
          Array.isArray(
            categoriesRes?.data
          )
            ? categoriesRes.data
            : [],
      
        //
        // TAGS
        //
        tags: Array.isArray(
          tagsRes?.data
        )
          ? tagsRes.data
          : [],
      };
  } catch (error) {
    console.log(
      "CATEGORY PAGE ERROR:",
      error
    );

    return {
      blogs: [],
      categories: [],
      tags: [],
    };
  }
}

export default async function CategoryPage({
  params,
}) {
  //
  // NEXTJS 16 FIX
  //
  const resolvedParams =
    await params;

  const slug =
    resolvedParams?.slug || "";

  //
  // FORMATTED TITLE
  //
  const formattedSlug =
    slug.replaceAll(
      "-",
      " "
    );

  const {
    blogs,
    categories,
    tags,
  } =
    await fetchCategoryBlogs(
      slug
    );

  return (
    <section className="min-h-screen bg-[#f8f8f8] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#1f2937] px-8 md:px-14 py-16 mb-16 shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
          {/* GLOW */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#cd2b14]/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            {/* SUBTITLE */}
            <p className="uppercase tracking-[0.3em] text-[#ff7b67] font-semibold text-sm">
              Industrial Blog
              Category
            </p>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-black text-white mt-5 capitalize leading-tight">
              {formattedSlug}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-lg mt-6 max-w-3xl leading-8">
              Explore premium
              industrial
              engineering,
              fabrication,
              warehouse and
              stainless steel
              manufacturing
              blogs related to{" "}
              <span className="text-white font-semibold capitalize">
                {
                  formattedSlug
                }
              </span>
              .
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          {/* BLOGS */}
          <div>
            {blogs.length >
            0 ? (
              <>
                {/* RESULT COUNT */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                    Latest Articles
                  </h2>

                  <div className="bg-white px-5 py-3 rounded-2xl border border-gray-200 shadow-sm text-sm font-semibold text-gray-700">
                    {
                      blogs.length
                    }{" "}
                    Articles Found
                  </div>
                </div>

                {/* BLOG GRID */}
                <div className="grid md:grid-cols-2 gap-8">
                  {blogs.map(
                    (
                      blog
                    ) => (
                      <BlogCard
                        key={
                          blog._id
                        }
                        blog={
                          blog
                        }
                      />
                    )
                  )}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-[35px] p-14 shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-gray-100 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#981d13] to-[#cd2b14] flex items-center justify-center text-white text-3xl font-black mx-auto">
                  !
                </div>

                <h2 className="text-4xl font-black text-gray-900 mt-8">
                  No Blogs Found
                </h2>

                <p className="text-gray-500 text-lg mt-5 leading-8 max-w-xl mx-auto">
                  There are
                  currently no
                  blogs available
                  under this
                  category.
                  Please check
                  back later for
                  more industrial
                  insights and
                  updates.
                </p>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="lg:sticky lg:top-28">
            <BlogSidebar
              categories={
                categories
              }
              tags={tags}
            />
          </div>
        </div>
      </div>
    </section>
  );
}