import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-orange-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 text-center lg:text-left z-10">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-2">
                 <span className="bg-orange-100 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">New Standard</span>
                 <span className="text-slate-500 text-xs font-medium">Integrated Context Architecture</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-secondary tracking-tight leading-[1.1]">
                Meet Your Institution's <br className="hidden lg:block"/>
                <span className="text-primary">Knowledge Agent</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Lightning-fast answers. Deep insights. <br/>
                Built on Integrated Context Architecture (ICA).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
                <Button href="/demo" className="shadow-lg shadow-orange-200">Request a Demo</Button>
                <Button href="/how-it-works" variant="outline">See How It Works</Button>
              </div>
            </div>
            
            {/* Visual Placeholder */}
            <div className="relative h-[450px] w-full flex items-center justify-center bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50">
               {/* Abstract Grid Background */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
               
               <div className="relative z-10 text-center p-8 w-full max-w-md">
                 <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-tr from-primary to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 text-4xl">
                       🦒
                    </div>
                 </div>
                 
                 <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-left w-3/4 mr-auto animate-pulse">
                        <div className="h-2 w-1/3 bg-slate-100 rounded mb-2"></div>
                        <p className="text-sm text-slate-600 font-medium">How do I apply for financial aid?</p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg shadow-sm border border-orange-100 text-left w-5/6 ml-auto">
                        <div className="flex items-center gap-2 mb-2">
                           <div className="w-4 h-4 rounded-full bg-primary"></div>
                           <span className="text-xs font-bold text-primary">Jiffy Agent</span>
                        </div>
                        <p className="text-sm text-slate-700">You can apply via the FAFSA portal. The deadline for this semester is May 1st.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Accurate & Fast" className="bg-white/80 backdrop-blur border-slate-200">
            <p className="text-slate-600 leading-relaxed">
              No more hallucinations or slow searches. ICA delivers precise answers instantly, understanding your institutional context perfectly.
            </p>
          </Card>
          
          <Card title="Rich Analytics" className="bg-white/80 backdrop-blur border-slate-200">
            <p className="text-slate-600 leading-relaxed">
              Understand what your community needs. See geographic trends, popular topics, and peak activity times at a glance.
            </p>
          </Card>
          
          <Card title="Simple Setup" className="bg-white/80 backdrop-blur border-slate-200">
            <p className="text-slate-600 leading-relaxed">
              From knowledge base to live agent in days. No complex infrastructure required—we handle the heavy lifting.
            </p>
          </Card>
        </div>
      </section>

      {/* How ICA Works Teaser */}
      <section className="bg-surface py-20 border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6 tracking-tight">Beyond Traditional RAG</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Most chatbots search through documents, leading to slow and often inaccurate answers. Jiffy uses Integrated Context Architecture (ICA) to understand your entire knowledge base contextually, ensuring instant and correct responses every time.
          </p>
          <Button href="/resources/white-paper" variant="outline" className="bg-white hover:bg-slate-50">Read the White Paper</Button>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">Trusted Technology</p>
        <div className="flex justify-center items-center gap-2 mb-16">
           <span className="text-xl font-bold text-secondary">Built by Good Faith Labs</span>
        </div>
        
        {/* Testimonial Placeholder */}
        <div className="max-w-4xl mx-auto relative">
           <div className="absolute top-0 left-0 text-6xl text-orange-100 font-serif -translate-x-1/2 -translate-y-1/2">“</div>
           <p className="text-2xl font-light text-slate-700 italic relative z-10">
             Jiffy transformed how we handle student queries. The accuracy is unmatched.
           </p>
           <p className="mt-6 font-bold text-secondary text-sm uppercase tracking-wide">- University Administrator (Coming Soon)</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-secondary rounded-2xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to Transform Your Institution's Support?</h2>
            <Button href="/demo" className="bg-primary hover:bg-orange-600 text-white border-none shadow-lg shadow-orange-900/20 px-8 py-4 text-lg">
              Request Demo
            </Button>
          </div>
          {/* Decorative Abstract Shapes */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}
