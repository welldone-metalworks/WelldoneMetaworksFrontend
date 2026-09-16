import { Quote, Star } from "lucide-react";

const defaultTestimonials = [];

export default function Testimonials({
  testimonials = defaultTestimonials,
}) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-[var(--wm-surface-soft)] py-20 lg:py-28">
      <div className="wm-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="wm-eyebrow justify-center">
            <span className="h-px w-6 bg-[var(--wm-primary)]" />
            Customer Feedback
            <span className="h-px w-6 bg-[var(--wm-primary)]" />
          </span>

          <h2 className="wm-heading mt-4 text-3xl sm:text-4xl lg:text-5xl">
            What our customers say.
          </h2>

          <p className="wm-body mt-4 text-sm sm:text-base">
            Genuine customer feedback from the Welldone Metalworks
            testimonial collection.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id || index}
              className="relative rounded-2xl border border-[var(--wm-border)] bg-white p-7 shadow-[var(--wm-shadow-sm)]"
            >
              <Quote
                size={38}
                className="absolute right-6 top-6 text-[var(--wm-border-light)]"
              />

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={15}
                    className="fill-[var(--wm-primary)] text-[var(--wm-primary)]"
                  />
                ))}
              </div>

              <blockquote className="relative mt-6 text-sm leading-7 text-[var(--wm-body)]">
                “{testimonial.quote || testimonial.text}”
              </blockquote>

              {(testimonial.name || testimonial.role) && (
                <div className="mt-7 border-t border-[var(--wm-border-light)] pt-5">
                  {testimonial.name && (
                    <p className="text-sm font-extrabold text-[var(--wm-heading)]">
                      {testimonial.name}
                    </p>
                  )}

                  {testimonial.role && (
                    <p className="mt-1 text-xs text-[var(--wm-muted)]">
                      {testimonial.role}
                    </p>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}