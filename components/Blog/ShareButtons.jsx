"use client";

import { useEffect, useState } from "react";

import {
  Facebook,
  Twitter,
  Linkedin,
  Link2,
} from "lucide-react";

export default function ShareButtons({
  blog,
}) {
  //
  // SAFE CLIENT URL
  //
  const [currentUrl, setCurrentUrl] =
    useState("");

  useEffect(() => {
    setCurrentUrl(
      window.location.href
    );
  }, []);

  //
  // ENCODED VALUES
  //
  const encodedUrl =
    encodeURIComponent(
      currentUrl
    );

  const encodedTitle =
    encodeURIComponent(
      blog?.title || ""
    );

  //
  // SHARE LINKS
  //
  const facebookShare =
    `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  const twitterShare =
    `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;

  const linkedinShare =
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  //
  // COPY LINK
  //
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        currentUrl
      );

      alert(
        "Blog link copied successfully!"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* TITLE */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#981d13] to-[#cd2b14]" />

        <h3 className="text-2xl font-black text-gray-900">
          Share This Article
        </h3>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap items-center gap-4">
        {/* FACEBOOK */}
        <a
          href={facebookShare}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-14 h-14 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        >
          <Facebook
            size={22}
            className="group-hover:rotate-12 transition-all"
          />
        </a>

        {/* TWITTER */}
        <a
          href={twitterShare}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        >
          <Twitter
            size={22}
            className="group-hover:rotate-12 transition-all"
          />
        </a>

        {/* LINKEDIN */}
        <a
          href={linkedinShare}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-14 h-14 rounded-2xl bg-[#0077B5] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        >
          <Linkedin
            size={22}
            className="group-hover:rotate-12 transition-all"
          />
        </a>

        {/* COPY LINK */}
        <button
          onClick={copyLink}
          className="group w-14 h-14 rounded-2xl bg-gray-100 text-gray-700 flex items-center justify-center shadow-lg hover:bg-[#981d13] hover:text-white hover:scale-110 transition-all duration-300"
        >
          <Link2
            size={22}
            className="group-hover:rotate-12 transition-all"
          />
        </button>
      </div>
    </div>
  );
}