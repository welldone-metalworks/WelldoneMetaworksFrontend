"use client";

import { useEffect, useState } from "react";

import {
  Pencil,
  Trash2,
  Tags,
} from "lucide-react";

import {
  getTags,
  deleteTag,
} from "@/lib/api";

import TagForm from "./components/TagForm";

const TagsPage = () => {
  const [tags, setTags] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [editData, setEditData] =
    useState(null);

  // FETCH TAGS
  const fetchTags = async () => {
    try {
      const res = await getTags();

      setTags(res.data);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  // DELETE
  const handleDelete = async (
    id
  ) => {
    const confirmDelete =
      confirm("Delete this tag?");

    if (!confirmDelete) return;

    try {
      await deleteTag(id);

      fetchTags();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-black text-gray-800">
          Tags
        </h1>

        <p className="text-gray-500 mt-2">
          Manage blog tags for filtering, SEO and related content.
        </p>
      </div>

      {/* FORM */}
      <TagForm
        refreshTags={fetchTags}
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
                  Tag
                </th>

                <th className="p-5 text-left">
                  Slug
                </th>

                <th className="p-5 text-left">
                  Created
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
                    colSpan={4}
                    className="p-10 text-center"
                  >
                    Loading...
                  </td>
                </tr>
              )}

              {!loading &&
                tags.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="p-10 text-center text-gray-500"
                    >
                      No tags found
                    </td>
                  </tr>
                )}

              {tags.map((tag) => (
                <tr
                  key={tag._id}
                  className="border-t border-gray-100 hover:bg-gray-50 transition-all duration-200"
                >
                  {/* TAG */}
                  <td className="p-5">

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] flex items-center justify-center text-white shadow-lg">

                        <Tags size={24} />
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-800">
                          {tag.name}
                        </h3>
                      </div>
                    </div>
                  </td>

                  {/* SLUG */}
                  <td className="p-5 text-gray-600">
                    {tag.slug}
                  </td>

                  {/* DATE */}
                  <td className="p-5 text-gray-600">
                    {new Date(
                      tag.createdAt
                    ).toLocaleDateString()}
                  </td>

                  {/* ACTIONS */}
                  <td className="p-5">

                    <div className="flex items-center gap-4">

                      <button
                        onClick={() =>
                          setEditData(tag)
                        }
                        className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center hover:scale-110 transition-all duration-200"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(
                            tag._id
                          )
                        }
                        className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center hover:scale-110 transition-all duration-200"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TagsPage;