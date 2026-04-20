import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>

      <p className="mt-4 text-gray-600">
        Reach out for collaboration, opportunities, or discussion around applied AI, LLM systems, or data-driven applications.
      </p>

      <div className="mt-8 space-y-4 text-gray-700">
        <p>
          <span className="font-medium">Name:</span> Eric Criteser
        </p>

        <p>
          <span className="font-medium">Email:</span>{" "}
          <a href="mailto:criteser2@gmail.com" className="text-blue-600 hover:underline">
            criteser2@gmail.com
          </a>
        </p>

        <p>
          <span className="font-medium">Phone:</span> (251) 223-1386
        </p>

        <p>
          <span className="font-medium">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/eric-criteser"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            My LinkedIn
          </a>
        </p>

        <p>
          <span className="font-medium">GitHub:</span>{" "}
          <a
            href="https://github.com/eric220"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            My GitHub
          </a>
        </p>
        <p>
          <span className="font-medium">Resume:</span>{" "}
          <a
            href="https://www.erics-resume-bot.com"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            My Resume Bot
          </a>
        </p>  
      </div>

      <div className="mt-10">
        <Link
          href="/projects"
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          View Projects
        </Link>
      </div>
    </div>
  )
}
