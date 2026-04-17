// src/components/CaseStudy.tsx

type Section = {
  title: string
  content: string
}

export default function CaseStudy({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold mb-2">
            {section.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {section.content}
          </p>
        </div>
      ))}
    </div>
  )
}