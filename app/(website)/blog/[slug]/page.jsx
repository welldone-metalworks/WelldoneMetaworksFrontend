import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  ArrowRight,
  Clock3,
  ChevronRight,
} from "lucide-react";

import serverApi from "@/lib/serverApi";

import BlogContent from "@/components/Blog/BlogContent";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import ShareButtons from "@/components/Blog/ShareButtons";
import RelatedBlogs from "@/components/Blog/RelatedBlogs";

//
// FETCH SINGLE BLOG
//
async function fetchBlog(slug) {
  try {
    const [
      blogRes,
      categoriesRes,
      tagsRes,
      blogsRes,
    ] = await Promise.all([
      serverApi.get(`/blogs/${slug}`),

      serverApi.get("/categories"),

      serverApi.get("/tags"),

      serverApi.get("/blogs"),
    ]);

    return {
      //
      // SINGLE BLOG
      //
      blog:
        blogRes?.data || null,

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
      tags:
        Array.isArray(
          tagsRes?.data
        )
          ? tagsRes.data
          : [],

      //
      // RELATED BLOGS
      //
      relatedBlogs:
        Array.isArray(
          blogsRes?.data
        )
          ? blogsRes.data
          : [],
    };
  } catch (error) {
    console.log(
      "SINGLE BLOG ERROR:",
      error
    );

    return {
      blog: null,
      categories: [],
      tags: [],
      relatedBlogs: [],
    };
  }
}

