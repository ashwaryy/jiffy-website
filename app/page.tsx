import type { Metadata } from "next";
import Button from "../components/Button";
import Card from "../components/Card";
import { AnimatedBackground, FadeInUp } from "../components/animations";
import { GiraffeMascot, SpeedIcon, AnalyticsIcon, SetupIcon } from "../components/icons";
import { generatePageMetadata } from "../lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Jiffy.live - Your Institution's Knowledge Agent",
  description: "Lightning-fast answers. Deep insights. Built on Integrated Context Architecture (ICA).",
  path: "",
});

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <AnimatedBackground variant="hero" />

        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-amber-50/30 via-transparent to-white pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <FadeInUp delay={0}>
                <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <span className="bg-linear-to-r from-orange-100 to-amber-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
                    New Standard
                  </span>
                  <span className="text-slate-500 text-xs font-medium">Integrated Context Architecture</span>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h1 className="text-5xl md:text-6xl font-bold text-secondary tracking-tight leading-[1.1]">
                  Meet Your Institution's <br className="hidden lg:block" />
                  <span className="bg-linear-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">Knowledge Agent</span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Lightning-fast answers. Deep insights. <br />
                  Built on Integrated Context Architecture (ICA).
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
                  <Button href="/demo">Request a Demo</Button>
                  <Button href="/how-it-works" variant="outline">
                    See How It Works
                  </Button>
                </div>
              </FadeInUp>
            </div>
            {/* Chat Demo Visual */}
            <FadeInUp delay={0.2} className="relative">
              <div className="relative h-112.5 w-full flex items-center justify-center bg-white rounded-2xl overflow-hidden border border-slate-100/80 shadow-2xl shadow-orange-100/30">
                {/* Abstract Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]" />

                {/* Warm glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-amber-100/50 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10 text-center p-8 w-full max-w-md">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-linear-to-tr from-primary via-orange-400 to-amber-400 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200/50 transform -rotate-6 transition-scale">
                      <GiraffeMascot size={64} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-left w-3/4 mr-auto animate-fade-in-up animate-delay-500">
                      <div className="h-2 w-1/3 bg-slate-100 rounded mb-2" />
                      <p className="text-sm text-slate-600 font-medium">How do I apply for financial aid?</p>
                    </div>

                    <div className="bg-linear-to-br from-orange-50 to-amber-50 p-4 rounded-xl shadow-sm border border-orange-100/50 text-left w-5/6 ml-auto animate-fade-in-up animate-delay-1200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-linear-to-br from-primary to-amber-400 flex items-center justify-center">
                          <GiraffeMascot size={12} />
                        </div>
                        <span className="text-xs font-bold text-primary">Jiffy Agent</span>
                      </div>
                      <p className="text-sm text-slate-700">You can apply via the FAFSA portal. The deadline for this semester is May 1st.</p>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-left w-4/5 mr-auto animate-fade-in-up animate-delay-2000">
                      <div className="h-2 w-1/4 bg-slate-100 rounded mb-2" />
                      <p className="text-sm text-slate-600 font-medium">What documents do I need?</p>
                    </div>

                    <div className="bg-linear-to-br from-orange-50 to-amber-50 p-4 rounded-xl shadow-sm border border-orange-100/50 text-left w-11/12 ml-auto animate-fade-in-up animate-delay-2500">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-linear-to-br from-primary to-amber-400 flex items-center justify-center">
                          <GiraffeMascot size={12} />
                        </div>
                        <span className="text-xs font-bold text-primary">Jiffy Agent</span>
                      </div>
                      <p className="text-sm text-slate-700">You'll need your tax returns, W-2 forms, and bank statements.</p>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-left w-2/3 mr-auto animate-fade-in-up animate-delay-3500">
                      <div className="h-2 w-1/2 bg-slate-100 rounded mb-2" />
                      <p className="text-sm text-slate-600 font-medium">Can I get an extension?</p>
                    </div>

                    <div className="bg-linear-to-br from-orange-50 to-amber-50 p-4 rounded-xl shadow-sm border border-orange-100/50 text-left w-5/6 ml-auto animate-fade-in-up animate-delay-4500">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-linear-to-br from-primary to-amber-400 flex items-center justify-center">
                          <GiraffeMascot size={12} />
                        </div>
                        <span className="text-xs font-bold text-primary">Jiffy Agent</span>
                      </div>
                      <p className="text-sm text-slate-700">Extensions are granted on a case-by-case basis. Please contact the financial aid office directly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>{" "}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Accurate & Fast"
            icon={<SpeedIcon size={24} />}
            className="bg-white/90 backdrop-blur-sm border-slate-200/80"
            hoverEffect="lift"
            delay={0}
          >
            <p className="text-slate-600 leading-relaxed">
              No more hallucinations or slow searches. ICA delivers precise answers instantly, understanding your institutional context perfectly.
            </p>
          </Card>

          <Card
            title="Rich Analytics"
            icon={<AnalyticsIcon size={24} />}
            className="bg-white/90 backdrop-blur-sm border-slate-200/80"
            hoverEffect="lift"
            delay={0.1}
          >
            <p className="text-slate-600 leading-relaxed">
              Understand what your community needs. See geographic trends, popular topics, and peak activity times at a glance.
            </p>
          </Card>

          <Card
            title="Simple Setup"
            icon={<SetupIcon size={24} />}
            className="bg-white/90 backdrop-blur-sm border-slate-200/80"
            hoverEffect="lift"
            delay={0.2}
          >
            <p className="text-slate-600 leading-relaxed">
              From knowledge base to live agent in days. No complex infrastructure required—we handle the heavy lifting.
            </p>
          </Card>
        </div>
      </section>

      {/* How ICA Works Teaser */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-warm-50 via-amber-50/30 to-warm-50" />
        <AnimatedBackground variant="subtle" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 tracking-tight">Beyond Traditional RAG</h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Most chatbots search through documents, leading to slow and often inaccurate answers. Jiffy uses Integrated Context Architecture (ICA)
              to understand your entire knowledge base contextually, ensuring instant and correct responses every time.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <Button href="/resources/white-paper" variant="outline" className="bg-white hover:bg-orange-50">
              Read the White Paper
            </Button>
          </FadeInUp>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <FadeInUp>
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">Trusted Technology</p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="flex justify-center items-center gap-3 mb-16">
            <GiraffeMascot size={40} />
            <span className="text-xl font-bold text-secondary">Built by Good Faith Labs</span>
          </div>
        </FadeInUp>

        {/* Testimonial */}
        <FadeInUp delay={0.2}>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute top-0 left-0 text-8xl text-orange-100 font-serif -translate-x-1/2 -translate-y-1/3 select-none animate-scale-in animate-delay-300">
              "
            </div>
            <p className="text-2xl md:text-3xl font-light text-slate-700 italic relative z-10 leading-relaxed">
              Jiffy transformed how we handle student queries. The accuracy is unmatched.
            </p>
            <p className="mt-6 font-bold text-secondary text-sm uppercase tracking-wide">- University Administrator</p>
          </div>
        </FadeInUp>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-linear-to-br from-secondary via-slate-800 to-secondary rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl animate-fade-in-up">
          <div className="relative z-10 max-w-2xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to Transform Your Institution's Support?</h2>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <Button
                href="/demo"
                className="bg-linear-to-r from-primary to-amber-500 hover:from-primary-dark hover:to-amber-600 text-white border-none shadow-lg shadow-orange-900/30 px-8 py-4 text-lg"
              >
                Request Demo
              </Button>
            </FadeInUp>
          </div>

          {/* Decorative Abstract Shapes - Static */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-white/10 to-transparent rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-primary/30 to-transparent rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-40" />
        </div>
      </section>
    </div>
  );
}
