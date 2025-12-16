import type { Metadata } from "next";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { FadeInUp, AnimatedBackground } from "../../components/animations";
import { GiraffeMascot, DocumentIcon } from "../../components/icons";
import { generatePageMetadata } from "../../lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Resources",
  description: "Explore technical documentation, case studies, and insights about Jiffy's knowledge agent platform.",
  path: "/resources",
});

export default function Resources() {
  return (
    <div className="flex flex-col gap-16 pb-16 pt-16">
      {/* Page Headline */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 tracking-tight">
            Learn More About <span className="bg-linear-to-r from-primary to-amber-500 bg-clip-text text-transparent">Jiffy & ICA</span>
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">Deep dives, case studies, and technical insights.</p>
        </FadeInUp>
      </section>

      {/* Resource Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* White Paper */}
          <FadeInUp delay={0.1}>
            <div className="transition-lift h-full">
              <Card className="flex flex-col h-full hover:border-primary/50 transition-all duration-300 bg-white hover:shadow-xl hover:shadow-orange-100/30">
                <div className="mb-4 flex items-center gap-2">
                  <span className="bg-linear-to-r from-orange-100 to-amber-100 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    White Paper
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">ICA vs RAG: Why Context Architecture Matters for Conversational AI</h3>
                <p className="text-slate-600 mb-6 grow leading-relaxed">
                  A technical deep-dive into why Integrated Context Architecture delivers faster, more accurate responses than traditional
                  Retrieval-Augmented Generation.
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <DocumentIcon size={14} />
                    12-minute read
                  </span>
                  <Button href="/resources/white-paper" variant="outline" className="text-sm px-4 py-2 bg-transparent hover:bg-orange-50">
                    Read White Paper
                  </Button>
                </div>
              </Card>
            </div>
          </FadeInUp>

          {/* Case Study */}
          <FadeInUp delay={0.2}>
            <div className="transition-lift h-full">
              <Card className="flex flex-col h-full hover:border-green-300/50 transition-all duration-300 bg-white hover:shadow-xl hover:shadow-green-100/30">
                <div className="mb-4">
                  <span className="bg-linear-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-green-100">
                    Case Study
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">How Educational Institutions Leverage Jiffy Analytics</h3>
                <p className="text-slate-600 mb-6 grow leading-relaxed">
                  Explore how universities and colleges use conversation data to improve student support, optimize resources, and make data-driven
                  decisions.
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <DocumentIcon size={14} />
                    8-minute read
                  </span>
                  <Button href="/resources/case-study" variant="outline" className="text-sm px-4 py-2 bg-transparent hover:bg-green-50">
                    Read Case Study
                  </Button>
                </div>
              </Card>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* About Good Faith Labs */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-warm-50 via-amber-50/30 to-warm-50" />
        <AnimatedBackground variant="subtle" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInUp>
            <div className="flex justify-center mb-4">
              <div className="transition-scale">
                <GiraffeMascot size={64} />
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-4">Built by Good Faith Labs</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              We build trustworthy software that delivers real value. Jiffy is our answer to the chatbot accuracy problem.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <a
              href="https://goodfaithlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:text-orange-600 transition-colors inline-flex items-center gap-2 group"
            >
              Learn more about Good Faith Labs
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
