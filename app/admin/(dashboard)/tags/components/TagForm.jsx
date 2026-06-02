"use client";

import { useState, useEffect } from "react";

import {
  createTag,
  updateTag,
} from "@/lib/api";

const TagForm = ({
  refreshTags,
  editData = null,
  setEditData,
}) => {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
    });

  // SET EDIT DATA
  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || "",
      });
    } else {
      setFormData({
        name: "",
      });
    }
  }, [editData]);

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // SUBMIT
  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (editData) {
        await updateTag(
          editData._id,
          formData
        );
      } else {
        await createTag(
          formData
        );
      }

      // RESET
      setFormData({
        name: "",
      });

      setEditData(null);

      refreshTags();

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100 space-y-6"
    >
      {/* TITLE */}
      <div>
        <label className="font-bold text-gray-700 block mb-3">
          Tag Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter tag name"
          className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          required
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition-all duration-300"
      >
        {loading
          ? "Saving..."
          : editData
          ? "Update Tag"
          : "Create Tag"}
      </button>
    </form>
  );
};

export default TagForm;