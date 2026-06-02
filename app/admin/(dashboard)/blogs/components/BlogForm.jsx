"use client";

import { useEffect, useState } from "react";

import {
  getCategories,
  getTags,
  createBlog,
  updateBlog,
} from "@/lib/api";

import { useRouter } from "next/navigation";

import Editor from "./Editor";

const BlogForm = ({
  initialData = null,
  isEdit = false,
}) => {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [categories, setCategories] =
    useState([]);

  const [tags, setTags] =
    useState([]);

  const [formData, setFormData] =
    useState({
      title:
        initialData?.title || "",

      excerpt:
        initialData?.excerpt || "",

      content:
        initialData?.content || "",

      category:
        initialData?.category?._id || "",

      metaTitle:
        initialData?.metaTitle || "",

      metaDescription:
        initialData?.metaDescription ||
        "",

      keywords:
        initialData?.keywords?.join(
          ", "
        ) || "",

      status:
        initialData?.status ||
        "draft",

      featuredImage: null,

      tags:
        initialData?.tags?.map(
          (tag) => tag._id
        ) || [],
    });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const catRes =
        await getCategories();

      const tagRes =
        await getTags();

      setCategories(catRes.data);

      setTags(tagRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagChange = (
    id
  ) => {
    setFormData((prev) => {
      const exists =
        prev.tags.includes(id);

      return {
        ...prev,

        tags: exists
          ? prev.tags.filter(
              (tag) => tag !== id
            )
          : [...prev.tags, id],
      };
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      Object.keys(formData).forEach(
        (key) => {
          if (key === "tags") {
            formData.tags.forEach(
              (tag) =>
                data.append(
                  "tags",
                  tag
                )
            );
          } else {
            data.append(
              key,
              formData[key]
            );
          }
        }
      );

      if (isEdit) {
        await updateBlog(
          initialData._id,
          data
        );
      } else {
        await createBlog(data);
      }

      router.push(
        "/admin/blogs"
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100 space-y-8"
    >
      {/* TITLE */}
      <div>
        <label className="font-bold text-gray-700 block mb-3">
          Blog Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          placeholder="Enter blog title"
        />
      </div>

      {/* EXCERPT */}
      <div>
        <label className="font-bold text-gray-700 block mb-3">
          Excerpt
        </label>

        <textarea
          rows={4}
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
        />
      </div>

      {/* CONTENT */}
      <div>
        <label className="font-bold text-gray-700 block mb-3">
          Content
        </label>

        <Editor
          value={formData.content}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              content: value,
            }))
          }
        />
      </div>

      {/* CATEGORY */}
      <div>
        <label className="font-bold text-gray-700 block mb-3">
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
        >
          <option value="">
            Select Category
          </option>

          {categories.map((cat) => (
            <option
              key={cat._id}
              value={cat._id}
            >
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* TAGS */}
      <div>
        <label className="font-bold text-gray-700 block mb-3">
          Tags
        </label>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <label
              key={tag._id}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl"
            >
              <input
                type="checkbox"
                checked={formData.tags.includes(
                  tag._id
                )}
                onChange={() =>
                  handleTagChange(
                    tag._id
                  )
                }
              />

              {tag.name}
            </label>
          ))}
        </div>
      </div>

      {/* IMAGE */}
      <div>
        <label className="font-bold text-gray-700 block mb-3">
          Featured Image
        </label>

        <input
          type="file"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              featuredImage:
                e.target.files[0],
            }))
          }
          className="w-full border border-gray-200 rounded-2xl px-5 py-4"
        />
      </div>

      {/* META TITLE */}
      <div>
        <label className="font-bold text-gray-700 block mb-3">
          Meta Title
        </label>

        <input
          type="text"
          name="metaTitle"
          value={formData.metaTitle}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-2xl px-5 py-4"
        />
      </div>

      {/* META DESCRIPTION */}
      <div>
        <label className="font-bold text-gray-700 block mb-3">
          Meta Description
        </label>

        <textarea
          rows={4}
          name="metaDescription"
          value={
            formData.metaDescription
          }
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-2xl px-5 py-4"
        />
      </div>

      {/* KEYWORDS */}
      <div>
        <label className="font-bold text-gray-700 block mb-3">
          Keywords
        </label>

        <input
          type="text"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
          placeholder="seo, steel, pipes"
          className="w-full border border-gray-200 rounded-2xl px-5 py-4"
        />
      </div>

      {/* STATUS */}
      <div>
        <label className="font-bold text-gray-700 block mb-3">
          Status
        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-2xl px-5 py-4"
        >
          <option value="draft">
            Draft
          </option>

          <option value="published">
            Published
          </option>
        </select>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition-all duration-300"
      >
        {loading
          ? "Saving..."
          : isEdit
          ? "Update Blog"
          : "Create Blog"}
      </button>
    </form>
  );
};

export default BlogForm;