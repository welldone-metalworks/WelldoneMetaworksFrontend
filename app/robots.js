export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      sitemap: "https://welldone-metalworks.in/sitemap.xml",
    };
  }