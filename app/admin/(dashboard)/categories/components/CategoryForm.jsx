"use client";

import { useState } from "react";

import {
  createCategory,
  updateCategory,
} from "@/lib/api";

const CategoryForm = ({
  refreshCategories,
  editData = null,
  setEditData,
}) => {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: editData?.name || "",
      description:
        editData?.description || "",
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

  // SUBMIT
  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (editData) {
        await updateCategory(
          editData._id,
          formData
        );
      } else {
        await createCategory(
          formData
        );
      }

      setFormData({
        name: "",
        description: "",
      });

      setEditData(null);

      refreshCategories();

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
          Category Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter category name"
          className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
          required
        />
      </div>

      {/* DESCRIPTION */}
      <div>
        <label className="font-bold text-gray-700 block mb-3">
          Description
        </label>

        <textarea
          rows={4}
          name="description"
          value={
            formData.description
          }
          onChange={handleChange}
          placeholder="Enter category description"
          className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#b72d2c]"
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
          ? "Update Category"
          : "Create Category"}
      </button>
    </form>
  );
};

export default CategoryForm;