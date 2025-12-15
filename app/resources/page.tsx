import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Resources() {
  return (
    <div className="flex flex-col gap-16 pb-16 pt-12">
      {/* Page Headline */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
          Learn More About Jiffy & ICA
        </h1>
        <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
          Deep dives, case studies, and technical insights.
        </p>
      </section>

      {/* Resource Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* White Paper */}
          <Card className="flex flex-col h-full hover:border-primary/50 transition-colors">
            <div className="mb-4">
               <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">White Paper</span>
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-3">
              ICA vs RAG: Why Context Architecture Matters for Conversational AI
            </h3>
            <p className="text-secondary/80 mb-6 flex-grow">
              A technical deep-dive into why Integrated Context Architecture delivers faster, more accurate responses than traditional Retrieval-Augmented Generation.
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
               <span className="text-sm text-gray-500">12-minute read</span>
               <Button href="/resources/white-paper" variant="outline" className="text-sm px-4 py-2">Read White Paper</Button>
            </div>
          </Card>

          {/* Case Study */}
          <Card className="flex flex-col h-full hover:border-primary/50 transition-colors">
            <div className="mb-4">
               <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Case Study</span>
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-3">
              How Educational Institutions Leverage Jiffy Analytics
            </h3>
            <p className="text-secondary/80 mb-6 flex-grow">
              Explore how universities and colleges use conversation data to improve student support, optimize resources, and make data-driven decisions.
            </p>
             <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
               <span className="text-sm text-gray-500">8-minute read</span>
               <Button href="/resources/case-study" variant="outline" className="text-sm px-4 py-2">Read Case Study</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* About Good Faith Labs */}
      <section className="bg-secondary/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">Built by Good Faith Labs</h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto mb-8">
            We build trustworthy software that delivers real value. Jiffy is our answer to the chatbot accuracy problem.
          </p>
          <a 
            href="https://goodfaithlabs.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-bold hover:underline"
          >
            Learn more about Good Faith Labs →
          </a>
        </div>
      </section>
    </div>
  );
}
