"use client";

import { useEffect, useMemo, useState } from "react";

import {
  CalendarDays,
  Mail,
  MessageSquare,
  Phone,
  RefreshCw,
  Search,
  Trash2,
  User,
  Users,
  Inbox,
  ArrowUpRight,
} from "lucide-react";

import api from "@/lib/api";

const EnquiriesPage = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  /* =========================================================
     FETCH ENQUIRIES
  ========================================================= */
  const fetchEnquiries = async () => {
    try {
      setLoading(true);

      const res = await api.get(
        "/contact/get-enquiries"
      );

      setEnquiries(
        Array.isArray(res.data)
          ? res.data
          : []
      );
    } catch (error) {
      console.error(
        "Failed to fetch enquiries:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  /* =========================================================
     SEARCH
  ========================================================= */
  const filteredEnquiries = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return enquiries;

    return enquiries.filter((enquiry) => {
      return (
        enquiry.name
          ?.toLowerCase()
          .includes(query) ||
        enquiry.email
          ?.toLowerCase()
          .includes(query) ||
        enquiry.phone
          ?.toLowerCase()
          .includes(query) ||
        enquiry.message
          ?.toLowerCase()
          .includes(query)
      );
    });
  }, [enquiries, search]);

  /* =========================================================
     DELETE
  ========================================================= */
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);

      await api.delete(
        `/contact/delete-enquiry/${id}`
      );

      await fetchEnquiries();
    } catch (error) {
      console.error(
        "Failed to delete enquiry:",
        error
      );

      alert(
        error?.response?.data?.message ||
          "Unable to delete this enquiry. Please try again."
      );
    } finally {
      setDeletingId(null);
    }
  };

  /* =========================================================
     DATE FORMATTER
  ========================================================= */
  const formatDate = (date) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return parsedDate.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  const formatTime = (date) => {
    if (!date) return "";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "";
    }

    return parsedDate.toLocaleTimeString(
      "en-IN",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );
  };

  return (
    <div className="w-full min-w-0 space-y-6 text-[#12324a]">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}
      <section className="relative overflow-hidden border border-[#dceff7] bg-white">

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1687c5_1px,transparent_1px),linear-gradient(to_bottom,#1687c5_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.035]" />

        {/* Decorative Circle */}
        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border-[30px] border-[#eff9fe]" />

        <div className="relative flex flex-col gap-6 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT */}
          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff9fe]">
              <Inbox className="h-5 w-5 text-[#1687c5]" />
            </div>

            <div>

              <div className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1687c5]">
                <Users className="h-3.5 w-3.5" />
                Lead Management
              </div>

              <h1 className="text-2xl font-black tracking-tight text-[#12324a] sm:text-3xl">
                Enquiries
              </h1>

              <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#64748b]">
                Manage customer enquiries and potential leads
                submitted through your website.
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex shrink-0 items-center gap-3">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#dceff7] bg-white px-3.5 py-2 text-xs font-bold text-[#12324a]">
              <span className="h-2 w-2 rounded-full bg-[#1687c5]" />

              {enquiries.length}{" "}
              {enquiries.length === 1
                ? "Enquiry"
                : "Enquiries"}
            </div>

            <button
              type="button"
              onClick={fetchEnquiries}
              disabled={loading}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dceff7] bg-white text-[#64748b] transition hover:border-[#1687c5] hover:bg-[#eff9fe] hover:text-[#1687c5] disabled:cursor-not-allowed disabled:opacity-50"
              title="Refresh enquiries"
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
                Total Enquiries
              </p>

              <p className="mt-2 text-3xl font-black text-[#12324a]">
                {enquiries.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eff9fe]">
              <Inbox className="h-5 w-5 text-[#1687c5]" />
            </div>

          </div>

          <p className="mt-3 text-xs text-[#94a3b8]">
            Website enquiries received
          </p>

        </div>

        {/* VISIBLE */}
        <div className="border border-[#dceff7] bg-white p-5 transition hover:border-[#bfe4f3] hover:shadow-[0_10px_35px_rgba(15,76,110,0.08)]">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#64748b]">
                Visible Results
              </p>

              <p className="mt-2 text-3xl font-black text-[#12324a]">
                {filteredEnquiries.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf7fd]">
              <Search className="h-5 w-5 text-[#1687c5]" />
            </div>

          </div>

          <p className="mt-3 text-xs text-[#94a3b8]">
            Enquiries matching your search
          </p>

        </div>

        {/* LEADS */}
        <div className="border border-[#dceff7] bg-white p-5 transition hover:border-[#bfe4f3] hover:shadow-[0_10px_35px_rgba(15,76,110,0.08)]">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#64748b]">
                Lead Inbox
              </p>

              <p className="mt-2 text-xl font-black text-[#12324a]">
                Active
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8fcfe]">
              <ArrowUpRight className="h-5 w-5 text-[#1687c5]" />
            </div>

          </div>

          <p className="mt-3 text-xs text-[#94a3b8]">
            Review and follow up with enquiries
          </p>

        </div>

      </section>

      {/* =====================================================
          ENQUIRIES LIST
      ===================================================== */}
      <section className="border border-[#dceff7] bg-white">

        {/* LIST HEADER */}
        <div className="flex flex-col gap-4 border-b border-[#e8f3f8] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-2">

              <MessageSquare className="h-4 w-4 text-[#1687c5]" />

              <h2 className="text-lg font-black text-[#12324a]">
                Customer Enquiries
              </h2>

            </div>

            <p className="mt-1 text-sm text-[#64748b]">
              Review contact requests submitted from the website.
            </p>

          </div>

          {/* SEARCH */}
          <div className="relative w-full lg:w-[340px]">

            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search enquiries..."
              className="h-11 w-full rounded-xl border border-[#dceff7] bg-[#f8fcfe] pl-10 pr-4 text-sm text-[#12324a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1687c5] focus:bg-white focus:ring-4 focus:ring-[#1687c5]/10"
            />

          </div>

        </div>

        {/* ===================================================
            TABLE
        =================================================== */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1100px]">

            <thead className="bg-[#f8fcfe]">

              <tr className="border-b border-[#dceff7]">

                <th className="px-6 py-4 text-left text-[11px] font-black uppercase tracking-[0.12em] text-[#64748b]">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-[11px] font-black uppercase tracking-[0.12em] text-[#64748b]">
                  Contact
                </th>

                <th className="px-6 py-4 text-left text-[11px] font-black uppercase tracking-[0.12em] text-[#64748b]">
                  Message
                </th>

                <th className="px-6 py-4 text-left text-[11px] font-black uppercase tracking-[0.12em] text-[#64748b]">
                  Received
                </th>

                <th className="px-6 py-4 text-right text-[11px] font-black uppercase tracking-[0.12em] text-[#64748b]">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {/* =================================================
                  LOADING
              ================================================= */}
              {loading &&
                Array.from({ length: 5 }).map(
                  (_, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#e8f3f8]"
                    >

                      {/* CUSTOMER */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">

                          <div className="h-11 w-11 animate-pulse rounded-xl bg-[#e8f3f8]" />

                          <div>
                            <div className="h-4 w-32 animate-pulse rounded bg-[#e8f3f8]" />

                            <div className="mt-2 h-3 w-20 animate-pulse rounded bg-[#f0f6f9]" />
                          </div>

                        </div>
                      </td>

                      {/* CONTACT */}
                      <td className="px-6 py-5">
                        <div className="space-y-2">

                          <div className="h-3 w-44 animate-pulse rounded bg-[#e8f3f8]" />

                          <div className="h-3 w-28 animate-pulse rounded bg-[#f0f6f9]" />

                        </div>
                      </td>

                      {/* MESSAGE */}
                      <td className="px-6 py-5">
                        <div className="space-y-2">

                          <div className="h-3 w-72 animate-pulse rounded bg-[#e8f3f8]" />

                          <div className="h-3 w-56 animate-pulse rounded bg-[#f0f6f9]" />

                        </div>
                      </td>

                      {/* DATE */}
                      <td className="px-6 py-5">
                        <div className="h-4 w-24 animate-pulse rounded bg-[#e8f3f8]" />
                      </td>

                      {/* ACTION */}
                      <td className="px-6 py-5">
                        <div className="ml-auto h-10 w-10 animate-pulse rounded-xl bg-[#e8f3f8]" />
                      </td>

                    </tr>
                  )
                )}

              {/* =================================================
                  EMPTY
              ================================================= */}
              {!loading &&
                filteredEnquiries.length === 0 && (
                  <tr>

                    <td
                      colSpan={5}
                      className="px-6 py-16 text-center"
                    >

                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eff9fe]">
                        <Inbox className="h-7 w-7 text-[#1687c5]" />
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-[#12324a]">
                        {search
                          ? "No enquiries found"
                          : "No enquiries yet"}
                      </h3>

                      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748b]">
                        {search
                          ? "Try another name, email, phone number, or keyword."
                          : "New website enquiries will appear here when customers contact you."}
                      </p>

                      {search && (
                        <button
                          type="button"
                          onClick={() =>
                            setSearch("")
                          }
                          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#eff9fe] px-4 py-2.5 text-sm font-bold text-[#1687c5] transition hover:bg-[#eaf7fd]"
                        >
                          Clear Search
                        </button>
                      )}

                    </td>

                  </tr>
                )}

              {/* =================================================
                  DATA
              ================================================= */}
              {!loading &&
                filteredEnquiries.map(
                  (enquiry) => (
                    <tr
                      key={enquiry._id}
                      className="border-b border-[#e8f3f8] transition hover:bg-[#f8fcfe]"
                    >

                      {/* CUSTOMER */}
                      <td className="px-6 py-5">

                        <div className="flex items-center gap-3">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff9fe] text-[#1687c5]">
                            <User className="h-5 w-5" />
                          </div>

                          <div className="min-w-0">

                            <h3 className="truncate text-sm font-bold text-[#12324a]">
                              {enquiry.name ||
                                "Unknown Customer"}
                            </h3>

                            <p className="mt-1 text-xs text-[#94a3b8]">
                              Website Lead
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* CONTACT */}
                      <td className="px-6 py-5">

                        <div className="space-y-2.5">

                          {enquiry.email && (
                            <a
                              href={`mailto:${enquiry.email}`}
                              className="flex max-w-[260px] items-center gap-2 text-sm text-[#475569] transition hover:text-[#1687c5]"
                            >
                              <Mail className="h-4 w-4 shrink-0 text-[#1687c5]" />

                              <span className="truncate">
                                {enquiry.email}
                              </span>
                            </a>
                          )}

                          {enquiry.phone && (
                            <a
                              href={`tel:${enquiry.phone}`}
                              className="flex items-center gap-2 text-sm text-[#475569] transition hover:text-[#1687c5]"
                            >
                              <Phone className="h-4 w-4 shrink-0 text-[#1687c5]" />

                              <span>
                                {enquiry.phone}
                              </span>
                            </a>
                          )}

                        </div>

                      </td>

                      {/* MESSAGE */}
                      <td className="max-w-[430px] px-6 py-5">

                        <div className="flex items-start gap-3">

                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eff9fe]">
                            <MessageSquare className="h-4 w-4 text-[#1687c5]" />
                          </div>

                          <p className="line-clamp-3 text-sm leading-6 text-[#64748b]">
                            {enquiry.message ||
                              "No message provided."}
                          </p>

                        </div>

                      </td>

                      {/* DATE */}
                      <td className="px-6 py-5">

                        <div className="flex items-start gap-2">

                          <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#1687c5]" />

                          <div>

                            <p className="text-sm font-semibold text-[#475569]">
                              {formatDate(
                                enquiry.createdAt
                              )}
                            </p>

                            {formatTime(
                              enquiry.createdAt
                            ) && (
                              <p className="mt-1 text-xs text-[#94a3b8]">
                                {formatTime(
                                  enquiry.createdAt
                                )}
                              </p>
                            )}

                          </div>

                        </div>

                      </td>

                      {/* ACTION */}
                      <td className="px-6 py-5">

                        <div className="flex justify-end">

                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(
                                enquiry._id
                              )
                            }
                            disabled={
                              deletingId ===
                              enquiry._id
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#fee2e2] bg-white text-[#dc2626] transition hover:bg-[#fef2f2] disabled:cursor-not-allowed disabled:opacity-50"
                            title="Delete enquiry"
                          >

                            {deletingId ===
                            enquiry._id ? (
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

        {/* =====================================================
            FOOTER
        ===================================================== */}
        {!loading &&
          filteredEnquiries.length > 0 && (
            <div className="flex flex-col gap-2 border-t border-[#e8f3f8] bg-[#f8fcfe] px-5 py-4 text-xs text-[#64748b] sm:flex-row sm:items-center sm:justify-between">

              <span>
                Showing{" "}
                <strong className="text-[#12324a]">
                  {filteredEnquiries.length}
                </strong>{" "}
                of{" "}
                <strong className="text-[#12324a]">
                  {enquiries.length}
                </strong>{" "}
                enquiries
              </span>

              <span className="text-[#94a3b8]">
                Review customer requests and follow up promptly.
              </span>

            </div>
          )}

      </section>

    </div>
  );
};

export default EnquiriesPage;