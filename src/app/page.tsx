import Image from "next/image"

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      
      {/* Profile Image */}
      <div className="mb-8 flex justify-center">
        <Image
          src="/images/profile.jpg"
          alt="Eric Criteser"
          width={160}
          height={160}
          className="rounded-full border shadow"
          priority
        />
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-center">
        Applied AI Developer | LLM Systems
      </h1>

      <div className="mt-6 text-lg text-gray-600 space-y-4 text-center">
        <p>Including agents, RAG pipelines, multimodal systems, and data-driven applications.</p>

        <p>
          Applies machine learning across domains—from LLM systems to probabilistic modeling—
          focused on building reliable, real-world applications.
        </p>

        <p>
          Background includes geospatial modeling, recommendation systems, and statistical analysis.
        </p>
      </div>

      <div className="mt-8 flex gap-4 justify-center">
        <a href="/projects" className="px-4 py-2 border rounded hover:bg-gray-100">
          View Projects
        </a>
        <a href="/contact" className="px-4 py-2 border rounded hover:bg-gray-100">
          Contact
        </a>
      </div>
    </div>
  )
}