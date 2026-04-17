// src/types/project.ts

export type ProjectSection = {
  title: string
  content: string
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  tags: string[]
  sections: ProjectSection[]
  github?: string
  demo?: string
}