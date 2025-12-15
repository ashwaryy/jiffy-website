import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Analytics() {
  return (
    <div className="flex flex-col gap-16 pb-16 pt-16">
      {/* Hero Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
          Turn Conversations Into <br className="hidden md:block"/> Institutional Intelligence
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
          Jiffy Pulse gives you visibility into what your community needs, when they need it, and where they're asking from.
        </p>
      </section>

      {/* Section 1: Four Key Insights */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <Card title="Geographic Intelligence" className="h-full">
             <div className="bg-blue-50 h-32 rounded-lg mb-6 flex items-center justify-center border border-blue-100">
                <span className="text-4xl">🌍</span>
             </div>
             <p className="font-bold text-secondary mb-2">"Where are your queries coming from?"</p>
             <p className="text-sm text-slate-500">Use case: Identify underserved regions, plan outreach</p>
          </Card>

          {/* Card 2 */}
          <Card title="Topic Trends" className="h-full">
             <div className="bg-purple-50 h-32 rounded-lg mb-6 flex items-center justify-center border border-purple-100">
                <span className="text-4xl">📊</span>
             </div>
             <p className="font-bold text-secondary mb-2">"What are people asking about most?"</p>
             <p className="text-sm text-slate-500">Use case: Surface urgent concerns, improve documentation</p>
          </Card>

          {/* Card 3 */}
          <Card title="Peak Activity Times" className="h-full">
             <div className="bg-orange-50 h-32 rounded-lg mb-6 flex items-center justify-center border border-orange-100">
                <span className="text-4xl">⏰</span>
             </div>
             <p className="font-bold text-secondary mb-2">"When is your community most active?"</p>
             <p className="text-sm text-slate-500">Use case: Staff support hours, optimize resources</p>
          </Card>

          {/* Card 4 */}
          <Card title="Conversation Depth" className="h-full">
             <div className="bg-green-50 h-32 rounded-lg mb-6 flex items-center justify-center border border-green-100">
                <span className="text-4xl">💬</span>
             </div>
             <p className="font-bold text-secondary mb-2">"How engaged are users with your agent?"</p>
             <p className="text-sm text-slate-500">Use case: Measure satisfaction, identify gaps</p>
          </Card>
        </div>
      </section>

      {/* Section 2: Real-World Example */}
      <section className="bg-surface py-20 border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold text-secondary mb-12 text-center">How an Educational Institution Uses Jiffy Analytics</h2>
             
             <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
                
                {/* Item 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-300 group-[.is-active]:bg-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm">
                    <svg className="fill-current w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10">
                      <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                    </svg>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                    <div className="font-bold text-secondary mb-1">Discovery</div>
                    <div className="text-slate-600 text-sm">Analytics reveal 60% of questions are about financial aid.</div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-300 group-[.is-active]:bg-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm">
                    <svg className="fill-current w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10">
                       <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                    </svg>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                    <div className="font-bold text-secondary mb-1">Peak Hours</div>
                    <div className="text-slate-600 text-sm">Peak hours identified as 8-10 PM.</div>
                  </div>
                </div>

                 {/* Item 3 */}
                 <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-300 group-[.is-active]:bg-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm">
                    <svg className="fill-current w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10">
                       <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                    </svg>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                    <div className="font-bold text-secondary mb-1">Outcome</div>
                    <div className="text-slate-600 text-sm">Better student experience, smarter resource allocation.</div>
                  </div>
                </div>

             </div>
          </div>
        </div>
      </section>

      {/* Section 3: Analytics Dashboard Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <div className="bg-secondary rounded-2xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Your Command Center</h2>
              <p className="mb-8 opacity-90 max-w-2xl mx-auto text-slate-300">
                Export data (CSV/JSON), filter by date, and manage role-based access. Jiffy Pulse puts you in control.
              </p>
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 max-w-3xl mx-auto shadow-inner">
                 <div className="h-64 flex items-center justify-center border border-dashed border-slate-600 rounded">
                    <p className="opacity-50 text-sm">Dashboard UI Preview Placeholder</p>
                 </div>
              </div>
              <p className="mt-6 text-sm opacity-50 font-mono">Available to all Jiffy customers</p>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <h2 className="text-3xl font-bold text-secondary mb-6">Ready to See Your Data?</h2>
        <Button href="/demo">Request Demo</Button>
      </section>
    </div>
  );
}