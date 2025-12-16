import type { Metadata } from "next";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { AnimatedBackground, FadeInUp } from "../../components/animations";
import { SetupIcon, ChatIcon, CheckCircleIcon, AnalyticsIcon, AccuracyIcon, SpeedIcon } from "../../components/icons";
import { generatePageMetadata } from "../../lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Pricing",
  description: "Transparent, usage-based pricing starting from $5/month. No hidden fees, no markup on AI costs. Start with a free evaluation period.",
  path: "/pricing",
});

export default function Pricing() {
  const valueProps = [
    {
      title: "Cost Transparency",
      icon: <AccuracyIcon size={28} />,
      description: "No hidden fees, no markups. AI usage is billed at exactly what providers charge — we pass through costs directly to you.",
    },
    {
      title: "Usage Optimization",
      icon: <AnalyticsIcon size={28} />,
      description: "We help you select only the resources you need. No paying for features you won't use — just what makes sense for your institution.",
    },
    {
      title: "Scales With You",
      icon: <SpeedIcon size={28} />,
      description: "Start small and grow without pricing surprises. Your costs scale predictably with your actual usage, not arbitrary tiers.",
    },
  ];

  const includedFeatures = [
    "Full platform access",
    "Jiffy Pulse Analytics",
    "Unlimited team members",
    "Custom branding",
    "Priority support",
    "Data export (CSV/JSON)",
  ];

  return (
    <div className="flex flex-col gap-16 pb-16 pt-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
            Pricing That <br className="hidden md:block" />
            <span className="bg-linear-to-r from-primary to-amber-500 bg-clip-text text-transparent">Works For You</span>
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            No arbitrary tiers. No one-size-fits-all pricing. We optimize based on your institution's actual needs to keep costs as low as possible.
          </p>
        </FadeInUp>
      </section>

      {/* Pricing Model Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Equation Header */}
        <FadeInUp>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <div className="text-lg font-medium text-slate-600">Your Price</div>
            <div className="text-2xl font-bold text-slate-400">=</div>
            <div className="flex items-center gap-4">
              <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-100">
                <span className="font-bold text-secondary">Platform Fee</span>
                <span className="text-slate-400 text-sm ml-2">(flat)</span>
              </div>
              <div className="text-2xl font-bold text-primary">+</div>
              <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-100">
                <span className="font-bold text-secondary">AI Usage</span>
                <span className="text-slate-400 text-sm ml-2">(per use)</span>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Curved arrows pointing to cards - desktop only */}
        <div className="hidden md:block relative h-12 max-w-4xl mx-auto">
          <svg className="absolute inset-0 w-full h-full text-slate-300 overflow-visible" viewBox="0 0 400 48" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrowLeft" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
                <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="currentColor" opacity="0.5"/>
              </marker>
              <marker id="arrowRight" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="currentColor" opacity="0.5"/>
              </marker>
            </defs>
            {/* Left arrow - curves down and left to Platform Fee card */}
            <path d="M160 0 Q160 24, 100 40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 3" markerEnd="url(#arrowLeft)"/>
            {/* Right arrow - curves down and right to AI Usage card */}
            <path d="M240 0 Q240 24, 300 40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 3" markerEnd="url(#arrowRight)"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Platform Fee Card */}
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 h-full transition-lift">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-orange-50 to-amber-50 flex items-center justify-center text-primary mb-6">
                <SetupIcon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">Platform Fee</h3>
              <div className="mb-4">
                <span className="text-sm text-slate-500">Starting from</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-secondary">$5</span>
                  <span className="text-slate-500">/month</span>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Infrastructure and hosting tailored to your needs. Scales with your institution — pay only for what you actually require.
              </p>
              <ul className="space-y-3">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircleIcon size={18} className="text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI Usage Card */}
          <div className="animate-fade-in-up animate-delay-100">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 h-full transition-lift">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-orange-50 to-amber-50 flex items-center justify-center text-primary mb-6">
                <ChatIcon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">AI Usage</h3>
              <div className="mb-4">
                <span className="text-sm text-slate-500">Billed at</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-secondary">Cost</span>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Pay-as-you-go with zero markup. We pass through AI provider costs directly — you pay exactly what the AI models charge.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-secondary">No markup on AI costs</p>
                    <p className="text-xs text-slate-500">Direct pass-through pricing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-secondary">Only pay for what you use</p>
                    <p className="text-xs text-slate-500">No minimum commitments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-secondary">Transparent billing</p>
                    <p className="text-xs text-slate-500">Detailed usage breakdown</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Evaluation Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-warm-50 via-amber-50/30 to-warm-50" />
        <AnimatedBackground variant="subtle" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-amber-200 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-secondary">Free Evaluation Available</span>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Try Before You Commit
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-lg text-slate-600 mb-8">
                Start with a free evaluation period to test and assess Jiffy for your institution. No infrastructure costs during trial, plus limited free AI usage included.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircleIcon size={24} className="text-primary mx-auto mb-2" />
                  <p className="font-medium text-secondary">No infrastructure cost</p>
                  <p className="text-sm text-slate-500">During evaluation period</p>
                </div>
                <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircleIcon size={24} className="text-primary mx-auto mb-2" />
                  <p className="font-medium text-secondary">Free AI usage included</p>
                  <p className="text-sm text-slate-500">Limited credits to test</p>
                </div>
                <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircleIcon size={24} className="text-primary mx-auto mb-2" />
                  <p className="font-medium text-secondary">Full platform access</p>
                  <p className="text-sm text-slate-500">No feature restrictions</p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Why This Pricing Model?</h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            We believe you shouldn't pay for more than you need. Our pricing is designed to be fair, transparent, and aligned with your success.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((prop, i) => (
            <div key={prop.title} className={`animate-fade-in-up animate-delay-${100 * i}`}>
              <Card title={prop.title} icon={prop.icon} hoverEffect="lift" className="h-full">
                <p className="text-slate-600">{prop.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-br from-secondary via-slate-800 to-secondary rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl animate-fade-in-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-amber-400/20 to-transparent rounded-full blur-3xl opacity-20" />

          <div className="relative z-10 text-center">
            <FadeInUp>
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="mb-8 opacity-90 max-w-2xl mx-auto text-slate-300">
                Let's discuss your institution's needs and find the optimal setup for you. Start with a free evaluation — no commitment required.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/demo" variant="primary">
                  Start Free Evaluation
                </Button>
                <Button href="/demo" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Talk to Sales
                </Button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
}
