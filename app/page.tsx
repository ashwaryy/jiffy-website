import Button from "../components/Button";
import Card from "../components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary tracking-tight">
                Meet Your Institution's Knowledge Agent
              </h1>
              <p className="text-xl text-secondary/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Lightning-fast answers. Deep insights. Built on Integrated Context Architecture (ICA).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/demo">Request a Demo</Button>
                <Button href="/how-it-works" variant="secondary">See How It Works</Button>
              </div>
            </div>
            
            {/* Visual Placeholder */}
            <div className="relative h-[400px] w-full flex items-center justify-center bg-orange-100 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <div className="text-center p-8">
                 <div className="text-6xl mb-4">🦒</div>
                 <p className="text-secondary font-bold text-xl">
                    "I'm Jiffy!"
                 </p>
                 <div className="mt-4 bg-white p-4 rounded-xl shadow-sm text-left max-w-xs mx-auto">
                    <p className="text-sm text-secondary/70">User: How do I apply for financial aid?</p>
                 </div>
                 <div className="mt-2 bg-primary/10 p-4 rounded-xl shadow-sm text-left max-w-xs mx-auto ml-12">
                    <p className="text-sm text-secondary">Jiffy: You can apply via the FAFSA portal. The deadline for this semester is...</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Accurate & Fast">
            <p className="text-secondary/80">
              No more hallucinations or slow searches. ICA delivers precise answers instantly, understanding your institutional context perfectly.
            </p>
          </Card>
          
          <Card title="Rich Analytics">
            <p className="text-secondary/80">
              Understand what your community needs. See geographic trends, popular topics, and peak activity times at a glance.
            </p>
          </Card>
          
          <Card title="Simple Setup">
            <p className="text-secondary/80">
              From knowledge base to live agent in days. No complex infrastructure required—we handle the heavy lifting.
            </p>
          </Card>
        </div>
      </section>

      {/* How ICA Works Teaser */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">Beyond Traditional RAG</h2>
          <p className="text-lg text-secondary/80 max-w-3xl mx-auto mb-8">
            Most chatbots search through documents, leading to slow and often inaccurate answers. Jiffy uses Integrated Context Architecture (ICA) to understand your entire knowledge base contextually, ensuring instant and correct responses every time.
          </p>
          <Button href="/resources/white-paper" variant="outline">Read the White Paper</Button>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold tracking-wider text-secondary/50 uppercase mb-4">Trusted Technology</p>
        <div className="flex justify-center items-center gap-2 mb-12">
           <span className="text-xl font-bold text-secondary">Built by Good Faith Labs</span>
        </div>
        
        {/* Testimonial Placeholder */}
        <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8">
           <p className="text-lg italic text-secondary/80">
             "Jiffy transformed how we handle student queries. The accuracy is unmatched."
           </p>
           <p className="mt-4 font-bold text-secondary">- University Administrator (Coming Soon)</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-secondary rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Institution's Support?</h2>
            <Button href="/demo" className="bg-white text-secondary hover:bg-orange-100">
              Request Demo
            </Button>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
      </section>
    </div>
  );
}