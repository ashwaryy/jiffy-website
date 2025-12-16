"use client";

import { useState } from "react";
import Button from "../../components/Button";
import { FadeInUp, AnimatedBackground } from "../../components/animations";
import { GiraffeMascot, CheckCircleIcon } from "../../components/icons";

export default function Demo() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-16 pb-16 pt-16 relative">
      <AnimatedBackground variant="subtle" />

      {/* Page Headline */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeInUp>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
            Let's Build Your <span className="bg-linear-to-r from-primary to-amber-500 bg-clip-text text-transparent">Knowledge Agent</span>
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">Tell us about your institution and we'll show you how Jiffy can help.</p>
        </FadeInUp>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <FadeInUp delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100/80 transition-lift">
              {submitted ? (
                <div className="text-center py-24 animate-scale-in">
                  <div className="w-20 h-20 bg-linear-to-br from-green-100 to-emerald-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                    <CheckCircleIcon size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-secondary mb-4">Request Received!</h2>
                  <p className="text-slate-600">Thanks for your interest. We'll be in touch within 24 hours to schedule your demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="access_key" value="e8c49db5-08e0-4ceb-97c2-98f85f168e74" />
                  <input type="hidden" name="subject" value="New Demo Request from Jiffy Website" />
                  <input type="hidden" name="from_name" value="Jiffy Demo Form" />

                  {[
                    { id: "name", label: "Full Name", type: "text", placeholder: "Jane Doe" },
                    { id: "email", label: "Work Email", type: "email", placeholder: "jane@university.edu" },
                    { id: "institution", label: "Institution Name", type: "text", placeholder: "University of Example" },
                  ].map((field, i) => (
                    <div key={field.id} className={`animate-fade-in-up animate-delay-${i * 50}`}>
                      <label htmlFor={field.id} className="block text-sm font-medium text-slate-700 mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}

                  <div className="animate-fade-in-up animate-delay-150">
                    <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">
                      Institution Type
                    </label>
                    <select
                      id="type"
                      name="institution_type"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-slate-600 hover:border-slate-300"
                    >
                      <option>University</option>
                      <option>College</option>
                      <option>K-12</option>
                      <option>Corporate</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="animate-fade-in-up animate-delay-200">
                    <label className="block text-sm font-medium text-slate-700 mb-3">Preferred Contact Method</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contact_method"
                          value="Email"
                          defaultChecked
                          className="w-4 h-4 text-primary border-slate-300 focus:ring-primary/20"
                        />
                        <span className="text-slate-600">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contact_method"
                          value="Phone"
                          className="w-4 h-4 text-primary border-slate-300 focus:ring-primary/20"
                        />
                        <span className="text-slate-600">Phone</span>
                      </label>
                    </div>
                  </div>

                  <div className="animate-fade-in-up animate-delay-250">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 resize-none"
                      placeholder="Tell us about your specific needs..."
                    />
                  </div>

                  {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>}

                  <div className="animate-fade-in-up animate-delay-250">
                    <Button type="submit" className="w-full justify-center" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Request Demo"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </FadeInUp>

          {/* Contact Info / Sidebar */}
          <FadeInUp delay={0.2} className="flex flex-col justify-center gap-10 lg:pl-12">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Contact Us</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Have questions before scheduling a demo? Prefer to email us directly?</p>
              <a
                href="mailto:hello@jiffy.live"
                className="text-primary text-xl font-bold hover:text-orange-600 transition-colors inline-flex items-center gap-2 group"
              >
                hello@jiffy.live
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </div>

            <div className="bg-linear-to-br from-warm-50 to-amber-50/50 p-8 rounded-2xl border border-amber-100/50 transition-scale">
              <div className="flex items-center gap-3 mb-4">
                <GiraffeMascot size={40} />
                <h4 className="font-bold text-secondary">Built by Good Faith Labs</h4>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                We are committed to building AI that serves the public interest with honesty and transparency.
              </p>
              <a href="https://goodfaithlabs.com" className="text-sm font-bold text-primary hover:underline uppercase tracking-wide">
                Visit our website
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
