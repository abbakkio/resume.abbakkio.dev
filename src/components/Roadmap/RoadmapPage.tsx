import React, { useState, useEffect } from 'react'
import { ROADMAP_TERMS } from '../../data/roadmapData'
import { RoadmapHeader } from './RoadmapHeader'
import { QuantumCallout } from './QuantumCallout'
import { TermCard } from './TermCard'

interface RoadmapPageProps {
  onBackClick: () => void
}

export const RoadmapPage: React.FC<RoadmapPageProps> = ({ onBackClick }) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const filteredTerms = selectedYear
    ? ROADMAP_TERMS.filter((term) => term.year === selectedYear)
    : ROADMAP_TERMS

  return (
    <div className="px-6 sm:px-12 py-8 transition-colors duration-200">
      <RoadmapHeader
        onBackClick={onBackClick}
        selectedYear={selectedYear}
        onSelectYear={setSelectedYear}
      />

      <QuantumCallout />

      <div className="space-y-12">
        {filteredTerms.map((term) => (
          <TermCard key={term.id} term={term} />
        ))}
      </div>

      <footer className="mt-16 pt-8 border-t border-[#e2ddd5] dark:border-[#1f1f1f] text-xs font-mono-custom text-neutral-500 dark:text-neutral-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          Mathematical &amp; Computational Science · Bachelor of Science (2025–2028)
        </div>
        <div>
          <a
            href="https://roadmap.sh/ai-data-scientist"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ff5c00] transition-colors"
          >
            roadmap.sh/ai-data-scientist ↗
          </a>
        </div>
      </footer>
    </div>
  )
}
