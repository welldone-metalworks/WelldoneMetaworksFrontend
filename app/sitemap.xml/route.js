export async function GET() {
    const baseUrl = "https://welldone-metalworks.in";
  
    const urls = [
      "",
      "/about",
      "/services",
      "/services/railings",
      "/services/gates",
      "/services/sheds",
      "/services/doors",
      "/services/gazebo",
      "/services/custom-metal-fabrication",
      "/gallery",
      "/enquiry",
      "/contact",
      "/privacy-policy",
      "/terms-and-conditions",
    ];
  
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${baseUrl}${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${url === "" ? "1.0" : "0.7"}</priority>
        </url>`
        )
        .join("")}
    </urlset>`;
  
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }