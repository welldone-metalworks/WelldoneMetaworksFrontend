"use client";

import { motion } from "framer-motion";
import { FaCogs, FaUsers, FaClock, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaCogs size={26} />,
    title: "Expert Craftsmanship",
    desc: "Precision metal fabrication delivered by experienced professionals.",
  },
  {
    icon: <FaUsers size={26} />,
    title: "Customer First",
    desc: "Every project is customized according to client needs.",
  },
  {
    icon: <FaClock size={26} />,
    title: "Fast Delivery",
    desc: "Efficient workflow ensures projects are completed on schedule.",
  },
  {
    icon: <FaShieldAlt size={26} />,
    title: "Quality Assurance",
    desc: "We use premium materials and strict quality control processes.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]">
              Welldone Metalworks
            </span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trusted fabrication experts delivering durable, stylish,
            and high-quality metal structures.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-center">

          {/* Left Features */}
          <div className="flex flex-col gap-8">

            {features.slice(0,2).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              >

                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg text-white"
                  style={{
                    background:
                      "linear-gradient(135deg,#981d13,#b72d2c,#cd2b14)",
                  }}
                >
                  {feature.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {feature.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

          {/* Center Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white rounded-3xl p-10 text-center shadow-2xl"
          >

            <h3 className="text-2xl font-bold mb-4">
              Trusted Fabrication Partner
            </h3>

            <p className="text-gray-100 text-sm leading-relaxed">
              At Welldone Metalworks, we combine modern engineering with
              expert craftsmanship to deliver metal fabrication solutions
              that are strong, reliable, and visually impressive.
            </p>

          </motion.div>

          {/* Right Features */}
          <div className="flex flex-col gap-8">

            {features.slice(2).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: -6 }}
                className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              >

                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg text-white"
                  style={{
                    background:
                      "linear-gradient(135deg,#981d13,#b72d2c,#cd2b14)",
                  }}
                >
                  {feature.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {feature.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}