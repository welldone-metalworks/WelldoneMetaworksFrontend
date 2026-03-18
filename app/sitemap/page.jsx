export default function SitemapPage() {
    const sections = [
      {
        title: "Main Pages",
        links: [
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
          { name: "Services", url: "/services" },
          { name: "Gallery", url: "/gallery" },
          { name: "Enquiry", url: "/enquiry" },
          { name: "Contact", url: "/contact" },
        ],
      },
      {
        title: "Our Services",
        links: [
          { name: "Railings", url: "/services/railings" },
          { name: "Gates", url: "/services/gates" },
          { name: "Sheds", url: "/services/sheds" },
          { name: "Doors", url: "/services/doors" },
          { name: "Gazebo", url: "/services/gazebo" },
          { name: "Custom Fabrication", url: "/services/custom-metal-fabrication" },
        ],
      },
      {
        title: "Legal",
        links: [
          { name: "Privacy Policy", url: "/privacy-policy" },
          { name: "Terms & Conditions", url: "/terms-and-conditions" },
        ],
      },
    ];
  
    return (
      <div className="bg-[#f9fafb] text-gray-800">
  
        {/* ===== HERO (FIXED HEADING ISSUE) ===== */}
        <section className="pt-32 pb-12 px-6 bg-gradient-to-r from-[#981d13]/10 to-[#cd2b14]/10 text-center">
          <div className="max-w-4xl mx-auto">
  
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Website{" "}
              <span className="bg-gradient-to-r from-[#981d13] to-[#cd2b14] bg-clip-text text-transparent">
                Sitemap
              </span>
            </h1>
  
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore all pages of <span className="font-semibold text-gray-900">Welldone Metalworks</span> 
              and navigate through our services, projects, and important information easily.
            </p>
  
          </div>
        </section>
  
        {/* ===== CONTENT ===== */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
  
            {sections.map((section, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition duration-300"
              >
  
                <h2 className="text-lg font-semibold mb-4 text-gray-900">
                  {section.title}
                </h2>
  
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 group transition"
                      >
                        <span className="text-sm font-medium group-hover:text-[#cd2b14]">
                          {link.name}
                        </span>
  
                        <span className="text-[#cd2b14] opacity-0 group-hover:opacity-100 transition">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
  
              </div>
            ))}
  
          </div>
        </section>
  
        {/* ===== CTA (PREMIUM TOUCH) ===== */}
        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto">
  
            <div className="bg-gradient-to-r from-[#981d13] to-[#cd2b14] text-white rounded-2xl p-8 text-center shadow-xl">
  
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Need Custom Metal Fabrication?
              </h2>
  
              <p className="text-white/90 mb-5 text-sm md:text-base">
                Get high-quality railings, gates, sheds, doors, and custom metal solutions built with precision.
              </p>
  
              <div className="flex justify-center gap-3 flex-wrap">
                <a
                  href="tel:+919649957698"
                  className="bg-white text-[#981d13] font-semibold px-5 py-2 rounded-full hover:scale-105 transition"
                >
                  Call Now
                </a>
  
                <a
                  href="/contact"
                  className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-[#981d13] transition"
                >
                  Contact Us
                </a>
              </div>
  
            </div>
  
          </div>
        </section>
  
      </div>
    );
  }