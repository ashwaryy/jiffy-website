import Button from "../../../components/Button";

export default function CaseStudy() {
  return (
    <div className="flex flex-col gap-12 pb-16 pt-12">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="border-b border-gray-200 pb-8">
           <span className="text-green-700 font-bold tracking-wider text-sm uppercase mb-2 block">Case Study</span>
           <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
             How Educational Institutions Leverage Jiffy Analytics
           </h1>
           <p className="text-lg text-secondary/60">
             Turning conversation data into better student support.
           </p>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose prose-lg prose-headings:text-secondary prose-p:text-secondary/80 prose-li:text-secondary/80">
        
        {/* Executive Summary */}
        <div className="bg-green-50 p-6 rounded-xl border border-green-100 not-prose mb-12">
           <h3 className="text-lg font-bold text-green-900 mb-2">Executive Summary</h3>
           <p className="text-green-800/80">
             This case study examines how a mid-sized university used Jiffy's Knowledge Agent and Analytics Dashboard to reduce support workload by 40% while identifying key areas for improvement in their student outreach strategy.
           </p>
        </div>

        <h2>1. The Challenge</h2>
        <p>
          Educational institutions face a cyclical deluge of repetitive queries. Admissions offices are overwhelmed during application season, and financial aid departments are buried under questions about deadlines and forms.
        </p>
        <p>
          Traditional support channels (email, phone) are resource-intensive and offer limited visibility into <em>what</em> students are actually asking, making it difficult to be proactive.
        </p>

        <h2>2. The Jiffy Solution</h2>
        <p>
          The university deployed Jiffy's Knowledge Agent to handle common queries regarding admissions, courses, and campus policies. Crucially, they utilized the <strong>Jiffy Pulse</strong> dashboard to monitor real-time analytics.
        </p>

        <h2>3. Analytics in Action</h2>
        <p>The data revealed insights that the administration had previously missed:</p>
        
        <h3 className="text-xl font-bold text-secondary mt-8 mb-4">Example 1: Geographic Insights</h3>
        <p>
          <strong>Insight:</strong> The "Geographic Intelligence" map showed 40% of queries coming from a specific non-local region they hadn't targeted.
          <br/>
          <strong>Action:</strong> The admissions team launched a targeted digital outreach campaign in that area.
          <br/>
          <strong>Result:</strong> A 25% increase in applications from that new geography.
        </p>

        <h3 className="text-xl font-bold text-secondary mt-8 mb-4">Example 2: Topic Trends</h3>
        <p>
          <strong>Insight:</strong> A sudden spike in "scholarship" and "financial aid" queries occurred in early March, two weeks before they expected it.
          <br/>
          <strong>Action:</strong> They immediately prioritized a dedicated scholarship FAQ email blast.
          <br/>
          <strong>Result:</strong> Support ticket volume related to aid dropped by 30%.
        </p>

        <h3 className="text-xl font-bold text-secondary mt-8 mb-4">Example 3: Peak Hour Optimization</h3>
        <p>
          <strong>Insight:</strong> 70% of chat activity occurred between 7 PM and 11 PM, when staff were offline.
          <br/>
          <strong>Action:</strong> Support staff hours were shifted to cover evening peak times.
          <br/>
          <strong>Result:</strong> Improved response times for complex queries that required human escalation.
        </p>

        <h2>4. Measurable Impact</h2>
        <ul>
          <li><strong>40% Reduction</strong> in overall support workload.</li>
          <li><strong>3x Faster</strong> query resolution for students.</li>
          <li><strong>Data-Driven</strong> resource allocation for the next academic year.</li>
        </ul>

        <h2>5. Key Takeaways</h2>
        <p>
          Analytics reveal what institutions can't see otherwise. By transforming chat logs into institutional intelligence, Jiffy Pulse enables proactive decisions that improve both the student experience and operational efficiency.
        </p>
      </article>

      {/* CTA Section */}
      <section className="bg-secondary text-white py-12 mt-8 rounded-t-3xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h3 className="text-2xl font-bold mb-4">Ready to Unlock Your Institution's Insights?</h3>
           <div className="flex justify-center">
              <Button href="/demo" className="bg-white text-secondary hover:bg-orange-100">Request Demo</Button>
           </div>
        </div>
      </section>
    </div>
  );
}
