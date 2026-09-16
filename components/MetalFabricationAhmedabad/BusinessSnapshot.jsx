import {
  Building2,
  MapPin,
  Ruler,
  Wrench,
} from "lucide-react";

const items = [
  {
    icon: Building2,
    eyebrow: "Material",
    title: "Mild Steel (MS)",
    description:
      "Our fabrication work is focused on mild-steel requirements.",
  },
  {
    icon: MapPin,
    eyebrow: "Service Area",
    title: "Ahmedabad & Gandhinagar",
    description:
      "Serving suitable residential, commercial and outdoor fabrication requirements.",
  },
  {
    icon: Ruler,
    eyebrow: "Planning",
    title: "Site Measurement",
    description:
      "Measurement support is available where the project requires it.",
  },
  {
    icon: Wrench,
    eyebrow: "Execution",
    title: "Installation Support",
    description:
      "Suitable fabricated works can be supported through on-site installation.",
  },
];

export default function BusinessSnapshot() {
  return (
    <section className="relative border-b border-[var(--wm-border-light)] bg-white py-7">
      <div className="wm-container">
        <div className="grid overflow-hidden rounded-2xl border border-[var(--wm-border)] bg-[var(--wm-surface-soft)] sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group p-6 transition duration-300 hover:bg-white ${
                  index !== items.length - 1
                    ? "border-b border-[var(--wm-border)] lg:border-b-0 lg:border-r"
                    : ""
                } ${
                  index === 1
                    ? "sm:border-r-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--wm-surface-icon)] text-[var(--wm-primary)] transition duration-300 group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-[var(--wm-primary)]">
                      {item.eyebrow}
                    </p>

                    <h2 className="mt-1 text-sm font-extrabold text-[var(--wm-heading)]">
                      {item.title}
                    </h2>

                    <p className="mt-1.5 text-xs leading-5 text-[var(--wm-muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}