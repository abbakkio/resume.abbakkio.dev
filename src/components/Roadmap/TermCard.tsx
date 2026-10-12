import React from 'react'
import type { TermData } from '../../data/roadmapData'

interface TermCardProps {
  term: TermData
}

export const TermCard: React.FC<TermCardProps> = ({ term }) => {
  const isInProgress = term.status === 'in-progress'
  const termNumberFormatted = term.termNumber.toString().padStart(2, '0')

  return (
    <article
      id={term.id}
      className="flex flex-col md:flex-row gap-4 md:gap-8 pb-12 border-b border-neutral-200 dark:border-neutral-800/60 last:border-b-0 group transition-colors"
    >
      {/* Number ID on left column */}
      <div className="font-mono-custom text-neutral-400 dark:text-neutral-600 text-sm tracking-wider w-8 pt-1 shrink-0">
        {termNumberFormatted}
      </div>

      {/* Main Term Content */}
      <div className="flex-1 space-y-5">
        {/* Term Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h2 className="text-xl font-medium text-neutral-900 dark:text-white transition-colors">
              {term.title}
            </h2>
            <div className="text-xs font-mono-custom text-neutral-500 dark:text-neutral-400 mt-1">
              // Focus: {term.focusTheme}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {isInProgress ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono-custom font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                In Progress
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-custom text-neutral-500 dark:text-neutral-400 bg-[#f0ede8] dark:bg-[#181818] border border-[#e2ddd5] dark:border-neutral-800">
                Upcoming
              </span>
            )}
          </div>
        </div>

        {/* 2-Column Grid: University STEM vs Parallel AI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
          {/* University Courses */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono-custom uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
              University MCS Core
            </div>
            <ul className="space-y-1.5">
              {term.uniCourses.map((course, idx) => (
                <li
                  key={idx}
                  className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed flex items-start gap-2"
                >
                  <span className="text-neutral-400 dark:text-neutral-600 select-none">•</span>
                  <span className={course.isHighlight ? 'font-medium text-neutral-900 dark:text-white' : ''}>
                    {course.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Parallel AI Track */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono-custom uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
              Parallel AI Stack (roadmap.sh)
            </div>
            <ul className="space-y-1.5">
              {term.selfStudySkills.map((skill, sIdx) => (
                <li
                  key={sIdx}
                  className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed flex items-start gap-2"
                >
                  <span className="text-neutral-400 dark:text-neutral-600 select-none">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>

            {/* Tools Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {term.keyTools.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded-md bg-[#f0ede8] dark:bg-[#181818] text-[11px] font-mono-custom text-neutral-700 dark:text-neutral-400 border border-[#e2ddd5] dark:border-neutral-800"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Project & Quantum Bridge */}
        <div className="pt-3 border-t border-dashed border-neutral-200 dark:border-neutral-800/80 space-y-2">
          <div className="text-xs leading-relaxed">
            <span className="font-mono-custom text-neutral-900 dark:text-neutral-200 font-medium">
              Milestone: {term.milestoneProject.title}
            </span>
            <span className="text-neutral-400 dark:text-neutral-600 mx-1.5">—</span>
            <span className="text-neutral-600 dark:text-neutral-400">
              {term.milestoneProject.description}
            </span>
          </div>

          {term.quantumBridge && (
            <div className="text-xs text-neutral-500 dark:text-neutral-400 italic pt-1 leading-relaxed">
              <span className="text-neutral-700 dark:text-neutral-300 font-medium not-italic font-mono-custom">
                ↳ Quantum Link:
              </span>{' '}
              {term.quantumBridge.connection}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
