// src/components/CaseStudy.tsx

type Section = {
  title: string
  content: string
}

export default function CaseStudy({ sections }: { sections: any[] }) {
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

          {section.stats && (
  <div className="mt-4">
    
    {section.statsTitle && (
      <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
        {section.statsTitle}
      </h3>
    )}

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {section.stats.map((stat: any, i: number) => (
        <div
          key={i}
          className="border rounded p-3 bg-gray-50"
        >
          <p className="text-sm text-gray-500">
            {stat.label}
          </p>
          <p className="text-lg font-semibold">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  </div>
)}

          {section.image && (
            <div className="mt-4">
              <img
                src={section.image}
                alt={section.imageCaption || section.title}
                className="rounded border shadow"
              />

              {section.imageCaption && (
                <p className="text-sm text-gray-500 mt-2">
                  {section.imageCaption}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}