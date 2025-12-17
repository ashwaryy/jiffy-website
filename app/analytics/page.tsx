import type { Metadata } from "next";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { AnimatedBackground, FadeInUp } from "../../components/animations";
import { GlobalIcon, AnalyticsIcon, TimeIcon, ChatIcon, CheckCircleIcon } from "../../components/icons";
import { generatePageMetadata } from "../../lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Jiffy Pulse Analytics",
  description: "Turn conversations into institutional intelligence with real-time analytics and actionable insights.",
  path: "/analytics",
});

export default function Analytics() {
  const insights = [
    {
      title: "Geographic Intelligence",
      icon: <GlobalIcon size={28} />,
      bg: "bg-linear-to-br from-blue-50 to-sky-50",
      border: "border-blue-100",
      question: "Where are your queries coming from?",
      useCase: "Use case: Identify underserved regions, plan outreach",
    },
    {
      title: "Topic Trends",
      icon: <AnalyticsIcon size={28} />,
      bg: "bg-linear-to-br from-purple-50 to-violet-50",
      border: "border-purple-100",
      question: "What are people asking about most?",
      useCase: "Use case: Surface urgent concerns, improve documentation",
    },
    {
      title: "Peak Activity Times",
      icon: <TimeIcon size={28} />,
      bg: "bg-linear-to-br from-orange-50 to-amber-50",
      border: "border-orange-100",
      question: "When is your community most active?",
      useCase: "Use case: Staff support hours, optimize resources",
    },
    {
      title: "Conversation Depth",
      icon: <ChatIcon size={28} />,
      bg: "bg-linear-to-br from-green-50 to-emerald-50",
      border: "border-green-100",
      question: "How engaged are users with your agent?",
      useCase: "Use case: Measure satisfaction, identify gaps",
    },
  ];

  const timelineItems = [
    {
      title: "Discovery",
      desc: "Analytics reveal 60% of questions are about financial aid.",
    },
    {
      title: "Peak Hours",
      desc: "Peak hours identified as 8-10 PM.",
    },
    {
      title: "Outcome",
      desc: "Better student experience, smarter resource allocation.",
    },
  ];

  return (
    <div className="flex flex-col gap-16 pb-16 pt-16">
      {/* Hero Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
            Turn Conversations Into <br className="hidden md:block" />
            <span className="bg-linear-to-r from-primary to-amber-500 bg-clip-text text-transparent">Institutional Intelligence</span>
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Jiffy Pulse gives you visibility into what your community needs, when they need it, and where they're asking from.
          </p>
        </FadeInUp>
      </section>

      {/* Section 1: Four Key Insights */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, i) => (
            <div key={insight.title} className={`animate-fade-in-up animate-delay-${100 * i}`}>
              <Card title={insight.title} className="h-full" delay={0}>
                <div className={`${insight.bg} h-32 rounded-xl mb-6 flex items-center justify-center ${insight.border} border`}>
                  <div className="text-slate-600">{insight.icon}</div>
                </div>
                <p className="font-bold text-secondary mb-2">{insight.question}</p>
                <p className="text-sm text-slate-500">{insight.useCase}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Real-World Example */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-warm-50 via-amber-50/30 to-warm-50" />
        <AnimatedBackground variant="subtle" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-secondary mb-12 text-center">How an Educational Institution Uses Jiffy Analytics</h2>
            </FadeInUp>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-orange-200 before:via-amber-200 before:to-orange-200">
              {timelineItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-fade-in-up animate-delay-${
                    150 * i
                  }`}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-linear-to-br from-primary to-amber-400 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg animate-scale-in">
                    <CheckCircleIcon size={16} className="text-white" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100/80 shadow-md">
                    <div className="font-bold text-secondary mb-1">{item.title}</div>
                    <div className="text-slate-600 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Analytics Dashboard Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-linear-to-br from-secondary via-slate-800 to-secondary rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl animate-fade-in-up">
          {/* Static background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-amber-400/20 to-transparent rounded-full blur-3xl opacity-20" />

          <div className="relative z-10">
            <FadeInUp>
              <h2 className="text-3xl font-bold mb-4">Your Command Center</h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="mb-8 opacity-90 max-w-2xl mx-auto text-slate-300">
                Export data (CSV/JSON), filter by date, and manage role-based access. Jiffy Pulse puts you in control.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 max-w-5xl mx-auto shadow-inner text-left">
                {/* Dashboard Header */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-4">Analytics</h3>
                  <p className="text-sm text-slate-400 mb-4">Insights from your conversations</p>

                  {/* Date Range Selector */}
                  <div className="flex items-center gap-4 text-sm mb-6">
                    <span className="text-slate-400">From</span>
                    <div className="bg-slate-800 border border-slate-600 rounded px-3 py-1.5 text-slate-300">17/11/2025</div>
                    <span className="text-slate-400">To</span>
                    <div className="bg-slate-800 border border-slate-600 rounded px-3 py-1.5 text-slate-300">16/12/2025</div>
                  </div>

                  {/* Metrics Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <ChatIcon size={16} className="text-blue-400" />
                        <span className="text-xs text-slate-400">Total Chats</span>
                      </div>
                      <div className="text-3xl font-bold text-white">2,847</div>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <ChatIcon size={16} className="text-emerald-400" />
                        <span className="text-xs text-slate-400">Total Messages</span>
                      </div>
                      <div className="text-3xl font-bold text-white">18,624</div>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AnalyticsIcon size={16} className="text-purple-400" />
                        <span className="text-xs text-slate-400">Avg Messages/Chat</span>
                      </div>
                      <div className="text-3xl font-bold text-white">6.5</div>
                    </div>
                  </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Chats per Day Chart */}
                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-slate-300 mb-4">Chats per Day</h4>
                    <div className="h-32 relative">
                      <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                        <polyline
                          points="0,60 100,50 200,45 300,40"
                          fill="none"
                          stroke="rgb(249, 115, 22)"
                          strokeWidth="2"
                        />
                      </svg>
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-500">
                        <span>Dec 12</span>
                        <span>Dec 13</span>
                        <span>Dec 14</span>
                      </div>
                    </div>
                  </div>

                  {/* Activity by Time of Day */}
                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-slate-300 mb-4">Activity by Time of Day</h4>
                    <div className="h-32 flex items-end gap-1">
                      {[45, 12, 8, 15, 28, 52, 89, 142, 178, 245, 312, 287, 223, 198, 267, 354, 389, 412, 368, 289, 234, 187, 156, 98].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-primary rounded-t"
                          style={{ height: `${(height / 412) * 100}%`, minHeight: height > 0 ? '4%' : '0' }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                      <span>12 AM</span>
                      <span>6 AM</span>
                      <span>12 PM</span>
                      <span>6 PM</span>
                    </div>
                  </div>
                </div>

                {/* Tables Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Top Keywords */}
                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-slate-300 mb-3">Top Keywords</h4>
                    <p className="text-xs text-slate-500 mb-3">Most frequently used words</p>
                    <div className="space-y-2">
                      {[
                        { rank: 1, keyword: 'financial aid', count: 487 },
                        { rank: 2, keyword: 'registration', count: 362 },
                        { rank: 3, keyword: 'deadlines', count: 318 },
                        { rank: 4, keyword: 'requirements', count: 294 },
                      ].map((item) => (
                        <div key={item.rank} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-3">
                            <span className="text-slate-500 text-xs">#{item.rank}</span>
                            <span className="text-slate-300">{item.keyword}</span>
                          </div>
                          <span className="bg-slate-700/50 px-2 py-0.5 rounded text-xs text-slate-400">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Locations */}
                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-slate-300 mb-3">Top Locations</h4>
                    <p className="text-xs text-slate-500 mb-3">Geographic distribution</p>
                    <div className="space-y-2">
                      {[
                        { rank: 1, country: 'United States', city: 'New York', sessions: 847 },
                        { rank: 2, country: 'United States', city: 'Los Angeles', sessions: 623 },
                        { rank: 3, country: 'United Kingdom', city: 'London', sessions: 412 },
                        { rank: 4, country: 'Canada', city: 'Toronto', sessions: 287 },
                      ].map((item) => (
                        <div key={item.rank} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-3">
                            <span className="text-slate-500 text-xs">#{item.rank}</span>
                            <div>
                              <div className="text-slate-300">{item.country}</div>
                              <div className="text-xs text-slate-500">{item.city}</div>
                            </div>
                          </div>
                          <span className="bg-slate-700/50 px-2 py-0.5 rounded text-xs text-slate-400">{item.sessions}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <p className="mt-6 text-sm opacity-50 font-mono">Available to all Jiffy customers</p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <FadeInUp>
          <h2 className="text-3xl font-bold text-secondary mb-6">Ready to See Your Data?</h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <Button href="/demo">Request Demo</Button>
        </FadeInUp>
      </section>
    </div>
  );
}
