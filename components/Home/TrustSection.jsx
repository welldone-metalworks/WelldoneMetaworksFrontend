"use client";

import { CheckCircle, MapPin, Briefcase, Star } from "lucide-react";

export default function TrustSection() {
  const stats = [
    {
      icon: <Briefcase className="text-red-500 w-8 h-8" />,
      title: "50+ Projects Completed",
      desc: "Successfully delivered fabrication projects",
    },
    {
      icon: <CheckCircle className="text-red-500 w-8 h-8" />,
      title: "5+ Years Experience",
      desc: "Expertise in metal & steel fabrication",
    },
    {
      icon: <MapPin className="text-red-500 w-8 h-8" />,
      title: "Serving Ahmedabad & Gujarat",
      desc: "Local trusted fabrication partner",
    },
    {
      icon: <Star className="text-red-500 w-8 h-8" />,
      title: "Trusted by Clients",
      desc: "High-quality work & customer satisfaction",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Why Clients Trust <span className="text-red-500">Welldone Metalworks</span>
        </h2>
        <p className="text-gray-500 mt-2 mb-10">
          Delivering durable, high-quality fabrication solutions with precision and trust.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-70 hover:bg-red-50 transition-all duration-300 rounded-xl p-6 shadow-md hover:shadow-xl flex flex-col items-center text-center"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}