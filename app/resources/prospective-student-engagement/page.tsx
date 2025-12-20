import type { Metadata } from "next";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import { FadeInUp } from "../../../components/animations";
import { generatePageMetadata } from "../../../lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "How AI Transforms Prospective Student Engagement",
  description: "Learn how universities use AI and analytics to engage prospective students 24/7, improve yield rates, and gain competitive intelligence from conversations.",
  path: "/resources/prospective-student-engagement",
});

export default function ProspectiveStudentEngagement() {
  return (
    <article className="flex flex-col gap-12 pb-16 pt-8">
      {/* Above-the-Fold Block */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeInUp>
          <div className="mb-4">
            <span className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Admissions Guide
            </span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight leading-tight">
            How AI Transforms Prospective Student Engagement
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="text-xl text-slate-600 mb-6 leading-relaxed">
            How universities use AI and analytics to engage prospects 24/7, improve yield rates, and uncover competitive intelligence hidden in every conversation.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <p className="text-2xl font-bold text-secondary mb-2">43%</p>
              <p className="text-slate-600">Faster response time to prospective student inquiries with AI engagement</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <p className="text-2xl font-bold text-secondary mb-2">28%</p>
              <p className="text-slate-600">Higher engagement rates when prospects get instant, accurate answers</p>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">

          {/* Problem Articulation */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">The Prospective Student Experience Gap</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Prospective students make college decisions on their timeline, not yours. Questions come at 10pm on Sunday. During winter break. The day before application deadlines. And when they don't get immediate answers, they move on to schools that do respond.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Meanwhile, your admissions team faces an impossible equation: thousands of inquiries during peak season, the same questions asked hundreds of different ways, and no time left for the high-touch outreach that actually influences enrollment decisions.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="bg-white border border-slate-200 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-secondary mb-4">What Admissions Teams Are Dealing With:</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span><strong>Peak season overwhelm:</strong> September through January—when prospects are most active, your team is drowning. Inquiries sit unanswered for 24-48 hours while staff work through backlogs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span><strong>Repetitive question fatigue:</strong> "What's the application deadline?" "Do you offer merit scholarships?" "Can I tour campus?" The same 30 questions consume 70% of staff time, leaving no capacity for personalized outreach.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span><strong>After-hours abandonment:</strong> Prospects research colleges at night and on weekends. Questions submitted outside business hours go unanswered until the next day—when interest has already cooled or they've chosen a competitor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span><strong>No visibility into what matters:</strong> You answer questions, but you don't learn from them. Which topics drive the most concern? What are prospects comparing you against? What questions predict enrollment? The data exists, but you're not capturing it.</span>
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Why This Matters More */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">Why Prospective Students Are Different</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Unlike <a href="/resources/student-support-automation" className="text-purple-600 hover:text-purple-700 font-medium">current student support</a>, prospective student engagement carries higher stakes. Current students will eventually get their answer—they're already enrolled. Prospective students won't wait. They'll choose a different school.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
              <h3 className="text-lg font-bold text-secondary mb-3">The Stakes:</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">⚡</span>
                  <span><strong>First impressions are final:</strong> A prospect's initial interaction with your institution shapes their entire perception. Slow, unhelpful responses = assumption that you don't care about students.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">⚡</span>
                  <span><strong>Competition is fierce:</strong> Prospects are simultaneously evaluating 5-10 schools. The institution that responds fastest and most helpfully gains the advantage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">⚡</span>
                  <span><strong>Every unanswered question costs money:</strong> Each prospect who disengages due to poor experience represents lost tuition revenue—potentially $40K-$200K+ over four years.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">⚡</span>
                  <span><strong>Peak moments are predictable:</strong> Application deadlines, financial aid announcements, decision day—you know when inquiry volume will spike. Being unprepared is a choice.</span>
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Solution Part 1: AI */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">Part 1: Instant, Accurate Answers When Prospects Are Most Engaged</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              AI-powered engagement solves the response time problem—but only if the AI actually knows what it's talking about. Traditional chatbots fail spectacularly on prospective student questions because they guess at answers, hallucinate deadlines, and provide inconsistent information.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              The difference comes down to architecture. Systems built on <a href="/resources/white-paper" className="text-purple-600 hover:text-purple-700 font-medium">Integrated Context Architecture (ICA)</a> load your complete admissions knowledge base directly into the AI's working memory—no searching, no guessing, no hallucinations.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold text-secondary mb-4">What This Enables for Admissions:</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>24/7 availability during decision-making moments:</strong> Prospects get answers at 11pm on Saturday when they're comparing schools, not Monday at 9am when they've already made their choice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Accurate answers to critical questions:</strong> Application deadlines, scholarship criteria, admission requirements—the AI cites exact sources and never hallucinates dates or policies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Multi-topic conversations:</strong> Prospects rarely ask one question. They want to understand financial aid, then campus life, then academic programs, then housing—all in one conversation. <a href="/how-it-works" className="text-purple-600 hover:text-purple-700 font-medium">ICA handles this naturally</a>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Consistent messaging:</strong> No more variation between staff members. Every prospect gets the same accurate information regardless of when they ask or how they phrase their question.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Graceful escalation:</strong> When questions require personalized attention (financial aid appeals, special circumstances), the AI clearly directs prospects to human staff with context already captured.</span>
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Solution Part 2: Analytics */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">Part 2: What Your Prospective Student Conversations Reveal</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Here's where most institutions miss the bigger opportunity: AI isn't just about answering questions faster. It's about capturing strategic intelligence from every conversation—data that transforms how you recruit, communicate, and compete.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-slate-600 mb-4 leading-relaxed">
              When prospects talk to an AI knowledge agent, they reveal their actual concerns, priorities, and decision criteria. <a href="/analytics" className="text-purple-600 hover:text-purple-700 font-medium">Conversation analytics</a> turn these insights into actionable enrollment strategy.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <h3 className="text-2xl font-bold text-secondary mb-4 mt-8">Strategic Insights You're Missing Without Analytics</h3>
          </FadeInUp>

          <FadeInUp delay={0.5}>
            <div className="space-y-6 my-8">
              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="font-bold text-secondary mb-2">1. Topic Clustering: What Actually Matters to Prospects</h4>
                <p className="text-slate-600 mb-3">
                  If 45% of prospective student questions relate to affordability (scholarships, financial aid, payment plans), that's a signal. Your messaging should lead with affordability, not campus beauty or alumni success.
                </p>
                <p className="text-slate-600 text-sm italic">
                  Real example: One university discovered 62% of prospect questions mentioned "student debt" or "loans." They redesigned their admissions homepage to lead with "graduate debt-free" messaging and saw 18% increase in applications.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="font-bold text-secondary mb-2">2. Gap Analysis: What Your Website Fails to Answer</h4>
                <p className="text-slate-600 mb-3">
                  Questions that prospects ask repeatedly signal content gaps. If you're getting 200 questions per week about "changing majors," your website doesn't clearly explain academic flexibility.
                </p>
                <p className="text-slate-600 text-sm italic">
                  Real example: Analytics revealed that "internship opportunities" was the #3 most-asked question, but the information was buried in a departmental subpage. Moving it to the main academics page reduced related inquiries by 73%.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="font-bold text-secondary mb-2">3. Enrollment Funnel Insights: What Questions Predict Yield</h4>
                <p className="text-slate-600 mb-3">
                  Not all questions are equal. Prospects who ask about housing, campus involvement, or specific academic programs are closer to enrollment than those asking basic admission requirements.
                </p>
                <p className="text-slate-600 text-sm italic">
                  Real example: Data showed prospects who asked about "study abroad" converted at 2.4x the rate of average inquiries. Admissions team now proactively highlights study abroad in all follow-up communications.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="font-bold text-secondary mb-2">4. Competitive Intelligence: What Prospects Compare You Against</h4>
                <p className="text-slate-600 mb-3">
                  Prospects ask comparison questions: "How does your engineering program compare to [State U]?" "Is your tuition lower than [Private College]?" This tells you exactly who you're competing against for specific student segments.
                </p>
                <p className="text-slate-600 text-sm italic">
                  Real example: Analytics revealed prospects consistently comparing computer science program to two specific competitors. Admissions created targeted comparison one-pagers addressing the exact concerns being raised.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="font-bold text-secondary mb-2">5. Marketing Attribution: Which Channels Bring Quality Prospects</h4>
                <p className="text-slate-600 mb-3">
                  By tagging conversations by traffic source, you see which marketing channels generate engaged prospects vs. tire-kickers. Prospects from certain campaigns ask deeper questions and convert better.
                </p>
                <p className="text-slate-600 text-sm italic">
                  Real example: Facebook ads drove high volume but shallow questions ("Is this a real college?"). Google search and high school counselor referrals drove fewer inquiries but asked substantive questions about programs, leading to 3x higher yield.
                </p>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 my-8">
              <h3 className="text-xl font-bold text-secondary mb-4">The Bottom Line on Analytics</h3>
              <p className="text-slate-600 mb-4">
                Most institutions treat prospective student inquiries as a support burden to minimize. <a href="/resources/case-study" className="text-purple-600 hover:text-purple-700 font-medium">Forward-thinking institutions</a> recognize them as strategic data that reveals:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">→</span>
                  <span>What messaging resonates (and what doesn't)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">→</span>
                  <span>Where your website and marketing fail to communicate clearly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">→</span>
                  <span>Which prospects are serious vs. browsing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">→</span>
                  <span>What objections to overcome in outreach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">→</span>
                  <span>How to allocate recruitment budget for maximum ROI</span>
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Proof Section */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">What Admissions Teams See</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-6 leading-relaxed">
              When institutions deploy AI engagement with analytics for prospective students, the impact shows up in both operational metrics and strategic outcomes.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">43%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Faster Response Time</div>
                <p className="text-slate-600 text-sm">From hours/days to seconds—prospects get answers when they're actively engaged, not after they've lost interest</p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">28%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Higher Engagement</div>
                <p className="text-slate-600 text-sm">Prospects who get instant answers ask more questions, spend more time exploring, and move further down the enrollment funnel</p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">2.3x</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">More Questions Answered</div>
                <p className="text-slate-600 text-sm">Average prospect asks 2.3x more questions when AI provides instant answers vs. waiting for email responses</p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">Prospect Preference</div>
                <p className="text-slate-600 text-sm">Prospective students prefer instant, accurate AI answers to waiting 24-48 hours for human email response</p>
              </Card>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <h3 className="text-2xl font-bold text-secondary mb-4 mt-8">Beyond the Numbers: Strategic Impact</h3>
          </FadeInUp>

          <FadeInUp delay={0.5}>
            <div className="space-y-6 my-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-bold text-secondary mb-2">For Admissions Staff</h4>
                <p className="text-slate-600">Staff shift from answering "What's the application deadline?" 50 times per day to high-value work: personalized outreach to high-intent prospects, running information sessions, building relationships with high school counselors. Burnout decreases. Job satisfaction increases.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-bold text-secondary mb-2">For Prospective Students</h4>
                <p className="text-slate-600">No more waiting days for simple answers. Prospects research on their schedule, get comprehensive information instantly, and feel confident in their understanding of your institution. The experience signals that you value their time and care about accessibility.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-bold text-secondary mb-2">For Enrollment Leadership</h4>
                <p className="text-slate-600">Conversation data reveals what drives enrollment decisions—insights that inform everything from marketing creative to scholarship strategy to campus tour talking points. Budget allocation becomes data-driven rather than intuition-based.</p>
              </div>
            </div>
          </FadeInUp>

          {/* Real-World Scenario */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">A Day in the Life: With vs. Without AI + Analytics</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              {/* Without */}
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  Without Jiffy
                </h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div>
                    <p className="font-medium text-secondary">Sunday, 9:00 PM</p>
                    <p>Sarah emails: "Do you offer merit scholarships for out-of-state students?"</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Monday, 10:30 AM</p>
                    <p>Admissions counselor sees email, responds with generic info</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Monday, 8:00 PM</p>
                    <p>Sarah replies: "What GPA do I need to qualify?"</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Tuesday, 11:00 AM</p>
                    <p>Counselor responds with GPA threshold</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Tuesday, 9:00 PM</p>
                    <p>Sarah asks about housing options near campus</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Wednesday</p>
                    <p>Sarah gets frustrated with slow responses, applies to competitor school that answered everything instantly</p>
                  </div>
                  <div className="pt-4 border-t border-red-300">
                    <p className="font-bold text-red-700">Result: Lost enrollment, no data captured, staff time wasted</p>
                  </div>
                </div>
              </div>

              {/* With */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  With Jiffy
                </h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div>
                    <p className="font-medium text-secondary">Sunday, 9:00 PM</p>
                    <p>Sarah asks Jiffy: "Do you offer merit scholarships for out-of-state students?"</p>
                    <p className="italic text-green-700">→ Instant answer with scholarship criteria</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Sunday, 9:02 PM</p>
                    <p>Sarah: "What GPA do I need?"</p>
                    <p className="italic text-green-700">→ Instant answer: 3.5+ GPA with breakdown by scholarship tier</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Sunday, 9:05 PM</p>
                    <p>Sarah: "What about housing options?"</p>
                    <p className="italic text-green-700">→ Instant answer about on-campus and nearby housing</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Sunday, 9:08 PM</p>
                    <p>Sarah: "Can I study abroad?"</p>
                    <p className="italic text-green-700">→ Instant answer with program details</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Monday, 9:00 AM</p>
                    <p>Analytics flags Sarah as high-intent (4 questions, mentioned scholarship + study abroad). Admissions counselor reaches out personally with tailored information</p>
                  </div>
                  <div className="pt-4 border-t border-green-300">
                    <p className="font-bold text-green-700">Result: Engaged prospect, personalized follow-up, strategic data captured</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Implementation */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">How to Deploy for Prospective Students</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Successful deployments follow a consistent pattern. Here's the framework:
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="space-y-6 my-8">
              <div>
                <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-3">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Start With Top 25 Admissions FAQs
                </h3>
                <p className="text-slate-600 ml-11">Application deadlines, admission requirements, scholarship criteria, financial aid basics, housing, campus visits, program offerings. Get these right first—they cover 70%+ of inquiries.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-3">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Integrate With Your CRM
                </h3>
                <p className="text-slate-600 ml-11">Connect conversations to prospect records so admissions staff have full context when following up. Tag prospects by engagement level, topics discussed, and conversion likelihood.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-3">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Set Up Analytics Dashboards
                </h3>
                <p className="text-slate-600 ml-11">Configure dashboards for enrollment leadership showing topic trends, conversion signals, competitive mentions, and content gaps. Make data accessible to marketing, admissions, and financial aid teams.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-3">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  Test Before Peak Season
                </h3>
                <p className="text-slate-600 ml-11">Launch in summer or early fall—before September inquiry surge. Refine answers, fix edge cases, train staff on using analytics. Don't deploy for the first time when volume is highest.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-3">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  Use Conversation Data to Refine Everything
                </h3>
                <p className="text-slate-600 ml-11">Monthly reviews: What topics are trending? What questions reveal content gaps? What messaging resonates? Use insights to improve website, brochures, email campaigns, and outreach strategy.</p>
              </div>
            </div>
          </FadeInUp>

          {/* Getting Started */}
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">Getting Started</h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Prospective student engagement is where AI and analytics deliver the highest ROI in higher education. The institutions winning on enrollment aren't just responding faster—they're learning from every conversation and using that intelligence to recruit smarter.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-slate-600 mb-6 leading-relaxed">
              The key is choosing technology that handles both sides: <a href="/how-it-works" className="text-purple-600 hover:text-purple-700 font-medium">accurate AI engagement</a> that doesn't embarrass you with wrong answers, and <a href="/analytics" className="text-purple-600 hover:text-purple-700 font-medium">analytics that reveal strategic insights</a> rather than just reporting volume metrics.
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
                  <a href="/resources/student-support-automation" className="text-purple-600 hover:text-purple-700 transition-colors">
                    Student Support Automation →
                  </a>
                </h4>
                <p className="text-slate-600 text-sm">Complete guide to using AI for current student support—reduce tickets 60%+.</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-2">
                  <a href="/resources/case-study" className="text-purple-600 hover:text-purple-700 transition-colors">
                    Analytics Case Study →
                  </a>
                </h4>
                <p className="text-slate-600 text-sm">How institutions use conversation data to improve support and make better decisions.</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-2">
                  <a href="/pricing" className="text-purple-600 hover:text-purple-700 transition-colors">
                    See Pricing →
                  </a>
                </h4>
                <p className="text-slate-600 text-sm">Transparent pricing for institutions of all sizes.</p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeInUp>
          <Card className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">See Jiffy Engage Prospective Students</h3>
            <p className="text-lg mb-8 text-purple-50 max-w-2xl mx-auto">
              Watch how Jiffy answers prospect questions instantly and accurately—then reveals the strategic insights hidden in every conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/demo" variant="outline" className="bg-white text-purple-600 hover:bg-purple-50 border-white text-base px-8 py-3">
                Book a Demo
              </Button>
              <Button href="/analytics" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 text-base px-8 py-3">
                Explore Analytics
              </Button>
            </div>
          </Card>
        </FadeInUp>
      </section>
    </article>
  );
}
