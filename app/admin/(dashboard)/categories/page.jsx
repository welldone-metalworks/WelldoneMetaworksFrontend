"use client";

import { useEffect, useState } from "react";

import {
  Pencil,
  Trash2,
  FolderOpen,
} from "lucide-react";

import {
  getCategories,
  deleteCategory,
} from "@/lib/api";

import CategoryForm from "./components/CategoryForm";

const CategoriesPage = () => {
  const [categories, setCategories] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [editData, setEditData] =
    useState(null);

  // FETCH CATEGORIES
  const fetchCategories =
    async () => {
      try {
        const res =
          await getCategories();

        setCategories(res.data);

      } catch (error) {
        console.log(error);

      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchCategories();
  }, []);

  // DELETE
  const handleDelete = async (
    id
  ) => {
    const confirmDelete =
      confirm(
        "Delete this category?"
      );

    if (!confirmDelete) return;

    try {
      await deleteCategory(id);

      fetchCategories();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-black text-gray-800">
          Categories
        </h1>

        <p className="text-gray-500 mt-2">
          Manage blog categories for SEO and content organization.
        </p>
      </div>

      {/* FORM */}
      <CategoryForm
        refreshCategories={
          fetchCategories
        }
        editData={editData}
        setEditData={setEditData}
      />

      {/* TABLE */}
      <div className="bg-white rounded-[30px] shadow-xl border border-gray-100 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white">

              <tr>
                <th className="p-5 text-left">
                  Category
                </th>

                <th className="p-5 text-left">
                  Description
                </th>

                <th className="p-5 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {loading && (
                <tr>
                  <td
                    colSpan={3}
                    className="p-10 text-center"
                  >
                    Loading...
                  </td>
                </tr>
              )}

              {!loading &&
                categories.length === 0 && (
                  <tr>
                    <td
                      colSpan={3}
                      className="p-10 text-center text-gray-500"
                    >
                      No categories found
                    </td>
                  </tr>
                )}

              {categories.map(
                (category) => (
                  <tr
                    key={category._id}
                    className="border-t border-gray-100 hover:bg-gray-50 transition-all duration-200"
                  >
                    {/* CATEGORY */}
                    <td className="p-5">

                      <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] flex items-center justify-center text-white shadow-lg">

                          <FolderOpen size={24} />
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-800">
                            {category.name}
                          </h3>

                          <p className="text-sm text-gray-500 mt-1">
                            {category.slug}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* DESCRIPTION */}
                    <td className="p-5 text-gray-600 max-w-[400px]">
                      {
                        category.description
                      }
                    </td>

                    {/* ACTIONS */}
                    <td className="p-5">

                      <div className="flex items-center gap-4">

                        <button
                          onClick={() =>
                            setEditData(
                              category
                            )
                          }
                          className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center hover:scale-110 transition-all duration-200"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              category._id
                            )
                          }
                          className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center hover:scale-110 transition-all duration-200"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;