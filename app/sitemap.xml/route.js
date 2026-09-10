export async function GET() {
  const baseUrl = "https://welldone-metalworks.in";

  const urls = [
    // ========================================================
    // MAIN PAGES
    // ========================================================

    "",
    "/about",
    "/services",
    "/gallery",
    "/enquiry",
    "/contact",

    // ========================================================
    // MAIN SERVICES
    // ========================================================

    "/services/structural-fabrication",
    "/services/industrial-fabrication",
    "/services/custom-metal-fabrication",
    "/services/gates-railings",
    "/services/staircase-fabrication",
    "/services/sheds-canopies",
    "/services/gazebos-outdoor",
    "/services/welding-installation",

    // ========================================================
    // STRUCTURAL FABRICATION
    // ========================================================

    "/services/structural-fabrication/structural-frames",
    "/services/structural-fabrication/support-structures",
    "/services/structural-fabrication/heavy-fabrication",
    "/services/structural-fabrication/custom-structures",

    // ========================================================
    // INDUSTRIAL FABRICATION
    // ========================================================

    "/services/industrial-fabrication/industrial-frames",
    "/services/industrial-fabrication/machine-structures",
    "/services/industrial-fabrication/platforms",
    "/services/industrial-fabrication/industrial-supports",

    // ========================================================
    // CUSTOM METAL FABRICATION
    // ========================================================

    "/services/custom-metal-fabrication/custom-fabrication",
    "/services/custom-metal-fabrication/precision-fabrication",
    "/services/custom-metal-fabrication/sheet-fabrication",
    "/services/custom-metal-fabrication/project-fabrication",

    // ========================================================
    // GATES & RAILINGS
    // ========================================================

    "/services/gates-railings/main-gates",
    "/services/gates-railings/entrance-gates",
    "/services/gates-railings/balcony-railings",
    "/services/gates-railings/staircase-railings",

    // ========================================================
    // STAIRCASE FABRICATION
    // ========================================================

    "/services/staircase-fabrication/straight-staircases",
    "/services/staircase-fabrication/spiral-staircases",
    "/services/staircase-fabrication/industrial-stairs",
    "/services/staircase-fabrication/fire-escape-stairs",

    // ========================================================
    // SHEDS & CANOPIES
    // ========================================================

    "/services/sheds-canopies/industrial-sheds",
    "/services/sheds-canopies/warehouse-sheds",
    "/services/sheds-canopies/parking-sheds",
    "/services/sheds-canopies/entrance-canopies",

    // ========================================================
    // GAZEBOS & OUTDOOR
    // ========================================================

    "/services/gazebos-outdoor/garden-gazebos",
    "/services/gazebos-outdoor/outdoor-structures",
    "/services/gazebos-outdoor/seating-structures",
    "/services/gazebos-outdoor/custom-gazebos",

    // ========================================================
    // WELDING & INSTALLATION
    // ========================================================

    "/services/welding-installation/mig-welding",
    "/services/welding-installation/arc-welding",
    "/services/welding-installation/on-site-welding",
    "/services/welding-installation/installation",

    // ========================================================
    // LEGAL
    // ========================================================

    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${baseUrl}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === "" ? "1.0" : url.startsWith("/services") ? "0.8" : "0.6"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}