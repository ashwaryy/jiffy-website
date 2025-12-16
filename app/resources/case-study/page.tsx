import Button from "../../../components/Button";
import { FadeInUp } from "../../../components/animations";
import { CheckCircleIcon } from "../../../components/icons";

export default function CaseStudy() {
  const examples = [
    {
      title: "Geographic Insights",
      insight: 'The "Geographic Intelligence" map showed 40% of queries coming from a specific non-local region they hadn\'t targeted.',
      action: "The admissions team launched a targeted digital outreach campaign in that area.",
      result: "A 25% increase in applications from that new geography.",
    },
    {
      title: "Topic Trends",
      insight: 'A sudden spike in "scholarship" and "financial aid" queries occurred in early March, two weeks before they expected it.',
      action: "They immediately prioritized a dedicated scholarship FAQ email blast.",
      result: "Support ticket volume related to aid dropped by 30%.",
    },
    {
      title: "Peak Hour Optimization",
      insight: "70% of chat activity occurred between 7 PM and 11 PM, when staff were offline.",
      action: "Support staff hours were shifted to cover evening peak times.",
      result: "Improved response times for complex queries that required human escalation.",
    },
  ];

  return (
    <div className="flex flex-col gap-12 pb-16 pt-16">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <FadeInUp>
          <div className="border-b border-slate-200 pb-12 mb-12">
            <span className="bg-linear-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent font-bold tracking-widest text-xs uppercase mb-4 block">
              Case Study
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight max-w-3xl mx-auto">
              How Educational Institutions Leverage Jiffy Analytics
            </h1>
            <div className="flex items-center justify-center gap-4 text-slate-500 text-sm font-medium">
              <span>Published by Good Faith Labs</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>December 2024</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>8 min read</span>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Executive Summary */}
        <FadeInUp delay={0.1}>
          <div className="bg-linear-to-br from-green-50/50 to-emerald-50/30 p-8 md:p-10 rounded-2xl border border-green-100/50 mb-16 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-green-500 to-emerald-400" />
            <h3 className="text-sm font-bold text-green-700 uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircleIcon size={16} className="text-green-500" />
              Executive Summary
            </h3>
            <p className="text-xl text-slate-700 leading-relaxed font-serif italic">
              "This case study examines how a mid-sized university used Jiffy's Knowledge Agent and Analytics Dashboard to reduce support workload by
              40% while identifying key areas for improvement in their student outreach strategy."
            </p>
          </div>
        </FadeInUp>

        <div className="prose prose-lg prose-slate max-w-none">
          <FadeInUp delay={0.15}>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mt-12 mb-6 pb-4 border-b border-slate-200">1. The Challenge</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Educational institutions face a cyclical deluge of repetitive queries. Admissions offices are overwhelmed during application season, and
              financial aid departments are buried under questions about deadlines and forms.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Traditional support channels (email, phone) are resource-intensive and offer limited visibility into <em>what</em> students are actually
              asking, making it difficult to be proactive.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mt-16 mb-6 pb-4 border-b border-slate-200">2. The Jiffy Solution</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The university deployed Jiffy's Knowledge Agent to handle common queries regarding admissions, courses, and campus policies. Crucially,
              they utilized the <strong>Jiffy Pulse</strong> dashboard to monitor real-time analytics.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.25}>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mt-16 mb-6 pb-4 border-b border-slate-200">3. Analytics in Action</h2>
            <p className="text-slate-600 leading-relaxed mb-6">The data revealed insights that the administration had previously missed:</p>
          </FadeInUp>

          {examples.map((example, i) => (
            <FadeInUp key={example.title} delay={0.3 + i * 0.1}>
              <div className="not-prose my-10 p-8 bg-white rounded-xl border border-slate-100 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center text-green-700 text-base font-bold shadow-sm">
                    {i + 1}
                  </span>
                  {example.title}
                </h3>
                <div className="space-y-4 text-slate-700 text-base">
                  <p>
                    <strong className="text-secondary">Insight:</strong> {example.insight}
                  </p>
                  <p>
                    <strong className="text-secondary">Action:</strong> {example.action}
                  </p>
                  <p className="text-green-700">
                    <strong className="text-green-800">Result:</strong> {example.result}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}

          <FadeInUp delay={0.6}>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mt-16 mb-6 pb-4 border-b border-slate-200">4. Measurable Impact</h2>
            <ul className="list-disc list-outside pl-6 space-y-4 mb-6 text-slate-600 marker:text-green-500">
              <li>
                <strong className="text-secondary">40% Reduction</strong> in overall support workload.
              </li>
              <li>
                <strong className="text-secondary">3x Faster</strong> query resolution for students.
              </li>
              <li>
                <strong className="text-secondary">Data-Driven</strong> resource allocation for the next academic year.
              </li>
            </ul>
          </FadeInUp>

          <FadeInUp delay={0.65}>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mt-16 mb-6 pb-4 border-b border-slate-200">5. Key Takeaways</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Analytics reveal what institutions can't see otherwise. By transforming chat logs into institutional intelligence, Jiffy Pulse enables
              proactive decisions that improve both the student experience and operational efficiency.
            </p>
          </FadeInUp>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-secondary via-slate-800 to-secondary text-white py-16 mt-16 rounded-3xl shadow-2xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden relative">
        {/* Static background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-green-400/20 to-transparent rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInUp>
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Ready to Unlock Your Institution's Insights?</h3>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Transform your support workload and enhance student engagement with Jiffy's powerful analytics.
            </p>
            <div className="flex justify-center">
              <Button
                href="/demo"
                className="bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-none shadow-lg shadow-green-500/30"
              >
                Request Demo
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}

