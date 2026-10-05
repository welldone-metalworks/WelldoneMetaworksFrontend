"use client";

import {
  Facebook,
  Linkedin,
  Link2,
  Check,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function ShareButtons({ blog }) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const encodedUrl =
    encodeURIComponent(currentUrl);

  const encodedTitle =
    encodeURIComponent(blog?.title || "");

  const facebookShare =
    `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  const linkedinShare =
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const whatsappShare =
    `https://wa.me/?text=${encodeURIComponent(
      `${blog?.title || "Read this article"} ${currentUrl}`
    )}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        currentUrl
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(
        "Copy link failed:",
        error
      );
    }
  };

  return (
    <div className="border-t border-[#dceff7] pt-7">

      <div className="mb-4">

        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1687c5]">
          Share
        </p>

        <h3 className="mt-1 text-lg font-black text-[#12324a]">
          Share This Article
        </h3>

      </div>

      <div className="flex flex-wrap gap-2.5">

        {/* Facebook */}

        <a
          href={facebookShare}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dceff7] bg-white text-[#475569] transition-all hover:border-[#1687c5] hover:bg-[#eff9fe] hover:text-[#1687c5]"
        >
          <Facebook size={17} />
        </a>

        {/* LinkedIn */}

        <a
          href={linkedinShare}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dceff7] bg-white text-[#475569] transition-all hover:border-[#1687c5] hover:bg-[#eff9fe] hover:text-[#1687c5]"
        >
          <Linkedin size={17} />
        </a>

        {/* WhatsApp */}

        <a
          href={whatsappShare}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dceff7] bg-white text-[#475569] transition-all hover:border-[#1687c5] hover:bg-[#eff9fe] hover:text-[#1687c5]"
        >
          <span className="text-[11px] font-black">
            WA
          </span>
        </a>

        {/* Copy */}

        <button
          type="button"
          onClick={copyLink}
          aria-label="Copy article link"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dceff7] bg-white text-[#475569] transition-all hover:border-[#1687c5] hover:bg-[#eff9fe] hover:text-[#1687c5]"
        >
          {copied ? (
            <Check
              size={17}
              className="text-[#15803d]"
            />
          ) : (
            <Link2 size={17} />
          )}
        </button>

      </div>

      {copied && (
        <p className="mt-2 text-xs font-semibold text-[#15803d]">
          Article link copied.
        </p>
      )}

    </div>
  );
}