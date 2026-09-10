import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cookie,
  FileText,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

import Link from "next/link";
// ============================================================
// SEO METADATA
// ============================================================

export const metadata = {
  title: "Privacy Policy | Welldone Metalworks",
  description:
    "Read the Privacy Policy of Welldone Metalworks to understand how information submitted through our website is collected, used and protected.",
  keywords: [
    "Welldone Metalworks privacy policy",
    "privacy policy",
    "data protection",
    "metal fabrication website privacy",
  ],
  alternates: {
    canonical: "https://welldone-metalworks.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Welldone Metalworks",
    description:
      "Learn how Welldone Metalworks handles information submitted through its website and enquiry channels.",
    url: "https://welldone-metalworks.in/privacy-policy",
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
    title: "Privacy Policy | Welldone Metalworks",
    description:
      "Learn how Welldone Metalworks handles information submitted through its website.",
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

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  url: "https://welldone-metalworks.in/privacy-policy",
  description:
    "Privacy Policy of Welldone Metalworks explaining how website enquiry information is collected and used.",
  publisher: {
    "@type": "Organization",
    name: "Welldone Metalworks",
    url: "https://welldone-metalworks.in",
  },
};

// ============================================================
// PAGE
// ============================================================

export default function PrivacyPolicy() {
  const sections = [
    {
      number: "01",
      icon: ShieldCheck,
      title: "Information We Collect",
      intro:
        "We may collect information that you choose to provide when you contact Welldone Metalworks through the website.",
      points: [
        "Name and contact details such as phone number or email address.",
        "Project information, dimensions, requirements or other details you include in an enquiry.",
        "Information contained in messages or other communication you send to us.",
      ],
    },
    {
      number: "02",
      icon: FileText,
      title: "How We Use Information",
      intro:
        "Information submitted through the website is primarily used to understand and respond to your fabrication enquiry.",
      points: [
        "To respond to enquiries and requests for information.",
        "To understand project requirements and prepare relevant discussions or quotations.",
        "To communicate with you about an enquiry or requested service.",
        "To improve the usefulness and operation of our website.",
      ],
    },
    {
      number: "03",
      icon: LockKeyhole,
      title: "Information Protection",
      intro:
        "We take reasonable steps to protect information submitted through our website and business communication channels.",
      points: [
        "Access to submitted information should be limited to people who need it for business purposes.",
        "Information is handled for legitimate business and enquiry-related purposes.",
        "No method of transmitting or storing information online can be guaranteed to be completely secure.",
      ],
    },
    {
      number: "04",
      icon: Cookie,
      title: "Cookies & Analytics",
      intro:
        "Our website may use cookies or similar technologies to support website functionality and understand how visitors use the site.",
      points: [
        "Essential technologies may be used for normal website functionality.",
        "Analytics tools, where enabled, may collect general information about website usage.",
        "You can manage or restrict cookies through your browser settings.",
      ],
    },
    {
      number: "05",
      icon: CheckCircle2,
      title: "Third-Party Services",
      intro:
        "Some website functions may rely on third-party services such as hosting, analytics, communication or embedded content providers.",
      points: [
        "Third-party providers may process information only as necessary to provide their services.",
        "Their handling of information may be governed by their own privacy policies.",
        "We do not control the privacy practices of independent third-party websites or services.",
      ],
    },
    {
      number: "06",
      icon: FileText,
      title: "Data Retention",
      intro:
        "We retain information for as long as reasonably necessary for the purpose for which it was collected or for legitimate business requirements.",
      points: [
        "Enquiry information may be retained to maintain communication and business records.",
        "The retention period can vary depending on the nature of the enquiry or business relationship.",
        "Information that is no longer reasonably required may be deleted or otherwise disposed of.",
      ],
    },
    {
      number: "07",
      icon: ShieldCheck,
      title: "Your Choices",
      intro:
        "You can contact us if you have questions about information you have submitted through our website.",
      points: [
        "You may ask us about information you have provided directly to us.",
        "You may request correction of inaccurate contact information.",
        "You may contact us regarding a privacy-related concern or request.",
      ],
    },
  ];

  return (
    <main className="relative overflow-hidden bg-white text-[var(--wm-body)]">
      {/* ============================================================
          SCHEMA
      ============================================================ */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacySchema),
        }}
      />

      {/* ============================================================
          TECHNICAL PAGE BACKGROUND
      ============================================================ */}

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

      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="relative border-b border-[var(--wm-border)] bg-[var(--wm-surface-soft)] pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <div className="wm-container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
              Home
            </span>

            <ArrowRight
              size={11}
              className="text-[var(--wm-border-blue)]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
              Privacy Policy
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-20">
            {/* LEFT */}
            <div>
              <div className="wm-eyebrow mb-5">
                <span className="h-px w-8 bg-[var(--wm-primary)]" />
                Website Policy
              </div>

              <h1 className="wm-heading max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-[72px]">
                Privacy Policy
              </h1>

              <p className="wm-body mt-7 max-w-2xl text-sm sm:text-base">
                This policy explains how Welldone Metalworks handles
                information that you provide when using our website,
                contacting us, or making a fabrication enquiry.
              </p>
            </div>

            {/* RIGHT DOCUMENT META */}
            <div className="lg:ml-auto lg:w-full">
              <div className="border-y border-[var(--wm-border-blue)] py-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
                    DOCUMENT
                  </span>

                  <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                    PRIVACY / 01
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center border border-[var(--wm-border-blue)] bg-white text-[var(--wm-primary)]">
                    <LockKeyhole
                      size={19}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <span className="block text-[8px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                      Policy Type
                    </span>

                    <span className="mt-1 block text-sm font-extrabold text-[var(--wm-heading)]">
                      Website Privacy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document bar */}
          <div className="mt-10 flex flex-col gap-3 border-t border-[var(--wm-border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
              WELLDONE METALWORKS / PRIVACY POLICY
            </span>

            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
              INFORMATION & DATA HANDLING
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          INTRO / TRUST PANEL
      ============================================================ */}

      <section className="relative border-b border-[var(--wm-border)] bg-white py-12 sm:py-14 lg:py-16">
        <div className="wm-container">
          <div className="grid border border-[var(--wm-border-blue)] lg:grid-cols-[1fr_0.42fr]">
            {/* Main */}
            <div className="p-7 sm:p-9 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-[var(--wm-surface-blue)] text-[var(--wm-primary)]">
                  <ShieldCheck
                    size={19}
                    strokeWidth={1.6}
                  />
                </div>

                <div>
                  <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                    PRIVACY / OVERVIEW
                  </span>

                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[var(--wm-heading)] sm:text-3xl">
                    Your information should be handled responsibly.
                  </h2>
                </div>
              </div>

              <p className="wm-body mt-6 max-w-3xl text-sm sm:ml-[60px] sm:text-base">
                When you contact Welldone Metalworks, you may provide
                information needed to discuss a fabrication requirement. We
                use that information primarily to understand your enquiry,
                communicate with you and support the requested service.
              </p>
            </div>

            {/* Side */}
            <div className="border-t border-[var(--wm-border-blue)] bg-[var(--wm-surface-blue)] p-7 sm:p-9 lg:border-l lg:border-t-0">
              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                POLICY SCOPE
              </span>

              <div className="mt-5 space-y-3">
                {[
                  "Website enquiries",
                  "Contact information",
                  "Project requirements",
                  "Website usage",
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

      {/* ============================================================
          POLICY CONTENT
      ============================================================ */}

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="wm-container">
          {/* Section header */}
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[var(--wm-border)] pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="wm-eyebrow mb-4">
                <span className="h-px w-8 bg-[var(--wm-primary)]" />
                Policy Details
              </div>

              <h2 className="wm-heading text-3xl sm:text-4xl">
                How information is handled.
              </h2>
            </div>

            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
              {String(sections.length).padStart(2, "0")} POLICY SECTIONS
            </span>
          </div>

          {/* Policy rows */}
          <div className="border-l border-t border-[var(--wm-border)]">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.number}
                  className="border-b border-r border-[var(--wm-border)] bg-white"
                >
                  <div className="grid gap-7 p-6 sm:p-8 lg:grid-cols-[90px_0.7fr_1.3fr] lg:items-start lg:gap-8 lg:px-9 lg:py-9">
                    {/* NUMBER */}
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-3xl font-bold leading-none tracking-[-0.06em] text-[var(--wm-border-blue)] sm:text-4xl">
                        {section.number}
                      </span>

                      <span className="hidden h-9 w-px bg-[var(--wm-border)] lg:block" />
                    </div>

                    {/* TITLE */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-[var(--wm-surface-blue)] text-[var(--wm-primary)]">
                        <Icon
                          size={18}
                          strokeWidth={1.6}
                        />
                      </div>

                      <div>
                        <span className="font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-[var(--wm-primary)]">
                          Policy / {section.number}
                        </span>

                        <h3 className="mt-1.5 text-xl font-extrabold leading-7 tracking-tight text-[var(--wm-heading)] sm:text-2xl">
                          {section.title}
                        </h3>
                      </div>
                    </div>

                    {/* CONTENT */}
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

      {/* ============================================================
          IMPORTANT NOTE
      ============================================================ */}

      <section className="border-y border-[var(--wm-border)] bg-[var(--wm-surface-blue)] py-12 sm:py-14">
        <div className="wm-container">
          <div className="grid border border-[var(--wm-border-blue)] bg-white lg:grid-cols-[1fr_0.55fr]">
            <div className="p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <FileText
                  size={17}
                  className="text-[var(--wm-primary)]"
                />

                <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                  POLICY UPDATES
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[var(--wm-heading)]">
                Changes to this Privacy Policy
              </h2>

              <p className="wm-body mt-4 max-w-2xl text-sm">
                We may update this Privacy Policy from time to time to reflect
                changes in our website, business practices or applicable
                requirements. The updated version will be published on this
                page with the revised content.
              </p>
            </div>

            <div className="border-t border-[var(--wm-border-blue)] bg-[var(--wm-surface-soft)] p-7 sm:p-9 lg:border-l lg:border-t-0">
              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                WEBSITE POLICY
              </span>

              <p className="mt-4 text-sm font-bold leading-6 text-[var(--wm-heading)]">
                Please review this page periodically if you continue to use
                our website or submit enquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT CTA
      ============================================================ */}

      <section className="relative overflow-hidden bg-[var(--wm-surface-soft)] py-14 sm:py-16 lg:py-20">
        <div className="wm-container">
          <div className="border border-[var(--wm-border-blue)] bg-white">
            {/* Top */}
            <div className="flex flex-col justify-between gap-3 border-b border-[var(--wm-border)] px-6 py-4 sm:flex-row sm:items-center sm:px-8">
              <span className="flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.17em] text-[var(--wm-primary)]">
                <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />
                Privacy Enquiries
              </span>

              <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-muted)]">
                WELLDONE METALWORKS / CONTACT
              </span>
            </div>

            {/* Main */}
            <div className="grid lg:grid-cols-[1fr_0.7fr]">
              <div className="p-7 sm:p-9 lg:p-10">
                <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                  HAVE A PRIVACY QUESTION?
                </span>

                <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--wm-heading)] sm:text-4xl">
                  Contact us about information you have submitted.
                </h2>

                <p className="wm-body mt-5 max-w-xl text-sm">
                  If you have a question about this policy or information you
                  have provided to Welldone Metalworks, you can contact us
                  directly.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-[var(--wm-border)] bg-[var(--wm-surface-blue)] p-7 sm:p-9 lg:border-l lg:border-t-0">
                {/* Phone */}
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

                      <span className="mt-1 block text-sm font-extrabold text-[var(--wm-heading)] group-hover:text-[var(--wm-primary)]">
                        +91 96499 57698
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-[var(--wm-primary)]"
                  />
                </a>

                {/* Email */}
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

                      <span className="mt-1 block truncate text-sm font-extrabold text-[var(--wm-heading)] group-hover:text-[var(--wm-primary)]">
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

            {/* Bottom */}
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

          {/* Footer */}
          <div className="mt-7 flex flex-col gap-3 border-t border-[var(--wm-border-blue)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
              WELLDONE METALWORKS / PRIVACY POLICY
            </span>

            <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
              Privacy → Transparency → Trust
              <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}