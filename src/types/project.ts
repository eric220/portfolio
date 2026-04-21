// src/types/project.ts


export type ProjectStat = {
  label: string
  value: string
}

export type ProjectSection = {
  title: string
  content: string
  image?: string
  imageCaption?: string
  stats?: ProjectStat[]
  statsTitle?: string
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