import { projects } from "@/lib/projects"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="border p-4 rounded hover:shadow cursor-pointer">
              <h2 className="text-xl font-semibold">
                {project.title}
              </h2>
              <p className="text-gray-600">
                {project.subtitle}
              </p>

              <div className="mt-2 flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-gray-200 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}