import Button from "../../components/Button";
import Card from "../../components/Card";
import { AnimatedBackground, FadeInUp } from "../../components/animations";
import { GlobalIcon, AnalyticsIcon, TimeIcon, ChatIcon, CheckCircleIcon } from "../../components/icons";

export default function Analytics() {
  const insights = [
    {
      title: "Geographic Intelligence",
      icon: <GlobalIcon size={28} />,
      bg: "bg-gradient-to-br from-blue-50 to-sky-50",
      border: "border-blue-100",
      question: "Where are your queries coming from?",
      useCase: "Use case: Identify underserved regions, plan outreach",
    },
    {
      title: "Topic Trends",
      icon: <AnalyticsIcon size={28} />,
      bg: "bg-gradient-to-br from-purple-50 to-violet-50",
      border: "border-purple-100",
      question: "What are people asking about most?",
      useCase: "Use case: Surface urgent concerns, improve documentation",
    },
    {
      title: "Peak Activity Times",
      icon: <TimeIcon size={28} />,
      bg: "bg-gradient-to-br from-orange-50 to-amber-50",
      border: "border-orange-100",
      question: "When is your community most active?",
      useCase: "Use case: Staff support hours, optimize resources",
    },
    {
      title: "Conversation Depth",
      icon: <ChatIcon size={28} />,
      bg: "bg-gradient-to-br from-green-50 to-emerald-50",
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
            <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
              Institutional Intelligence
            </span>
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Jiffy Pulse gives you visibility into what your community needs, when
            they need it, and where they're asking from.
          </p>
        </FadeInUp>
      </section>

      {/* Section 1: Four Key Insights */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, i) => (
            <div key={insight.title} className={`animate-fade-in-up animate-delay-${100 * i}`}>
              <Card title={insight.title} className="h-full" hoverEffect="lift" delay={0}>
                <div className={`${insight.bg} h-32 rounded-xl mb-6 flex items-center justify-center ${insight.border} border transition-scale`}>
                  <div className="text-slate-600 animate-float">
                    {insight.icon}
                  </div>
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
        <div className="absolute inset-0 bg-gradient-to-b from-warm-50 via-amber-50/30 to-warm-50" />
        <AnimatedBackground variant="subtle" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
                How an Educational Institution Uses Jiffy Analytics
              </h2>
            </FadeInUp>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange-200 before:via-amber-200 before:to-orange-200">
              {timelineItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-fade-in-up animate-delay-${150 * i}`}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gradient-to-br from-primary to-amber-400 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg animate-scale-in">
                    <CheckCircleIcon size={16} className="text-white" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100/80 shadow-md transition-lift">
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
        <div className="bg-gradient-to-br from-secondary via-slate-800 to-secondary rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl animate-fade-in-up">
          {/* Static background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-400/20 to-transparent rounded-full blur-3xl opacity-20" />

          <div className="relative z-10">
            <FadeInUp>
              <h2 className="text-3xl font-bold mb-4">Your Command Center</h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="mb-8 opacity-90 max-w-2xl mx-auto text-slate-300">
                Export data (CSV/JSON), filter by date, and manage role-based
                access. Jiffy Pulse puts you in control.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 max-w-3xl mx-auto shadow-inner transition-lift">
                <div className="h-64 flex items-center justify-center border border-dashed border-slate-600 rounded-lg">
                  <p className="opacity-50 text-sm">
                    Dashboard UI Preview Placeholder
                  </p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <p className="mt-6 text-sm opacity-50 font-mono">
                Available to all Jiffy customers
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <FadeInUp>
          <h2 className="text-3xl font-bold text-secondary mb-6">
            Ready to See Your Data?
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <Button href="/demo">Request Demo</Button>
        </FadeInUp>
      </section>
    </div>
  );
}
