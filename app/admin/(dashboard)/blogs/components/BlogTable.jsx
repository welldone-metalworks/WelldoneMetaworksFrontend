"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  ArrowUpRight,
  CalendarDays,
  Eye,
  FileText,
  Loader2,
  Pencil,
  SearchX,
  Trash2,
} from "lucide-react";

import { deleteBlog } from "@/lib/api";

/* ============================================================
   IMAGE URL
============================================================ */

function getImageUrl(path) {
  if (!path) {
    return null;
  }

  /* ----------------------------------------------------------
     Already a complete URL
  ---------------------------------------------------------- */

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  /* ----------------------------------------------------------
     Normalize Windows path
     
     uploads\blogs\image.png
              ↓
     uploads/blogs/image.png
  ---------------------------------------------------------- */

  const normalizedPath = String(path)
    .replace(/\\/g, "/")
    .replace(/^\/+/, "");

  /* ----------------------------------------------------------
     Environment
  ---------------------------------------------------------- */

  const configuredImageUrl =
    process.env.NEXT_PUBLIC_IMAGE_URL;

  const configuredApiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api";

  const apiBaseUrl = configuredApiUrl.replace(
    /\/api\/?$/,
    ""
  );

  /* ----------------------------------------------------------
     NEXT_PUBLIC_IMAGE_URL exists
     
     Support BOTH:
     
     http://localhost:5000
     
     AND
     
     http://localhost:5000/uploads
  ---------------------------------------------------------- */

  if (configuredImageUrl) {
    const imageBase = configuredImageUrl.replace(
      /\/+$/,
      ""
    );

    /*
      If IMAGE_URL already points to /uploads,
      remove "uploads/" from the stored path.
    */

    if (
      imageBase.endsWith("/uploads") ||
      imageBase.endsWith("/uploads/")
    ) {
      const cleanPath = normalizedPath.replace(
        /^uploads\//,
        ""
      );

      return `${imageBase}/${cleanPath}`;
    }

    /*
      Otherwise treat IMAGE_URL as server root.
    */

    return `${imageBase}/${normalizedPath}`;
  }

  /* ----------------------------------------------------------
     Default API server
  ---------------------------------------------------------- */

  if (normalizedPath.startsWith("uploads/")) {
    return `${apiBaseUrl}/${normalizedPath}`;
  }

  return `${apiBaseUrl}/uploads/${normalizedPath}`;
}

/* ============================================================
   DATE
============================================================ */

