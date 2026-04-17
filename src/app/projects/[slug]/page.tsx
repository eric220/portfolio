// src/app/projects/[slug]/page.tsx

import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import CaseStudy from "@/components/CaseStudy"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = projects.find(p => p.slug === slug)

  if (!project) return notFound()

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="text-gray-500 mt-2">{project.subtitle}</p>

      <div className="mt-8">
        <CaseStudy sections={project.sections} />
      </div>
    </div>
  )
}