import Button from "../../../components/Button";
import { FadeInUp, AnimatedBackground } from "../../../components/animations";

export default function WhitePaper() {
  return (
    <div className="flex flex-col gap-12 pb-16 pt-16">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <FadeInUp>
          <div className="border-b border-slate-200 pb-12 mb-12">
            <span className="bg-linear-to-r from-primary to-amber-500 bg-clip-text text-transparent font-bold tracking-widest text-xs uppercase mb-4 block">
              Technical White Paper
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight max-w-3xl mx-auto">
              ICA vs RAG: Why Context Architecture Matters for Conversational AI
            </h1>
            <div className="flex items-center justify-center gap-4 text-slate-500 text-sm font-medium">
              <span>Published by Good Faith Labs</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>December 2024</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>10 min read</span>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Abstract */}
        <FadeInUp delay={0.1}>
          <div className="bg-linear-to-br from-orange-50/50 to-amber-50/30 p-8 md:p-10 rounded-2xl border border-orange-100/50 mb-16 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-primary to-amber-400" />
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Abstract</h3>
            <p className="text-xl text-slate-700 leading-relaxed font-serif italic">
              "This paper explores the limitations of Retrieval-Augmented Generation (RAG) in institutional settings and introduces Integrated Context
              Architecture (ICA) as a superior alternative. We demonstrate how ICA eliminates retrieval latency and context loss."
            </p>
          </div>
        </FadeInUp>

        <div className="prose prose-lg prose-slate max-w-none">
          <FadeInUp delay={0.15}>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mt-12 mb-6 pb-4 border-b border-slate-200">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The promise of conversational AI has always been instant access to accurate information. However, for institutions with specific,
              authoritative knowledge bases, generic Large Language Models (LLMs) hallucinate, while traditional retrieval-based systems often fail to
              find the right information or take too long to retrieve it.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              This "accuracy gap" prevents many organizations from fully deploying AI agents. When a student asks about financial aid deadlines or an
              employee queries a complex compliance policy, "mostly correct" isn't good enough.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mt-16 mb-6 pb-4 border-b border-slate-200">
              2. Traditional RAG: How It Works & Where It Fails
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Retrieval-Augmented Generation (RAG) has become the industry standard for grounding LLMs. It functions like a search engine attached to a
              text generator:
            </p>
            <ol className="list-decimal list-outside pl-6 space-y-2 mb-6 text-slate-600 marker:font-bold marker:text-slate-400">
              <li>Chunking documents into small pieces.</li>
              <li>Storing them in a vector database.</li>
              <li>Searching for relevant chunks based on a user's query.</li>
              <li>Feeding those chunks to the LLM to generate an answer.</li>
            </ol>
            <p className="text-slate-600 leading-relaxed mb-6">
              While effective for massive, unstructured datasets, this pipeline introduces multiple points of failure. If the search step misses the
              relevant chunk (retrieval error), the LLM cannot answer correctly. Furthermore, the multi-step process adds significant latency, often
              resulting in 2-5 second delays before a response begins.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.25}>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mt-16 mb-6 pb-4 border-b border-slate-200">
              3. Integrated Context Architecture (ICA)
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Jiffy introduces Integrated Context Architecture (ICA), a paradigm shift that moves away from just-in-time retrieval. Instead of searching
              for information query-by-query, ICA processes the entire institutional knowledge base into a highly optimized, context-aware structure
              that is accessible to the agent at all times.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              By maintaining full contextual awareness, the agent doesn't need to "look up" basic facts—it "knows" them, much like a well-trained human
              staff member. This allows for instant generation and the ability to connect disparate pieces of information that a keyword search might
              miss.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mt-16 mb-6 pb-4 border-b border-slate-200">4. Performance Comparison</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              When compared directly against standard RAG implementations, ICA demonstrates significant advantages in both speed and consistency.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.35}>
            <div className="not-prose my-12">
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg bg-white">
                <table className="min-w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th scope="col" className="px-6 py-5 font-bold text-secondary uppercase tracking-wider text-xs">
                        Metric
                      </th>
                      <th scope="col" className="px-6 py-5 font-bold text-slate-500 uppercase tracking-wider text-xs">
                        Traditional RAG
                      </th>
                      <th scope="col" className="px-6 py-5 font-bold text-primary uppercase tracking-wider text-xs bg-orange-50/50 border-b-2 border-primary">
                        Jiffy ICA
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      {
                        metric: "Response Time",
                        rag: "2-5 seconds (latency high)",
                        ica: "Instant (latency near-zero)",
                      },
                      {
                        metric: "Accuracy",
                        rag: "Retrieval-dependent",
                        ica: "High consistency",
                      },
                      {
                        metric: "Context Window",
                        rag: "Fragmented (chunks)",
                        ica: "Holistic (full context)",
                      },
                      {
                        metric: "Reasoning Depth",
                        rag: "Limited to retrieved context",
                        ica: "Global knowledge awareness",
                      },
                    ].map((row, i) => (
                      <tr
                        key={row.metric}
                        className={`transition-colors hover:bg-slate-50/80 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"}`}
                      >
                        <th scope="row" className="px-6 py-5 font-bold text-secondary">
                          {row.metric}
                        </th>
                        <td className="px-6 py-5 text-slate-500 font-medium">{row.rag}</td>
                        <td className="px-6 py-5 font-bold text-primary bg-orange-50/10">{row.ica}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-center text-slate-400 mt-3 italic">
                * Benchmarks based on internal testing with datasets &lt; 100MB.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mt-16 mb-6 pb-4 border-b border-slate-200">5. Use Cases Where ICA Excels</h2>
            <p className="text-slate-600 leading-relaxed mb-6">ICA is particularly suited for environments where accuracy and speed are non-negotiable:</p>
            <ul className="list-disc list-outside pl-6 space-y-4 mb-6 text-slate-600 marker:text-primary">
              <li>
                <strong className="text-secondary">Education:</strong> Answering student queries about admissions, financial aid, and course prerequisites where "maybe" is not an
                acceptable answer.
              </li>
              <li>
                <strong className="text-secondary">Customer Support:</strong> Handling high volumes of repetitive queries instantly to reduce queue times.
              </li>
              <li>
                <strong className="text-secondary">Internal Knowledge:</strong> Helping employees find policy information without navigating complex intranets.
              </li>
            </ul>
          </FadeInUp>

          <FadeInUp delay={0.45}>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mt-16 mb-6 pb-4 border-b border-slate-200">6. Conclusion</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              While RAG serves a purpose for searching the open web or massive enterprise archives, Integrated Context Architecture represents the
              future for specialized, high-trust domains. By removing the retrieval bottleneck, Jiffy delivers an experience that is faster, smarter,
              and fundamentally more reliable.
            </p>
          </FadeInUp>
        </div>
      </article>

      {/* CTA Section */}
      <section className="relative py-20 mt-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-warm-50 via-amber-50/30 to-warm-50" />
        <AnimatedBackground variant="subtle" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInUp>
            <h3 className="text-3xl font-bold text-secondary mb-6 tracking-tight">Ready to see the difference?</h3>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Experience the speed and accuracy of ICA firsthand with a personalized demo for your institution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/demo" className="shadow-lg shadow-orange-200/50">See ICA in Action</Button>
              <Button href="#" variant="outline" className="bg-white hover:bg-orange-50 border-slate-200 text-slate-600">
                Download PDF (Mock)
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}

