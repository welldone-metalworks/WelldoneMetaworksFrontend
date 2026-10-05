"use client";

import { ArrowLeft, BookOpen, FilePlus2 } from "lucide-react";
import { useRouter } from "next/navigation";

import BlogForm from "../components/BlogForm";

const CreateBlogPage = () => {
  const router = useRouter();

  return (
    <div className="space-y-6">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="relative overflow-hidden border border-[#dceff7] bg-white">

        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#12324a 1px, transparent 1px), linear-gradient(90deg, #12324a 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Decorative element */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#1687c5]/10" />

        <div className="relative flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT */}
          <div className="flex items-start gap-4">

            <button
              type="button"
              onClick={() =>
                router.push("/admin/blogs")
              }
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#dceff7] bg-white text-[#64748b] transition hover:border-[#1687c5] hover:text-[#1687c5]"
              aria-label="Back to blogs"
            >
              <ArrowLeft size={17} />
            </button>

            <div>

              {/* Breadcrumb */}
              <div className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#94a3b8]">

                <BookOpen size={11} />

                <span>Blog Management</span>

                <span className="text-[#cbd5e1]">
                  /
                </span>

                <span className="text-[#1687c5]">
                  Create
                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center bg-[#eff9fe] text-[#1687c5]">
                  <FilePlus2 size={18} />
                </div>

                <div>

                  <h1 className="text-2xl font-black tracking-[-0.04em] text-[#12324a] sm:text-3xl">
                    Create New Blog
                  </h1>

                  <p className="mt-1 text-xs text-[#64748b]">
                    Create an SEO-optimized article for the Welldone Metalworks website.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            <div className="flex items-center gap-2 border border-[#fde7b2] bg-[#fff9e8] px-3 py-2 text-[10px] font-black text-[#a16207]">

              <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />

              Draft Mode

            </div>

            <div className="hidden border-l border-[#dceff7] pl-4 text-right sm:block">

              <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#94a3b8]">
                Publishing
              </p>

              <p className="mt-1 text-xs font-bold text-[#12324a]">
                Manual Review
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          BLOG FORM
      ===================================================== */}

      <BlogForm />

    </div>
  );
};

export default CreateBlogPage;