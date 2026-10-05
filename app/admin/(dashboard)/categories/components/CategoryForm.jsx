"use client";

import { useEffect, useState } from "react";

import {
  CheckCircle2,
  FolderPlus,
  Loader2,
  Pencil,
  RotateCcw,
  Save,
  X,
} from "lucide-react";

import {
  createCategory,
  updateCategory,
} from "@/lib/api";

const EMPTY_FORM = {
  name: "",
  description: "",
};

const CategoryForm = ({
  refreshCategories,
  editData = null,
  setEditData,
}) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] =
    useState(EMPTY_FORM);

  /* =========================================================
     SYNC FORM WITH EDIT DATA
  ========================================================= */
  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || "",
        description:
          editData.description || "",
      });
    } else {
      setFormData(EMPTY_FORM);
    }
  }, [editData]);

  /* =========================================================
     HANDLE CHANGE
  ========================================================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     RESET FORM
  ========================================================= */
  const resetForm = () => {
    setFormData(EMPTY_FORM);

    if (setEditData) {
      setEditData(null);
    }
  };

  /* =========================================================
     SUBMIT
  ========================================================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return;
    }

    try {
      setLoading(true);

      const payload = {
        name: formData.name.trim(),
        description:
          formData.description.trim(),
      };

      if (editData) {
        await updateCategory(
          editData._id,
          payload
        );
      } else {
        await createCategory(payload);
      }

      resetForm();

      await refreshCategories();
    } catch (error) {
      console.error(
        "Category save error:",
        error
      );

      alert(
        error?.response?.data?.message ||
          "Unable to save category. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const descriptionLength =
    formData.description.length;

  const isEditing = Boolean(editData);

  return (
    <form
      onSubmit={handleSubmit}
      className="overflow-hidden border border-[#dceff7] bg-white"
    >
      {/* =====================================================
          FORM HEADER
      ===================================================== */}
      <div className="relative overflow-hidden border-b border-[#dceff7] bg-[#f8fcfe] px-5 py-5 sm:px-6">

        {/* Decorative Grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1687c5_1px,transparent_1px),linear-gradient(to_bottom,#1687c5_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.025]" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff9fe]">
              {isEditing ? (
                <Pencil className="h-5 w-5 text-[#1687c5]" />
              ) : (
                <FolderPlus className="h-5 w-5 text-[#1687c5]" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2">

                <h2 className="text-lg font-black text-[#12324a]">
                  {isEditing
                    ? "Edit Category"
                    : "Create Category"}
                </h2>

                {isEditing && (
                  <span className="rounded-full bg-[#eaf7fd] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#1687c5]">
                    Editing
                  </span>
                )}

              </div>

              <p className="mt-1 text-sm text-[#64748b]">
                {isEditing
                  ? "Update the category information below."
                  : "Create a category to organize your blog content."}
              </p>
            </div>

          </div>

          {/* CANCEL EDIT */}
          {isEditing && (
            <button
              type="button"
              onClick={resetForm}
              disabled={loading}
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#dceff7] bg-white px-4 py-2.5 text-sm font-bold text-[#64748b] transition hover:border-[#1687c5] hover:bg-[#eff9fe] hover:text-[#1687c5] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <X className="h-4 w-4" />
              Cancel Edit
            </button>
          )}

        </div>
      </div>

      {/* =====================================================
          FORM BODY
      ===================================================== */}
      <div className="space-y-6 p-5 sm:p-6">

        {/* ===================================================
            CATEGORY NAME
        =================================================== */}
        <div>

          <div className="mb-2.5 flex items-center justify-between gap-3">

            <label
              htmlFor="category-name"
              className="text-sm font-bold text-[#12324a]"
            >
              Category Name
              <span className="ml-1 text-[#dc2626]">
                *
              </span>
            </label>

            <span className="text-[11px] font-medium text-[#94a3b8]">
              Required
            </span>

          </div>

          <input
            id="category-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Metal Fabrication"
            maxLength={100}
            required
            disabled={loading}
            className="h-12 w-full rounded-xl border border-[#dceff7] bg-white px-4 text-sm font-medium text-[#12324a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1687c5] focus:ring-4 focus:ring-[#1687c5]/10 disabled:cursor-not-allowed disabled:bg-[#f8fcfe]"
          />

          <div className="mt-2 flex items-center justify-between">

            <p className="text-xs text-[#94a3b8]">
              Use a clear and descriptive category name.
            </p>

            <span className="text-[11px] text-[#94a3b8]">
              {formData.name.length}/100
            </span>

          </div>

        </div>

        {/* ===================================================
            DESCRIPTION
        =================================================== */}
        <div>

          <div className="mb-2.5 flex items-center justify-between gap-3">

            <label
              htmlFor="category-description"
              className="text-sm font-bold text-[#12324a]"
            >
              Description
            </label>

            <span className="text-[11px] font-medium text-[#94a3b8]">
              Optional
            </span>

          </div>

          <textarea
            id="category-description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a short description for this category..."
            rows={5}
            maxLength={500}
            disabled={loading}
            className="w-full resize-none rounded-xl border border-[#dceff7] bg-white px-4 py-3.5 text-sm leading-6 text-[#12324a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1687c5] focus:ring-4 focus:ring-[#1687c5]/10 disabled:cursor-not-allowed disabled:bg-[#f8fcfe]"
          />

          <div className="mt-2 flex items-center justify-between">

            <p className="text-xs text-[#94a3b8]">
              A useful description can help with content organization and SEO.
            </p>

            <span className="shrink-0 text-[11px] text-[#94a3b8]">
              {descriptionLength}/500
            </span>

          </div>

        </div>

        {/* ===================================================
            INFO BOX
        =================================================== */}
        <div className="flex gap-3 border border-[#dceff7] bg-[#f8fcfe] p-4">

          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eff9fe]">
            <CheckCircle2 className="h-4 w-4 text-[#1687c5]" />
          </div>

          <div>
            <p className="text-sm font-bold text-[#12324a]">
              Category organization
            </p>

            <p className="mt-1 text-xs leading-5 text-[#64748b]">
              Keep category names concise and relevant so
              visitors can easily understand how your blog
              content is organized.
            </p>
          </div>

        </div>

      </div>

      {/* =====================================================
          FORM FOOTER
      ===================================================== */}
      <div className="flex flex-col gap-3 border-t border-[#dceff7] bg-[#f8fcfe] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

        <div className="flex items-center gap-2 text-xs text-[#64748b]">

          <span className="h-2 w-2 rounded-full bg-[#15803d]" />

          {isEditing
            ? "Changes will update the existing category."
            : "Category is ready to be created."}

        </div>

        <div className="flex flex-col gap-2 sm:flex-row">

          {/* RESET */}
          <button
            type="button"
            onClick={resetForm}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#dceff7] bg-white px-5 py-2.5 text-sm font-bold text-[#64748b] transition hover:border-[#1687c5] hover:bg-[#eff9fe] hover:text-[#1687c5] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={
              loading ||
              !formData.name.trim()
            }
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1687c5] px-6 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(22,135,197,0.20)] transition hover:bg-[#0b6fa8] disabled:cursor-not-allowed disabled:opacity-50"
          >

            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {isEditing
                  ? "Updating..."
                  : "Creating..."}
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                {isEditing
                  ? "Update Category"
                  : "Create Category"}
              </>
            )}

          </button>

        </div>

      </div>
    </form>
  );
};

export default CategoryForm;