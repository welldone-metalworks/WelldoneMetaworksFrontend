import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  LockKeyhole,
  Mail,
  Phone,
  Scale,
  ShieldCheck,
  Wrench,
} from "lucide-react";

// ============================================================
// SEO METADATA
// ============================================================

export const metadata = {
  title: "Terms & Conditions | Welldone Metalworks",
  description:
    "Read the Terms & Conditions of Welldone Metalworks covering website use, project enquiries, quotations, payments, fabrication, changes and service requirements.",
  keywords: [
    "Welldone Metalworks terms and conditions",
    "terms and conditions",
    "metal fabrication terms",
    "fabrication service terms",
    "Welldone Metalworks policy",
  ],
  alternates: {
    canonical: "https://welldone-metalworks.in/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Welldone Metalworks",
    description:
      "Understand the terms applicable to website use, fabrication enquiries, quotations, payments and project requirements.",
    url: "https://welldone-metalworks.in/terms-and-conditions",
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
    title: "Terms & Conditions | Welldone Metalworks",
    description:
      "View the terms applicable to Welldone Metalworks website enquiries and fabrication services.",
    images: ["https://welldone-metalworks.in/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ============================================================
// STRUCTURED DATA
// ============================================================

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms & Conditions",
  url: "https://welldone-metalworks.in/terms-and-conditions",
  description:
    "Terms and Conditions of Welldone Metalworks covering website use, fabrication enquiries and project-related requirements.",
  publisher: {
    "@type": "Organization",
    name: "Welldone Metalworks",
    url: "https://welldone-metalworks.in",
  },
};

// ============================================================
// PAGE
// ============================================================

export default function TermsConditions() {
  const sections = [
    {
      number: "01",
      icon: FileText,
      title: "Use of Our Services",
      intro:
        "When making an enquiry or engaging Welldone Metalworks for fabrication work, customers are expected to provide relevant and accurate project information.",
      points: [
        "Project details should be provided as accurately as reasonably possible.",
        "Dimensions, drawings, photographs or other information should reflect the actual requirement where applicable.",
        "The scope of work is based on the requirements discussed and agreed for the project.",
      ],
    },
    {
      number: "02",
      icon: Scale,
      title: "Quotations & Pricing",
      intro:
        "Fabrication pricing can vary according to the material, dimensions, design, quantity, site conditions and scope of work.",
      points: [
        "A quotation may be prepared based on the information available at the time of enquiry.",
        "Changes in project scope, dimensions, materials or requirements may affect the quoted amount.",
        "Additional work outside the agreed scope may be discussed and priced separately.",
      ],
    },
    {
      number: "03",
      icon: LockKeyhole,
      title: "Payments",
      intro:
        "Payment terms may vary depending on the nature and requirements of an individual fabrication project.",
      points: [
        "An advance payment may be required before fabrication begins.",
        "The applicable payment schedule should be confirmed as part of the project discussion.",
        "Fabrication or installation work may be subject to the agreed payment terms.",
      ],
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Project Timelines",
      intro:
        "Fabrication and installation timelines depend on the project scope, material availability, site conditions and other practical requirements.",
      points: [
        "Estimated timelines are discussed according to the project requirements.",
        "Material availability, weather, site access or other external factors may affect progress.",
        "Changes to the agreed scope may also affect the expected completion timeline.",
      ],
    },
    {
      number: "05",
      icon: Wrench,
      title: "Customization & Changes",
      intro:
        "Metal fabrication projects are often developed according to specific dimensions and requirements. Changes after confirmation may affect the project.",
      points: [
        "Requested changes should be communicated before the affected fabrication work proceeds.",
        "Changes in design, dimensions, materials or quantity may affect cost.",
        "Additional fabrication or rework resulting from approved changes may require revised terms.",
      ],
    },
    {
      number: "06",
      icon: ShieldCheck,
      title: "Site & Installation Requirements",
      intro:
        "Where installation forms part of the project, site conditions and access can affect how the work is carried out.",
      points: [
        "The customer should provide reasonable site access where required for the agreed work.",
        "Existing site conditions may affect installation requirements.",
        "Additional work arising from site conditions outside the agreed scope may be discussed separately.",
      ],
    },
    {
      number: "07",
      icon: Scale,
      title: "Liability & External Factors",
      intro:
        "Project outcomes can be affected by factors outside the reasonable control of the fabrication or installation process.",
      points: [
        "Welldone Metalworks is not responsible for issues arising from misuse, unauthorized modification or improper handling after completion.",
        "External site conditions or events may affect fabrication or installation activities.",
        "Project-specific responsibilities should be understood according to the agreed scope of work.",
      ],
    },
    {
      number: "08",
      icon: FileText,
      title: "Intellectual Property",
      intro:
        "Project drawings, designs, photographs or other materials may be subject to ownership or usage rights depending on how they were created and provided.",
      points: [
        "Website content, branding, text and original visual material belong to their respective owners.",
        "Customers should not reproduce website content without appropriate permission.",
        "Project-specific drawings or design material may be subject to separate agreement where applicable.",
      ],
    },
    {
      number: "09",
      icon: LockKeyhole,
      title: "Termination & Cancellation",
      intro:
        "A project or service engagement may be cancelled or discontinued where circumstances prevent the agreed work from continuing.",
      points: [
        "Cancellation terms may depend on the stage of the project and work already completed.",
        "Material procurement or fabrication already undertaken may affect the applicable settlement.",
        "Any cancellation or termination should be discussed directly with Welldone Metalworks.",
      ],
    },
    {
      number: "10",
      icon: FileText,
      title: "Updates to These Terms",
      intro:
        "These Terms & Conditions may be updated from time to time to reflect changes in the website, services or business practices.",
      points: [
        "Updated terms will be published on this page.",
        "The latest version available on the website should be considered when using the website or making a new enquiry.",
      ],
    },
  ];

  return (
    <main className="relative overflow-hidden bg-white text-[var(--wm-body)]">
      {/* ======================================================
          SCHEMA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsSchema),
        }}
      />

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
              Terms & Conditions
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-20">
            {/* Left */}

            <div>
              <div className="wm-eyebrow mb-5">
                <span className="h-px w-8 bg-[var(--wm-primary)]" />
                Website & Service Terms
              </div>

              <h1 className="wm-heading max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-[72px]">
                Terms & Conditions
              </h1>

              <p className="wm-body mt-7 max-w-2xl text-sm sm:text-base">
                These terms outline the general conditions applicable when
                using the Welldone Metalworks website, making a fabrication
                enquiry, or discussing a project with our team.
              </p>
            </div>

            {/* Document Identity */}

            <div className="lg:ml-auto lg:w-full">
              <div className="border-y border-[var(--wm-border-blue)] py-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
                    DOCUMENT
                  </span>

                  <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                    TERMS / 01
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center border border-[var(--wm-border-blue)] bg-white text-[var(--wm-primary)]">
                    <Scale size={19} strokeWidth={1.6} />
                  </div>

                  <div>
                    <span className="block text-[8px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                      Document Type
                    </span>

                    <span className="mt-1 block text-sm font-extrabold text-[var(--wm-heading)]">
                      Terms & Conditions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical footer */}

          <div className="mt-10 flex flex-col gap-3 border-t border-[var(--wm-border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
              WELLDONE METALWORKS / TERMS & CONDITIONS
            </span>

            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
              PROJECT / SERVICE / WEBSITE TERMS
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================
          OVERVIEW
      ====================================================== */}

      <section className="relative border-b border-[var(--wm-border)] bg-white py-12 sm:py-14 lg:py-16">
        <div className="wm-container">
          <div className="grid border border-[var(--wm-border-blue)] lg:grid-cols-[1fr_0.42fr]">
            {/* Main */}

            <div className="p-7 sm:p-9 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-[var(--wm-surface-blue)] text-[var(--wm-primary)]">
                  <FileText size={19} strokeWidth={1.6} />
                </div>

                <div>
                  <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                    TERMS / OVERVIEW
                  </span>

                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[var(--wm-heading)] sm:text-3xl">
                    Clear terms support clear project expectations.
                  </h2>
                </div>
              </div>

              <p className="wm-body mt-6 max-w-3xl text-sm sm:ml-[60px] sm:text-base">
                Welldone Metalworks undertakes fabrication work according to
                the requirements discussed for each project. Project scope,
                dimensions, materials, pricing, payment terms and installation
                requirements may vary depending on the specific work involved.
              </p>
            </div>

            {/* Scope */}

            <div className="border-t border-[var(--wm-border-blue)] bg-[var(--wm-surface-blue)] p-7 sm:p-9 lg:border-l lg:border-t-0">
              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                TERMS SCOPE
              </span>

              <div className="mt-5 space-y-3">
                {[
                  "Website use",
                  "Project enquiries",
                  "Quotations",
                  "Payments",
                  "Fabrication",
                  "Installation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-[var(--wm-border-blue)] pb-3"
                  >
                    <CheckCircle2
                      size={14}
                      className="shrink-0 text-[var(--wm-primary)]"
                    />

                    <span className="text-xs font-bold text-[var(--wm-heading)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          TERMS REGISTER
      ====================================================== */}

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="wm-container">
          {/* Section Header */}

          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[var(--wm-border)] pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="wm-eyebrow mb-4">
                <span className="h-px w-8 bg-[var(--wm-primary)]" />
                Terms Register
              </div>

              <h2 className="wm-heading text-3xl sm:text-4xl">
                Project and service conditions.
              </h2>
            </div>

            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
              {String(sections.length).padStart(2, "0")} TERMS
            </span>
          </div>

          {/* Terms */}

          <div className="border-l border-t border-[var(--wm-border)]">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.number}
                  className="border-b border-r border-[var(--wm-border)] bg-white transition-colors duration-300 hover:bg-[var(--wm-surface-soft)]"
                >
                  <div className="grid gap-7 p-6 sm:p-8 lg:grid-cols-[90px_0.7fr_1.3fr] lg:items-start lg:gap-8 lg:px-9 lg:py-9">
                    {/* Number */}

                    <div className="flex items-center gap-4">
                      <span className="font-mono text-3xl font-bold leading-none tracking-[-0.06em] text-[var(--wm-border-blue)] sm:text-4xl">
                        {section.number}
                      </span>

                      <span className="hidden h-9 w-px bg-[var(--wm-border)] lg:block" />
                    </div>

                    {/* Title */}

                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-[var(--wm-surface-blue)] text-[var(--wm-primary)]">
                        <Icon size={18} strokeWidth={1.6} />
                      </div>

                      <div>
                        <span className="font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-[var(--wm-primary)]">
                          Terms / {section.number}
                        </span>

                        <h3 className="mt-1.5 text-xl font-extrabold leading-7 tracking-tight text-[var(--wm-heading)] sm:text-2xl">
                          {section.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}

                    <div className="lg:border-l lg:border-[var(--wm-border)] lg:pl-8">
                      <p className="text-sm leading-7 text-[var(--wm-body)]">
                        {section.intro}
                      </p>

                      <div className="mt-5 space-y-3">
                        {section.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--wm-primary)]" />

                            <span className="text-xs leading-6 text-[var(--wm-body)] sm:text-sm">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          PROJECT UNDERSTANDING
      ====================================================== */}

      <section className="border-y border-[var(--wm-border)] bg-[var(--wm-surface-blue)] py-12 sm:py-14">
        <div className="wm-container">
          <div className="grid border border-[var(--wm-border-blue)] bg-white lg:grid-cols-[1fr_0.55fr]">
            <div className="p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <Wrench
                  size={17}
                  className="text-[var(--wm-primary)]"
                />

                <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                  PROJECT BASIS
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[var(--wm-heading)]">
                Every fabrication project can have different requirements.
              </h2>

              <p className="wm-body mt-4 max-w-2xl text-sm">
                The final scope, material, dimensions, pricing, payment
                arrangement and installation requirements should be confirmed
                during the project discussion. These general website terms do
                not replace project-specific terms that may be agreed for an
                individual order or fabrication requirement.
              </p>
            </div>

            <div className="border-t border-[var(--wm-border-blue)] bg-[var(--wm-surface-soft)] p-7 sm:p-9 lg:border-l lg:border-t-0">
              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                PROJECT CHECK
              </span>

              <div className="mt-5 space-y-3">
                {[
                  "Scope of work",
                  "Dimensions",
                  "Material",
                  "Payment terms",
                  "Installation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-[var(--wm-border)] pb-3"
                  >
                    <span className="text-xs font-bold text-[var(--wm-heading)]">
                      {item}
                    </span>

                    <span className="font-mono text-[8px] font-bold tracking-[0.12em] text-[var(--wm-primary)]">
                      DISCUSS
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CONTACT / CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[var(--wm-surface-soft)] py-14 sm:py-16 lg:py-20">
        <div className="wm-container">
          <div className="border border-[var(--wm-border-blue)] bg-white">
            {/* Top bar */}

            <div className="flex flex-col justify-between gap-3 border-b border-[var(--wm-border)] px-6 py-4 sm:flex-row sm:items-center sm:px-8">
              <span className="flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.17em] text-[var(--wm-primary)]">
                <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />
                Project Enquiries
              </span>

              <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-muted)]">
                WELLDONE METALWORKS / CONTACT
              </span>
            </div>

            <div className="grid lg:grid-cols-[1fr_0.7fr]">
              {/* Left */}

              <div className="p-7 sm:p-9 lg:p-10">
                <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                  NEED PROJECT CLARIFICATION?
                </span>

                <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--wm-heading)] sm:text-4xl">
                  Discuss your fabrication requirements with us.
                </h2>

                <p className="wm-body mt-5 max-w-xl text-sm">
                  If you have questions about a project, quotation, payment
                  terms, fabrication requirement or installation scope, contact
                  Welldone Metalworks directly.
                </p>
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
              </div>
            </div>

            {/* Bottom actions */}

            <div className="grid border-t border-[var(--wm-border)] sm:grid-cols-2">
              <Link
                href="/contact"
                className="group flex items-center justify-between gap-5 px-6 py-5 transition-colors duration-300 hover:bg-[var(--wm-surface-blue)] sm:border-r sm:border-[var(--wm-border)] sm:px-7"
              >
                <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
                  Contact Welldone Metalworks
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

          {/* Technical footer */}

          <div className="mt-7 flex flex-col gap-3 border-t border-[var(--wm-border-blue)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
              WELLDONE METALWORKS / TERMS & CONDITIONS
            </span>

            <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--wm-primary)]">
              Scope → Clarity → Project
              <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
} 