"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Save,
  Upload,
  Settings2,
  ExternalLink,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

const INITIAL_FORM = {
  companyName: "Welldone Metalworks",
  email: "info@welldone-metalworks.in",
  phone: "+91 9876543210",
  address: "Ahmedabad, Gujarat, India",
  website: "https://welldone-metalworks.in",

  facebook: "",
  instagram: "",
  linkedin: "",

  footerText:
    "© 2026 Welldone Metalworks. All rights reserved.",

  logo: null,
};

const SettingsPage = () => {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [logoPreview, setLogoPreview] = useState(null);

  const [formData, setFormData] = useState(INITIAL_FORM);

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  /* =========================================================
     HANDLE LOGO
  ========================================================= */

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Basic validation
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Logo size should be less than 2MB.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      logo: file,
    }));

    const previewUrl = URL.createObjectURL(file);

    setLogoPreview(previewUrl);
    setSaved(false);
  };

  /* =========================================================
     CLEANUP PREVIEW URL
  ========================================================= */

  useEffect(() => {
    return () => {
      if (logoPreview) {
        URL.revokeObjectURL(logoPreview);
      }
    };
  }, [logoPreview]);

  /* =========================================================
     RESET FORM
  ========================================================= */

  const handleReset = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset the settings?"
    );

    if (!confirmed) return;

    setFormData(INITIAL_FORM);
    setLogoPreview(null);
    setSaved(false);
  };

  /* =========================================================
     SAVE SETTINGS
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSaved(false);

      /*
       * Backend persistence is not connected yet.
       * Keep this section ready for API integration.
       */

      console.log("Website Settings:", formData);

      await new Promise((resolve) =>
        setTimeout(resolve, 700)
      );

      setSaved(true);
    } catch (error) {
      console.error("Settings save error:", error);

      alert("Something went wrong while saving settings.");
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     REUSABLE INPUT CLASS
  ========================================================= */

  const inputClass =
    "w-full rounded-xl border border-[#dceff7] bg-white px-4 py-3.5 text-sm font-medium text-[#17384f] outline-none transition placeholder:text-[#94a3b8] hover:border-[#bfe4f3] focus:border-[#1687c5] focus:ring-4 focus:ring-[#1687c5]/10";

  const labelClass =
    "mb-2.5 block text-sm font-bold text-[#12324a]";

  return (
    <div className="w-full min-w-0 space-y-6">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="relative overflow-hidden rounded-2xl border border-[#dceff7] bg-white shadow-[0_10px_35px_rgba(15,76,110,0.06)]">

        {/* Decorative grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(#1687c5 1px, transparent 1px), linear-gradient(90deg, #1687c5 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage:
              "linear-gradient(to right, black, transparent 75%)",
          }}
        />

        {/* Decorative circle */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[40px] border-[#1687c5]/5" />

        <div className="relative flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf7fd] text-[#1687c5]">
              <Settings2 size={23} />
            </div>

            <div>
              <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1687c5]">
                <span>Administration</span>
                <span className="h-1 w-1 rounded-full bg-[#1687c5]" />
                <span>Configuration</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-[#12324a] sm:text-3xl">
                Website Settings
              </h1>

              <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#64748b]">
                Manage your company information, website identity,
                social profiles and footer configuration.
              </p>
            </div>

          </div>

          {/* Status */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dceff7] bg-[#f8fcfe] px-3.5 py-2 text-xs font-bold text-[#475569]">
            <span className="h-2 w-2 rounded-full bg-[#15803d]" />
            Website Configuration
          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN FORM
      ===================================================== */}

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* ===================================================
            COMPANY INFORMATION
        =================================================== */}

        <section className="overflow-hidden rounded-2xl border border-[#dceff7] bg-white shadow-[0_10px_35px_rgba(15,76,110,0.06)]">

          <div className="flex items-center gap-3 border-b border-[#e8f3f8] px-5 py-4 sm:px-6">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf7fd] text-[#1687c5]">
              <Building2 size={19} />
            </div>

            <div>
              <h2 className="font-black text-[#12324a]">
                Company Information
              </h2>

              <p className="text-xs text-[#64748b]">
                Basic business information displayed across the website.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-5 p-5 sm:p-6 lg:grid-cols-2">

            {/* Company */}
            <div>
              <label className={labelClass}>
                Company Name
              </label>

              <div className="relative">
                <Building2
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]"
                />

                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`${inputClass} pl-11`}
                  placeholder="Company name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputClass} pl-11`}
                  placeholder="Email address"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass}>
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]"
                />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${inputClass} pl-11`}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            {/* Website */}
            <div>
              <label className={labelClass}>
                Website URL
              </label>

              <div className="relative">
                <Globe
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]"
                />

                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className={`${inputClass} pl-11`}
                  placeholder="https://example.com"
                />
              </div>
            </div>

            {/* Address */}
            <div className="lg:col-span-2">
              <label className={labelClass}>
                Business Address
              </label>

              <div className="relative">
                <MapPin
                  size={17}
                  className="absolute left-4 top-4 text-[#94a3b8]"
                />

                <textarea
                  rows={3}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`${inputClass} resize-none pl-11`}
                  placeholder="Business address"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================
            SOCIAL MEDIA
        =================================================== */}

        <section className="overflow-hidden rounded-2xl border border-[#dceff7] bg-white shadow-[0_10px_35px_rgba(15,76,110,0.06)]">

          <div className="flex items-center gap-3 border-b border-[#e8f3f8] px-5 py-4 sm:px-6">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf7fd] text-[#1687c5]">
              <Globe size={19} />
            </div>

            <div>
              <h2 className="font-black text-[#12324a]">
                Social Media
              </h2>

              <p className="text-xs text-[#64748b]">
                Add your official social media profile URLs.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-5 p-5 sm:p-6 lg:grid-cols-3">

            {/* Facebook */}
            <div>
              <label className={labelClass}>
                Facebook
              </label>

              <div className="relative">
                <Facebook
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1687c5]"
                />

                <input
                  type="url"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  placeholder="Facebook URL"
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>

            {/* Instagram */}
            <div>
              <label className={labelClass}>
                Instagram
              </label>

              <div className="relative">
                <Instagram
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1687c5]"
                />

                <input
                  type="url"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="Instagram URL"
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>

            {/* LinkedIn */}
            <div>
              <label className={labelClass}>
                LinkedIn
              </label>

              <div className="relative">
                <Linkedin
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1687c5]"
                />

                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="LinkedIn URL"
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================
            BRANDING
        =================================================== */}

        <section className="overflow-hidden rounded-2xl border border-[#dceff7] bg-white shadow-[0_10px_35px_rgba(15,76,110,0.06)]">

          <div className="flex items-center gap-3 border-b border-[#e8f3f8] px-5 py-4 sm:px-6">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf7fd] text-[#1687c5]">
              <Upload size={19} />
            </div>

            <div>
              <h2 className="font-black text-[#12324a]">
                Website Branding
              </h2>

              <p className="text-xs text-[#64748b]">
                Configure your website logo and visual identity.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_280px]">

            {/* Upload */}
            <div>

              <label className={labelClass}>
                Website Logo
              </label>

              <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#bfe4f3] bg-[#f8fcfe] px-6 py-10 text-center transition hover:border-[#1687c5] hover:bg-[#eff9fe]">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#1687c5] shadow-sm">
                  <Upload size={21} />
                </div>

                <span className="text-sm font-bold text-[#12324a]">
                  Upload website logo
                </span>

                <span className="mt-1 text-xs text-[#64748b]">
                  PNG, JPG, WEBP · Maximum 2MB
                </span>

                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleLogoChange}
                  className="hidden"
                />

              </label>

              <div className="mt-3 flex items-start gap-2 text-xs text-[#64748b]">
                <ShieldCheck
                  size={15}
                  className="mt-0.5 shrink-0 text-[#1687c5]"
                />

                Recommended: transparent logo with a clean horizontal layout.
              </div>

            </div>

            {/* Preview */}
            <div>

              <p className={labelClass}>
                Logo Preview
              </p>

              <div className="flex min-h-[170px] items-center justify-center rounded-2xl border border-[#dceff7] bg-[#f8fcfe] p-5">

                {logoPreview ? (
                  <Image
                    src={logoPreview}
                    alt="Website Logo Preview"
                    width={220}
                    height={100}
                    unoptimized
                    className="max-h-[100px] w-auto object-contain"
                  />
                ) : (
                  <div className="text-center">

                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf7fd] text-[#1687c5]">
                      <Building2 size={21} />
                    </div>

                    <p className="text-xs font-bold text-[#475569]">
                      No new logo selected
                    </p>

                    <p className="mt-1 text-[11px] text-[#94a3b8]">
                      Preview appears here
                    </p>

                  </div>
                )}

              </div>

            </div>

          </div>
        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <section className="overflow-hidden rounded-2xl border border-[#dceff7] bg-white shadow-[0_10px_35px_rgba(15,76,110,0.06)]">

          <div className="flex items-center gap-3 border-b border-[#e8f3f8] px-5 py-4 sm:px-6">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf7fd] text-[#1687c5]">
              <Settings2 size={19} />
            </div>

            <div>
              <h2 className="font-black text-[#12324a]">
                Footer Configuration
              </h2>

              <p className="text-xs text-[#64748b]">
                Control the copyright text displayed in the website footer.
              </p>
            </div>

          </div>

          <div className="p-5 sm:p-6">

            <label className={labelClass}>
              Footer Text
            </label>

            <textarea
              rows={3}
              name="footerText"
              value={formData.footerText}
              onChange={handleChange}
              maxLength={180}
              className={`${inputClass} resize-none`}
              placeholder="Enter footer copyright text"
            />

            <div className="mt-2 flex justify-end text-xs text-[#94a3b8]">
              {formData.footerText.length}/180
            </div>

          </div>
        </section>

        {/* ===================================================
            ACTION BAR
        =================================================== */}

        <section className="sticky bottom-4 z-20 rounded-2xl border border-[#dceff7] bg-white/95 p-4 shadow-[0_15px_45px_rgba(15,76,110,0.12)] backdrop-blur-md">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              {saved ? (
                <>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ecfdf3] text-[#15803d]">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#12324a]">
                      Settings saved
                    </p>

                    <p className="text-xs text-[#64748b]">
                      Your latest changes were processed successfully.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf7fd] text-[#1687c5]">
                    <ShieldCheck size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#12324a]">
                      Configuration
                    </p>

                    <p className="text-xs text-[#64748b]">
                      Review your information before saving.
                    </p>
                  </div>
                </>
              )}

            </div>

            <div className="flex flex-col gap-2 sm:flex-row">

              <button
                type="button"
                onClick={handleReset}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#dceff7] bg-white px-5 py-3 text-sm font-bold text-[#475569] transition hover:border-[#bfe4f3] hover:bg-[#f8fcfe] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <RotateCcw size={17} />
                Reset
              </button>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1687c5] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(22,135,197,0.22)] transition hover:bg-[#0b6fa8] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={17} />
                    Save Settings
                  </>
                )}
              </button>

            </div>

          </div>
        </section>

      </form>

      {/* =====================================================
          DEVELOPMENT NOTE
      ===================================================== */}

      <div className="flex items-start gap-3 rounded-2xl border border-[#bfe4f3] bg-[#eff9fe] px-5 py-4">

        <ShieldCheck
          size={19}
          className="mt-0.5 shrink-0 text-[#1687c5]"
        />

        <div>
          <p className="text-sm font-bold text-[#12324a]">
            Settings API integration
          </p>

          <p className="mt-1 text-xs leading-5 text-[#475569]">
            The current page keeps the existing frontend-only save
            behavior. Once the Settings model and API endpoints are
            added to the backend, this form can be connected without
            changing the UI structure.
          </p>
        </div>

      </div>

    </div>
  );
};

export default SettingsPage;