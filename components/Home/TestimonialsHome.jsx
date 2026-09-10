"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Quote,
  Send,
  Star,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "The work was handled properly and the finished fabrication matched what we discussed.",
    name: "Customer Review",
    location: "Ahmedabad",
  },
  {
    quote:
      "Good communication throughout the work and the installation was completed as required.",
    name: "Customer Review",
    location: "Gandhinagar",
  },
  {
    quote:
      "The team understood the requirement and made the fabrication according to the available space.",
    name: "Customer Review",
    location: "Ahmedabad",
  },
];

export default function TestimonialsHome() {
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this form to your backend / API / email service.
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="border-t border-wm-border bg-wm-surface-soft py-16 sm:py-20">
      <div className="wm-container">

        {/* Header */}
        <div className="grid gap-5 border-b border-wm-border pb-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-7 bg-wm-primary" />
              Customer Feedback
            </div>

            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-wm-heading sm:text-4xl lg:text-[44px]">
              Real feedback from people we have worked with.
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-sm leading-6 text-wm-muted sm:text-base">
              Every fabrication requirement is different. Customer feedback
              helps us understand what matters most — communication, finished
              work, dimensions and installation.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">

          {/* Reviews */}
          <div className="overflow-hidden rounded-2xl border border-wm-border bg-white">

            {/* Review header */}
            <div className="flex flex-col gap-4 border-b border-wm-border px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="text-sm font-bold text-wm-navy">
                  Customer experiences
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <div className="flex gap-0.5 text-wm-primary">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={13}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <span className="text-xs text-wm-muted">
                    Based on customer feedback
                  </span>
                </div>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-wm-border bg-wm-surface-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-wm-muted">
                <MapPin size={12} className="text-wm-primary" />
                Ahmedabad · Gandhinagar
              </div>
            </div>

            {/* Review rows */}
            <div>
              {testimonials.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  className={`group px-5 py-6 sm:px-6 ${
                    index !== testimonials.length - 1
                      ? "border-b border-wm-border"
                      : ""
                  }`}
                >
                  <div className="flex gap-4">

                    {/* Number */}
                    <div className="hidden shrink-0 pt-1 sm:block">
                      <span className="text-[10px] font-extrabold tracking-[0.14em] text-wm-primary">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">

                      {/* Quote icon + stars */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-0.5 text-wm-primary">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              size={13}
                              fill="currentColor"
                              strokeWidth={1.5}
                            />
                          ))}
                        </div>

                        <Quote
                          size={22}
                          strokeWidth={1.5}
                          className="text-wm-border transition-colors group-hover:text-wm-primary/30"
                        />
                      </div>

                      {/* Review */}
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-wm-body sm:text-[15px]">
                        “{item.quote}”
                      </p>

                      {/* Customer info */}
                      <div className="mt-5 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-wm-surface-blue text-xs font-bold text-wm-primary">
                          {item.location.charAt(0)}
                        </div>

                        <div>
                          <p className="text-xs font-bold text-wm-navy">
                            {item.name}
                          </p>

                          <p className="mt-0.5 flex items-center gap-1 text-[11px] text-wm-muted">
                            <MapPin size={10} />
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom link */}
            <div className="border-t border-wm-border bg-wm-surface-soft px-5 py-4 sm:px-6">
              <a
                href="/reviews"
                className="group inline-flex items-center gap-2 text-xs font-bold text-wm-primary transition-colors hover:text-wm-primary-dark"
              >
                View all customer feedback

                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-wm-border transition-all group-hover:border-wm-primary">
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </div>
          </div>

          {/* Review form */}
          <div className="rounded-2xl border border-wm-border bg-white">

            {/* Form header */}
            <div className="border-b border-wm-border px-5 py-5 sm:px-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-wm-primary">
                Share Your Experience
              </p>

              <h3 className="mt-2 text-xl font-extrabold tracking-[-0.025em] text-wm-navy">
                Worked with us?
              </h3>

              <p className="mt-2 text-sm leading-6 text-wm-muted">
                Tell us how your fabrication project went. Your feedback helps
                other customers understand our work.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-5 py-6 sm:px-6">

              {/* Name + Location */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="review-name"
                    className="mb-2 block text-xs font-bold text-wm-navy"
                  >
                    Your Name
                  </label>

                  <input
                    id="review-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-lg border border-wm-border bg-white px-3.5 py-2.5 text-sm text-wm-body outline-none transition placeholder:text-wm-muted/70 focus:border-wm-primary focus:ring-2 focus:ring-wm-primary/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="review-location"
                    className="mb-2 block text-xs font-bold text-wm-navy"
                  >
                    Location
                  </label>

                  <input
                    id="review-location"
                    name="location"
                    type="text"
                    placeholder="Ahmedabad"
                    required
                    className="w-full rounded-lg border border-wm-border bg-white px-3.5 py-2.5 text-sm text-wm-body outline-none transition placeholder:text-wm-muted/70 focus:border-wm-primary focus:ring-2 focus:ring-wm-primary/10"
                  />
                </div>
              </div>

              {/* Rating */}
              <div className="mt-5">
                <label className="mb-2 block text-xs font-bold text-wm-navy">
                  Your Rating
                </label>

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => {
                    const value = index + 1;

                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setRating(value)}
                        aria-label={`${value} star rating`}
                        className="rounded-md p-1 transition-transform hover:scale-110"
                      >
                        <Star
                          size={20}
                          fill={
                            value <= rating
                              ? "currentColor"
                              : "transparent"
                          }
                          className={
                            value <= rating
                              ? "text-wm-primary"
                              : "text-wm-border"
                          }
                          strokeWidth={1.6}
                        />
                      </button>
                    );
                  })}

                  <span className="ml-2 text-xs text-wm-muted">
                    {rating}/5
                  </span>
                </div>
              </div>

              {/* Review */}
              <div className="mt-5">
                <label
                  htmlFor="review-message"
                  className="mb-2 block text-xs font-bold text-wm-navy"
                >
                  Your Review
                </label>

                <textarea
                  id="review-message"
                  name="review"
                  rows={4}
                  placeholder="Tell us about your fabrication work..."
                  required
                  className="w-full resize-none rounded-lg border border-wm-border bg-white px-3.5 py-3 text-sm leading-6 text-wm-body outline-none transition placeholder:text-wm-muted/70 focus:border-wm-primary focus:ring-2 focus:ring-wm-primary/10"
                />
              </div>

              {/* Consent */}
              <label className="mt-4 flex cursor-pointer items-start gap-2.5">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-wm-border text-wm-primary focus:ring-wm-primary/20"
                />

                <span className="text-[11px] leading-5 text-wm-muted">
                  I agree that my feedback may be displayed on the Welldone
                  Metalworks website.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-wm-primary px-5 py-3 text-sm font-bold text-white transition-all hover:bg-wm-primary-dark"
              >
                <Send size={15} />
                Submit Review
              </button>

              {/* Success message */}
              {submitted && (
                <div className="mt-4 flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 px-3.5 py-3 text-xs leading-5 text-green-700">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0" />
                  <span>
                    Thank you for your feedback. Your review has been received.
                  </span>
                </div>
              )}

              <p className="mt-4 text-center text-[10px] leading-5 text-wm-muted">
                Reviews are checked before being published.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}