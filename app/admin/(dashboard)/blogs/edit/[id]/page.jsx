"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { getBlogs } from "@/lib/api";

import BlogForm from "../../components/BlogForm";

const EditBlogPage = () => {
  const params = useParams();

  const [blog, setBlog] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const res =
        await getBlogs();

      const foundBlog =
        res.data.find(
          (item) =>
            item._id ===
            params.id
        );

      setBlog(foundBlog);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-[30px] p-10 shadow-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-black text-gray-800">
          Edit Blog
        </h1>

        <p className="text-gray-500 mt-2">
          Update your existing blog content and SEO settings.
        </p>
      </div>

      <BlogForm
        initialData={blog}
        isEdit={true}
      />
    </div>
  );
};

export default EditBlogPage;