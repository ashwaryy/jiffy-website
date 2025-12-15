import Button from "../../components/Button";
import Card from "../../components/Card";

export default function HowItWorks() {
  return (
    <div className="flex flex-col gap-16 pb-16 pt-16">
      {/* Page Headline */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
          How Jiffy's Knowledge Agent Works
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
          Built differently to deliver better results.
        </p>
      </section>

      {/* Section 1: The ICA Advantage */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6 leading-tight">
                Integrated Context Architecture: <br/>
                <span className="text-primary">Smart, Not Just Searching</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-lg">
                <p>
                  Traditional chatbots search through documents piece by piece—a slow and error-prone process known as RAG.
                </p>
                <p>
                  <strong className="text-secondary font-semibold">Jiffy is different.</strong> ICA understands your entire knowledge base contextually. It doesn't just "look up" keywords; it knows the answer.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</div>
                    Faster responses (instant generation)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</div>
                    Higher accuracy (no retrieval errors)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</div>
                    Consistent persona and tone
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Visual: Comparison Diagram Placeholder */}
            <div className="bg-surface rounded-xl p-8 border border-slate-100 flex flex-col items-center justify-center min-h-[350px]">
               <div className="flex items-center gap-8 mb-8 w-full justify-center">
                  <div className="text-center opacity-60 grayscale">
                    <div className="w-24 h-32 bg-white border border-slate-200 rounded shadow-sm mx-auto mb-3 flex items-center justify-center text-2xl">📄</div>
                    <p className="text-sm font-bold text-slate-700">Traditional RAG</p>
                    <p className="text-xs text-slate-500">Search → Retrieve → Guess</p>
                  </div>
                  <div className="text-xl font-medium text-slate-300">vs</div>
                  <div className="text-center relative">
                     <div className="absolute -top-3 -right-3 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">New</div>
                    <div className="w-24 h-32 bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded shadow-md mx-auto mb-3 flex items-center justify-center text-4xl">🧠</div>
                    <p className="text-sm font-bold text-primary">Jiffy ICA</p>
                    <p className="text-xs text-slate-500">Instant Knowledge</p>
                  </div>
               </div>
               <p className="text-center text-xs text-slate-400 uppercase tracking-widest">Conceptual Comparison</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Three Steps to Deploy */}
      <section className="bg-surface py-20 border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary">Three Steps to Deploy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white border border-slate-200 text-secondary rounded-lg flex items-center justify-center text-2xl font-bold mb-6 shadow-sm group-hover:border-primary group-hover:text-primary transition-colors">1</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Provide Your Knowledge</h3>
              <p className="text-slate-600 leading-relaxed">
                Upload your FAQs, policy documents, course catalogs, and any other resources. We accept most formats.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white border border-slate-200 text-secondary rounded-lg flex items-center justify-center text-2xl font-bold mb-6 shadow-sm group-hover:border-primary group-hover:text-primary transition-colors">2</div>
              <h3 className="text-xl font-bold text-secondary mb-3">We Configure ICA</h3>
              <p className="text-slate-600 leading-relaxed">
                Our team processes your data and optimizes the context specifically for your institution's needs.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white border border-slate-200 text-secondary rounded-lg flex items-center justify-center text-2xl font-bold mb-6 shadow-sm group-hover:border-primary group-hover:text-primary transition-colors">3</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Go Live & Learn</h3>
              <p className="text-slate-600 leading-relaxed">
                Deploy the agent on your site with a simple snippet. Start gathering insights immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Built for Accuracy */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Why Accuracy Matters</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                In education, "close enough" isn't good enough. Students need the right answer, the first time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-red-50/50 border-red-100">
                <h3 className="text-red-900 font-bold mb-4 flex items-center gap-2">
                    <span className="text-red-500 text-xl">✕</span> Common Failures
                </h3>
                <ul className="space-y-3 text-red-900/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></span>
                    Hallucinating policies that don't exist
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></span>
                    Providing outdated deadlines
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></span>
                    Getting confused by similar course codes
                  </li>
                </ul>
              </Card>
              
              <Card className="bg-green-50/50 border-green-100">
                <h3 className="text-green-900 font-bold mb-4 flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span> The Jiffy Difference
                </h3>
                <ul className="space-y-3 text-green-900/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
                    Strict adherence to provided facts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
                    Context-aware date handling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
                    Precise distinction between entities
                  </li>
                </ul>
              </Card>
            </div>
            
            <div className="text-center">
              <Button href="/resources/white-paper" variant="outline">Read Technical White Paper</Button>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <h2 className="text-3xl font-bold text-secondary mb-6">See What Jiffy Can Do For You</h2>
        <Button href="/demo">Request Demo</Button>
      </section>
    </div>
  );
}