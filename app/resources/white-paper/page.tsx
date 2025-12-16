import Button from "../../../components/Button";
import { FadeInUp, AnimatedBackground } from "../../../components/animations";

export default function WhitePaper() {
  return (
    <div className="flex flex-col gap-12 pb-16 pt-16">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeInUp>
          <div className="border-b border-slate-200 pb-8">
            <span className="bg-linear-to-r from-primary to-amber-500 bg-clip-text text-transparent font-bold tracking-widest text-xs uppercase mb-3 block">
              Technical White Paper
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              ICA vs RAG: Why Context Architecture Matters for Conversational AI
            </h1>
            <p className="text-lg text-slate-500 font-medium">Published by Good Faith Labs | December 2024</p>
          </div>
        </FadeInUp>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose prose-lg prose-headings:text-secondary prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-secondary">
        {/* Abstract */}
        <FadeInUp delay={0.1}>
          <div className="bg-linear-to-br from-warm-50 to-amber-50/50 p-8 rounded-xl border border-amber-100/50 not-prose mb-12 shadow-sm transition-scale">
            <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Abstract</h3>
            <p className="text-slate-600 italic leading-relaxed">
              This paper explores the limitations of Retrieval-Augmented Generation (RAG) in institutional settings and introduces Integrated Context
              Architecture (ICA) as a superior alternative. We demonstrate how ICA eliminates retrieval latency and context loss, providing a more
              reliable foundation for conversational AI in high-stakes environments like education.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <h2>1. Introduction</h2>
          <p>
            The promise of conversational AI has always been instant access to accurate information. However, for institutions with specific,
            authoritative knowledge bases, generic Large Language Models (LLMs) hallucinate, while traditional retrieval-based systems often fail to
            find the right information or take too long to retrieve it. This "accuracy gap" prevents many organizations from fully deploying AI
            agents.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <h2>2. Traditional RAG: How It Works & Where It Fails</h2>
          <p>Retrieval-Augmented Generation (RAG) has become the industry standard for grounding LLMs. It works by:</p>
          <ol>
            <li>Chunking documents into small pieces.</li>
            <li>Storing them in a vector database.</li>
            <li>Searching for relevant chunks based on a user's query.</li>
            <li>Feeding those chunks to the LLM to generate an answer.</li>
          </ol>
          <p>
            While effective for massive, unstructured datasets, this pipeline introduces multiple points of failure. If the search step misses the
            relevant chunk (retrieval error), the LLM cannot answer correctly. Furthermore, the multi-step process adds significant latency, often
            resulting in 2-5 second delays before a response begins.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.25}>
          <h2>3. Integrated Context Architecture (ICA)</h2>
          <p>
            Jiffy introduces Integrated Context Architecture (ICA), a paradigm shift that moves away from just-in-time retrieval. Instead of searching
            for information query-by-query, ICA processes the entire institutional knowledge base into a highly optimized, context-aware structure
            that is accessible to the agent at all times.
          </p>
          <p>
            By maintaining full contextual awareness, the agent doesn't need to "look up" basic facts—it "knows" them, much like a well-trained human
            staff member. This allows for instant generation and the ability to connect disparate pieces of information that a keyword search might
            miss.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <h2>4. Performance Comparison</h2>
        </FadeInUp>

        <FadeInUp delay={0.35}>
          <div className="not-prose my-10">
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-lg">
              <table className="min-w-full text-left text-sm whitespace-nowrap">
                <thead className="uppercase tracking-wider border-b border-slate-200 bg-linear-to-r from-slate-50 to-slate-100">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-bold text-secondary">
                      Metric
                    </th>
                    <th scope="col" className="px-6 py-4 font-bold text-slate-500">
                      Traditional RAG
                    </th>
                    <th scope="col" className="px-6 py-4 font-bold text-primary">
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
                  ].map((row, i) => (
                    <tr
                      key={row.metric}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"} animate-fade-in-up`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <th scope="row" className="px-6 py-4 font-medium text-secondary">
                        {row.metric}
                      </th>
                      <td className="px-6 py-4 text-slate-500">{row.rag}</td>
                      <td className="px-6 py-4 font-bold text-primary">{row.ica}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <h2>5. Use Cases Where ICA Excels</h2>
          <p>ICA is particularly suited for environments where accuracy and speed are non-negotiable:</p>
          <ul>
            <li>
              <strong>Education:</strong> Answering student queries about admissions, financial aid, and course prerequisites where "maybe" is not an
              acceptable answer.
            </li>
            <li>
              <strong>Customer Support:</strong> Handling high volumes of repetitive queries instantly to reduce queue times.
            </li>
            <li>
              <strong>Internal Knowledge:</strong> Helping employees find policy information without navigating complex intranets.
            </li>
          </ul>
        </FadeInUp>

        <FadeInUp delay={0.45}>
          <h2>6. Conclusion</h2>
          <p>
            While RAG serves a purpose for searching the open web or massive enterprise archives, Integrated Context Architecture represents the
            future for specialized, high-trust domains. By removing the retrieval bottleneck, Jiffy delivers an experience that is faster, smarter,
            and fundamentally more reliable.
          </p>
        </FadeInUp>
      </article>

      {/* CTA Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-warm-50 via-amber-50/30 to-warm-50" />
        <AnimatedBackground variant="subtle" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInUp>
            <h3 className="text-2xl font-bold text-secondary mb-6">Ready to see the difference?</h3>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/demo">See ICA in Action</Button>
              <Button href="#" variant="outline" className="bg-white hover:bg-orange-50">
                Download PDF (Mock)
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
