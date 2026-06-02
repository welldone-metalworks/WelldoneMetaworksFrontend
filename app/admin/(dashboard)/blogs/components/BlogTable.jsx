"use client";

import Link from "next/link";

import Image from "next/image";

import {
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";

import { deleteBlog } from "@/lib/api";

const BlogTable = ({
  blogs,
  refreshBlogs,
  loading,
}) => {
  const handleDelete = async (
    id
  ) => {
    const confirmDelete =
      confirm(
        "Delete this blog?"
      );

    if (!confirmDelete) return;

    try {
      await deleteBlog(id);

      refreshBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-[30px] p-10 shadow-lg">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[30px] shadow-xl border border-gray-100 overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white">

            <tr>
              <th className="p-5 text-left">
                Blog
              </th>

              <th className="p-5 text-left">
                Status
              </th>

              <th className="p-5 text-left">
                Views
              </th>

              <th className="p-5 text-left">
                Date
              </th>

              <th className="p-5 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>

            {blogs.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="p-10 text-center text-gray-500"
                >
                  No blogs found
                </td>
              </tr>
            )}

            {blogs.map((blog) => (

              <tr
                key={blog._id}
                className="border-t border-gray-100 hover:bg-gray-50 transition-all duration-200"
              >
                {/* BLOG */}
                <td className="p-5">

                  <div className="flex items-center gap-4">

                    {blog.featuredImage && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${blog.featuredImage}`}
                        alt={blog.title}
                        width={70}
                        height={70}
                        className="rounded-2xl object-cover w-[70px] h-[70px]"
                      />
                    )}

                    <div>
                      <h3 className="font-bold text-gray-800">
                        {blog.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        {blog.category?.name}
                      </p>
                    </div>
                  </div>
                </td>

                {/* STATUS */}
                <td className="p-5">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      blog.status ===
                      "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {blog.status}
                  </span>
                </td>

                {/* VIEWS */}
                <td className="p-5">

                  <div className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Eye size={18} />

                    {blog.views}
                  </div>
                </td>

                {/* DATE */}
                <td className="p-5 text-gray-600">
                  {new Date(
                    blog.createdAt
                  ).toLocaleDateString()}
                </td>

                {/* ACTIONS */}
                <td className="p-5">

                  <div className="flex items-center gap-4">

                    <Link
                      href={`/admin/blogs/edit/${blog._id}`}
                      className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center hover:scale-110 transition-all duration-200"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      onClick={() =>
                        handleDelete(
                          blog._id
                        )
                      }
                      className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center hover:scale-110 transition-all duration-200"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogTable; 