"use client";

import dynamic from "next/dynamic";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code2,
  Eraser,
  FileCode2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Highlighter,
  Image as ImageIcon,
  Italic,
  Link2,
  List,
  ListOrdered,
  Maximize2,
  Minus,
  Palette,
  Quote,
  Redo2,
  Strikethrough,
  Subscript,
  Superscript,
  Type,
  Underline,
  Undo2,
  Video,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const ReactQuill = dynamic(
  () => import("react-quill-new"),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[480px] items-center justify-center bg-[#f8fcfe] text-sm font-semibold text-[#94a3b8]">
        Loading editor...
      </div>
    ),
  }
);

/* =========================================================
   TOOLBAR CONFIGURATION
========================================================= */

const modules = {
  toolbar: {
    container: "#welldone-quill-toolbar",
  },

  history: {
    delay: 1000,
    maxStack: 100,
    userOnly: true,
  },
};

/* =========================================================
   FORMATS
========================================================= */

const formats = [
  "header",

  "bold",
  "italic",
  "underline",
  "strike",

  "color",
  "background",

  "script",

  "list",
  "bullet",
  "indent",

  "blockquote",
  "code-block",

  "align",

  "link",
  "image",
  "video",

  "clean",
];

/* =========================================================
   COMPONENT
========================================================= */

