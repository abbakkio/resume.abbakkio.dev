import React from 'react'
import { ArrowLeft } from 'lucide-react'

interface RoadmapHeaderProps {
  onBackClick: () => void
  selectedYear: number | null
  onSelectYear: (year: number | null) => void
}

export const RoadmapHeader: React.FC<RoadmapHeaderProps> = ({
  onBackClick,
  selectedYear,
  onSelectYear,
}) => {
  return (
    <header className="pt-8 pb-10 border-b border-[#e2ddd5] dark:border-[#1f1f1f] mb-10 transition-colors">
      {/* Top Navigation Row */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBackClick}
          className="apple-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono-custom text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white bg-[#f0ede8] dark:bg-[#161616] border border-[#e2ddd5] dark:border-[#262626] transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Portfolio</span>
        </button>

        <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-neutral-600 dark:text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Term 01 · In Progress</span>
        </div>
      </div>

      {/* Editorial Title */}
      <div className="space-y-2">
        <span className="font-mono-custom italic text-[#ff5c00] text-sm tracking-wide">
          // Academic &amp; Self-Study Roadmap
        </span>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white transition-colors">
          AI &amp; Data Scientist
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed transition-colors">
          Bachelor of Science in Mathematical &amp; Computational Science (2025–2028). Parallel self-study track from <a href="https://roadmap.sh/ai-data-scientist" target="_blank" rel="noreferrer" className="text-neutral-900 dark:text-white underline underline-offset-4 hover:text-[#ff5c00]">roadmap.sh</a> with an intentional Quantum Physics electives focus.
        </p>
      </div>

      {/* Minimal Filter Tabs */}
      <div className="flex items-center gap-2 mt-8 overflow-x-auto pb-1 text-xs font-mono-custom">
        <button
          onClick={() => onSelectYear(null)}
          className={`apple-btn px-3 py-1 rounded-full transition-all ${
            selectedYear === null
              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium'
              : 'bg-[#f0ede8] dark:bg-[#161616] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-[#e2ddd5] dark:border-[#262626]'
          }`}
        >
          All (9 terms)
        </button>
        <button
          onClick={() => onSelectYear(1)}
          className={`apple-btn px-3 py-1 rounded-full transition-all ${
            selectedYear === 1
              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium'
              : 'bg-[#f0ede8] dark:bg-[#161616] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-[#e2ddd5] dark:border-[#262626]'
          }`}
        >
          Year 1 · Foundations
        </button>
        <button
          onClick={() => onSelectYear(2)}
          className={`apple-btn px-3 py-1 rounded-full transition-all ${
            selectedYear === 2
              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium'
              : 'bg-[#f0ede8] dark:bg-[#161616] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-[#e2ddd5] dark:border-[#262626]'
          }`}
        >
          Year 2 · Deepening &amp; Physics
        </button>
        <button
          onClick={() => onSelectYear(3)}
          className={`apple-btn px-3 py-1 rounded-full transition-all ${
            selectedYear === 3
              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium'
              : 'bg-[#f0ede8] dark:bg-[#161616] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-[#e2ddd5] dark:border-[#262626]'
          }`}
        >
          Year 3 · Quantum AI &amp; Capstone
        </button>
      </div>
    </header>
  )
}
