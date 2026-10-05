"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Hash,
  Pencil,
  Plus,
  RefreshCw,
  Search,
  Tags,
  Trash2,
  Layers3,
} from "lucide-react";

import {
  getTags,
  deleteTag,
} from "@/lib/api";

import TagForm from "./components/TagForm";

const TagsPage = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editData, setEditData] = useState(null);

  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  /* =========================================================
     FETCH TAGS
  ========================================================= */
  const fetchTags = async () => {
    try {
      setLoading(true);

      const res = await getTags();

      setTags(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Failed to fetch tags:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  /* =========================================================
     FILTER TAGS
  ========================================================= */
  const filteredTags = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return tags;

    return tags.filter((tag) => {
      return (
        tag.name?.toLowerCase().includes(query) ||
        tag.slug?.toLowerCase().includes(query)
      );
    });
  }, [tags, search]);

  /* =========================================================
     DELETE TAG
  ========================================================= */
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this tag?"
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);

      await deleteTag(id);

      await fetchTags();

      if (editData?._id === id) {
        setEditData(null);
      }
    } catch (error) {
      console.error("Failed to delete tag:", error);

      alert(
        error?.response?.data?.message ||
          "Unable to delete this tag. Please try again."
      );
    } finally {
      setDeletingId(null);
    }
  };

  /* =========================================================
     EDIT TAG
  ========================================================= */
  const handleEdit = (tag) => {
    setEditData(tag);

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
              <Tags className="h-5 w-5 text-[#1687c5]" />
            </div>

            <div>
              <div className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1687c5]">
                <Layers3 className="h-3.5 w-3.5" />
                Content Management
              </div>

              <h1 className="text-2xl font-black tracking-tight text-[#12324a] sm:text-3xl">
                Tags
              </h1>

              <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#64748b]">
                Manage blog tags used for filtering, content discovery,
                related articles, and SEO organization.
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex shrink-0 items-center gap-3">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#dceff7] bg-white px-3.5 py-2 text-xs font-bold text-[#12324a]">
              <span className="h-2 w-2 rounded-full bg-[#1687c5]" />

              {tags.length}{" "}
              {tags.length === 1 ? "Tag" : "Tags"}
            </div>

            <button
              type="button"
              onClick={fetchTags}
              disabled={loading}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dceff7] bg-white text-[#64748b] transition hover:border-[#1687c5] hover:bg-[#eff9fe] hover:text-[#1687c5] disabled:cursor-not-allowed disabled:opacity-50"
              title="Refresh tags"
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
                Total Tags
              </p>

              <p className="mt-2 text-3xl font-black text-[#12324a]">
                {tags.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eff9fe]">
              <Tags className="h-5 w-5 text-[#1687c5]" />
            </div>

          </div>

          <p className="mt-3 text-xs text-[#94a3b8]">
            All available blog tags
          </p>

        </div>

        {/* SEARCH RESULTS */}
        <div className="border border-[#dceff7] bg-white p-5 transition hover:border-[#bfe4f3] hover:shadow-[0_10px_35px_rgba(15,76,110,0.08)]">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#64748b]">
                Visible Results
              </p>

              <p className="mt-2 text-3xl font-black text-[#12324a]">
                {filteredTags.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf7fd]">
              <Search className="h-5 w-5 text-[#1687c5]" />
            </div>

          </div>

          <p className="mt-3 text-xs text-[#94a3b8]">
            Tags matching your search
          </p>

        </div>

        {/* ORGANIZATION */}
        <div className="border border-[#dceff7] bg-white p-5 transition hover:border-[#bfe4f3] hover:shadow-[0_10px_35px_rgba(15,76,110,0.08)]">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#64748b]">
                Content Discovery
              </p>

              <p className="mt-2 text-xl font-black text-[#12324a]">
                Organized
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8fcfe]">
              <Hash className="h-5 w-5 text-[#1687c5]" />
            </div>

          </div>

          <p className="mt-3 text-xs text-[#94a3b8]">
            Use tags to connect related content
          </p>

        </div>

      </section>

      {/* =====================================================
          TAG FORM
      ===================================================== */}
      <section
        id="tag-form"
        className="scroll-mt-24"
      >
        <TagForm
          refreshTags={fetchTags}
          editData={editData}
          setEditData={setEditData}
        />
      </section>

      {/* =====================================================
          TAG LIST
      ===================================================== */}
      <section className="border border-[#dceff7] bg-white">

        {/* HEADER */}
        <div className="flex flex-col gap-4 border-b border-[#e8f3f8] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <div className="flex items-center gap-2">

              <Tags className="h-4 w-4 text-[#1687c5]" />

              <h2 className="text-lg font-black text-[#12324a]">
                All Tags
              </h2>

            </div>

            <p className="mt-1 text-sm text-[#64748b]">
              Manage your existing blog tags.
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
              placeholder="Search tags..."
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
                  Tag
                </th>

                <th className="px-6 py-4 text-left text-[11px] font-black uppercase tracking-[0.12em] text-[#64748b]">
                  Slug
                </th>

                <th className="px-6 py-4 text-left text-[11px] font-black uppercase tracking-[0.12em] text-[#64748b]">
                  Created
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
                        <div className="h-7 w-28 animate-pulse rounded-lg bg-[#e8f3f8]" />
                      </td>

                      <td className="px-6 py-5">
                        <div className="h-4 w-24 animate-pulse rounded bg-[#e8f3f8]" />
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
                filteredTags.length === 0 && (
                  <tr>

                    <td
                      colSpan={4}
                      className="px-6 py-16 text-center"
                    >

                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eff9fe]">
                        <Tags className="h-7 w-7 text-[#1687c5]" />
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-[#12324a]">
                        {search
                          ? "No tags found"
                          : "No tags yet"}
                      </h3>

                      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748b]">
                        {search
                          ? "Try changing your search term to find another tag."
                          : "Create your first blog tag using the tag form above."}
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
                filteredTags.map((tag) => (
                  <tr
                    key={tag._id}
                    className="border-b border-[#e8f3f8] transition hover:bg-[#f8fcfe]"
                  >

                    {/* TAG */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff9fe] text-[#1687c5]">
                          <Hash className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">

                          <h3 className="truncate text-sm font-bold text-[#12324a]">
                            {tag.name}
                          </h3>

                          <p className="mt-1 text-xs text-[#94a3b8]">
                            Blog Tag
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* SLUG */}
                    <td className="px-6 py-5">

                      <span className="inline-flex max-w-[240px] items-center rounded-lg bg-[#f8fcfe] px-3 py-1.5 font-mono text-xs font-medium text-[#64748b]">
                        /{tag.slug}
                      </span>

                    </td>

                    {/* CREATED */}
                    <td className="px-6 py-5 text-sm text-[#64748b]">
                      {tag.createdAt
                        ? new Date(
                            tag.createdAt
                          ).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )
                        : "—"}
                    </td>

                    {/* ACTIONS */}
                    <td className="px-6 py-5">

                      <div className="flex items-center justify-end gap-2">

                        {/* EDIT */}
                        <button
                          type="button"
                          onClick={() =>
                            handleEdit(tag)
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dceff7] bg-white text-[#1687c5] transition hover:border-[#1687c5] hover:bg-[#eff9fe]"
                          title="Edit tag"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>

                        {/* DELETE */}
                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(
                              tag._id
                            )
                          }
                          disabled={
                            deletingId ===
                            tag._id
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#fee2e2] bg-white text-[#dc2626] transition hover:bg-[#fef2f2] disabled:cursor-not-allowed disabled:opacity-50"
                          title="Delete tag"
                        >
                          {deletingId ===
                          tag._id ? (
                            <RefreshCw className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </button>

                      </div>

                    </td>

                  </tr>
                ))}

            </tbody>

          </table>

        </div>

        {/* FOOTER */}
        {!loading &&
          filteredTags.length > 0 && (
            <div className="flex flex-col gap-2 border-t border-[#e8f3f8] bg-[#f8fcfe] px-5 py-4 text-xs text-[#64748b] sm:flex-row sm:items-center sm:justify-between">

              <span>
                Showing{" "}
                <strong className="text-[#12324a]">
                  {filteredTags.length}
                </strong>{" "}
                of{" "}
                <strong className="text-[#12324a]">
                  {tags.length}
                </strong>{" "}
                tags
              </span>

              <span className="text-[#94a3b8]">
                Tags help connect related blog content.
              </span>

            </div>
          )}

      </section>

    </div>
  );
};

export default TagsPage;