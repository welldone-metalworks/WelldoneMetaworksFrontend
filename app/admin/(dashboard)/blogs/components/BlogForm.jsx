"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  FileImage,
  Globe2,
  Loader2,
  Save,
  Search,
  Tag,
  X,
} from "lucide-react";

import {
  getCategories,
  getTags,
  createBlog,
  updateBlog,
} from "@/lib/api";

import Editor from "./Editor";

const BlogForm = ({
  initialData = null,
  isEdit = false,
}) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    category: initialData?.category?._id || "",
    metaTitle: initialData?.metaTitle || "",
    metaDescription: initialData?.metaDescription || "",
    keywords:
      initialData?.keywords?.join(", ") || "",
    status: initialData?.status || "draft",
    featuredImage: null,
    tags:
      initialData?.tags?.map((tag) => tag._id) || [],
  });

  const [imagePreview, setImagePreview] = useState(
    initialData?.featuredImage || null
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setDataLoading(true);

      const [catRes, tagRes] = await Promise.all([
        getCategories(),
        getTags(),
      ]);

      setCategories(catRes.data || []);
      setTags(tagRes.data || []);
    } catch (error) {
      console.error(
        "Failed to load blog form data:",
        error
      );
    } finally {
      setDataLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagChange = (id) => {
    setFormData((prev) => {
      const exists = prev.tags.includes(id);

      return {
        ...prev,
        tags: exists
          ? prev.tags.filter((tag) => tag !== id)
          : [...prev.tags, id],
      };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      featuredImage: file,
    }));

    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      featuredImage: null,
    }));

    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter a blog title.");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append(
        "title",
        formData.title.trim()
      );

      data.append(
        "excerpt",
        formData.excerpt
      );

      data.append(
        "content",
        formData.content
      );

      data.append(
        "category",
        formData.category
      );

      data.append(
        "metaTitle",
        formData.metaTitle
      );

      data.append(
        "metaDescription",
        formData.metaDescription
      );

      data.append(
        "keywords",
        formData.keywords
      );

      data.append(
        "status",
        formData.status
      );

      formData.tags.forEach((tag) => {
        data.append("tags", tag);
      });

      if (formData.featuredImage) {
        data.append(
          "featuredImage",
          formData.featuredImage
        );
      }

      if (isEdit) {
        await updateBlog(
          initialData._id,
          data
        );
      } else {
        await createBlog(data);
      }

      router.push("/admin/blogs");
    } catch (error) {
      console.error(
        "Failed to save blog:",
        error
      );

      alert(
        error?.response?.data?.message ||
          "Unable to save blog. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <div className="flex flex-col gap-4 border border-[#dceff7] bg-white p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-4">

          <button
            type="button"
            onClick={() =>
              router.push("/admin/blogs")
            }
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#dceff7] text-[#64748b] transition hover:border-[#1687c5] hover:text-[#1687c5]"
          >
            <ArrowLeft size={17} />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <BookOpen
                size={16}
                className="text-[#1687c5]"
              />

              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#1687c5]">
                Content Management
              </p>
            </div>

            <h1 className="mt-1 text-xl font-black tracking-[-0.03em] text-[#12324a] sm:text-2xl">
              {isEdit
                ? "Edit Blog"
                : "Create New Blog"}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">

          <div
            className={`flex items-center gap-2 border px-3 py-2 text-[10px] font-bold ${
              formData.status === "published"
                ? "border-[#bbf7d0] bg-[#f0fdf4] text-[#15803d]"
                : "border-[#fde7b2] bg-[#fff9e8] text-[#a16207]"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />

            {formData.status === "published"
              ? "Published"
              : "Draft"}
          </div>

          <button
            type="submit"
            disabled={loading || dataLoading}
            className="inline-flex items-center justify-center gap-2 bg-[#12324a] px-5 py-2.5 text-xs font-black text-white transition hover:bg-[#1687c5] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <Loader2
                size={15}
                className="animate-spin"
              />
            ) : (
              <Save size={15} />
            )}

            {loading
              ? "Saving..."
              : isEdit
              ? "Update Blog"
              : "Save Blog"}
          </button>
        </div>
      </div>

      {/* =====================================================
          MAIN GRID
      ===================================================== */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">

        {/* =================================================
            MAIN EDITOR
        ================================================= */}

        <div className="space-y-6">

          {/* BASIC INFORMATION */}
          <section className="border border-[#dceff7] bg-white">

            <SectionHeader
              icon={BookOpen}
              title="Article Information"
              description="Create the main content for your website article."
            />

            <div className="space-y-5 p-5 sm:p-6">

              {/* TITLE */}
              <Field label="Blog Title" required>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter a clear and SEO-friendly blog title"
                  className="form-input"
                />
              </Field>

              {/* EXCERPT */}
              <Field
                label="Excerpt"
                description="A short summary used for blog cards and previews."
              >
                <textarea
                  rows={4}
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  placeholder="Write a short summary of this article..."
                  className="form-input resize-none"
                />

                <CharacterCount
                  value={formData.excerpt}
                  max={300}
                />
              </Field>

            </div>
          </section>

          {/* CONTENT EDITOR */}
          <section className="border border-[#dceff7] bg-white">

            <SectionHeader
              icon={FileImage}
              title="Article Content"
              description="Write and format the complete article."
            />

            <div className="p-5 sm:p-6">

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
          </section>

          {/* FEATURED IMAGE */}
          <section className="border border-[#dceff7] bg-white">

            <SectionHeader
              icon={FileImage}
              title="Featured Image"
              description="Use a high-quality image that represents the article."
            />

            <div className="p-5 sm:p-6">

              {!imagePreview ? (
                <label className="group flex min-h-[190px] cursor-pointer flex-col items-center justify-center border border-dashed border-[#bfe4f3] bg-[#f8fcfe] px-6 text-center transition hover:border-[#1687c5] hover:bg-[#eff9fe]">

                  <div className="flex h-12 w-12 items-center justify-center bg-white text-[#1687c5] shadow-sm">
                    <FileImage size={21} />
                  </div>

                  <p className="mt-4 text-xs font-black text-[#12324a]">
                    Upload featured image
                  </p>

                  <p className="mt-1 text-[10px] text-[#94a3b8]">
                    PNG, JPG or WEBP
                  </p>

                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative overflow-hidden border border-[#dceff7]">

                  <img
                    src={getImageUrl(imagePreview)}
                    alt="Featured preview"
                    className="h-[260px] w-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-[#12324a] text-white transition hover:bg-red-600"
                  >
                    <X size={15} />
                  </button>

                </div>
              )}

            </div>
          </section>

        </div>

        {/* =================================================
            SIDEBAR
        ================================================= */}

        <div className="space-y-6">

          {/* PUBLISH */}
          <section className="border border-[#dceff7] bg-white">

            <SectionHeader
              icon={Globe2}
              title="Publishing"
              description="Control article visibility."
            />

            <div className="space-y-4 p-5">

              <Field label="Status">

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="draft">
                    Draft
                  </option>

                  <option value="published">
                    Published
                  </option>
                </select>

              </Field>

              <div className="border border-[#dceff7] bg-[#f8fcfe] p-3">

                <div className="flex gap-2">

                  <CheckCircle2
                    size={15}
                    className="mt-0.5 shrink-0 text-[#15803d]"
                  />

                  <p className="text-[10px] leading-5 text-[#64748b]">
                    Published articles become available
                    on the public website.
                  </p>

                </div>

              </div>

            </div>
          </section>

          {/* CATEGORY */}
          <section className="border border-[#dceff7] bg-white">

            <SectionHeader
              icon={Search}
              title="Organization"
              description="Categorize your article."
            />

            <div className="space-y-5 p-5">

              <Field label="Category">

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">
                    Select category
                  </option>

                  {categories.map((category) => (
                    <option
                      key={category._id}
                      value={category._id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>

              </Field>

              <Field label="Tags">

                {dataLoading ? (
                  <div className="flex items-center gap-2 py-3 text-xs text-[#94a3b8]">
                    <Loader2
                      size={14}
                      className="animate-spin"
                    />
                    Loading tags...
                  </div>
                ) : (
                  <div className="flex max-h-[220px] flex-wrap gap-2 overflow-y-auto">

                    {tags.map((tag) => {
                      const selected =
                        formData.tags.includes(
                          tag._id
                        );

                      return (
                        <button
                          key={tag._id}
                          type="button"
                          onClick={() =>
                            handleTagChange(
                              tag._id
                            )
                          }
                          className={`inline-flex items-center gap-1.5 border px-2.5 py-1.5 text-[10px] font-bold transition ${
                            selected
                              ? "border-[#1687c5] bg-[#eff9fe] text-[#1687c5]"
                              : "border-[#dceff7] bg-white text-[#64748b] hover:border-[#bfe4f3]"
                          }`}
                        >
                          <Tag size={11} />

                          {tag.name}
                        </button>
                      );
                    })}

                  </div>
                )}

              </Field>

            </div>
          </section>

          {/* SEO */}
          <section className="border border-[#dceff7] bg-white">

            <SectionHeader
              icon={Search}
              title="SEO Settings"
              description="Optimize this article for search engines."
            />

            <div className="space-y-5 p-5">

              <Field
                label="Meta Title"
                description="Recommended: around 50–60 characters."
              >
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleChange}
                  placeholder="SEO title"
                  className="form-input"
                />

                <CharacterCount
                  value={formData.metaTitle}
                  max={60}
                />
              </Field>

              <Field
                label="Meta Description"
                description="Recommended: around 140–160 characters."
              >
                <textarea
                  rows={4}
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleChange}
                  placeholder="Write a compelling search description..."
                  className="form-input resize-none"
                />

                <CharacterCount
                  value={formData.metaDescription}
                  max={160}
                />
              </Field>

              <Field
                label="Keywords"
                description="Separate keywords with commas."
              >
                <input
                  type="text"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleChange}
                  placeholder="metal fabrication, Ahmedabad, MS fabrication"
                  className="form-input"
                />
              </Field>

            </div>
          </section>

        </div>
      </div>

      {/* =====================================================
          BOTTOM ACTIONS
      ===================================================== */}

      <div className="flex flex-col gap-3 border border-[#dceff7] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-xs font-black text-[#12324a]">
            {isEdit
              ? "Ready to update this article?"
              : "Ready to publish your article?"}
          </p>

          <p className="mt-1 text-[10px] text-[#94a3b8]">
            Review the content and SEO information before saving.
          </p>
        </div>

        <div className="flex gap-3">

          <button
            type="button"
            onClick={() =>
              router.push("/admin/blogs")
            }
            className="border border-[#dceff7] px-5 py-2.5 text-xs font-bold text-[#64748b] transition hover:border-[#12324a] hover:text-[#12324a]"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 bg-[#1687c5] px-5 py-2.5 text-xs font-black text-white transition hover:bg-[#0b6fa8] disabled:opacity-60"
          >
            {loading ? (
              <Loader2
                size={14}
                className="animate-spin"
              />
            ) : (
              <Save size={14} />
            )}

            {isEdit
              ? "Update Blog"
              : "Create Blog"}
          </button>

        </div>
      </div>

      {/* =====================================================
          FORM STYLES
      ===================================================== */}

      <style jsx global>{`
        .form-input {
          width: 100%;
          border: 1px solid #dceff7;
          background: #ffffff;
          padding: 11px 13px;
          font-size: 12px;
          font-weight: 500;
          color: #12324a;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-input::placeholder {
          color: #94a3b8;
        }

        .form-input:focus {
          border-color: #1687c5;
          box-shadow: 0 0 0 3px rgba(22, 135, 197, 0.08);
        }

        select.form-input {
          cursor: pointer;
        }
      `}</style>
    </form>
  );
};

/* ============================================================
   SECTION HEADER
============================================================ */

function SectionHeader({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="flex items-start gap-3 border-b border-[#dceff7] p-5">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#eff9fe] text-[#1687c5]">
        <Icon size={16} />
      </div>

      <div>
        <h2 className="text-sm font-black text-[#12324a]">
          {title}
        </h2>

        <p className="mt-0.5 text-[10px] leading-5 text-[#94a3b8]">
          {description}
        </p>
      </div>

    </div>
  );
}

/* ============================================================
   FIELD
============================================================ */

function Field({
  label,
  description,
  required = false,
  children,
}) {
  return (
    <div>

      <div className="mb-2">

        <label className="text-[11px] font-black text-[#475569]">
          {label}

          {required && (
            <span className="ml-1 text-[#1687c5]">
              *
            </span>
          )}
        </label>

        {description && (
          <p className="mt-0.5 text-[9px] text-[#94a3b8]">
            {description}
          </p>
        )}

      </div>

      {children}

    </div>
  );
}

/* ============================================================
   CHARACTER COUNT
============================================================ */

function CharacterCount({
  value = "",
  max,
}) {
  return (
    <div className="mt-1.5 flex justify-end">
      <span
        className={`text-[9px] font-semibold ${
          value.length > max
            ? "text-red-600"
            : "text-[#94a3b8]"
        }`}
      >
        {value.length}/{max}
      </span>
    </div>
  );
}

/* ============================================================
   IMAGE URL
============================================================ */

function getImageUrl(path) {
  if (!path) return null;

  // Already a complete URL or local preview
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  // Convert Windows path separators to URL separators
  const normalizedPath = path
    .replace(/\\/g, "/")
    .replace(/^\/+/, "");

  // Custom image URL
  const configuredImageUrl =
    process.env.NEXT_PUBLIC_IMAGE_URL;

  if (configuredImageUrl) {
    return `${configuredImageUrl.replace(
      /\/$/,
      ""
    )}/${normalizedPath}`;
  }

  // API URL
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api";

  const baseUrl = apiUrl.replace(
    /\/api\/?$/,
    ""
  );

  return `${baseUrl}/${normalizedPath}`;
}

export default BlogForm;