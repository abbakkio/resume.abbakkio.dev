import React, { useState, useEffect, useMemo } from 'react'
import { initialGithubActivity, type ContributionDay } from '../data/githubActivity'

interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  duration?: string
  skills: string[]
  highlight: string
  description: string
  logo?: string
}

const experiences: ExperienceItem[] = [
  {
    id: '01',
    role: 'QA Engineer Intern',
    company: 'CIT DAMU (ТОО «ЦИТ ДАМУ» / Damumed)',
    period: 'Jul 2024 – Aug 2024',
    duration: '2 mos',
    skills: [
      'QA & Manual Testing',
      'Test Cases & Checklists',
      'Web Applications',
      'Bug Tracking & Reporting',
      'Analytical Support',
      'Damumed Platform',
    ],
    highlight:
      'Executed manual functional testing, validated core workflows, and documented defect reports for national digital healthcare applications',
    description:
      'Performed comprehensive manual functional testing of digital healthcare web applications (Damumed) to guarantee system stability, user experience quality, and strict compliance with medical data workflows. Prepared and executed structured test cases to validate core features and edge cases. Investigated, documented, and reported defects with detailed reproduction steps and logs, collaborating closely within the analytical support and QA team throughout testing cycles.',
    logo: '/damumed.svg',
  },
]

const techStackIcons = [
  { name: 'Python', src: 'https://skillicons.dev/icons?i=py' },
  { name: 'TypeScript', src: 'https://skillicons.dev/icons?i=ts' },
  { name: 'JavaScript', src: 'https://skillicons.dev/icons?i=js' },
  { name: 'C++', src: 'https://skillicons.dev/icons?i=cpp' },
  { name: 'React', src: 'https://skillicons.dev/icons?i=react' },
  { name: 'Next.js', src: 'https://skillicons.dev/icons?i=nextjs' },
  { name: 'Tailwind CSS', src: 'https://skillicons.dev/icons?i=tailwind' },
  { name: 'FastAPI', src: 'https://skillicons.dev/icons?i=fastapi' },
  { name: 'PostgreSQL', src: 'https://skillicons.dev/icons?i=postgres' },
  { name: 'Docker', src: 'https://skillicons.dev/icons?i=docker' },
  { name: 'Git', src: 'https://skillicons.dev/icons?i=git' },
  { name: 'Swift', src: 'https://skillicons.dev/icons?i=swift' },
  { name: 'Claude Code', src: '/claude.svg' },
]

