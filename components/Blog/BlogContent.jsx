"use client";

const BlogContent = ({ content }) => {
  if (!content) {
    return (
      <div className="rounded-2xl border border-[#dceff7] bg-[#f8fcfe] p-6 text-sm text-[#64748b]">
        Blog content is not available.
      </div>
    );
  }

  return (
    <article className="blog-content min-w-0 max-w-none">
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />

      <style jsx global>{`
        /* =====================================================
           BLOG CONTENT BASE
        ===================================================== */

        .blog-content {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          overflow-wrap: anywhere;
          word-break: normal;
          color: #475569;
          font-size: 17px;
          line-height: 1.9;
        }

        .blog-content > div {
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }

        /* =====================================================
           PARAGRAPHS
        ===================================================== */

        .blog-content p {
          margin: 0 0 1.25rem;
          color: #475569;
          font-size: 17px;
          line-height: 1.9;
        }

        .blog-content p:last-child {
          margin-bottom: 0;
        }

        /* =====================================================
           HEADINGS
        ===================================================== */

        .blog-content h1 {
          margin-top: 2.75rem;
          margin-bottom: 1rem;

          color: #12324a;

          font-size: 2.25rem;
          font-weight: 900;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .blog-content h1:first-child {
          margin-top: 0;
        }

        .blog-content h2 {
          margin-top: 2.75rem;
          margin-bottom: 1rem;

          color: #12324a;

          font-size: 1.75rem;
          font-weight: 900;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .blog-content h3 {
          margin-top: 2rem;
          margin-bottom: 0.75rem;

          color: #17384f;

          font-size: 1.4rem;
          font-weight: 800;
          line-height: 1.35;
        }

        .blog-content h4 {
          margin-top: 1.5rem;
          margin-bottom: 0.6rem;

          color: #17384f;

          font-size: 1.15rem;
          font-weight: 800;
          line-height: 1.4;
        }

        /* =====================================================
           STRONG / BOLD
        ===================================================== */

        .blog-content strong,
        .blog-content b {
          color: #12324a;
          font-weight: 800;
        }

        /* =====================================================
           LINKS
        ===================================================== */

        .blog-content a {
          color: #1687c5;
          font-weight: 600;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 3px;

          overflow-wrap: anywhere;

          transition:
            color 0.2s ease,
            text-decoration-color 0.2s ease;
        }

        .blog-content a:hover {
          color: #0b6fa8;
        }

        /* =====================================================
           LISTS
        ===================================================== */

        .blog-content ul,
        .blog-content ol {
          margin: 1.25rem 0 1.5rem;
          padding-left: 1.75rem;

          color: #475569;
        }

        .blog-content ul {
          list-style-type: disc;
        }

        .blog-content ol {
          list-style-type: decimal;
        }

        .blog-content li {
          margin: 0.55rem 0;
          padding-left: 0.35rem;

          line-height: 1.8;
        }

        .blog-content ul li::marker {
          color: #1687c5;
        }

        .blog-content ol li::marker {
          color: #1687c5;
          font-weight: 700;
        }

        /* Nested Lists */

        .blog-content ul ul,
        .blog-content ol ol,
        .blog-content ul ol,
        .blog-content ol ul {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        /* =====================================================
           BLOCKQUOTE
        ===================================================== */

        .blog-content blockquote {
          position: relative;

          margin: 2rem 0;

          border-left: 4px solid #1687c5;
          border-radius: 0 12px 12px 0;

          background: #f8fcfe;

          padding: 1.25rem 1.5rem;

          color: #475569;

          font-size: 1.05rem;
          font-style: italic;
          line-height: 1.8;
        }

        .blog-content blockquote p {
          margin: 0;
          color: #475569;
        }

        /* =====================================================
           IMAGES
        ===================================================== */

        .blog-content img {
          display: block;

          width: auto;
          max-width: 100%;
          height: auto;

          margin: 2rem auto;

          border: 1px solid #dceff7;
          border-radius: 16px;

          background: #ffffff;

          box-shadow:
            0 12px 35px rgba(15, 76, 110, 0.1);
        }

        /* =====================================================
           VIDEO / IFRAME
        ===================================================== */

        .blog-content iframe {
          display: block;

          width: 100%;
          max-width: 100%;
          min-height: 360px;

          margin: 2rem 0;

          border: 0;
          border-radius: 16px;

          background: #f8fcfe;
        }

        .blog-content video {
          display: block;

          width: 100%;
          max-width: 100%;
          height: auto;

          margin: 2rem 0;

          border-radius: 16px;
        }

        /* =====================================================
           CODE
        ===================================================== */

        .blog-content pre {
          width: 100%;
          max-width: 100%;

          margin: 1.75rem 0;

          overflow-x: auto;

          border-radius: 14px;

          background: #12324a;

          padding: 1.25rem 1.5rem;

          color: #eaf7fd;

          font-family:
            "SFMono-Regular",
            Consolas,
            "Liberation Mono",
            monospace;

          font-size: 0.875rem;
          line-height: 1.75;
        }

        .blog-content pre code {
          background: transparent;
          color: inherit;
          padding: 0;
          font-size: inherit;
        }

        .blog-content code {
          border-radius: 5px;

          background: #eff9fe;

          padding: 0.15rem 0.4rem;

          color: #0b6fa8;

          font-family:
            "SFMono-Regular",
            Consolas,
            "Liberation Mono",
            monospace;

          font-size: 0.9em;
        }

        /* =====================================================
           HORIZONTAL RULE
        ===================================================== */

        .blog-content hr {
          margin: 2.5rem 0;

          border: 0;
          border-top: 1px solid #dceff7;
        }

        /* =====================================================
           TABLES
        ===================================================== */

        .blog-content table {
          display: block;

          width: 100%;
          max-width: 100%;

          margin: 2rem 0;

          overflow-x: auto;

          border-collapse: collapse;

          font-size: 0.95rem;
        }

        .blog-content th,
        .blog-content td {
          border: 1px solid #dceff7;

          padding: 0.75rem 1rem;

          text-align: left;
          vertical-align: top;
        }

        .blog-content th {
          background: #eff9fe;
          color: #12324a;
          font-weight: 800;
        }

        .blog-content td {
          background: #ffffff;
          color: #475569;
        }

        /* =====================================================
           MARK / HIGHLIGHT
        ===================================================== */

        .blog-content mark {
          border-radius: 4px;
          background: #fff3a8;
          padding: 0.1rem 0.25rem;
        }

        /* =====================================================
           SUB / SUPER
        ===================================================== */

        .blog-content sub,
        .blog-content sup {
          font-size: 0.75em;
        }

        /* =====================================================
           FIRST ELEMENT
        ===================================================== */

        .blog-content > div > :first-child {
          margin-top: 0;
        }

        /* =====================================================
           LAST ELEMENT
        ===================================================== */

        .blog-content > div > :last-child {
          margin-bottom: 0;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 768px) {
          .blog-content {
            font-size: 16px;
            line-height: 1.8;
          }

          .blog-content p {
            font-size: 16px;
            line-height: 1.8;
          }

          .blog-content h1 {
            font-size: 1.9rem;
          }

          .blog-content h2 {
            margin-top: 2.25rem;
            font-size: 1.55rem;
          }

          .blog-content h3 {
            font-size: 1.25rem;
          }

          .blog-content blockquote {
            padding: 1rem 1.1rem;
          }

          .blog-content iframe {
            min-height: 250px;
          }
        }

        @media (max-width: 480px) {
          .blog-content {
            font-size: 15px;
          }

          .blog-content p {
            font-size: 15px;
          }

          .blog-content h1 {
            font-size: 1.65rem;
          }

          .blog-content h2 {
            font-size: 1.4rem;
          }

          .blog-content ul,
          .blog-content ol {
            padding-left: 1.35rem;
          }

          .blog-content img {
            margin: 1.5rem auto;
            border-radius: 12px;
          }
        }
      `}
      </style>
    </article>
  );
};

export default BlogContent;