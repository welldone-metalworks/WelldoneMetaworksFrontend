"use client";

import { useMemo, useState } from "react";

import {
  CheckCircle2,
  FileText,
  Globe,
  Image as ImageIcon,
  Info,
  Link2,
  Save,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const SEOPage = () => {
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    siteTitle:
      "Welldone Metalworks | Metal Fabrication Ahmedabad",

    metaDescription:
      "Welldone Metalworks provides reliable mild steel fabrication services in Ahmedabad and Gandhinagar, including structural fabrication, gates, railings, staircases, sheds and custom metal work.",

    keywords:
      "metal fabrication Ahmedabad, MS fabrication Ahmedabad, mild steel fabrication, structural fabrication, gates and railings, staircase fabrication, industrial fabrication",

    canonicalUrl:
      "https://welldone-metalworks.in",

    robots:
      "index, follow",

    googleVerification: "",

    ogImage: "",
  });

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
     SAVE
  ========================================================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      /*
       * Backend integration can be added here later.
       *
       * Example:
       * await updateSEOSettings(formData);
       */

      console.log("SEO Settings:", formData);

      await new Promise((resolve) =>
        setTimeout(resolve, 700)
      );

      alert(
        "SEO settings saved successfully."
      );
    } catch (error) {
      console.error(
        "SEO settings error:",
        error
      );

      alert(
        "Unable to save SEO settings. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  /* =========================================================
     COUNTS
  ========================================================= */
  const titleLength =
    formData.siteTitle.length;

  const descriptionLength =
    formData.metaDescription.length;

  const keywordCount = useMemo(() => {
    return formData.keywords
      .split(",")
      .map((keyword) => keyword.trim())
      .filter(Boolean).length;
  }, [formData.keywords]);

  /* =========================================================
     SEO STATUS
  ========================================================= */
  const titleStatus =
    titleLength > 0 && titleLength <= 60;

  const descriptionStatus =
    descriptionLength > 0 &&
    descriptionLength <= 160;

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
              <Search className="h-5 w-5 text-[#1687c5]" />
            </div>

            <div>

              <div className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1687c5]">
                <Sparkles className="h-3.5 w-3.5" />
                Search Optimization
              </div>

              <h1 className="text-2xl font-black tracking-tight text-[#12324a] sm:text-3xl">
                SEO Settings
              </h1>

              <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#64748b]">
                Manage global metadata, search engine visibility,
                canonical URLs, verification and social sharing settings.
              </p>

            </div>

          </div>

          {/* STATUS */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dceff7] bg-white px-3.5 py-2 text-xs font-bold text-[#12324a]">

            <span className="h-2 w-2 rounded-full bg-[#15803d]" />

            SEO Configuration

          </div>

        </div>
      </section>

      {/* =====================================================
          SEO HEALTH CARDS
      ===================================================== */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {/* TITLE */}
        <div className="border border-[#dceff7] bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#64748b]">
                Title Length
              </p>

              <p className="mt-2 text-2xl font-black text-[#12324a]">
                {titleLength}
                <span className="ml-1 text-sm font-medium text-[#94a3b8]">
                  / 60
                </span>
              </p>
            </div>

            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                titleStatus
                  ? "bg-[#eff9fe]"
                  : "bg-[#fef2f2]"
              }`}
            >
              <FileText
                className={`h-5 w-5 ${
                  titleStatus
                    ? "text-[#1687c5]"
                    : "text-[#dc2626]"
                }`}
              />
            </div>

          </div>

          <p
            className={`mt-3 text-xs ${
              titleStatus
                ? "text-[#15803d]"
                : "text-[#dc2626]"
            }`}
          >
            {titleStatus
              ? "Good title length"
              : "Keep title between 1–60 characters"}
          </p>

        </div>

        {/* DESCRIPTION */}
        <div className="border border-[#dceff7] bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#64748b]">
                Description
              </p>

              <p className="mt-2 text-2xl font-black text-[#12324a]">
                {descriptionLength}
                <span className="ml-1 text-sm font-medium text-[#94a3b8]">
                  / 160
                </span>
              </p>
            </div>

            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                descriptionStatus
                  ? "bg-[#eff9fe]"
                  : "bg-[#fef2f2]"
              }`}
            >
              <FileText
                className={`h-5 w-5 ${
                  descriptionStatus
                    ? "text-[#1687c5]"
                    : "text-[#dc2626]"
                }`}
              />
            </div>

          </div>

          <p
            className={`mt-3 text-xs ${
              descriptionStatus
                ? "text-[#15803d]"
                : "text-[#dc2626]"
            }`}
          >
            {descriptionStatus
              ? "Good description length"
              : "Keep description within 160 characters"}
          </p>

        </div>

        {/* KEYWORDS */}
        <div className="border border-[#dceff7] bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#64748b]">
                Keywords
              </p>

              <p className="mt-2 text-2xl font-black text-[#12324a]">
                {keywordCount}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eff9fe]">
              <Search className="h-5 w-5 text-[#1687c5]" />
            </div>

          </div>

          <p className="mt-3 text-xs text-[#64748b]">
            Configured keyword phrases
          </p>

        </div>

      </section>

      {/* =====================================================
          SEO FORM
      ===================================================== */}
      <form
        onSubmit={handleSubmit}
        className="overflow-hidden border border-[#dceff7] bg-white"
      >

        {/* FORM HEADER */}
        <div className="relative overflow-hidden border-b border-[#dceff7] bg-[#f8fcfe] px-5 py-5 sm:px-6">

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1687c5_1px,transparent_1px),linear-gradient(to_bottom,#1687c5_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.025]" />

          <div className="relative flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eff9fe]">
              <Globe className="h-5 w-5 text-[#1687c5]" />
            </div>

            <div>

              <h2 className="text-lg font-black text-[#12324a]">
                Global SEO Configuration
              </h2>

              <p className="mt-1 text-sm text-[#64748b]">
                These settings control your website's default search metadata.
              </p>

            </div>

          </div>

        </div>

        {/* FORM BODY */}
        <div className="space-y-8 p-5 sm:p-6">

          {/* =================================================
              BASIC SEO
          ================================================= */}
          <div>

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eff9fe]">
                <Search className="h-4 w-4 text-[#1687c5]" />
              </div>

              <div>
                <h3 className="text-sm font-black text-[#12324a]">
                  Search Metadata
                </h3>

                <p className="text-xs text-[#94a3b8]">
                  Default information used by search engines.
                </p>
              </div>

            </div>

            <div className="space-y-6">

              {/* SITE TITLE */}
              <div>

                <div className="mb-2.5 flex items-center justify-between gap-3">

                  <label
                    htmlFor="siteTitle"
                    className="text-sm font-bold text-[#12324a]"
                  >
                    Site Title
                  </label>

                  <span className="text-[11px] text-[#94a3b8]">
                    {titleLength}/60
                  </span>

                </div>

                <input
                  id="siteTitle"
                  type="text"
                  name="siteTitle"
                  value={formData.siteTitle}
                  onChange={handleChange}
                  maxLength={70}
                  placeholder="Welldone Metalworks"
                  className="h-12 w-full rounded-xl border border-[#dceff7] bg-white px-4 text-sm font-medium text-[#12324a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1687c5] focus:ring-4 focus:ring-[#1687c5]/10"
                />

                <p className="mt-2 text-xs text-[#94a3b8]">
                  Keep the primary title concise and relevant to your business.
                </p>

              </div>

              {/* META DESCRIPTION */}
              <div>

                <div className="mb-2.5 flex items-center justify-between gap-3">

                  <label
                    htmlFor="metaDescription"
                    className="text-sm font-bold text-[#12324a]"
                  >
                    Meta Description
                  </label>

                  <span className="text-[11px] text-[#94a3b8]">
                    {descriptionLength}/160
                  </span>

                </div>

                <textarea
                  id="metaDescription"
                  rows={5}
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleChange}
                  maxLength={160}
                  placeholder="Describe your website in a concise way..."
                  className="w-full resize-none rounded-xl border border-[#dceff7] bg-white px-4 py-3.5 text-sm leading-6 text-[#12324a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1687c5] focus:ring-4 focus:ring-[#1687c5]/10"
                />

                <p className="mt-2 text-xs text-[#94a3b8]">
                  Write a concise description that explains what Welldone Metalworks offers.
                </p>

              </div>

              {/* KEYWORDS */}
              <div>

                <div className="mb-2.5 flex items-center justify-between">

                  <label
                    htmlFor="keywords"
                    className="text-sm font-bold text-[#12324a]"
                  >
                    Keywords
                  </label>

                  <span className="text-[11px] text-[#94a3b8]">
                    {keywordCount} phrases
                  </span>

                </div>

                <input
                  id="keywords"
                  type="text"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleChange}
                  placeholder="metal fabrication Ahmedabad, MS fabrication..."
                  className="h-12 w-full rounded-xl border border-[#dceff7] bg-white px-4 text-sm text-[#12324a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1687c5] focus:ring-4 focus:ring-[#1687c5]/10"
                />

                <p className="mt-2 text-xs text-[#94a3b8]">
                  Separate phrases using commas.
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              INDEXING
          ================================================= */}
          <div className="border-t border-[#e8f3f8] pt-8">

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eff9fe]">
                <ShieldCheck className="h-4 w-4 text-[#1687c5]" />
              </div>

              <div>
                <h3 className="text-sm font-black text-[#12324a]">
                  Search Engine Indexing
                </h3>

                <p className="text-xs text-[#94a3b8]">
                  Control how search engines should crawl this website.
                </p>
              </div>

            </div>

            <div className="space-y-6">

              {/* CANONICAL */}
              <div>

                <label
                  htmlFor="canonicalUrl"
                  className="mb-2.5 flex items-center gap-2 text-sm font-bold text-[#12324a]"
                >
                  <Link2 className="h-4 w-4 text-[#1687c5]" />
                  Canonical URL
                </label>

                <input
                  id="canonicalUrl"
                  type="url"
                  name="canonicalUrl"
                  value={formData.canonicalUrl}
                  onChange={handleChange}
                  placeholder="https://welldone-metalworks.in"
                  className="h-12 w-full rounded-xl border border-[#dceff7] bg-white px-4 text-sm text-[#12324a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1687c5] focus:ring-4 focus:ring-[#1687c5]/10"
                />

                <p className="mt-2 text-xs text-[#94a3b8]">
                  Use your preferred canonical domain to prevent duplicate URL issues.
                </p>

              </div>

              {/* ROBOTS */}
              <div>

                <label
                  htmlFor="robots"
                  className="mb-2.5 flex items-center gap-2 text-sm font-bold text-[#12324a]"
                >
                  <ShieldCheck className="h-4 w-4 text-[#1687c5]" />
                  Robots Meta
                </label>

                <select
                  id="robots"
                  name="robots"
                  value={formData.robots}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-[#dceff7] bg-white px-4 text-sm font-medium text-[#12324a] outline-none transition focus:border-[#1687c5] focus:ring-4 focus:ring-[#1687c5]/10"
                >
                  <option value="index, follow">
                    index, follow
                  </option>

                  <option value="noindex, follow">
                    noindex, follow
                  </option>

                  <option value="index, nofollow">
                    index, nofollow
                  </option>

                  <option value="noindex, nofollow">
                    noindex, nofollow
                  </option>
                </select>

              </div>

            </div>

          </div>

          {/* =================================================
              VERIFICATION & SOCIAL
          ================================================= */}
          <div className="border-t border-[#e8f3f8] pt-8">

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eff9fe]">
                <Globe className="h-4 w-4 text-[#1687c5]" />
              </div>

              <div>
                <h3 className="text-sm font-black text-[#12324a]">
                  Verification & Social Sharing
                </h3>

                <p className="text-xs text-[#94a3b8]">
                  Configure search verification and Open Graph settings.
                </p>
              </div>

            </div>

            <div className="space-y-6">

              {/* GOOGLE VERIFICATION */}
              <div>

                <label
                  htmlFor="googleVerification"
                  className="mb-2.5 flex items-center gap-2 text-sm font-bold text-[#12324a]"
                >
                  <Search className="h-4 w-4 text-[#1687c5]" />
                  Google Search Console Verification
                </label>

                <input
                  id="googleVerification"
                  type="text"
                  name="googleVerification"
                  value={formData.googleVerification}
                  onChange={handleChange}
                  placeholder="Enter verification code"
                  className="h-12 w-full rounded-xl border border-[#dceff7] bg-white px-4 text-sm text-[#12324a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1687c5] focus:ring-4 focus:ring-[#1687c5]/10"
                />

                <p className="mt-2 text-xs text-[#94a3b8]">
                  Add the verification value provided by Google Search Console.
                </p>

              </div>

              {/* OG IMAGE */}
              <div>

                <label
                  htmlFor="ogImage"
                  className="mb-2.5 flex items-center gap-2 text-sm font-bold text-[#12324a]"
                >
                  <ImageIcon className="h-4 w-4 text-[#1687c5]" />
                  Open Graph Image URL
                </label>

                <input
                  id="ogImage"
                  type="url"
                  name="ogImage"
                  value={formData.ogImage}
                  onChange={handleChange}
                  placeholder="https://example.com/og-image.jpg"
                  className="h-12 w-full rounded-xl border border-[#dceff7] bg-white px-4 text-sm text-[#12324a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1687c5] focus:ring-4 focus:ring-[#1687c5]/10"
                />

                <p className="mt-2 text-xs text-[#94a3b8]">
                  Recommended for social sharing previews.
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              INFORMATION
          ================================================= */}
          <div className="flex gap-3 border border-[#dceff7] bg-[#f8fcfe] p-4">

            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eff9fe]">
              <Info className="h-4 w-4 text-[#1687c5]" />
            </div>

            <div>

              <p className="text-sm font-bold text-[#12324a]">
                SEO configuration note
              </p>

              <p className="mt-1 text-xs leading-5 text-[#64748b]">
                These settings are currently managed in the admin interface.
                Connect this form to your backend SEO settings endpoint when
                you are ready to persist the values.
              </p>

            </div>

          </div>

        </div>

        {/* =================================================
            FOOTER
        ================================================= */}
        <div className="flex flex-col gap-3 border-t border-[#dceff7] bg-[#f8fcfe] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

          <div className="flex items-center gap-2 text-xs text-[#64748b]">

            <CheckCircle2 className="h-4 w-4 text-[#15803d]" />

            Review your SEO settings before saving.

          </div>

          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1687c5] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(22,135,197,0.20)] transition hover:bg-[#0b6fa8] disabled:cursor-not-allowed disabled:opacity-50"
          >

            <Save className="h-4 w-4" />

            {saving
              ? "Saving..."
              : "Save SEO Settings"}

          </button>

        </div>

      </form>

      {/* =====================================================
          GOOGLE SEARCH PREVIEW
      ===================================================== */}
      <section className="border border-[#dceff7] bg-white">

        <div className="border-b border-[#e8f3f8] p-5 sm:p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eff9fe]">
              <Search className="h-4 w-4 text-[#1687c5]" />
            </div>

            <div>

              <h2 className="text-lg font-black text-[#12324a]">
                Google Search Preview
              </h2>

              <p className="mt-1 text-xs text-[#94a3b8]">
                Approximate preview of how your page metadata may appear.
              </p>

            </div>

          </div>

        </div>

        <div className="p-5 sm:p-6">

          <div className="max-w-3xl rounded-2xl border border-[#e8f3f8] bg-white p-5 shadow-[0_4px_18px_rgba(15,76,110,0.05)]">

            {/* URL */}
            <div className="flex items-center gap-2">

              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f8fcfe]">
                <Globe className="h-3.5 w-3.5 text-[#64748b]" />
              </div>

              <span className="truncate text-sm text-[#475569]">
                {formData.canonicalUrl}
              </span>

            </div>

            {/* TITLE */}
            <p className="mt-3 text-xl font-medium leading-7 text-[#1a0dab] hover:underline">
              {formData.siteTitle ||
                "Your Website Title"}
            </p>

            {/* DESCRIPTION */}
            <p className="mt-2 text-sm leading-6 text-[#4b5563]">
              {formData.metaDescription ||
                "Your meta description will appear here."}
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default SEOPage;