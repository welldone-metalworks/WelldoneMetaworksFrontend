"use client";

import { useEffect, useMemo, useState } from "react";

import {
  FolderOpen,
  Pencil,
  RefreshCw,
  Search,
  Tags,
  Trash2,
  Layers3,
  Plus,
} from "lucide-react";

import {
  getCategories,
  deleteCategory,
} from "@/lib/api";

import CategoryForm from "./components/CategoryForm";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editData, setEditData] = useState(null);

  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  /* =========================================================
     FETCH CATEGORIES
  ========================================================= */
  const fetchCategories = async () => {
    try {
      setLoading(true);

      const res = await getCategories();

      setCategories(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  /* =========================================================
     FILTER CATEGORIES
  ========================================================= */
  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return categories;

    return categories.filter((category) => {
      return (
        category.name?.toLowerCase().includes(query) ||
        category.slug?.toLowerCase().includes(query) ||
        category.description
          ?.toLowerCase()
          .includes(query)
      );
    });
  }, [categories, search]);

  /* =========================================================
     DELETE
  ========================================================= */
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);

      await deleteCategory(id);

      await fetchCategories();

      if (editData?._id === id) {
        setEditData(null);
      }
    } catch (error) {
      console.error("Failed to delete category:", error);

      alert(
        error?.response?.data?.message ||
          "Unable to delete this category."
      );
    } finally {
      setDeletingId(null);
    }
  };

  /* =========================================================
     EDIT
  ========================================================= */
  const handleEdit = (category) => {
    setEditData(category);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full min-w-0 space-y-6 text-[#12324a]">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}
      <section className="relative overflow-hidden border border-[#dceff7] bg-white">

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1687c5_1px,transparent_1px),linear-gradient(to_bottom,#1687c5_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.035]" />

        {/* Decorative Circle */}
        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border-[30px] border-[#eff9fe]" />

        <div className="relative flex flex-col gap-6 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT */}
          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff9fe]">
              <FolderOpen className="h-5 w-5 text-[#1687c5]" />
            </div>

            <div>
              <div className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1687c5]">
                <Layers3 className="h-3.5 w-3.5" />
                Content Management
              </div>

              <h1 className="text-2xl font-black tracking-tight text-[#12324a] sm:text-3xl">
                Categories
              </h1>

              <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#64748b]">
                Organize your blog content with structured categories
                designed for better navigation and SEO.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex shrink-0 items-center gap-3">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#dceff7] bg-white px-3.5 py-2 text-xs font-bold text-[#12324a]">
              <span className="h-2 w-2 rounded-full bg-[#1687c5]" />
              {categories.length}{" "}
              {categories.length === 1
                ? "Category"
                : "Categories"}
            </div>

            <button
              type="button"
              onClick={fetchCategories}
              disabled={loading}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dceff7] bg-white text-[#64748b] transition hover:border-[#1687c5] hover:bg-[#eff9fe] hover:text-[#1687c5] disabled:cursor-not-allowed disabled:opacity-50"
              title="Refresh categories"
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  loading ? "animate-spin" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          STAT CARDS
      ===================================================== */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {/* TOTAL */}
        <div className="border border-[#dceff7] bg-white p-5 transition hover:border-[#bfe4f3] hover:shadow-[0_10px_35px_rgba(15,76,110,0.08)]">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#64748b]">
                Total Categories
              </p>

              <p className="mt-2 text-3xl font-black text-[#12324a]">
                {categories.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eff9fe]">
              <FolderOpen className="h-5 w-5 text-[#1687c5]" />
            </div>

          </div>

          <p className="mt-3 text-xs text-[#94a3b8]">
            All available blog categories
          </p>
        </div>

        {/* SEARCHED */}
        <div className="border border-[#dceff7] bg-white p-5 transition hover:border-[#bfe4f3] hover:shadow-[0_10px_35px_rgba(15,76,110,0.08)]">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#64748b]">
                Visible Results
              </p>

              <p className="mt-2 text-3xl font-black text-[#12324a]">
                {filteredCategories.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf7fd]">
              <Search className="h-5 w-5 text-[#1687c5]" />
            </div>

          </div>

          <p className="mt-3 text-xs text-[#94a3b8]">
            Categories matching your search
          </p>
        </div>

        {/* CONTENT */}
        <div className="border border-[#dceff7] bg-white p-5 transition hover:border-[#bfe4f3] hover:shadow-[0_10px_35px_rgba(15,76,110,0.08)]">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#64748b]">
                Organization
              </p>

              <p className="mt-2 text-xl font-black text-[#12324a]">
                Structured
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8fcfe]">
              <Tags className="h-5 w-5 text-[#1687c5]" />
            </div>

          </div>

          <p className="mt-3 text-xs text-[#94a3b8]">
            Keep your content easy to discover
          </p>
        </div>

      </section>

      {/* =====================================================
          CATEGORY FORM
      ===================================================== */}
      <section
        id="category-form"
        className="scroll-mt-24"
      >
        <CategoryForm
          refreshCategories={fetchCategories}
          editData={editData}
          setEditData={setEditData}
        />
      </section>

      {/* =====================================================
          CATEGORY LIST HEADER
      ===================================================== */}
      <section className="border border-[#dceff7] bg-white">

        <div className="flex flex-col gap-4 border-b border-[#e8f3f8] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <div className="flex items-center gap-2">
              <FolderOpen className="h-4 w-4 text-[#1687c5]" />

              <h2 className="text-lg font-black text-[#12324a]">
                All Categories
              </h2>
            </div>

            <p className="mt-1 text-sm text-[#64748b]">
              Manage your existing blog categories.
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative w-full lg:w-[320px]">

            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search categories..."
              className="h-11 w-full rounded-xl border border-[#dceff7] bg-[#f8fcfe] pl-10 pr-4 text-sm text-[#12324a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1687c5] focus:bg-white focus:ring-4 focus:ring-[#1687c5]/10"
            />

          </div>
        </div>

        {/* ===================================================
            TABLE
        =================================================== */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[760px]">

            <thead className="bg-[#f8fcfe]">

              <tr className="border-b border-[#dceff7]">

                <th className="px-6 py-4 text-left text-[11px] font-black uppercase tracking-[0.12em] text-[#64748b]">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-[11px] font-black uppercase tracking-[0.12em] text-[#64748b]">
                  Description
                </th>

                <th className="px-6 py-4 text-left text-[11px] font-black uppercase tracking-[0.12em] text-[#64748b]">
                  Slug
                </th>

                <th className="px-6 py-4 text-right text-[11px] font-black uppercase tracking-[0.12em] text-[#64748b]">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {/* LOADING */}
              {loading &&
                Array.from({ length: 4 }).map(
                  (_, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#e8f3f8]"
                    >

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">

                          <div className="h-11 w-11 animate-pulse rounded-xl bg-[#e8f3f8]" />

                          <div>
                            <div className="h-4 w-32 animate-pulse rounded bg-[#e8f3f8]" />

                            <div className="mt-2 h-3 w-20 animate-pulse rounded bg-[#f0f6f9]" />
                          </div>

                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="h-4 w-64 animate-pulse rounded bg-[#e8f3f8]" />
                      </td>

                      <td className="px-6 py-5">
                        <div className="h-7 w-28 animate-pulse rounded-lg bg-[#e8f3f8]" />
                      </td>

                      <td className="px-6 py-5">
                        <div className="ml-auto flex w-fit gap-2">
                          <div className="h-10 w-10 animate-pulse rounded-xl bg-[#e8f3f8]" />
                          <div className="h-10 w-10 animate-pulse rounded-xl bg-[#e8f3f8]" />
                        </div>
                      </td>

                    </tr>
                  )
                )}

              {/* EMPTY */}
              {!loading &&
                filteredCategories.length === 0 && (
                  <tr>

                    <td
                      colSpan={4}
                      className="px-6 py-16 text-center"
                    >

                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eff9fe]">
                        <FolderOpen className="h-7 w-7 text-[#1687c5]" />
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-[#12324a]">
                        {search
                          ? "No categories found"
                          : "No categories yet"}
                      </h3>

                      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748b]">
                        {search
                          ? "Try changing your search term to find another category."
                          : "Create your first blog category using the category form above."}
                      </p>

                      {search && (
                        <button
                          type="button"
                          onClick={() => setSearch("")}
                          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#eff9fe] px-4 py-2.5 text-sm font-bold text-[#1687c5] transition hover:bg-[#eaf7fd]"
                        >
                          Clear Search
                        </button>
                      )}

                    </td>

                  </tr>
                )}

              {/* DATA */}
              {!loading &&
                filteredCategories.map(
                  (category) => (
                    <tr
                      key={category._id}
                      className="border-b border-[#e8f3f8] transition hover:bg-[#f8fcfe]"
                    >

                      {/* CATEGORY */}
                      <td className="px-6 py-5">

                        <div className="flex items-center gap-3">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff9fe] text-[#1687c5]">
                            <FolderOpen className="h-5 w-5" />
                          </div>

                          <div className="min-w-0">

                            <h3 className="truncate text-sm font-bold text-[#12324a]">
                              {category.name}
                            </h3>

                            <p className="mt-1 text-xs text-[#94a3b8]">
                              Blog Category
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* DESCRIPTION */}
                      <td className="max-w-[420px] px-6 py-5">

                        <p className="line-clamp-2 text-sm leading-6 text-[#64748b]">
                          {category.description ||
                            "No description added."}
                        </p>

                      </td>

                      {/* SLUG */}
                      <td className="px-6 py-5">

                        <span className="inline-flex max-w-[220px] items-center rounded-lg bg-[#f8fcfe] px-3 py-1.5 font-mono text-xs font-medium text-[#64748b]">
                          /{category.slug}
                        </span>

                      </td>

                      {/* ACTIONS */}
                      <td className="px-6 py-5">

                        <div className="flex items-center justify-end gap-2">

                          {/* EDIT */}
                          <button
                            type="button"
                            onClick={() =>
                              handleEdit(category)
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dceff7] bg-white text-[#1687c5] transition hover:border-[#1687c5] hover:bg-[#eff9fe]"
                            title="Edit category"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>

                          {/* DELETE */}
                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(
                                category._id
                              )
                            }
                            disabled={
                              deletingId ===
                              category._id
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#fee2e2] bg-white text-[#dc2626] transition hover:bg-[#fef2f2] disabled:cursor-not-allowed disabled:opacity-50"
                            title="Delete category"
                          >
                            {deletingId ===
                            category._id ? (
                              <RefreshCw className="h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4" />
                            )}
                          </button>

                        </div>

                      </td>

                    </tr>
                  )
                )}

            </tbody>
          </table>

        </div>

        {/* ===================================================
            FOOTER
        =================================================== */}
        {!loading &&
          filteredCategories.length > 0 && (
            <div className="flex flex-col gap-2 border-t border-[#e8f3f8] bg-[#f8fcfe] px-5 py-4 text-xs text-[#64748b] sm:flex-row sm:items-center sm:justify-between">

              <span>
                Showing{" "}
                <strong className="text-[#12324a]">
                  {filteredCategories.length}
                </strong>{" "}
                of{" "}
                <strong className="text-[#12324a]">
                  {categories.length}
                </strong>{" "}
                categories
              </span>

              <span className="text-[#94a3b8]">
                Categories help organize your blog content.
              </span>

            </div>
          )}

      </section>

    </div>
  );
};

export default CategoriesPage;