export const Experience: React.FC = () => {
  const [activity, setActivity] = useState(initialGithubActivity)
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null)

  useEffect(() => {
    let isMounted = true

    fetch('https://github-contributions-api.jogruber.de/v4/abbakkio?y=last')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch contributions')
        return res.json()
      })
      .then((data) => {
        if (!isMounted || !data.contributions) return
        setActivity({
          total: data.total?.lastYear ?? initialGithubActivity.total,
          contributions: data.contributions,
        })
      })
      .catch((err) => {
        console.warn('Could not sync live GitHub contributions, using cached data:', err)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const weeks = useMemo(() => {
    const result: ContributionDay[][] = []
    let currentWeek: ContributionDay[] = []

    activity.contributions.forEach((day) => {
      currentWeek.push(day)
      if (currentWeek.length === 7) {
        result.push(currentWeek)
        currentWeek = []
      }
    })

    if (currentWeek.length > 0) {
      result.push(currentWeek)
    }

    return result
  }, [activity.contributions])

  const getColorClass = (level: number) => {
    switch (level) {
      case 4:
        return 'bg-[#216e39] dark:bg-[#39d353]'
      case 3:
        return 'bg-[#30a14e] dark:bg-[#26a641]'
      case 2:
        return 'bg-[#40c463] dark:bg-[#006d32]'
      case 1:
        return 'bg-[#9be9a8] dark:bg-[#0e4429]'
      default:
        return 'bg-[#ebedf0] dark:bg-[#161b22]'
    }
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <section id="experience" className="py-20 border-b border-[#e2ddd5] dark:border-[#1f1f1f] px-6 sm:px-12 transition-colors duration-200">
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-mono-custom italic text-[#ff5c00] text-sm tracking-wide">
          // Stacks & Experience
        </span>
        <h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 dark:text-white mt-1.5 transition-colors">
          Where i'm good and where i learned from
        </h2>
      </div>

      {/* Synchronized GitHub Contribution Graph Widget */}
      <div className="apple-card-hover rounded-2xl bg-white dark:bg-[#141414] border border-[#e2ddd5] dark:border-[#222222] p-5 sm:p-7 mb-16 shadow-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <a
            href="https://github.com/abbakkio"
            target="_blank"
            rel="noreferrer"
            className="font-mono-custom text-xs text-neutral-800 dark:text-neutral-200 hover:text-[#ff5c00] transition-colors font-medium"
          >
            @abbakkio
          </a>
          <div className="font-mono-custom text-xs text-neutral-500">
            {hoveredDay ? (
              <span className="text-neutral-800 dark:text-neutral-300 font-medium">
                {hoveredDay.count === 0 ? 'No contributions' : `${hoveredDay.count} contribution${hoveredDay.count > 1 ? 's' : ''}`} on {formatDate(hoveredDay.date)}
              </span>
            ) : (
              <span>{activity.total} contributions in the last year</span>
            )}
          </div>
        </div>

        {/* Contribution Matrix */}
        <div className="w-full overflow-x-auto pb-2">
          <div className="flex gap-1.5 min-w-[700px]">
            {weeks.map((week, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-1.5 flex-1">
                {week.map((cell, rowIdx) => (
                  <div
                    key={rowIdx}
                    onMouseEnter={() => setHoveredDay(cell)}
                    onMouseLeave={() => setHoveredDay(null)}
                    title={`${cell.count} contribution${cell.count === 1 ? '' : 's'} on ${formatDate(cell.date)}`}
                    className={`aspect-square rounded-[2px] ${getColorClass(
                      cell.level
                    )} transition-transform hover:scale-125 duration-100 cursor-pointer`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-1.5 text-[10px] font-mono-custom text-neutral-500 pt-2 pb-1">
          <span>Less</span>
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#ebedf0] dark:bg-[#161b22]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#9be9a8] dark:bg-[#0e4429]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#40c463] dark:bg-[#006d32]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#30a14e] dark:bg-[#26a641]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#216e39] dark:bg-[#39d353]" />
          <span>More</span>
        </div>

        {/* Tech Stack Icons Strip */}
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800/80 mt-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {techStackIcons.map((tech) => (
              <div
                key={tech.name}
                title={tech.name}
                className="apple-btn cursor-pointer w-8 h-8 rounded-lg bg-[#f5f3ef] dark:bg-[#1a1a1a] hover:bg-[#eae6df] dark:hover:bg-[#262626] border border-[#e2ddd5] dark:border-neutral-800 p-1 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Single Work Experience (CIT DAMU / Damumed) */}
      <div className="space-y-12">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col md:flex-row gap-6 md:gap-12 pb-12 border-b border-neutral-200 dark:border-neutral-800/60 last:border-b-0 group"
          >
            {/* Number ID */}
            <div className="font-mono-custom text-neutral-400 dark:text-neutral-600 text-sm tracking-wider w-8 pt-1">
              {exp.id}
            </div>

            {/* Experience Content */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  {exp.logo && (
                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center p-1.5 flex-shrink-0 shadow-xs">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-medium text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-neutral-100 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      <a
                        href="https://damumed.kz"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {exp.company}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#f0ede8] dark:bg-[#181818] border border-[#e2ddd5] dark:border-neutral-800 text-xs font-mono-custom text-neutral-600 dark:text-neutral-400">
                    {exp.period}
                  </span>
                  {exp.duration && (
                    <span className="px-2.5 py-1 rounded-full bg-[#f0ede8] dark:bg-[#181818] border border-[#e2ddd5] dark:border-neutral-800 text-xs font-mono-custom text-neutral-600 dark:text-neutral-400">
                      {exp.duration}
                    </span>
                  )}
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md bg-[#f0ede8] dark:bg-[#181818] text-[11px] font-sans text-neutral-700 dark:text-neutral-400 border border-[#e2ddd5] dark:border-neutral-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Key Highlight */}
              <p className="text-neutral-900 dark:text-white text-sm font-medium pt-1 transition-colors">
                {exp.highlight}
              </p>

              {/* Detailed Description */}
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-2xl transition-colors">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