//
// SEO METADATA
//
export async function generateMetadata({
  params,
}) {
  //
  // NEXTJS 16 PARAMS FIX
  //
  const resolvedParams =
    await params;

  const slug =
    resolvedParams.slug;

  const data =
    await fetchBlog(slug);

  const blog = data.blog;

  return {
    title:
      blog?.metaTitle ||
      blog?.title ||
      "Blog | Welldone Metalworks",

    description:
      blog?.metaDescription ||
      "Industrial engineering insights and stainless steel blogs.",

    keywords:
      blog?.keywords || [],

    openGraph: {
      title:
        blog?.metaTitle ||
        blog?.title,

      description:
        blog?.metaDescription,

      images: [
        {
          url:
            blog?.featuredImage
              ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${blog.featuredImage.replace(
                  /\\/g,
                  "/"
                )}`
              : "/placeholder.jpg",
        },
      ],
    },
  };
}

export default async function SingleBlogPage({
  params,
}) {
  //
  // NEXTJS 16 PARAMS FIX
  //
  const resolvedParams =
    await params;

  const slug =
    resolvedParams.slug;

  const {
    blog,
    categories,
    tags,
    relatedBlogs,
  } = await fetchBlog(slug);

  //
  // BLOG NOT FOUND
  //
  if (!blog) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900">
            Blog Not Found
          </h1>

          <p className="text-gray-500 text-lg mt-5 max-w-xl mx-auto">
            The requested blog
            could not be found
            or may have been
            removed.
          </p>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-10 bg-[#981d13] hover:bg-[#7d170f] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Back To Blogs

            <ArrowRight
              size={18}
            />
          </Link>
        </div>
      </section>
    );
  }

  //
  // SAFE IMAGE
  //
  const imageSrc =
    blog?.featuredImage
      ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${blog.featuredImage.replace(
          /\\/g,
          "/"
        )}`
      : "/placeholder.jpg";

  //
  // RELATED BLOGS
  //
  const filteredRelatedBlogs =
    relatedBlogs
      .filter(
        (item) =>
          item._id !==
          blog._id
      )
      .slice(0, 3);

  return (
    <section className="bg-[#f8f8f8] overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative isolate">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]" />

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#cd2b14,transparent_30%)]" />

        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">
          {/* BREADCRUMB */}
          <div className="flex items-center flex-wrap gap-2 text-sm text-gray-300 mb-8">
            <Link
              href="/"
              className="hover:text-white transition"
            >
              Home
            </Link>

            <ChevronRight
              size={15}
            />

            <Link
              href="/blog"
              className="hover:text-white transition"
            >
              Blogs
            </Link>

            <ChevronRight
              size={15}
            />

            <span className="text-white">
              {blog?.title}
            </span>
          </div>

          {/* CATEGORY */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#cd2b14]" />

            <span className="text-sm font-semibold text-white">
              {blog
                ?.category
                ?.name ||
                "Industrial"}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white mt-8">
            {blog?.title}
          </h1>

          {/* META */}
          <div className="flex flex-wrap items-center gap-8 mt-10 text-gray-300">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                <CalendarDays
                  size={18}
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Published
                </p>

                <p className="font-medium text-white">
                  {blog?.createdAt
                    ? new Date(
                        blog.createdAt
                      ).toDateString()
                    : "Recently Published"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                <Clock3
                  size={18}
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Reading Time
                </p>

                <p className="font-medium text-white">
                  5 Min Read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative -mt-10 z-10">
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
            {/* LEFT */}
            <div>
              {/* FEATURE IMAGE */}
              <div className="relative h-[300px] md:h-[650px] rounded-[35px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.18)] border border-white/50">
                <Image
                  src={imageSrc}
                  alt={
                    blog?.title ||
                    "Industrial Blog"
                  }
                  fill
                  priority
                  className="object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              {/* ARTICLE CARD */}
              <div className="bg-white rounded-[35px] shadow-[0_10px_60px_rgba(0,0,0,0.06)] p-7 md:p-12 mt-10 border border-gray-100">
                {/* INTRO */}
                <div className="mb-12">
                  <div className="w-20 h-[4px] rounded-full bg-gradient-to-r from-[#981d13] to-[#cd2b14]" />

                  <p className="text-lg leading-9 text-gray-600 mt-7">
                    {blog?.metaDescription ||
                      "Explore detailed industrial fabrication insights, engineering solutions, and professional manufacturing guidance from Welldone Metalworks."}
                  </p>
                </div>

                {/* BLOG CONTENT */}
                <div className="blog-content">
                  <BlogContent
                    content={
                      blog?.content
                    }
                  />
                </div>

                {/* TAGS */}
                {blog?.tags
                  ?.length > 0 && (
                  <div className="mt-14 pt-10 border-t border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-5">
                      Related Tags
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {blog.tags.map(
                        (
                          tag,
                          index
                        ) => (
                          <span
                            key={
                              index
                            }
                            className="px-5 py-2 rounded-full bg-gray-100 hover:bg-[#981d13] hover:text-white transition-all duration-300 text-sm font-semibold text-gray-700"
                          >
                            #
                            {tag?.name ||
                              tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* SHARE */}
                <div className="mt-14 pt-10 border-t border-gray-100">
                  <ShareButtons
                    blog={blog}
                  />
                </div>
              </div>

              {/* RELATED BLOGS */}
              <div className="mt-16">
                <RelatedBlogs
                  blogs={
                    filteredRelatedBlogs
                  }
                />
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:sticky lg:top-28">
              <div className="space-y-8">
                <BlogSidebar
                  categories={
                    categories
                  }
                  tags={tags}
                />

                {/* CTA BOX */}
                <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#981d13] to-[#cd2b14] p-8 shadow-[0_20px_60px_rgba(152,29,19,0.35)]">
                  <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-white/10 blur-3xl" />

                  <h3 className="text-3xl font-black text-white leading-tight relative z-10">
                    Need Industrial
                    Fabrication
                    Solutions?
                  </h3>

                  <p className="text-white/80 leading-8 mt-5 relative z-10">
                    Contact
                    Welldone
                    Metalworks for
                    premium
                    engineering,
                    stainless steel
                    fabrication and
                    industrial
                    structure
                    solutions.
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-8 bg-white text-[#981d13] hover:bg-black hover:text-white px-7 py-4 rounded-full font-bold transition-all duration-300 relative z-10"
                  >
                    Get Free Quote

                    <ArrowRight
                      size={18}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}