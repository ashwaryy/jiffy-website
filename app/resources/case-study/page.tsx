import Button from "../../../components/Button";
import { FadeInUp } from "../../../components/animations";
import { CheckCircleIcon } from "../../../components/icons";

export default function CaseStudy() {
  const examples = [
    {
      title: "Geographic Insights",
      insight:
        'The "Geographic Intelligence" map showed 40% of queries coming from a specific non-local region they hadn\'t targeted.',
      action:
        "The admissions team launched a targeted digital outreach campaign in that area.",
      result: "A 25% increase in applications from that new geography.",
    },
    {
      title: "Topic Trends",
      insight:
        'A sudden spike in "scholarship" and "financial aid" queries occurred in early March, two weeks before they expected it.',
      action:
        "They immediately prioritized a dedicated scholarship FAQ email blast.",
      result: "Support ticket volume related to aid dropped by 30%.",
    },
    {
      title: "Peak Hour Optimization",
      insight:
        "70% of chat activity occurred between 7 PM and 11 PM, when staff were offline.",
      action: "Support staff hours were shifted to cover evening peak times.",
      result:
        "Improved response times for complex queries that required human escalation.",
    },
  ];

  return (
    <div className="flex flex-col gap-12 pb-16 pt-16">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeInUp>
          <div className="border-b border-slate-200 pb-8">
            <span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-3 block">
              Case Study
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              How Educational Institutions Leverage Jiffy Analytics
            </h1>
            <p className="text-lg text-slate-500 font-medium">
              Turning conversation data into better student support.
            </p>
          </div>
        </FadeInUp>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose prose-lg prose-headings:text-secondary prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-secondary">
        {/* Executive Summary */}
        <FadeInUp delay={0.1}>
          <div className="bg-gradient-to-br from-green-50/50 to-emerald-50/50 p-8 rounded-xl border border-green-100/50 not-prose mb-12 shadow-sm transition-scale">
            <h3 className="text-sm font-bold text-green-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircleIcon size={16} className="text-green-600" />
              Executive Summary
            </h3>
            <p className="text-green-900/80 leading-relaxed">
              This case study examines how a mid-sized university used Jiffy's
              Knowledge Agent and Analytics Dashboard to reduce support workload
              by 40% while identifying key areas for improvement in their student
              outreach strategy.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <h2>1. The Challenge</h2>
          <p>
            Educational institutions face a cyclical deluge of repetitive
            queries. Admissions offices are overwhelmed during application
            season, and financial aid departments are buried under questions
            about deadlines and forms.
          </p>
          <p>
            Traditional support channels (email, phone) are resource-intensive
            and offer limited visibility into <em>what</em> students are actually
            asking, making it difficult to be proactive.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <h2>2. The Jiffy Solution</h2>
          <p>
            The university deployed Jiffy's Knowledge Agent to handle common
            queries regarding admissions, courses, and campus policies.
            Crucially, they utilized the <strong>Jiffy Pulse</strong> dashboard
            to monitor real-time analytics.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.25}>
          <h2>3. Analytics in Action</h2>
          <p>
            The data revealed insights that the administration had previously
            missed:
          </p>
        </FadeInUp>

        {examples.map((example, i) => (
          <FadeInUp key={example.title} delay={0.3 + i * 0.1}>
            <div className="not-prose my-8 p-6 bg-white rounded-xl border border-slate-100 shadow-sm transition-lift">
              <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-green-600 text-sm font-bold">
                  {i + 1}
                </span>
                {example.title}
              </h3>
              <div className="space-y-3 text-slate-600">
                <p>
                  <span className="font-semibold text-secondary">Insight:</span>{" "}
                  {example.insight}
                </p>
                <p>
                  <span className="font-semibold text-secondary">Action:</span>{" "}
                  {example.action}
                </p>
                <p className="text-green-700 font-medium">
                  <span className="font-semibold text-green-800">Result:</span>{" "}
                  {example.result}
                </p>
              </div>
            </div>
          </FadeInUp>
        ))}

        <FadeInUp delay={0.6}>
          <h2>4. Measurable Impact</h2>
          <ul>
            <li>
              <strong>40% Reduction</strong> in overall support workload.
            </li>
            <li>
              <strong>3x Faster</strong> query resolution for students.
            </li>
            <li>
              <strong>Data-Driven</strong> resource allocation for the next
              academic year.
            </li>
          </ul>
        </FadeInUp>

        <FadeInUp delay={0.65}>
          <h2>5. Key Takeaways</h2>
          <p>
            Analytics reveal what institutions can't see otherwise. By
            transforming chat logs into institutional intelligence, Jiffy Pulse
            enables proactive decisions that improve both the student experience
            and operational efficiency.
          </p>
        </FadeInUp>
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary via-slate-800 to-secondary text-white py-16 mt-8 rounded-3xl shadow-2xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden relative">
        {/* Static background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-400/20 to-transparent rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInUp>
            <h3 className="text-2xl font-bold mb-6">
              Ready to Unlock Your Institution's Insights?
            </h3>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="flex justify-center">
              <Button
                href="/demo"
                className="bg-gradient-to-r from-primary to-amber-500 hover:from-primary-dark hover:to-amber-600 text-white border-none shadow-lg"
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
