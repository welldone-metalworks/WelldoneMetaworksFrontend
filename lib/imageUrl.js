export function getImageUrl(path) {
  if (!path) {
    return "/placeholder.jpg";
  }

  /* Already a complete URL */
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  /* Convert Windows path to URL path */
  const normalizedPath = String(path)
    .replace(/\\/g, "/")
    .replace(/^\/+/, "");

  /* Image server */
  const configuredImageUrl =
    process.env.NEXT_PUBLIC_IMAGE_URL;

  const configuredApiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api";

  const apiBaseUrl = configuredApiUrl.replace(
    /\/api\/?$/,
    ""
  );

  /* If IMAGE_URL is configured */
  if (configuredImageUrl) {
    const imageBase = configuredImageUrl.replace(
      /\/+$/,
      ""
    );

    /*
     * Example:
     * IMAGE_URL=http://localhost:5000
     *
     * uploads/blogs/image.png
     *
     * becomes:
     *
     * http://localhost:5000/uploads/blogs/image.png
     */

    if (imageBase.endsWith("/uploads")) {
      const cleanPath = normalizedPath.replace(
        /^uploads\//,
        ""
      );

      return `${imageBase}/${cleanPath}`;
    }

    return `${imageBase}/${normalizedPath}`;
  }

  /* Default */
  if (normalizedPath.startsWith("uploads/")) {
    return `${apiBaseUrl}/${normalizedPath}`;
  }

  return `${apiBaseUrl}/uploads/${normalizedPath}`;
}