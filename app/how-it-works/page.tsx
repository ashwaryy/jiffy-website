import Button from "../../components/Button";
import Card from "../../components/Card";

export default function HowItWorks() {
  return (
    <div className="flex flex-col gap-16 pb-16 pt-12">
      {/* Page Headline */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
          How Jiffy's Knowledge Agent Works
        </h1>
        <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
          Built differently to deliver better results.
        </p>
      </section>

      {/* Section 1: The ICA Advantage */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#8B4513]/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Integrated Context Architecture: <br/>
                <span className="text-primary">Smart, Not Just Searching</span>
              </h2>
              <div className="space-y-4 text-secondary/80 text-lg">
                <p>
                  Traditional chatbots search through documents piece by piece—a slow and error-prone process known as RAG.
                </p>
                <p>
                  <strong>Jiffy is different.</strong> ICA understands your entire knowledge base contextually. It doesn't just "look up" keywords; it knows the answer.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-2">
                  <li>Faster responses (instant generation)</li>
                  <li>Higher accuracy (no retrieval errors)</li>
                  <li>Consistent persona and tone</li>
                </ul>
              </div>
            </div>
            
            {/* Visual: Comparison Diagram Placeholder */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center min-h-[300px]">
               <div className="flex items-center gap-8 mb-8 w-full justify-center">
                  <div className="text-center opacity-50">
                    <div className="w-24 h-32 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">📄</div>
                    <p className="text-sm font-semibold">Traditional RAG</p>
                    <p className="text-xs">Search → Retrieve → Guess</p>
                  </div>
                  <div className="text-2xl text-secondary">vs</div>
                  <div className="text-center relative">
                     <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">New</div>
                    <div className="w-24 h-32 bg-orange-100 border-2 border-primary rounded-lg mx-auto mb-2 flex items-center justify-center text-4xl">🧠</div>
                    <p className="text-sm font-semibold text-primary">Jiffy ICA</p>
                    <p className="text-xs">Instant Knowledge</p>
                  </div>
               </div>
               <p className="text-center text-sm text-secondary/60">Conceptual Comparison</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Three Steps to Deploy */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">Three Steps to Deploy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Provide Your Knowledge</h3>
              <p className="text-secondary/80">
                Upload your FAQs, policy documents, course catalogs, and any other resources. We accept most formats.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
              <h3 className="text-xl font-bold text-secondary mb-3">We Configure ICA</h3>
              <p className="text-secondary/80">
                Our team processes your data and optimizes the context specifically for your institution's needs.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white border-2 border-secondary text-secondary rounded-full flex items-center justify-center text-2xl font-bold mb-6">3</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Go Live & Learn</h3>
              <p className="text-secondary/80">
                Deploy the agent on your site with a simple snippet. Start gathering insights immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Built for Accuracy */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Why Accuracy Matters</h2>
              <p className="text-lg text-secondary/80">
                In education, "close enough" isn't good enough. Students need the right answer, the first time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-red-50 border-red-100">
                <h3 className="text-red-800 font-bold mb-2">Common Failures</h3>
                <ul className="list-disc list-inside text-red-700/80 space-y-2">
                  <li>Hallucinating policies that don't exist</li>
                  <li>Providing outdated deadlines</li>
                  <li>Getting confused by similar course codes</li>
                </ul>
              </Card>
              
              <Card className="bg-green-50 border-green-100">
                <h3 className="text-green-800 font-bold mb-2">The Jiffy Difference</h3>
                <ul className="list-disc list-inside text-green-700/80 space-y-2">
                  <li>Strict adherence to provided facts</li>
                  <li>Context-aware date handling</li>
                  <li>Precise distinction between entities</li>
                </ul>
              </Card>
            </div>
            
            <div className="text-center">
              <Button href="/resources/white-paper" variant="outline">Read Technical White Paper</Button>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-secondary mb-6">See What Jiffy Can Do For You</h2>
        <Button href="/demo">Request Demo</Button>
      </section>
    </div>
  );
}