function formatDate(date) {
  if (!date) {
    return "—";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "—";
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/* ============================================================
   BLOG TABLE
============================================================ */

const BlogTable = ({
  blogs = [],
  loading = false,
  refreshBlogs,
}) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("all");

  const [deletingId, setDeletingId] =
    useState(null);

  /* ----------------------------------------------------------
     FILTER BLOGS
  ---------------------------------------------------------- */

  const filteredBlogs = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    return blogs.filter((blog) => {
      const matchesSearch =
        !query ||
        blog?.title
          ?.toLowerCase()
          .includes(query) ||
        blog?.slug
          ?.toLowerCase()
          .includes(query);

      const matchesStatus =
        statusFilter === "all" ||
        blog?.status === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    });
  }, [blogs, search, statusFilter]);

  /* ----------------------------------------------------------
     DELETE
  ---------------------------------------------------------- */

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);

      await deleteBlog(id);

      if (refreshBlogs) {
        await refreshBlogs();
      }
    } catch (error) {
      console.error(
        "Failed to delete blog:",
        error
      );

      alert(
        error?.response?.data?.message ||
          "Unable to delete blog."
      );
    } finally {
      setDeletingId(null);
    }
  };

  /* ----------------------------------------------------------
     LOADING
  ---------------------------------------------------------- */

  if (loading) {
    return (
      <div className="divide-y divide-[#edf5f8]">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex animate-pulse items-center gap-4 p-5"
          >
            <div className="h-16 w-24 bg-[#eff9fe]" />

            <div className="flex-1 space-y-2">
              <div className="h-3 w-1/2 bg-[#eff9fe]" />
              <div className="h-2.5 w-1/3 bg-[#f8fcfe]" />
            </div>

            <div className="hidden h-7 w-20 bg-[#eff9fe] sm:block" />
            <div className="hidden h-7 w-24 bg-[#eff9fe] sm:block" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* =====================================================
          FILTER BAR
      ===================================================== */}

      <div className="flex flex-col gap-3 border-b border-[#dceff7] bg-[#f8fcfe] p-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex min-w-0 flex-1 items-center gap-2 border border-[#dceff7] bg-white px-3 py-2.5 focus-within:border-[#1687c5]">

          <SearchX
            size={15}
            className="shrink-0 text-[#94a3b8]"
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search by title or slug..."
            className="min-w-0 flex-1 bg-transparent text-xs font-medium text-[#12324a] outline-none placeholder:text-[#94a3b8]"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="border border-[#dceff7] bg-white px-3 py-2.5 text-xs font-bold text-[#475569] outline-none focus:border-[#1687c5]"
        >
          <option value="all">
            All Status
          </option>

          <option value="published">
            Published
          </option>

          <option value="draft">
            Draft
          </option>
        </select>
      </div>

      {/* =====================================================
          EMPTY
      ===================================================== */}

      {filteredBlogs.length === 0 ? (
        <div className="flex min-h-[300px] flex-col items-center justify-center px-6 py-14 text-center">

          <div className="flex h-14 w-14 items-center justify-center bg-[#eff9fe] text-[#1687c5]">
            <FileText size={23} />
          </div>

          <h3 className="mt-5 text-lg font-black text-[#12324a]">
            No Blogs Found
          </h3>

          <p className="mt-2 max-w-md text-xs leading-5 text-[#94a3b8]">
            {search
              ? "No articles match your search."
              : "Create your first blog article to get started."}
          </p>
        </div>
      ) : (
        <>
          {/* =================================================
              DESKTOP TABLE
          ================================================= */}

          <div className="hidden overflow-x-auto lg:block">

            <table className="w-full min-w-[900px]">

              <thead>
                <tr className="border-b border-[#dceff7] bg-white text-left">

                  <th className="px-5 py-3 text-[9px] font-black uppercase tracking-[0.12em] text-[#94a3b8]">
                    Article
                  </th>

                  <th className="px-4 py-3 text-[9px] font-black uppercase tracking-[0.12em] text-[#94a3b8]">
                    Category
                  </th>

                  <th className="px-4 py-3 text-[9px] font-black uppercase tracking-[0.12em] text-[#94a3b8]">
                    Status
                  </th>

                  <th className="px-4 py-3 text-[9px] font-black uppercase tracking-[0.12em] text-[#94a3b8]">
                    Views
                  </th>

                  <th className="px-4 py-3 text-[9px] font-black uppercase tracking-[0.12em] text-[#94a3b8]">
                    Created
                  </th>

                  <th className="px-5 py-3 text-right text-[9px] font-black uppercase tracking-[0.12em] text-[#94a3b8]">
                    Actions
                  </th>

                </tr>
              </thead>

              <tbody className="divide-y divide-[#edf5f8]">

                {filteredBlogs.map((blog) => {
                  const imageUrl =
                    getImageUrl(
                      blog?.featuredImage
                    );

                  const categoryName =
                    typeof blog?.category ===
                    "object"
                      ? blog?.category?.name
                      : "Uncategorized";

                  const isPublished =
                    blog?.status ===
                    "published";

                  return (
                    <tr
                      key={blog._id}
                      className="group transition hover:bg-[#f8fcfe]"
                    >

                      {/* ARTICLE */}

                      <td className="px-5 py-4">

                        <div className="flex min-w-0 items-center gap-4">

                          {/* IMAGE */}

                          <div className="relative h-16 w-24 shrink-0 overflow-hidden border border-[#dceff7] bg-[#f8fcfe]">

                            {imageUrl ? (
                              <img
                                src={imageUrl}
                                alt={
                                  blog?.title ||
                                  "Blog image"
                                }
                                className="h-full w-full object-cover"
                                loading="lazy"
                                onError={(e) => {
                                  console.error(
                                    "BLOG IMAGE FAILED:",
                                    imageUrl
                                  );

                                  e.currentTarget.style.display =
                                    "none";

                                  const fallback =
                                    e.currentTarget
                                      .nextElementSibling;

                                  if (
                                    fallback
                                  ) {
                                    fallback.style.display =
                                      "flex";
                                  }
                                }}
                              />
                            ) : null}

                            <div
                              className={`${
                                imageUrl
                                  ? "hidden"
                                  : "flex"
                              } absolute inset-0 items-center justify-center bg-[#eff9fe] text-[#1687c5]`}
                            >
                              <FileText
                                size={20}
                              />
                            </div>

                          </div>

                          {/* TITLE */}

                          <div className="min-w-0">

                            <p className="max-w-[360px] truncate text-sm font-black text-[#12324a]">
                              {blog?.title ||
                                "Untitled Blog"}
                            </p>

                            <p className="mt-1 max-w-[360px] truncate text-[10px] text-[#94a3b8]">
                              /blog/
                              {blog?.slug ||
                                "—"}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* CATEGORY */}

                      <td className="px-4 py-4">

                        <span className="inline-flex border border-[#bfe4f3] bg-[#eff9fe] px-2.5 py-1.5 text-[10px] font-bold text-[#0b6fa8]">
                          {categoryName ||
                            "Uncategorized"}
                        </span>

                      </td>

                      {/* STATUS */}

                      <td className="px-4 py-4">

                        <span
                          className={`inline-flex items-center gap-1.5 border px-2.5 py-1.5 text-[10px] font-black ${
                            isPublished
                              ? "border-[#bbf7d0] bg-[#f0fdf4] text-[#15803d]"
                              : "border-[#fde7b2] bg-[#fff9e8] text-[#a16207]"
                          }`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />

                          {isPublished
                            ? "Published"
                            : "Draft"}
                        </span>

                      </td>

                      {/* VIEWS */}

                      <td className="px-4 py-4">

                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#64748b]">

                          <Eye
                            size={13}
                            className="text-[#94a3b8]"
                          />

                          {blog?.views ??
                            0}

                        </div>

                      </td>

                      {/* DATE */}

                      <td className="px-4 py-4">

                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#64748b]">

                          <CalendarDays
                            size={13}
                            className="text-[#94a3b8]"
                          />

                          {formatDate(
                            blog?.createdAt
                          )}

                        </div>

                      </td>

                      {/* ACTIONS */}

                      <td className="px-5 py-4">

                        <div className="flex justify-end gap-2">

                          <Link
                            href={`/blog/${blog?.slug}`}
                            target="_blank"
                            className="flex h-8 w-8 items-center justify-center border border-[#dceff7] bg-white text-[#64748b] transition hover:border-[#1687c5] hover:text-[#1687c5]"
                            title="View blog"
                          >
                            <ArrowUpRight
                              size={14}
                            />
                          </Link>

                          <Link
                            href={`/admin/blogs/edit/${blog?._id}`}
                            className="flex h-8 w-8 items-center justify-center border border-[#dceff7] bg-white text-[#64748b] transition hover:border-[#1687c5] hover:text-[#1687c5]"
                            title="Edit blog"
                          >
                            <Pencil
                              size={14}
                            />
                          </Link>

                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(
                                blog?._id
                              )
                            }
                            disabled={
                              deletingId ===
                              blog?._id
                            }
                            className="flex h-8 w-8 items-center justify-center border border-[#fee2e2] bg-white text-[#dc2626] transition hover:bg-[#fef2f2] disabled:cursor-not-allowed disabled:opacity-50"
                            title="Delete blog"
                          >
                            {deletingId ===
                            blog?._id ? (
                              <Loader2
                                size={14}
                                className="animate-spin"
                              />
                            ) : (
                              <Trash2
                                size={14}
                              />
                            )}
                          </button>

                        </div>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>

          {/* =================================================
              MOBILE CARDS
          ================================================= */}

          <div className="divide-y divide-[#edf5f8] lg:hidden">

            {filteredBlogs.map((blog) => {
              const imageUrl =
                getImageUrl(
                  blog?.featuredImage
                );

              const isPublished =
                blog?.status ===
                "published";

              return (
                <div
                  key={blog._id}
                  className="p-4 sm:p-5"
                >

                  <div className="flex gap-3">

                    <div className="relative h-20 w-28 shrink-0 overflow-hidden border border-[#dceff7] bg-[#f8fcfe]">

                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={
                            blog?.title ||
                            "Blog image"
                          }
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-[#1687c5]">
                          <FileText
                            size={20}
                          />
                        </div>
                      )}

                    </div>

                    <div className="min-w-0 flex-1">

                      <h3 className="line-clamp-2 text-sm font-black text-[#12324a]">
                        {blog?.title ||
                          "Untitled Blog"}
                      </h3>

                      <p className="mt-1 truncate text-[10px] text-[#94a3b8]">
                        {blog?.slug}
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">

                        <span
                          className={`inline-flex items-center gap-1.5 border px-2 py-1 text-[9px] font-black ${
                            isPublished
                              ? "border-[#bbf7d0] bg-[#f0fdf4] text-[#15803d]"
                              : "border-[#fde7b2] bg-[#fff9e8] text-[#a16207]"
                          }`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />

                          {isPublished
                            ? "Published"
                            : "Draft"}
                        </span>

                        <span className="text-[9px] font-semibold text-[#94a3b8]">
                          {formatDate(
                            blog?.createdAt
                          )}
                        </span>

                      </div>

                    </div>

                  </div>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-[10px] font-semibold text-[#94a3b8]">
                      {blog?.views ??
                        0}{" "}
                      views
                    </span>

                    <div className="flex gap-2">

                      <Link
                        href={`/blog/${blog?.slug}`}
                        target="_blank"
                        className="flex h-8 items-center gap-1.5 border border-[#dceff7] px-3 text-[10px] font-bold text-[#64748b]"
                      >
                        <ArrowUpRight
                          size={12}
                        />
                        View
                      </Link>

                      <Link
                        href={`/admin/blogs/edit/${blog?._id}`}
                        className="flex h-8 items-center gap-1.5 border border-[#dceff7] px-3 text-[10px] font-bold text-[#64748b]"
                      >
                        <Pencil
                          size={12}
                        />
                        Edit
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(
                            blog?._id
                          )
                        }
                        disabled={
                          deletingId ===
                          blog?._id
                        }
                        className="flex h-8 w-8 items-center justify-center border border-[#fee2e2] text-[#dc2626]"
                      >
                        {deletingId ===
                        blog?._id ? (
                          <Loader2
                            size={12}
                            className="animate-spin"
                          />
                        ) : (
                          <Trash2
                            size={12}
                          />
                        )}
                      </button>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        </>
      )}

      {/* =====================================================
          RESULT COUNT
      ===================================================== */}

      {filteredBlogs.length > 0 && (
        <div className="border-t border-[#dceff7] bg-[#f8fcfe] px-5 py-3">

          <p className="text-[10px] font-semibold text-[#94a3b8]">
            Showing{" "}
            <span className="font-black text-[#12324a]">
              {filteredBlogs.length}
            </span>{" "}
            of{" "}
            <span className="font-black text-[#12324a]">
              {blogs.length}
            </span>{" "}
            articles
          </p>

        </div>
      )}
    </div>
  );
};

export default BlogTable;