const Editor = ({
  value = "",
  onChange,
}) => {
  const quillRef = useRef(null);

  const [isFullscreen, setIsFullscreen] =
    useState(false);

  const [showSource, setShowSource] =
    useState(false);

  const [sourceValue, setSourceValue] =
    useState(value || "");

  const [wordCount, setWordCount] =
    useState(0);

  const [characterCount, setCharacterCount] =
    useState(0);

  /* =======================================================
     CONTENT STATS
  ======================================================= */

  useEffect(() => {
    const html = value || "";

    const temporaryElement =
      document.createElement("div");

    temporaryElement.innerHTML = html;

    const text =
      temporaryElement.textContent ||
      temporaryElement.innerText ||
      "";

    const cleanText = text
      .replace(/\s+/g, " ")
      .trim();

    const words = cleanText
      ? cleanText.split(" ").length
      : 0;

    setWordCount(words);
    setCharacterCount(cleanText.length);

    setSourceValue(html);
  }, [value]);

  /* =======================================================
     READING TIME
  ======================================================= */

  const readingTime = useMemo(() => {
    const wordsPerMinute = 200;

    return Math.max(
      1,
      Math.ceil(wordCount / wordsPerMinute)
    );
  }, [wordCount]);

  /* =======================================================
     EDITOR INSTANCE
  ======================================================= */

  const getQuill = () => {
    return quillRef.current?.getEditor?.();
  };

  /* =======================================================
     FORMAT ACTION
  ======================================================= */

  const format = (
    name,
    value = true
  ) => {
    const quill = getQuill();

    if (!quill) return;

    quill.focus();

    const range =
      quill.getSelection(true);

    if (!range) return;

    quill.format(
      name,
      value,
      "user"
    );
  };

  /* =======================================================
     INSERT DIVIDER
  ======================================================= */

  const insertDivider = () => {
    const quill = getQuill();

    if (!quill) return;

    quill.focus();

    const range =
      quill.getSelection(true);

    if (!range) return;

    quill.insertEmbed(
      range.index,
      "divider",
      true,
      "user"
    );

    quill.setSelection(
      range.index + 1,
      0
    );
  };

  /* =======================================================
     SOURCE MODE
  ======================================================= */

  const toggleSourceMode = () => {
    if (!showSource) {
      setSourceValue(value || "");
      setShowSource(true);
      return;
    }

    onChange(sourceValue);
    setShowSource(false);
  };

  /* =======================================================
     UNDO / REDO
  ======================================================= */

  const undo = () => {
    const quill = getQuill();

    if (!quill) return;

    quill.history.undo();
  };

  const redo = () => {
    const quill = getQuill();

    if (!quill) return;

    quill.history.redo();
  };

  /* =======================================================
     IMAGE INSERT
  ======================================================= */

  const insertImage = () => {
    const quill = getQuill();

    if (!quill) return;

    const url = window.prompt(
      "Enter image URL"
    );

    if (!url) return;

    quill.focus();

    const range =
      quill.getSelection(true);

    if (!range) return;

    quill.insertEmbed(
      range.index,
      "image",
      url,
      "user"
    );

    quill.setSelection(
      range.index + 1,
      0
    );
  };

  /* =======================================================
     VIDEO INSERT
  ======================================================= */

  const insertVideo = () => {
    const quill = getQuill();

    if (!quill) return;

    const url = window.prompt(
      "Enter YouTube / video URL"
    );

    if (!url) return;

    quill.focus();

    const range =
      quill.getSelection(true);

    if (!range) return;

    quill.insertEmbed(
      range.index,
      "video",
      url,
      "user"
    );

    quill.setSelection(
      range.index + 1,
      0
    );
  };

  /* =======================================================
     LINK INSERT
  ======================================================= */

  const insertLink = () => {
    const quill = getQuill();

    if (!quill) return;

    quill.focus();

    const range =
      quill.getSelection(true);

    if (!range) return;

    const url = window.prompt(
      "Enter URL"
    );

    if (!url) return;

    quill.format(
      "link",
      url,
      "user"
    );
  };

  return (
    <div
      className={[
        "blog-editor overflow-hidden border border-[#dceff7] bg-white shadow-[0_8px_30px_rgba(15,76,110,0.05)]",
        isFullscreen
          ? "fixed inset-0 z-[9999] rounded-none"
          : "",
      ].join(" ")}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-3 border-b border-[#dceff7] bg-[#f8fcfe] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf7fd] text-[#1687c5]">
            <Type size={17} />
          </div>

          <div>
            <p className="text-xs font-black text-[#12324a]">
              Rich Text Editor
            </p>

            <p className="text-[10px] text-[#94a3b8]">
              Create and format your article
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Stats */}
          <div className="hidden items-center gap-3 rounded-lg border border-[#dceff7] bg-white px-3 py-2 text-[10px] font-semibold text-[#64748b] md:flex">
            <span>
              {wordCount} words
            </span>

            <span className="text-[#dceff7]">
              |
            </span>

            <span>
              {characterCount} characters
            </span>

            <span className="text-[#dceff7]">
              |
            </span>

            <span>
              {readingTime} min read
            </span>
          </div>

          {/* Source */}
          <button
            type="button"
            onClick={toggleSourceMode}
            className={`flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-[10px] font-bold transition ${
              showSource
                ? "border-[#1687c5] bg-[#1687c5] text-white"
                : "border-[#dceff7] bg-white text-[#64748b] hover:border-[#1687c5] hover:text-[#1687c5]"
            }`}
          >
            <FileCode2 size={13} />

            HTML
          </button>

          {/* Fullscreen */}
          <button
            type="button"
            onClick={() =>
              setIsFullscreen(
                (current) => !current
              )
            }
            className="flex h-8 items-center gap-1.5 rounded-lg border border-[#dceff7] bg-white px-2.5 text-[10px] font-bold text-[#64748b] transition hover:border-[#1687c5] hover:text-[#1687c5]"
          >
            <Maximize2 size={13} />

            {isFullscreen
              ? "Exit"
              : "Fullscreen"}
          </button>
        </div>
      </div>

      {/* =====================================================
          SOURCE EDITOR
      ===================================================== */}

      {showSource ? (
        <div
          className={
            isFullscreen
              ? "h-[calc(100vh-132px)]"
              : "min-h-[480px]"
          }
        >
          <textarea
            value={sourceValue}
            onChange={(event) => {
              setSourceValue(
                event.target.value
              );

              onChange(
                event.target.value
              );
            }}
            spellCheck={false}
            className="h-full min-h-[480px] w-full resize-none border-0 bg-[#0f2535] p-6 font-mono text-sm leading-7 text-[#d8edf7] outline-none"
            placeholder="Write or edit HTML..."
          />
        </div>
      ) : (
        <>
          {/* =================================================
              ADVANCED TOOLBAR
          ================================================= */}

          <div
            id="welldone-quill-toolbar"
            className="border-b border-[#dceff7] bg-white"
          >
            {/* Row 1 */}
            <div className="flex flex-wrap items-center gap-1 border-b border-[#edf5f8] px-3 py-2">
              {/* Undo */}
              <ToolbarButton
                title="Undo"
                onClick={undo}
              >
                <Undo2 size={15} />
              </ToolbarButton>

              {/* Redo */}
              <ToolbarButton
                title="Redo"
                onClick={redo}
              >
                <Redo2 size={15} />
              </ToolbarButton>

              <ToolbarDivider />

              {/* Headings */}
              <ToolbarButton
                title="Heading 1"
                onClick={() =>
                  format("header", 1)
                }
              >
                <Heading1 size={15} />
              </ToolbarButton>

              <ToolbarButton
                title="Heading 2"
                onClick={() =>
                  format("header", 2)
                }
              >
                <Heading2 size={15} />
              </ToolbarButton>

              <ToolbarButton
                title="Heading 3"
                onClick={() =>
                  format("header", 3)
                }
              >
                <Heading3 size={15} />
              </ToolbarButton>

              <ToolbarButton
                title="Heading 4"
                onClick={() =>
                  format("header", 4)
                }
              >
                <Heading4 size={15} />
              </ToolbarButton>

              <ToolbarDivider />

              {/* Text */}
              <ToolbarButton
                title="Bold"
                onClick={() =>
                  format("bold")
                }
              >
                <Bold size={15} />
              </ToolbarButton>

              <ToolbarButton
                title="Italic"
                onClick={() =>
                  format("italic")
                }
              >
                <Italic size={15} />
              </ToolbarButton>

              <ToolbarButton
                title="Underline"
                onClick={() =>
                  format("underline")
                }
              >
                <Underline size={15} />
              </ToolbarButton>

              <ToolbarButton
                title="Strikethrough"
                onClick={() =>
                  format("strike")
                }
              >
                <Strikethrough size={15} />
              </ToolbarButton>

              <ToolbarDivider />

              {/* Lists */}
              <ToolbarButton
                title="Bullet List"
                onClick={() =>
                  format(
                    "list",
                    "bullet"
                  )
                }
              >
                <List size={15} />
              </ToolbarButton>

              <ToolbarButton
                title="Numbered List"
                onClick={() =>
                  format(
                    "list",
                    "ordered"
                  )
                }
              >
                <ListOrdered size={15} />
              </ToolbarButton>

              <ToolbarDivider />

              {/* Quote */}
              <ToolbarButton
                title="Blockquote"
                onClick={() =>
                  format(
                    "blockquote"
                  )
                }
              >
                <Quote size={15} />
              </ToolbarButton>

              {/* Code */}
              <ToolbarButton
                title="Code Block"
                onClick={() =>
                  format(
                    "code-block"
                  )
                }
              >
                <Code2 size={15} />
              </ToolbarButton>

              {/* Inline code */}
              <ToolbarButton
                title="Inline Code"
                onClick={() =>
                  format(
                    "code"
                  )
                }
              >
                <FileCode2 size={15} />
              </ToolbarButton>

              <ToolbarDivider />

              {/* Link */}
              <ToolbarButton
                title="Insert Link"
                onClick={insertLink}
              >
                <Link2 size={15} />
              </ToolbarButton>

              {/* Image */}
              <ToolbarButton
                title="Insert Image URL"
                onClick={insertImage}
              >
                <ImageIcon size={15} />
              </ToolbarButton>

              {/* Video */}
              <ToolbarButton
                title="Insert Video"
                onClick={insertVideo}
              >
                <Video size={15} />
              </ToolbarButton>
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap items-center gap-1 px-3 py-2">
              {/* Alignment */}
              <ToolbarButton
                title="Align Left"
                onClick={() =>
                  format(
                    "align",
                    false
                  )
                }
              >
                <AlignLeft size={15} />
              </ToolbarButton>

              <ToolbarButton
                title="Align Center"
                onClick={() =>
                  format(
                    "align",
                    "center"
                  )
                }
              >
                <AlignCenter size={15} />
              </ToolbarButton>

              <ToolbarButton
                title="Align Right"
                onClick={() =>
                  format(
                    "align",
                    "right"
                  )
                }
              >
                <AlignRight size={15} />
              </ToolbarButton>

              <ToolbarButton
                title="Justify"
                onClick={() =>
                  format(
                    "align",
                    "justify"
                  )
                }
              >
                <AlignJustify size={15} />
              </ToolbarButton>

              <ToolbarDivider />

              {/* Superscript */}
              <ToolbarButton
                title="Superscript"
                onClick={() =>
                  format(
                    "script",
                    "super"
                  )
                }
              >
                <Superscript size={15} />
              </ToolbarButton>

              {/* Subscript */}
              <ToolbarButton
                title="Subscript"
                onClick={() =>
                  format(
                    "script",
                    "sub"
                  )
                }
              >
                <Subscript size={15} />
              </ToolbarButton>

              <ToolbarDivider />

              {/* Color */}
              <label
                title="Text Color"
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border border-transparent text-[#64748b] transition hover:border-[#dceff7] hover:bg-[#f8fcfe] hover:text-[#1687c5]"
              >
                <Palette size={15} />

                <input
                  type="color"
                  className="absolute h-0 w-0 opacity-0"
                  onChange={(event) =>
                    format(
                      "color",
                      event.target.value
                    )
                  }
                />
              </label>

              {/* Highlight */}
              <label
                title="Text Highlight"
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border border-transparent text-[#64748b] transition hover:border-[#dceff7] hover:bg-[#f8fcfe] hover:text-[#1687c5]"
              >
                <Highlighter size={15} />

                <input
                  type="color"
                  defaultValue="#fff2a8"
                  className="absolute h-0 w-0 opacity-0"
                  onChange={(event) =>
                    format(
                      "background",
                      event.target.value
                    )
                  }
                />
              </label>

              <ToolbarDivider />

              {/* Divider */}
              <ToolbarButton
                title="Horizontal Divider"
                onClick={
                  insertDivider
                }
              >
                <Minus size={15} />
              </ToolbarButton>

              {/* Clear */}
              <ToolbarButton
                title="Clear Formatting"
                onClick={() =>
                  format("clean")
                }
              >
                <Eraser size={15} />
              </ToolbarButton>
            </div>
          </div>

          {/* =================================================
              QUILL EDITOR
          ================================================= */}

          <div
            className={
              isFullscreen
                ? "h-[calc(100vh-240px)] overflow-y-auto"
                : ""
            }
          >
            <ReactQuill
              ref={quillRef}
              theme="snow"
              value={value}
              onChange={onChange}
              modules={modules}
              formats={formats}
              className="admin-quill"
              placeholder="Start writing your article..."
            />
          </div>
        </>
      )}

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="flex flex-col gap-2 border-t border-[#edf5f8] bg-[#f8fcfe] px-4 py-3 text-[10px] font-medium text-[#94a3b8] sm:flex-row sm:items-center sm:justify-between">
        <div>
          {showSource
            ? "HTML source mode"
            : "Use clear headings, short paragraphs and relevant links for better readability."}
        </div>

        <div className="flex items-center gap-3">
          <span>
            {wordCount} words
          </span>

          <span>•</span>

          <span>
            {readingTime} min read
          </span>
        </div>
      </div>

      {/* =====================================================
          GLOBAL QUILL STYLES
      ===================================================== */}

      <style jsx global>{`
        .admin-quill .ql-toolbar {
          display: none !important;
        }

        .admin-quill .ql-container {
          border: 0 !important;
          min-height: 420px;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
          font-size: 15px;
          color: #17384f;
        }

        .admin-quill .ql-editor {
          min-height: 420px;
          padding: 26px !important;
          line-height: 1.85;
        }

        .admin-quill .ql-editor.ql-blank::before {
          left: 26px;
          color: #94a3b8;
          font-style: normal;
          font-size: 14px;
        }

        .admin-quill .ql-editor h1 {
          color: #12324a;
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.2;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .admin-quill .ql-editor h2 {
          color: #12324a;
          font-size: 1.65rem;
          font-weight: 800;
          line-height: 1.25;
          margin-top: 1.5rem;
          margin-bottom: 0.7rem;
        }

        .admin-quill .ql-editor h3 {
          color: #17384f;
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1.3;
          margin-top: 1.25rem;
          margin-bottom: 0.6rem;
        }

        .admin-quill .ql-editor h4 {
          color: #17384f;
          font-size: 1.15rem;
          font-weight: 800;
          line-height: 1.35;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }

        .admin-quill .ql-editor p {
          margin-bottom: 0.8rem;
        }

        .admin-quill .ql-editor a {
          color: #1687c5;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .admin-quill .ql-editor blockquote {
          border-left: 4px solid #1687c5;
          background: #f8fcfe;
          color: #64748b;
          margin: 1rem 0;
          padding: 14px 18px;
        }

        .admin-quill .ql-editor pre.ql-syntax {
          background: #12324a;
          color: #eaf7fd;
          border-radius: 10px;
          padding: 16px;
          margin: 1rem 0;
          overflow-x: auto;
          font-family:
            "Courier New",
            monospace;
        }

        .admin-quill .ql-editor img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 1rem 0;
        }

        .admin-quill .ql-editor iframe {
          width: 100%;
          min-height: 360px;
          border: 0;
          border-radius: 12px;
          margin: 1rem 0;
        }

        .admin-quill .ql-editor ul,
        .admin-quill .ql-editor ol {
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }

        .admin-quill .ql-editor hr {
          border: 0;
          border-top: 1px solid #dceff7;
          margin: 2rem 0;
        }

        .admin-quill .ql-editor code {
          background: #eff9fe;
          color: #0b6fa8;
          padding: 2px 5px;
          border-radius: 4px;
          font-size: 0.9em;
        }

        .admin-quill .ql-editor .ql-video {
          width: 100%;
          min-height: 360px;
          border-radius: 12px;
        }

        .admin-quill .ql-editor strong {
          color: #12324a;
        }

        @media (max-width: 640px) {
          .admin-quill .ql-editor {
            min-height: 360px;
            padding: 18px !important;
          }

          .admin-quill .ql-editor.ql-blank::before {
            left: 18px;
          }

          .admin-quill .ql-container {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

/* =========================================================
   TOOLBAR BUTTON
========================================================= */

function ToolbarButton({
  children,
  title,
  onClick,
}) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      onClick={onClick}
      className="flex h-7 w-7 items-center justify-center rounded-md border border-transparent text-[#64748b] transition hover:border-[#dceff7] hover:bg-[#eff9fe] hover:text-[#1687c5]"
    >
      {children}
    </button>
  );
}

/* =========================================================
   TOOLBAR DIVIDER
========================================================= */

function ToolbarDivider() {
  return (
    <span className="mx-1 h-5 w-px bg-[#dceff7]" />
  );
}

export default Editor;