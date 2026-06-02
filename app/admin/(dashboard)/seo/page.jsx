"use client";

import { useState } from "react";

import {
  Globe,
  Search,
  Link2,
  FileText,
  Save,
  ShieldCheck,
} from "lucide-react";

const SEOPage = () => {
  const [formData, setFormData] =
    useState({
      siteTitle:
        "Welldone Metalworks",

      metaDescription:
        "Welldone Metalworks provides premium industrial products, stainless steel pipes, waterproofing solutions and fabrication services.",

      keywords:
        "welldone metalworks, stainless steel pipes, industrial products, waterproofing, fabrication",

      canonicalUrl:
        "https://welldone-metalworks.in",

      robots:
        "index, follow",

      googleVerification: "",

      ogImage: "",
    });

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // SAVE
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert(
      "SEO settings saved successfully"
    );
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-black text-gray-800">
          SEO Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage global SEO settings, metadata and search engine visibility.
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100 space-y-8"
      >

        {/* SITE TITLE */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

            <Globe
              size={18}
              className="text-[#b72d2c]"
            />

            Site Title
          </label>

          <input
            type="text"
            name="siteTitle"
            value={formData.siteTitle}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          />
        </div>

        {/* META DESCRIPTION */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

            <FileText
              size={18}
              className="text-[#b72d2c]"
            />

            Meta Description
          </label>

          <textarea
            rows={5}
            name="metaDescription"
            value={
              formData.metaDescription
            }
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          />
        </div>

        {/* KEYWORDS */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

            <Search
              size={18}
              className="text-[#b72d2c]"
            />

            Keywords
          </label>

          <input
            type="text"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            placeholder="seo, industrial products, steel pipes"
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          />
        </div>

        {/* CANONICAL URL */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

            <Link2
              size={18}
              className="text-[#b72d2c]"
            />

            Canonical URL
          </label>

          <input
            type="text"
            name="canonicalUrl"
            value={
              formData.canonicalUrl
            }
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          />
        </div>

        {/* ROBOTS */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

            <ShieldCheck
              size={18}
              className="text-[#b72d2c]"
            />

            Robots Meta
          </label>

          <select
            name="robots"
            value={formData.robots}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
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

        {/* GOOGLE VERIFICATION */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

            <Search
              size={18}
              className="text-[#b72d2c]"
            />

            Google Verification Code
          </label>

          <input
            type="text"
            name="googleVerification"
            value={
              formData.googleVerification
            }
            onChange={handleChange}
            placeholder="Enter Google Search Console verification code"
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          />
        </div>

        {/* OG IMAGE */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

            <Globe
              size={18}
              className="text-[#b72d2c]"
            />

            Open Graph Image URL
          </label>

          <input
            type="text"
            name="ogImage"
            value={formData.ogImage}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition-all duration-300"
        >
          <Save size={20} />

          Save SEO Settings
        </button>
      </form>

      {/* SEO PREVIEW */}
      <div className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100">

        <h2 className="text-2xl font-black text-gray-800 mb-6">
          Google Search Preview
        </h2>

        <div className="border border-gray-200 rounded-2xl p-6">

          <p className="text-[#1a0dab] text-2xl font-medium hover:underline cursor-pointer">
            {formData.siteTitle}
          </p>

          <p className="text-green-700 text-sm mt-1">
            {formData.canonicalUrl}
          </p>

          <p className="text-gray-600 mt-3 leading-relaxed">
            {
              formData.metaDescription
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default SEOPage;