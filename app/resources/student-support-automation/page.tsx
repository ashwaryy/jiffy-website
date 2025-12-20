import type { Metadata } from "next";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import { FadeInUp } from "../../../components/animations";
import { generatePageMetadata } from "../../../lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "The Complete Guide to Student Support Automation",
  description: "How universities and colleges are using AI to deliver 24/7 student support, reduce ticket volume, and improve student satisfaction—without expanding staff.",
  path: "/resources/student-support-automation",
});

export default function StudentSupportAutomation() {
  return (
    <article className="flex flex-col gap-12 pb-16 pt-8">
      {/* Above-the-Fold Block */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeInUp>
          <div className="mb-4">
            <span className="bg-gradient-to-r from-orange-100 to-amber-100 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Complete Guide
            </span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight leading-tight">
            The Complete Guide to Student Support Automation
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="text-xl text-slate-600 mb-6 leading-relaxed">
            How universities and colleges are using AI to deliver 24/7 student support, reduce ticket volume by 60%+, and improve student satisfaction—without expanding staff.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="text-2xl font-bold text-secondary mb-2">67%</p>
            <p className="text-slate-600">Average reduction in student support tickets when institutions deploy accurate AI knowledge agents</p>
          </div>
        </FadeInUp>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">

          {/* Problem Articulation */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">The Student Support Crisis</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Student support teams across higher education face the same impossible equation: more students, more complexity, same staff. The result? Overwhelmed teams, frustrated students, and critical questions going unanswered during the moments that matter most.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="bg-white border border-slate-200 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-secondary mb-4">What Student Support Teams Are Dealing With:</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>Peak period chaos:</strong> Orientation, registration, financial aid deadlines—when students need help most, your team is underwater. Questions go unanswered for hours or days.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>Repetitive question fatigue:</strong> 80% of incoming questions are variations of the same 20 topics. Staff spend entire days answering "Where's my financial aid?" instead of handling complex cases.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>After-hours abandonment:</strong> Students live on their schedule, not yours. Questions at 11pm go unanswered until morning, creating anxiety and frustration.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>Knowledge scattered everywhere:</strong> Policies in one system, forms in another, procedures in email threads. Even experienced staff struggle to find correct answers quickly.</span>
                </li>
              </ul>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              The traditional response—hire more staff—doesn't scale financially or operationally. Universities need a different approach.
            </p>
          </FadeInUp>

          {/* Solution Framework */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">What Student Support Automation Actually Means</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Student support automation isn't about replacing staff—it's about giving them leverage. The right system handles repetitive, answerable questions instantly while freeing humans to focus on complex, high-value interactions.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <h3 className="text-2xl font-bold text-secondary mb-4 mt-8">How Most Institutions Get It Wrong</h3>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              The typical path: deploy a chatbot, watch it fail spectacularly, lose student trust, return to manual support. The failure pattern is predictable (and applies equally to <a href="/resources/prospective-student-engagement" className="text-primary hover:text-orange-600 font-medium">prospective student engagement</a>, IT help desks, and other use cases):
            </p>
          </FadeInUp>

          <FadeInUp delay={0.5}>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
              <h4 className="font-bold text-secondary mb-3">Common Chatbot Failures:</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Gives confident but incorrect answers to policy questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Hallucinates deadlines, requirements, or procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Can't handle slight variations in how questions are asked</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Frustrates students with "I don't understand" responses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Creates MORE work as staff correct misinformation</span>
                </li>
              </ul>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              The problem isn't AI itself—it's how the AI accesses and uses your knowledge. Traditional retrieval systems (RAG) search for relevant documents, then have the AI guess at answers. This introduces latency, inconsistency, and hallucinations.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.7}>
            <h3 className="text-2xl font-bold text-secondary mb-4 mt-8">The Better Approach: Integrated Context Architecture</h3>
          </FadeInUp>

          <FadeInUp delay={0.8}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Instead of searching for answers at query time, <a href="/resources/white-paper" className="text-primary hover:text-orange-600 font-medium">advanced systems using Integrated Context Architecture</a> load your entire knowledge base directly into the AI's working memory. The AI has complete institutional context for every conversation—no searching, no guessing, no hallucinations.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.9}>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
              <h4 className="font-bold text-secondary mb-3">What This Enables:</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Instant, accurate answers to policy questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Understands context across multiple questions in a conversation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Handles questions phrased dozens of different ways</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Cites sources so students can verify information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Updates instantly when policies change</span>
                </li>
              </ul>
            </div>
          </FadeInUp>

          <FadeInUp delay={1.0}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              This is the architecture behind <a href="/how-it-works" className="text-primary hover:text-orange-600 font-medium">Jiffy's Integrated Context Architecture (ICA)</a>—and why institutions see 60-70% ticket reduction without the accuracy problems that plague traditional chatbots.
            </p>
          </FadeInUp>

          {/* Proof Section */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">What Student Support Automation Delivers</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-6 leading-relaxed">
              When implemented correctly, student support automation transforms both student experience and operational efficiency. Here's what institutions typically see:
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">67%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Ticket Reduction</div>
                <p className="text-slate-600 text-sm">Average decrease in support tickets for routine questions, freeing staff for complex cases</p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Availability</div>
                <p className="text-slate-600 text-sm">Students get immediate answers outside business hours when anxiety is highest</p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Response Time</div>
                <p className="text-slate-600 text-sm">Average time from question to accurate answer, vs. hours or days for email</p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">94%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Student Satisfaction</div>
                <p className="text-slate-600 text-sm">Students prefer instant, accurate AI answers to waiting for human response</p>
              </Card>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <h3 className="text-2xl font-bold text-secondary mb-4 mt-8">Real Impact: Beyond the Numbers</h3>
          </FadeInUp>

          <FadeInUp delay={0.5}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              The quantitative metrics tell part of the story. The qualitative impact is where institutions see the most value:
            </p>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <div className="space-y-6 my-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-bold text-secondary mb-2">For Students</h4>
                <p className="text-slate-600">No more waiting days for simple answers. No more navigating confusing knowledge bases. Questions about financial aid, registration, housing, or campus services get answered immediately, reducing stress during critical periods.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-bold text-secondary mb-2">For Support Staff</h4>
                <p className="text-slate-600">Staff shift from repetitive question-answering to high-value work: complex cases, proactive outreach, process improvement. Burnout decreases. Job satisfaction increases.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-bold text-secondary mb-2">For Administrators</h4>
                <p className="text-slate-600"><a href="/analytics" className="text-primary hover:text-orange-600 font-medium">Conversation analytics</a> reveal what students actually struggle with—data that drives better policies, clearer communication, and resource allocation decisions. <a href="/resources/case-study" className="text-primary hover:text-orange-600 font-medium">See how institutions use this data</a>.</p>
              </div>
            </div>
          </FadeInUp>

          {/* Implementation Guidance */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">How to Implement Student Support Automation</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Successful implementations follow a consistent pattern. Here's the framework that works:
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="space-y-8 my-8">
              <div>
                <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-3">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Start With Your Highest-Volume Questions
                </h3>
                <p className="text-slate-600 ml-11">Don't try to automate everything at once. Identify your top 20-30 questions by volume. These typically cover financial aid, registration, housing, course enrollment, and campus services. Get these right first—they'll deliver 60%+ of your ticket reduction.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-3">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Centralize Your Knowledge
                </h3>
                <p className="text-slate-600 ml-11">Audit where institutional knowledge lives: website FAQs, policy documents, staff wikis, email templates, departmental resources. Consolidate accurate, up-to-date information. This is harder than the technology—but it's where the value comes from.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-3">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Choose Technology That Won't Embarrass You
                </h3>
                <p className="text-slate-600 ml-11">Your chatbot represents your institution. One wrong answer about financial aid or degree requirements can create serious problems. Choose systems built for accuracy, not experimentation. Test extensively before going live. Monitor continuously after launch.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-3">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  Launch to a Controlled Audience First
                </h3>
                <p className="text-slate-600 ml-11">Don't announce to your entire student body on day one. Start with a specific department, program, or student cohort. Gather feedback. Refine answers. Fix edge cases. Then expand gradually.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-3">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  Build Feedback Loops
                </h3>
                <p className="text-slate-600 ml-11">Let students rate answers. Monitor conversations where the AI couldn't help. Review escalations to human staff. Use this data to improve your knowledge base and expand coverage over time.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-3">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  Measure What Matters
                </h3>
                <p className="text-slate-600 ml-11">Track ticket reduction, resolution time, student satisfaction, and coverage rate (% of questions the AI can fully answer). Don't obsess over total conversations—focus on whether you're actually reducing load on human staff.</p>
              </div>
            </div>
          </FadeInUp>

          {/* Common Pitfalls */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">Common Pitfalls to Avoid</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold text-secondary mb-4">Watch Out For:</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">⚠</span>
                  <div>
                    <strong>Deploying before knowledge is ready:</strong> An AI trained on outdated, incomplete, or contradictory information will create more problems than it solves. Get the knowledge right first.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">⚠</span>
                  <div>
                    <strong>Hiding the AI from students:</strong> Be transparent that students are interacting with AI. Trust breaks if they discover it later.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">⚠</span>
                  <div>
                    <strong>No clear escalation path:</strong> When the AI can't help, students need an obvious path to human support. Don't create dead ends.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">⚠</span>
                  <div>
                    <strong>Treating it as "set and forget":</strong> Policies change. Processes evolve. Your AI knowledge base needs regular updates.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">⚠</span>
                  <div>
                    <strong>Choosing on price alone:</strong> The cost of a failed implementation—in student trust, staff time cleaning up mistakes, and reputation damage—vastly exceeds the price difference between systems.
                  </div>
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Getting Started */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">Getting Started</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Student support automation works when implemented thoughtfully with the right technology. The institutions seeing the biggest impact share common traits: they start focused, they prioritize accuracy over coverage, and they choose systems built for institutional knowledge.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-slate-600 mb-6 leading-relaxed">
              If you're evaluating options, the most important question to ask vendors: "What happens when the AI doesn't know the answer?" Systems that guess are dangerous. Systems that admit uncertainty and escalate cleanly are trustworthy. For transparent <a href="/pricing" className="text-primary hover:text-orange-600 font-medium">pricing and implementation details</a>, start with vendors who clearly explain their architecture and accuracy guarantees.
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
                  <a href="/resources/white-paper" className="text-primary hover:text-orange-600 transition-colors">
                    ICA vs RAG White Paper →
                  </a>
                </h4>
                <p className="text-slate-600 text-sm">Technical deep-dive into why traditional RAG systems struggle with accuracy—and what works better.</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-2">
                  <a href="/resources/prospective-student-engagement" className="text-primary hover:text-orange-600 transition-colors">
                    Prospective Student Engagement →
                  </a>
                </h4>
                <p className="text-slate-600 text-sm">How AI transforms admissions and reveals competitive intelligence from prospect conversations.</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-2">
                  <a href="/resources/case-study" className="text-primary hover:text-orange-600 transition-colors">
                    Analytics Case Study →
                  </a>
                </h4>
                <p className="text-slate-600 text-sm">How institutions use conversation data to improve support and make data-driven decisions.</p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeInUp>
          <Card className="bg-gradient-to-br from-primary to-orange-600 text-white p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">See Jiffy in Action</h3>
            <p className="text-lg mb-8 text-orange-50 max-w-2xl mx-auto">
              See how Jiffy delivers accurate, instant answers to student questions—without the hallucinations that plague traditional chatbots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/demo" variant="outline" className="bg-white text-primary hover:bg-orange-50 border-white text-base px-8 py-3">
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
