import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  FolderTree,
  Home,
  Mail,
  Map,
  Phone,
  Scale,
  ShieldCheck,
  Wrench,
} from "lucide-react";

// ============================================================
// SEO METADATA
// ============================================================

export const metadata = {
  title: "Sitemap | Welldone Metalworks",
  description:
    "Explore the Welldone Metalworks website sitemap, including fabrication services, service details, company information, gallery, contact and legal pages.",
  keywords: [
    "Welldone Metalworks sitemap",
    "metal fabrication services",
    "structural fabrication",
    "industrial fabrication",
    "custom metal fabrication",
    "Ahmedabad metal fabrication",
    "Gandhinagar metal fabrication",
  ],
  alternates: {
    canonical: "https://welldone-metalworks.in/sitemap",
  },
  openGraph: {
    title: "Sitemap | Welldone Metalworks",
    description:
      "Explore all major pages, fabrication services and service-detail pages available on the Welldone Metalworks website.",
    url: "https://welldone-metalworks.in/sitemap",
    siteName: "Welldone Metalworks",
    images: [
      {
        url: "https://welldone-metalworks.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Welldone Metalworks",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | Welldone Metalworks",
    description:
      "Browse the Welldone Metalworks website and explore fabrication services and project-specific service pages.",
    images: ["https://welldone-metalworks.in/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ============================================================
// SITE STRUCTURE
// ============================================================

const mainPages = [
  {
    number: "01",
    name: "Home",
    url: "/",
  },
  {
    number: "02",
    name: "About Us",
    url: "/about",
  },
  {
    number: "03",
    name: "Services",
    url: "/services",
  },
  {
    number: "04",
    name: "Gallery",
    url: "/gallery",
  },
  {
    number: "05",
    name: "Enquiry",
    url: "/enquiry",
  },
  {
    number: "06",
    name: "Contact",
    url: "/contact",
  },
];

const serviceGroups = [
  {
    number: "01",
    title: "Structural Fabrication",
    slug: "structural-fabrication",
    description:
      "Structural and project-specific Mild Steel fabrication for frames, supports and custom structures.",
    items: [
      {
        name: "Structural Frames",
        slug: "structural-frames",
      },
      {
        name: "Support Structures",
        slug: "support-structures",
      },
      {
        name: "Heavy Fabrication",
        slug: "heavy-fabrication",
      },
      {
        name: "Custom Structures",
        slug: "custom-structures",
      },
    ],
  },
  {
    number: "02",
    title: "Industrial Fabrication",
    slug: "industrial-fabrication",
    description:
      "Mild Steel fabrication for industrial frames, machine structures, platforms and supports.",
    items: [
      {
        name: "Industrial Frames",
        slug: "industrial-frames",
      },
      {
        name: "Machine Structures",
        slug: "machine-structures",
      },
      {
        name: "Platforms",
        slug: "platforms",
      },
      {
        name: "Industrial Supports",
        slug: "industrial-supports",
      },
    ],
  },
  {
    number: "03",
    title: "Custom Metal Fabrication",
    slug: "custom-metal-fabrication",
    description:
      "Project-specific metal fabrication developed around dimensions, application and fabrication requirements.",
    items: [
      {
        name: "Custom Fabrication",
        slug: "custom-fabrication",
      },
      {
        name: "Precision Fabrication",
        slug: "precision-fabrication",
      },
      {
        name: "Sheet Fabrication",
        slug: "sheet-fabrication",
      },
      {
        name: "Project Fabrication",
        slug: "project-fabrication",
      },
    ],
  },
  {
    number: "04",
    title: "Gates & Railings",
    slug: "gates-railings",
    description:
      "Fabrication for entrance gates, main gates, balcony railings and staircase railings.",
    items: [
      {
        name: "Main Gates",
        slug: "main-gates",
      },
      {
        name: "Entrance Gates",
        slug: "entrance-gates",
      },
      {
        name: "Balcony Railings",
        slug: "balcony-railings",
      },
      {
        name: "Staircase Railings",
        slug: "staircase-railings",
      },
    ],
  },
  {
    number: "05",
    title: "Staircase Fabrication",
    slug: "staircase-fabrication",
    description:
      "Mild Steel staircase fabrication for straight, spiral, industrial and fire-escape applications.",
    items: [
      {
        name: "Straight Staircases",
        slug: "straight-staircases",
      },
      {
        name: "Spiral Staircases",
        slug: "spiral-staircases",
      },
      {
        name: "Industrial Stairs",
        slug: "industrial-stairs",
      },
      {
        name: "Fire Escape Stairs",
        slug: "fire-escape-stairs",
      },
    ],
  },
  {
    number: "06",
    title: "Sheds & Canopies",
    slug: "sheds-canopies",
    description:
      "Fabricated structures for industrial sheds, warehouses, parking areas and entrance canopies.",
    items: [
      {
        name: "Industrial Sheds",
        slug: "industrial-sheds",
      },
      {
        name: "Warehouse Sheds",
        slug: "warehouse-sheds",
      },
      {
        name: "Parking Sheds",
        slug: "parking-sheds",
      },
      {
        name: "Entrance Canopies",
        slug: "entrance-canopies",
      },
    ],
  },
  {
    number: "07",
    title: "Gazebos & Outdoor",
    slug: "gazebos-outdoor",
    description:
      "Custom outdoor structures including garden gazebos, seating structures and project-specific outdoor fabrication.",
    items: [
      {
        name: "Garden Gazebos",
        slug: "garden-gazebos",
      },
      {
        name: "Outdoor Structures",
        slug: "outdoor-structures",
      },
      {
        name: "Seating Structures",
        slug: "seating-structures",
      },
      {
        name: "Custom Gazebos",
        slug: "custom-gazebos",
      },
    ],
  },
  {
    number: "08",
    title: "Welding & Installation",
    slug: "welding-installation",
    description:
      "Welding and installation services supporting project-specific fabrication requirements.",
    items: [
      {
        name: "MIG Welding",
        slug: "mig-welding",
      },
      {
        name: "Arc Welding",
        slug: "arc-welding",
      },
      {
        name: "On-Site Welding",
        slug: "on-site-welding",
      },
      {
        name: "Installation",
        slug: "installation",
      },
    ],
  },
];

const legalPages = [
  {
    number: "01",
    name: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    number: "02",
    name: "Terms & Conditions",
    url: "/terms-and-conditions",
  },
];

// ============================================================
// HELPER
// ============================================================

function ServiceDetailLink({ service, item }) {
  return (
    <Link
      href={`/services/${service.slug}/${item.slug}`}
      className="group flex items-center justify-between gap-4 border-b border-[var(--wm-border)] py-3.5 transition-colors duration-300 hover:bg-[var(--wm-surface-blue)] hover:px-3"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="h-1.5 w-1.5 shrink-0 bg-[var(--wm-primary)]" />

        <span className="truncate text-xs font-bold text-[var(--wm-heading)] transition-colors group-hover:text-[var(--wm-primary)] sm:text-sm">
          {item.name}
        </span>
      </div>

      <ArrowUpRight
        size={14}
        className="shrink-0 text-[var(--wm-border-blue)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--wm-primary)]"
      />
    </Link>
  );
}

// ============================================================
// PAGE
// ============================================================

export default function SitemapPage() {
  return (
    <main className="relative overflow-hidden bg-white text-[var(--wm-body)]">
      {/* ======================================================
          TECHNICAL GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22,135,197,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22,135,197,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative border-b border-[var(--wm-border)] bg-[var(--wm-surface-soft)] pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <div className="wm-container relative z-10">
          {/* Breadcrumb */}

          <div className="mb-8 flex items-center gap-2">
            <Link
              href="/"
              className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-muted)] transition-colors hover:text-[var(--wm-primary)]"
            >
              Home
            </Link>

            <ArrowRight
              size={11}
              className="text-[var(--wm-border-blue)]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
              Sitemap
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-20">
            {/* Heading */}

            <div>
              <div className="wm-eyebrow mb-5">
                <span className="h-px w-8 bg-[var(--wm-primary)]" />
                Website Index
              </div>

              <h1 className="wm-heading max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-[72px]">
                Website Sitemap
              </h1>

              <p className="wm-body mt-7 max-w-2xl text-sm sm:text-base">
                Explore the Welldone Metalworks website through its main
                pages, fabrication services, service-detail pages, company
                information and important website policies.
              </p>
            </div>

            {/* Document Panel */}

            <div className="lg:ml-auto lg:w-full">
              <div className="border-y border-[var(--wm-border-blue)] py-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
                    WEBSITE INDEX
                  </span>

                  <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                    SITEMAP / 01
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center border border-[var(--wm-border-blue)] bg-white text-[var(--wm-primary)]">
                    <FolderTree size={19} strokeWidth={1.6} />
                  </div>

                  <div>
                    <span className="block text-[8px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                      Site Structure
                    </span>

                    <span className="mt-1 block text-sm font-extrabold text-[var(--wm-heading)]">
                      Pages & Services
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical footer */}

          <div className="mt-10 flex flex-col gap-3 border-t border-[var(--wm-border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
              WELLDONE METALWORKS / WEBSITE SITEMAP
            </span>

            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
              NAVIGATION / SERVICES / INFORMATION
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================
          SITE OVERVIEW
      ====================================================== */}

      <section className="relative border-b border-[var(--wm-border)] bg-white py-12 sm:py-14 lg:py-16">
        <div className="wm-container">
          <div className="grid border border-[var(--wm-border-blue)] lg:grid-cols-[1fr_0.42fr]">
            {/* Overview */}

            <div className="p-7 sm:p-9 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-[var(--wm-surface-blue)] text-[var(--wm-primary)]">
                  <Map size={19} strokeWidth={1.6} />
                </div>

                <div>
                  <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                    SITE / OVERVIEW
                  </span>

                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[var(--wm-heading)] sm:text-3xl">
                    Find the right page for your requirement.
                  </h2>
                </div>
              </div>

              <p className="wm-body mt-6 max-w-3xl text-sm sm:ml-[60px] sm:text-base">
                Start with our main pages for company information, projects,
                enquiries and contact details. For fabrication requirements,
                explore the main service categories and their individual
                service-detail pages.
              </p>
            </div>

            {/* Site Stats */}

            <div className="border-t border-[var(--wm-border-blue)] bg-[var(--wm-surface-blue)] p-7 sm:p-9 lg:border-l lg:border-t-0">
              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                SITE INDEX
              </span>

              <div className="mt-5 space-y-3">
                {[
                  ["MAIN PAGES", "06"],
                  ["MAIN SERVICES", "08"],
                  ["SERVICE DETAILS", "32"],
                  ["LEGAL PAGES", "02"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-[var(--wm-border-blue)] pb-3"
                  >
                    <span className="text-[10px] font-bold tracking-[0.08em] text-[var(--wm-heading)]">
                      {label}
                    </span>

                    <span className="font-mono text-xs font-bold text-[var(--wm-primary)]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          MAIN PAGES
      ====================================================== */}

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="wm-container">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[var(--wm-border)] pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="wm-eyebrow mb-4">
                <span className="h-px w-8 bg-[var(--wm-primary)]" />
                Main Navigation
              </div>

              <h2 className="wm-heading text-3xl sm:text-4xl">
                Main website pages.
              </h2>
            </div>

            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
              06 PAGES
            </span>
          </div>

          <div className="grid border-l border-t border-[var(--wm-border)] sm:grid-cols-2 lg:grid-cols-3">
            {mainPages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="group border-b border-r border-[var(--wm-border)] bg-white p-6 transition-colors duration-300 hover:bg-[var(--wm-surface-blue)] sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="font-mono text-2xl font-bold tracking-[-0.06em] text-[var(--wm-border-blue)]">
                    {page.number}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-[var(--wm-border-blue)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--wm-primary)]"
                  />
                </div>

                <h3 className="mt-7 text-lg font-extrabold text-[var(--wm-heading)] transition-colors group-hover:text-[var(--wm-primary)]">
                  {page.name}
                </h3>

                <div className="mt-5 border-t border-[var(--wm-border)] pt-3">
                  <span className="font-mono text-[8px] font-bold tracking-[0.14em] text-[var(--wm-muted)]">
                    {page.url}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SERVICES
      ====================================================== */}

      <section className="relative border-y border-[var(--wm-border)] bg-[var(--wm-surface-soft)] py-16 sm:py-20 lg:py-24">
        <div className="wm-container">
          {/* Header */}

          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[var(--wm-border)] pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="wm-eyebrow mb-4">
                <span className="h-px w-8 bg-[var(--wm-primary)]" />
                Fabrication Services
              </div>

              <h2 className="wm-heading text-3xl sm:text-4xl">
                Services & service details.
              </h2>

              <p className="wm-body mt-4 max-w-2xl text-sm">
                Browse the eight main fabrication categories and open any
                individual service-detail page for more specific information.
              </p>
            </div>

            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
              08 SERVICES / 32 DETAILS
            </span>
          </div>

          {/* Service Groups */}

          <div className="space-y-5">
            {serviceGroups.map((service) => (
              <section
                key={service.slug}
                className="border border-[var(--wm-border-blue)] bg-white"
              >
                {/* Service Header */}

                <div className="grid lg:grid-cols-[110px_1fr_auto] lg:items-center">
                  <div className="border-b border-[var(--wm-border)] bg-[var(--wm-surface-blue)] p-6 lg:border-b-0 lg:border-r">
                    <span className="font-mono text-3xl font-bold tracking-[-0.06em] text-[var(--wm-primary)]">
                      {service.number}
                    </span>

                    <span className="mt-2 block font-mono text-[8px] font-bold tracking-[0.15em] text-[var(--wm-muted)]">
                      SERVICE
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-3"
                    >
                      <h3 className="text-xl font-extrabold tracking-tight text-[var(--wm-heading)] transition-colors group-hover:text-[var(--wm-primary)] sm:text-2xl">
                        {service.title}
                      </h3>

                      <ArrowUpRight
                        size={17}
                        className="text-[var(--wm-primary)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--wm-body)]">
                      {service.description}
                    </p>

                    <div className="mt-4">
                      <span className="font-mono text-[8px] font-bold tracking-[0.14em] text-[var(--wm-muted)]">
                        /services/{service.slug}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-[var(--wm-border)] px-6 py-5 lg:border-l lg:border-t-0 lg:px-7">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.15em] text-[var(--wm-primary)]"
                    >
                      View Main Service
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Subservices */}

                <div className="border-t border-[var(--wm-border)]">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                    {service.items.map((item, index) => (
                      <div
                        key={item.slug}
                        className="border-b border-[var(--wm-border)] p-5 last:border-b-0 sm:border-r lg:border-b-0"
                      >
                        <div className="mb-1 flex items-center justify-between">
                          <span className="font-mono text-[8px] font-bold tracking-[0.12em] text-[var(--wm-border-blue)]">
                            {service.number}.{String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span className="font-mono text-[8px] font-bold tracking-[0.1em] text-[var(--wm-muted)]">
                            DETAIL
                          </span>
                        </div>

                        <ServiceDetailLink
                          service={service}
                          item={item}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          LEGAL
      ====================================================== */}

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="wm-container">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[var(--wm-border)] pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="wm-eyebrow mb-4">
                <span className="h-px w-8 bg-[var(--wm-primary)]" />
                Website Information
              </div>

              <h2 className="wm-heading text-3xl sm:text-4xl">
                Legal & policy pages.
              </h2>
            </div>

            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
              02 DOCUMENTS
            </span>
          </div>

          <div className="grid border-l border-t border-[var(--wm-border)] sm:grid-cols-2">
            {legalPages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="group border-b border-r border-[var(--wm-border)] bg-white p-6 transition-colors duration-300 hover:bg-[var(--wm-surface-blue)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-2xl font-bold tracking-[-0.06em] text-[var(--wm-border-blue)]">
                      {page.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center border border-[var(--wm-border-blue)] bg-[var(--wm-surface-blue)] text-[var(--wm-primary)]">
                      {page.name === "Privacy Policy" ? (
                        <ShieldCheck size={17} />
                      ) : (
                        <Scale size={17} />
                      )}
                    </div>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-[var(--wm-border-blue)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--wm-primary)]"
                  />
                </div>

                <h3 className="mt-7 text-lg font-extrabold text-[var(--wm-heading)] transition-colors group-hover:text-[var(--wm-primary)]">
                  {page.name}
                </h3>

                <div className="mt-5 border-t border-[var(--wm-border)] pt-3">
                  <span className="font-mono text-[8px] font-bold tracking-[0.14em] text-[var(--wm-muted)]">
                    {page.url}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CONTACT CTA
      ====================================================== */}

      <section className="relative overflow-hidden border-t border-[var(--wm-border)] bg-[var(--wm-surface-soft)] py-14 sm:py-16 lg:py-20">
        <div className="wm-container">
          <div className="border border-[var(--wm-border-blue)] bg-white">
            {/* Top bar */}

            <div className="flex flex-col justify-between gap-3 border-b border-[var(--wm-border)] px-6 py-4 sm:flex-row sm:items-center sm:px-8">
              <span className="flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.17em] text-[var(--wm-primary)]">
                <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />
                Need More Information
              </span>

              <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-muted)]">
                WELLDONE METALWORKS / CONTACT
              </span>
            </div>

            <div className="grid lg:grid-cols-[1fr_0.7fr]">
              {/* Left */}

              <div className="p-7 sm:p-9 lg:p-10">
                <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                  FABRICATION ENQUIRY
                </span>

                <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--wm-heading)] sm:text-4xl">
                  Have a fabrication requirement?
                </h2>

                <p className="wm-body mt-5 max-w-xl text-sm">
                  Contact Welldone Metalworks to discuss your project,
                  dimensions, application and fabrication requirements.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      icon: Wrench,
                      label: "Material",
                      value: "Mild Steel",
                    },
                    {
                      icon: Home,
                      label: "Coverage",
                      value: "Ahmedabad",
                    },
                    {
                      icon: FolderTree,
                      label: "Service",
                      value: "Project Based",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="border border-[var(--wm-border)] bg-[var(--wm-surface-soft)] p-4"
                      >
                        <Icon
                          size={15}
                          className="text-[var(--wm-primary)]"
                        />

                        <span className="mt-3 block text-[8px] font-bold uppercase tracking-[0.14em] text-[var(--wm-muted)]">
                          {item.label}
                        </span>

                        <span className="mt-1 block text-xs font-extrabold text-[var(--wm-heading)]">
                          {item.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact */}

              <div className="border-t border-[var(--wm-border)] bg-[var(--wm-surface-blue)] p-7 sm:p-9 lg:border-l lg:border-t-0">
                <a
                  href="tel:+919649957698"
                  className="group flex items-center justify-between gap-4 border-b border-[var(--wm-border-blue)] pb-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-[var(--wm-border-blue)] bg-white text-[var(--wm-primary)]">
                      <Phone size={15} />
                    </span>

                    <div>
                      <span className="block text-[8px] font-bold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                        Phone
                      </span>

                      <span className="mt-1 block text-sm font-extrabold text-[var(--wm-heading)] transition-colors group-hover:text-[var(--wm-primary)]">
                        +91 96499 57698
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-[var(--wm-primary)]"
                  />
                </a>

                <a
                  href="mailto:info@welldonemetalworks.com"
                  className="group mt-5 flex items-center justify-between gap-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-white text-[var(--wm-primary)]">
                      <Mail size={15} />
                    </span>

                    <div className="min-w-0">
                      <span className="block text-[8px] font-bold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                        Email
                      </span>

                      <span className="mt-1 block truncate text-sm font-extrabold text-[var(--wm-heading)] transition-colors group-hover:text-[var(--wm-primary)]">
                        info@welldonemetalworks.com
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-[var(--wm-primary)]"
                  />
                </a>

                <Link
                  href="/contact"
                  className="mt-7 flex items-center justify-center gap-2 border border-[var(--wm-primary)] bg-[var(--wm-primary)] px-5 py-3 text-[9px] font-extrabold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[var(--wm-primary-dark)]"
                >
                  Contact Welldone Metalworks
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Bottom */}

            <div className="grid border-t border-[var(--wm-border)] sm:grid-cols-2">
              <Link
                href="/services"
                className="group flex items-center justify-between gap-5 px-6 py-5 transition-colors duration-300 hover:bg-[var(--wm-surface-blue)] sm:border-r sm:border-[var(--wm-border)] sm:px-7"
              >
                <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
                  Explore All Services
                </span>

                <ArrowRight
                  size={14}
                  className="text-[var(--wm-primary)] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <div className="flex items-center gap-3 border-t border-[var(--wm-border)] px-6 py-5 sm:border-t-0 sm:px-7">
                <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

                <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-muted)]">
                  AHMEDABAD & GANDHINAGAR
                </span>
              </div>
            </div>
          </div>

          {/* Technical Footer */}

          <div className="mt-7 flex flex-col gap-3 border-t border-[var(--wm-border-blue)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
              WELLDONE METALWORKS / WEBSITE SITEMAP
            </span>

            <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--wm-primary)]">
              Structure → Services → Contact
              <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}