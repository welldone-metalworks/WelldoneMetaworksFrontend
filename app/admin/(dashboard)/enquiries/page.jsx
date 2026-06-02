"use client";

import { useEffect, useState } from "react";

import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Trash2,
  CalendarDays,
} from "lucide-react";

import api from "@/lib/api";

const EnquiriesPage = () => {
  const [enquiries, setEnquiries] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH ENQUIRIES
  const fetchEnquiries =
    async () => {
      try {
        const res = await api.get(
          "/contact/get-enquiries"
        );

        setEnquiries(res.data);

      } catch (error) {
        console.log(error);

      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // DELETE ENQUIRY
  const handleDelete = async (
    id
  ) => {
    const confirmDelete =
      confirm(
        "Delete this enquiry?"
      );

    if (!confirmDelete) return;

    try {
      await api.delete(
        `/contact/delete-enquiry/${id}`
      );

      fetchEnquiries();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-black text-gray-800">
          Enquiries
        </h1>

        <p className="text-gray-500 mt-2">
          Manage customer contact enquiries and leads from your website.
        </p>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[30px] shadow-xl border border-gray-100 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white">

              <tr>
                <th className="p-5 text-left">
                  Customer
                </th>

                <th className="p-5 text-left">
                  Contact
                </th>

                <th className="p-5 text-left">
                  Message
                </th>

                <th className="p-5 text-left">
                  Date
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
                    colSpan={5}
                    className="p-10 text-center"
                  >
                    Loading...
                  </td>
                </tr>
              )}

              {!loading &&
                enquiries.length ===
                  0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="p-10 text-center text-gray-500"
                    >
                      No enquiries found
                    </td>
                  </tr>
                )}

              {enquiries.map(
                (enquiry) => (
                  <tr
                    key={enquiry._id}
                    className="border-t border-gray-100 hover:bg-gray-50 transition-all duration-200"
                  >
                    {/* CUSTOMER */}
                    <td className="p-5">

                      <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] flex items-center justify-center text-white shadow-lg">

                          <User size={24} />
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-800">
                            {
                              enquiry.name
                            }
                          </h3>

                          <p className="text-sm text-gray-500 mt-1">
                            Customer Lead
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* CONTACT */}
                    <td className="p-5">

                      <div className="space-y-3">

                        <div className="flex items-center gap-2 text-gray-700">

                          <Mail size={18} />

                          <span>
                            {
                              enquiry.email
                            }
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-700">

                          <Phone size={18} />

                          <span>
                            {
                              enquiry.phone
                            }
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* MESSAGE */}
                    <td className="p-5 max-w-[400px]">

                      <div className="flex gap-3">

                        <MessageSquare
                          size={18}
                          className="text-[#b72d2c] mt-1"
                        />

                        <p className="text-gray-600 leading-relaxed">
                          {
                            enquiry.message
                          }
                        </p>
                      </div>
                    </td>

                    {/* DATE */}
                    <td className="p-5">

                      <div className="flex items-center gap-2 text-gray-600">

                        <CalendarDays size={18} />

                        {new Date(
                          enquiry.createdAt
                        ).toLocaleDateString()}
                      </div>
                    </td>

                    {/* ACTIONS */}
                    <td className="p-5">

                      <button
                        onClick={() =>
                          handleDelete(
                            enquiry._id
                          )
                        }
                        className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center hover:scale-110 transition-all duration-200"
                      >
                        <Trash2 size={18} />
                      </button>
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

export default EnquiriesPage;