"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Plus } from "lucide-react";

import { getBlogs } from "@/lib/api";

import BlogTable from "./components/BlogTable";

const BlogsPage = () => {
  const [blogs, setBlogs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchBlogs = async () => {
    try {
      const res =
        await getBlogs();

      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        <div>
          <h1 className="text-4xl font-black text-gray-800">
            Blog Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all blogs, publish articles and control SEO content.
          </p>
        </div>

        <Link
          href="/admin/blogs/create"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white px-6 py-4 rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold"
        >
          <Plus size={20} />

          Create Blog
        </Link>
      </div>

      {/* TABLE */}
      <BlogTable
        blogs={blogs}
        loading={loading}
        refreshBlogs={fetchBlogs}
      />
    </div>
  );
};

export default BlogsPage;