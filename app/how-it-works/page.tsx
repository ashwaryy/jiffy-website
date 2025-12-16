import type { Metadata } from "next";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { FadeInUp, AnimatedBackground } from "../../components/animations";
import { GiraffeMascot, CheckCircleIcon } from "../../components/icons";
import { generatePageMetadata } from "../../lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "How Jiffy Works",
  description: "Discover how Integrated Context Architecture (ICA) delivers accurate answers 10x faster than traditional RAG.",
  path: "/how-it-works",
});

export default function HowItWorks() {
  return (
    <div className="flex flex-col gap-16 pb-16 pt-16">
      {/* Page Headline */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">How Jiffy's Knowledge Agent Works</h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">Built differently to deliver better results.</p>
        </FadeInUp>
      </section>

      {/* Section 1: The ICA Advantage */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100/80 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeInUp>
                <h2 className="text-3xl font-bold text-secondary mb-6 leading-tight">
                  Integrated Context Architecture: <br />
                  <span className="bg-linear-to-r from-primary to-amber-500 bg-clip-text text-transparent">Smart, Not Just Searching</span>
                </h2>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <div className="space-y-4 text-slate-600 text-lg">
                  <p>Traditional chatbots search through documents piece by piece—a slow and error-prone process known as RAG.</p>
                  <p>
                    <strong className="text-secondary font-semibold">Jiffy is different.</strong> ICA understands your entire knowledge base
                    contextually. It doesn't just "look up" keywords; it knows the answer.
                  </p>
                </div>
              </FadeInUp>

              <div className="mt-6 space-y-3">
                {["Faster responses (instant generation)", "Higher accuracy (no retrieval errors)", "Consistent persona and tone"].map((item, i) => (
                  <div key={item} className={`flex items-center gap-3 text-slate-600 animate-fade-in-up animate-delay-${100 + i * 100}`}>
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center text-green-600">
                      <CheckCircleIcon size={14} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Visual: Comparison Diagram */}
            <FadeInUp delay={0.2}>
              <div className="bg-linear-to-br from-warm-50 to-amber-50/50 rounded-xl p-8 border border-amber-100/50 flex flex-col items-center justify-center min-h-87.5">
                <div className="flex items-center gap-8 mb-8 w-full justify-center">
                  <div className="text-center opacity-60 grayscale animate-fade-in-up animate-delay-300">
                    <div className="w-24 h-32 bg-white border border-slate-200 rounded-xl shadow-sm mx-auto mb-3 flex items-center justify-center text-3xl">
                      📄
                    </div>
                    <p className="text-sm font-bold text-slate-700">Traditional RAG</p>
                    <p className="text-xs text-slate-500">Search → Retrieve → Guess</p>
                  </div>

                  <div className="text-xl font-medium text-slate-300 animate-scale-in animate-delay-400">vs</div>

                  <div className="text-center relative animate-fade-in-up animate-delay-500">
                    <div className="absolute -top-3 -right-3 bg-linear-to-r from-primary to-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-sm">
                      New
                    </div>
                    <div className="w-24 h-32 bg-linear-to-br from-white to-orange-50 border border-orange-200 rounded-xl shadow-lg mx-auto mb-3 flex items-center justify-center">
                      <GiraffeMascot size={56} />
                    </div>
                    <p className="text-sm font-bold text-primary">Jiffy ICA</p>
                    <p className="text-xs text-slate-500">Instant Knowledge</p>
                  </div>
                </div>
                <p className="text-center text-xs text-slate-400 uppercase tracking-widest">Conceptual Comparison</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Section 2: Three Steps to Deploy */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-warm-50 via-amber-50/30 to-warm-50" />
        <AnimatedBackground variant="subtle" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secondary">Three Steps to Deploy</h2>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: 1,
                title: "Provide Your Knowledge",
                desc: "Upload your FAQs, policy documents, course catalogs, and any other resources. We accept most formats.",
              },
              {
                num: 2,
                title: "We Configure ICA",
                desc: "Our team processes your data and optimizes the context specifically for your institution's needs.",
              },
              {
                num: 3,
                title: "Go Live & Learn",
                desc: "Deploy the agent on your site with a simple snippet. Start gathering insights immediately.",
              },
            ].map((step, i) => (
              <div key={step.num} className={`flex flex-col items-center text-center group animate-fade-in-up animate-delay-${150 * i}`}>
                <div className="w-16 h-16 bg-white border-2 border-slate-200 text-secondary rounded-xl flex items-center justify-center text-2xl font-bold mb-6 shadow-md group-hover:border-primary group-hover:text-primary group-hover:shadow-lg group-hover:shadow-orange-100/50 transition-all duration-300 transition-scale">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Built for Accuracy */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Why Accuracy Matters</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                In education, "close enough" isn't good enough. Students need the right answer, the first time.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-red-50/50 border-red-100/80" hoverEffect="none" delay={0}>
              <h3 className="text-red-900 font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-sm">✕</span>
                Common Failures
              </h3>
              <ul className="space-y-3 text-red-900/70">
                {["Hallucinating policies that don't exist", "Providing outdated deadlines", "Getting confused by similar course codes"].map(
                  (item, i) => (
                    <li key={item} className={`flex items-start gap-2 animate-fade-in-up animate-delay-${i * 100}`}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </Card>

            <Card className="bg-green-50/50 border-green-100/80" hoverEffect="none" delay={0.1}>
              <h3 className="text-green-900 font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                  <CheckCircleIcon size={14} />
                </span>
                The Jiffy Difference
              </h3>
              <ul className="space-y-3 text-green-900/70">
                {["Strict adherence to provided facts", "Context-aware date handling", "Precise distinction between entities"].map((item, i) => (
                  <li key={item} className={`flex items-start gap-2 animate-fade-in-up animate-delay-${100 + i * 100}`}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <FadeInUp delay={0.2}>
            <div className="text-center">
              <Button href="/resources/white-paper" variant="outline">
                Read Technical White Paper
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <FadeInUp>
          <h2 className="text-3xl font-bold text-secondary mb-6">See What Jiffy Can Do For You</h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <Button href="/demo">Request Demo</Button>
        </FadeInUp>
      </section>
    </div>
  );
}
