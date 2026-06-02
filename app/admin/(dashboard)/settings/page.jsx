"use client";

import { useState } from "react";

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
} from "lucide-react";

const SettingsPage = () => {
  const [loading, setLoading] =
    useState(false);

  const [logoPreview, setLogoPreview] =
    useState(null);

  const [formData, setFormData] =
    useState({
      companyName:
        "Welldone Metalworks",

      email:
        "info@welldone-metalworks.in",

      phone:
        "+91 9876543210",

      address:
        "Ahmedabad, Gujarat, India",

      website:
        "https://welldone-metalworks.in",

      facebook: "",

      instagram: "",

      linkedin: "",

      footerText:
        "© 2026 Welldone Metalworks. All rights reserved.",

      logo: null,
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

  // HANDLE LOGO
  const handleLogoChange = (
    e
  ) => {
    const file =
      e.target.files[0];

    if (file) {
      setFormData((prev) => ({
        ...prev,
        logo: file,
      }));

      setLogoPreview(
        URL.createObjectURL(file)
      );
    }
  };

  // SAVE SETTINGS
  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log(formData);

      alert(
        "Settings saved successfully"
      );

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-black text-gray-800">
          Website Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage company information, branding and website settings.
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100 space-y-8"
      >

        {/* COMPANY NAME */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

            <Building2
              size={18}
              className="text-[#b72d2c]"
            />

            Company Name
          </label>

          <input
            type="text"
            name="companyName"
            value={
              formData.companyName
            }
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

            <Mail
              size={18}
              className="text-[#b72d2c]"
            />

            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

            <Phone
              size={18}
              className="text-[#b72d2c]"
            />

            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          />
        </div>

        {/* ADDRESS */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

            <MapPin
              size={18}
              className="text-[#b72d2c]"
            />

            Address
          </label>

          <textarea
            rows={4}
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          />
        </div>

        {/* WEBSITE */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

            <Globe
              size={18}
              className="text-[#b72d2c]"
            />

            Website URL
          </label>

          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          />
        </div>

        {/* SOCIAL LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* FACEBOOK */}
          <div>
            <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

              <Facebook
                size={18}
                className="text-[#b72d2c]"
              />

              Facebook
            </label>

            <input
              type="text"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              placeholder="Facebook URL"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
            />
          </div>

          {/* INSTAGRAM */}
          <div>
            <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

              <Instagram
                size={18}
                className="text-[#b72d2c]"
              />

              Instagram
            </label>

            <input
              type="text"
              name="instagram"
              value={
                formData.instagram
              }
              onChange={handleChange}
              placeholder="Instagram URL"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
            />
          </div>

          {/* LINKEDIN */}
          <div>
            <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

              <Linkedin
                size={18}
                className="text-[#b72d2c]"
              />

              LinkedIn
            </label>

            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn URL"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
            />
          </div>
        </div>

        {/* FOOTER TEXT */}
        <div>
          <label className="font-bold text-gray-700 block mb-3">
            Footer Text
          </label>

          <textarea
            rows={3}
            name="footerText"
            value={
              formData.footerText
            }
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          />
        </div>

        {/* LOGO */}
        <div>
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3">

            <Upload
              size={18}
              className="text-[#b72d2c]"
            />

            Website Logo
          </label>

          <input
            type="file"
            onChange={
              handleLogoChange
            }
            className="w-full border border-gray-200 rounded-2xl px-5 py-4"
          />

          {/* PREVIEW */}
          {logoPreview && (
            <div className="mt-6">

              <Image
                src={logoPreview}
                alt="Logo Preview"
                width={180}
                height={80}
                className="rounded-2xl border border-gray-200 p-4 bg-white"
              />
            </div>
          )}
        </div>

        {/* SAVE BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition-all duration-300"
        >
          <Save size={20} />

          {loading
            ? "Saving..."
            : "Save Settings"}
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;