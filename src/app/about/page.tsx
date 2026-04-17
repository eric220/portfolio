export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
      </div>

      {/* Intro */}
      <div className="text-lg text-gray-700 space-y-4">
        <p>
          I build applied AI systems with a focus on large language models,
          data-driven workflows, and real-world problem solving. My work centers
          on designing systems that integrate structured data, natural language
          interfaces, and practical usability.
        </p>
      </div>

      {/* Core Experience */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">LLM Systems</h2>
        <p className="text-gray-700">
          I have built multiple LLM-based systems using agent-based workflows, multi-modal models,
          retrieval-augmented generation (RAG), and full-context ingestion
          approaches.
        </p>
        <p className="text-gray-700">
          This includes developing a voice-driven service ticketing system using
          LangGraph, where the model orchestrates tool usage to retrieve and
          update structured data such as customer records and service tickets. I
          have also built domain-specific chatbots using both retrieval pipelines
          and direct context ingestion strategies.
        </p>
      </section>

      {/* Data Science */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Data Science & Modeling</h2>
        <p className="text-gray-700">
          In addition to LLM systems, I have developed projects involving
          similarity-based recommendation, geospatial probability modeling, and
          feature engineering for predictive models.
        </p>
        <p className="text-gray-700">
          My approach emphasizes clear problem framing, feature engineering
          aligned with domain structure, and validation grounded in observed
          behavior rather than metrics alone.
        </p>
      </section>

      {/* LLM Evaluation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">LLM Evaluation</h2>
        <p className="text-gray-700">
          I have experience in data annotation and LLM evaluation, including
          writing structured and adversarial prompts to probe model behavior and
          improve output quality.
        </p>
        <p className="text-gray-700">
          This work involves identifying failure modes, correcting responses, and
          contributing to training and evaluation pipelines, with a focus on
          improving reliability in real-world usage.
        </p>
      </section>

      {/* Background */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Background</h2>
        <p className="text-gray-700">
          My programming background is largely self-directed, built through
          hands-on development and formal coursework in data science. This has
          led to a practical, systems-oriented approach focused on building and
          iterating on working solutions.
        </p>
      </section>

      {/* Additional */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Additional Experience</h2>
        <p className="text-gray-700">
          I contribute to a software applicant review team, evaluating technical
          candidates and their problem-solving approaches. This provides
          additional perspective on engineering standards, code quality, and
          effective development practices.
        </p>
      </section>
    </div>
  )
}