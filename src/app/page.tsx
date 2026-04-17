import Image from "next/image";

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      {/* Headline */}
      <h1 className="text-4xl font-bold tracking-tight">
        Applied AI Developer | LLM Systems
      </h1>

      {/* Subtext */}
      <div className="mt-6 text-lg text-gray-600 space-y-4">
        <p>
          Including agents, RAG pipelines, MultiModal, and data-driven applications.
        </p>
        <p>
          Applies machine learning across domains—from LLM systems to probabilistic modeling.
        </p>
        <p>
          Background includes recommendation systems, computer vision, statistical analysis, and geospatial modeling.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 flex gap-4">
        <a
          href="/projects"
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Contact
        </a>
      </div>
    </div>
  )
}