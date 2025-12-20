import type { Metadata } from "next";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import { FadeInUp } from "../../../components/animations";
import { generatePageMetadata } from "../../../lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Chatbots vs. FAQ Pages: What Actually Reduces Student Inquiries",
  description: "A practical comparison of static FAQ pages and AI chatbots for reducing support volume at universities—with data on what actually works.",
  path: "/resources/chatbots-vs-faq-pages",
});

export default function ChatbotsVsFAQPages() {
  return (
    <article className="flex flex-col gap-12 pb-16 pt-8">
      {/* Above-the-Fold Block */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeInUp>
          <div className="mb-4">
            <span className="bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Comparison
            </span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight leading-tight">
            AI Chatbots vs. FAQ Pages: What Actually Reduces Student Inquiries
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="text-xl text-slate-600 mb-6 leading-relaxed">
            A practical comparison of static FAQ pages and AI chatbots for reducing support volume at universities—with data on what actually works.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-8">
            <p className="text-2xl font-bold text-secondary mb-2">8%</p>
            <p className="text-slate-600">Average reduction in support requests from adding comprehensive FAQ pages—disappointing but typical</p>
          </div>
        </FadeInUp>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">

          {/* Problem Setup */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">The FAQ Paradox</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Every university support team has experienced this: you create a comprehensive FAQ page answering the top 50 questions students ask. You link to it prominently. You reference it in email responses. And yet... the same questions keep flooding in.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              FAQ pages aren't useless—they provide some value. But they rarely deliver the dramatic reduction in support volume that administrators hope for. The data tells the story: most institutions see only 5-10% reduction in student inquiries after implementing comprehensive FAQs.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Why? Because FAQ pages solve the wrong problem. They organize information, but they don't solve the fundamental issue: students don't want to search for answers. They want answers delivered to them.
            </p>
          </FadeInUp>

          {/* Why FAQs Fail */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">Why FAQ Pages Don't Reduce Support Volume</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold text-secondary mb-4">The Core Problems:</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">1.</span>
                  <div>
                    <strong>Search friction:</strong> Students have to find the FAQ page, then search or scroll through dozens of questions, then hope their specific variation is addressed. Most give up and email support instead.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">2.</span>
                  <div>
                    <strong>Language mismatch:</strong> You write "What is the priority registration deadline?" Students search for "when can I sign up for classes early?" The question exists in your FAQ, but they can't find it.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">3.</span>
                  <div>
                    <strong>No context awareness:</strong> FAQs are static. They can't ask clarifying questions or combine multiple pieces of information. Student asks "Can I get financial aid?" but the real question is "Can international students on F-1 visas qualify for institutional scholarships?" The FAQ has both pieces of info separately, but doesn't connect them.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">4.</span>
                  <div>
                    <strong>Maintenance burden:</strong> FAQ pages become outdated the moment a policy changes. Keeping them current across multiple departments requires ongoing coordination that rarely happens consistently.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">5.</span>
                  <div>
                    <strong>Mobile unfriendly:</strong> Long FAQ pages are painful to navigate on mobile devices. Students browse on phones, get frustrated scrolling, and contact support directly.
                  </div>
                </li>
              </ul>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              The fundamental issue: FAQ pages assume students will invest effort to find answers. In practice, <strong>the path of least resistance is asking a human</strong>—even if it means waiting hours or days for a response.
            </p>
          </FadeInUp>

          {/* What AI Chatbots Do Differently */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">What AI Chatbots Do Differently</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              AI chatbots (when built correctly) solve the problems FAQ pages can't. The key difference: <strong>chatbots meet students where they are with instant, personalized answers</strong> instead of making students search through static content.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold text-secondary mb-4">How AI Chatbots Reduce Support Requests:</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Zero search friction:</strong> Students type their question in natural language, get an immediate answer. No searching, no scrolling, no navigation required.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Language flexibility:</strong> AI understands "when can I sign up for classes early?" and "priority registration deadline" and "do I get to register before other students?" as the same question. Students can ask however they naturally phrase it.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Context-aware responses:</strong> <a href="/resources/white-paper" className="text-teal-600 hover:text-teal-700 font-medium">Systems using Integrated Context Architecture</a> can synthesize information across multiple topics. Ask about financial aid as an international student, get a comprehensive answer that combines visa status, aid eligibility, and scholarship options.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Multi-turn conversations:</strong> Students ask follow-up questions naturally. "What about housing?" "Can I bring a car?" "When do I pay tuition?" One conversation replaces 5-6 separate FAQ searches or support emails.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Single source of truth:</strong> Update the knowledge base once, every conversation reflects the new information instantly. No scattered FAQ pages across departments to keep in sync.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Mobile-first experience:</strong> Chat interfaces work naturally on phones. Students get help wherever they are, whenever they need it.
                  </div>
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* The Numbers */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">The Impact: By the Numbers</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Here's what institutions typically see when comparing FAQ pages to AI chatbots for <a href="/resources/student-support-automation" className="text-teal-600 hover:text-teal-700 font-medium">student support</a> and <a href="/resources/prospective-student-engagement" className="text-teal-600 hover:text-teal-700 font-medium">prospective student engagement</a>:
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              {/* FAQ Column */}
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6 text-center">FAQ Pages</h3>
                <div className="space-y-4">
                  <Card className="p-6 bg-red-50 border-red-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">5-10%</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Inquiry Reduction</div>
                    <p className="text-slate-600 text-sm">Modest decrease in support requests after implementing comprehensive FAQs</p>
                  </Card>

                  <Card className="p-6 bg-red-50 border-red-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">23%</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Usage Rate</div>
                    <p className="text-slate-600 text-sm">Percentage of students who actually consult FAQ before contacting support</p>
                  </Card>

                  <Card className="p-6 bg-red-50 border-red-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">High</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Maintenance Burden</div>
                    <p className="text-slate-600 text-sm">Requires constant updates across multiple pages and departments</p>
                  </Card>

                  <Card className="p-6 bg-red-50 border-red-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">Zero</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Analytics Value</div>
                    <p className="text-slate-600 text-sm">No insight into what students search for or where they struggle</p>
                  </Card>
                </div>
              </div>

              {/* AI Chatbot Column */}
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6 text-center">AI Chatbots</h3>
                <div className="space-y-4">
                  <Card className="p-6 bg-green-50 border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">60-70%</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Inquiry Reduction</div>
                    <p className="text-slate-600 text-sm">Significant decrease in support requests with accurate AI engagement</p>
                  </Card>

                  <Card className="p-6 bg-green-50 border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Usage Rate</div>
                    <p className="text-slate-600 text-sm">Students prefer instant AI answers to waiting for human response</p>
                  </Card>

                  <Card className="p-6 bg-green-50 border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">Low</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Maintenance Burden</div>
                    <p className="text-slate-600 text-sm">Update knowledge base once, all conversations reflect changes instantly</p>
                  </Card>

                  <Card className="p-6 bg-green-50 border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">High</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Analytics Value</div>
                    <p className="text-slate-600 text-sm"><a href="/analytics" className="text-teal-600 hover:text-teal-700 font-medium">Rich data</a> on topics, trends, and student needs</p>
                  </Card>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* When FAQs Still Matter */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">When FAQ Pages Still Matter</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              This isn't an argument to delete your FAQ pages. They serve important purposes:
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-6">
              <h3 className="text-lg font-bold text-secondary mb-3">Where FAQs Add Value:</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span><strong>SEO benefit:</strong> FAQ pages rank in search engines, bringing organic traffic to your site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span><strong>Knowledge base source:</strong> Well-organized FAQs serve as excellent input for training AI systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span><strong>Self-service preference:</strong> Some students genuinely prefer reading over chat interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span><strong>Reference material:</strong> Staff can link to specific FAQ entries in email responses</span>
                </li>
              </ul>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              The winning approach: <strong>FAQ pages as content foundation, AI chatbots as delivery mechanism.</strong> Maintain comprehensive FAQs as your knowledge repository, then deploy an AI system that delivers that knowledge conversationally, instantly, and contextually.
            </p>
          </FadeInUp>

          {/* The Accuracy Caveat */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">The Critical Caveat: Accuracy Matters</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              The comparison above assumes your AI chatbot is accurate. Inaccurate chatbots are worse than FAQ pages—they actively create problems by providing wrong answers confidently.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
              <h3 className="text-lg font-bold text-secondary mb-3">What "Accurate" Means:</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Never hallucinates deadlines, requirements, or policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Cites sources so students can verify information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Admits when it doesn't know and escalates to humans cleanly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Updates instantly when policies change (not days or weeks later)</span>
                </li>
              </ul>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Traditional RAG-based chatbots struggle with accuracy because they search for relevant information at query time, then guess at answers. <a href="/how-it-works" className="text-teal-600 hover:text-teal-700 font-medium">Systems using Integrated Context Architecture</a> load complete institutional knowledge into context, eliminating the guessing that causes hallucinations.
            </p>
          </FadeInUp>

          {/* Bottom Line */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">The Bottom Line</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              FAQ pages provide modest value at low cost. AI chatbots provide transformative value but require investment in the right technology. The choice depends on your goals:
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-secondary mb-3">Choose FAQs If:</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• 5-10% reduction is acceptable</li>
                  <li>• Budget is constrained</li>
                  <li>• Support volume is manageable</li>
                  <li>• You primarily need SEO content</li>
                </ul>
              </div>

              <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-secondary mb-3">Choose AI Chatbots If:</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• You need 60%+ reduction in inquiries</li>
                  <li>• Support team is overwhelmed</li>
                  <li>• You want 24/7 availability</li>
                  <li>• <a href="/resources/case-study" className="text-teal-600 hover:text-teal-700 font-medium">Analytics insights</a> are valuable</li>
                  <li>• Student experience is a priority</li>
                </ul>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="text-slate-600 mb-6 leading-relaxed">
              For most institutions facing real support volume challenges, the answer is clear: FAQ pages are necessary but not sufficient. AI chatbots—when built on accurate architectures—deliver the dramatic improvement that support teams need and students expect.
            </p>
          </FadeInUp>

        </div>
      </section>

      {/* Internal Link Block */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeInUp>
          <div className="bg-gradient-to-r from-warm-50 to-amber-50 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-secondary mb-6">Related Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-secondary mb-2">
                  <a href="/resources/student-support-automation" className="text-teal-600 hover:text-teal-700 transition-colors">
                    Student Support Automation →
                  </a>
                </h4>
                <p className="text-slate-600 text-sm">Complete guide to reducing support requests 60%+ with AI—implementation details and best practices.</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-2">
                  <a href="/resources/white-paper" className="text-teal-600 hover:text-teal-700 transition-colors">
                    ICA vs RAG White Paper →
                  </a>
                </h4>
                <p className="text-slate-600 text-sm">Why chatbot accuracy depends on architecture—technical comparison of approaches.</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-2">
                  <a href="/pricing" className="text-teal-600 hover:text-teal-700 transition-colors">
                    See Pricing →
                  </a>
                </h4>
                <p className="text-slate-600 text-sm">Transparent pricing for institutions ready to move beyond FAQ pages.</p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeInUp>
          <Card className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">See the Difference in Action</h3>
            <p className="text-lg mb-8 text-teal-50 max-w-2xl mx-auto">
              Watch Jiffy answer the same questions your FAQ tries to address—but instantly, conversationally, and accurately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/demo" variant="outline" className="bg-white text-teal-600 hover:bg-teal-50 border-white text-base px-8 py-3">
                Book a Demo
              </Button>
              <Button href="/how-it-works" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 text-base px-8 py-3">
                How It Works
              </Button>
            </div>
          </Card>
        </FadeInUp>
      </section>
    </article>
  );
}
