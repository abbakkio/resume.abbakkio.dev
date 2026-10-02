import React, { useState, useEffect } from 'react'
import { User, Briefcase, Code2, Sparkles, Sun, Moon } from 'lucide-react'

interface FloatingNavProps {
  isDark: boolean
  setIsDark: (val: boolean | ((prev: boolean) => boolean)) => void
  showFeaturedWorks?: boolean
  showServices?: boolean
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  isDark,
  setIsDark,
  showFeaturedWorks = false,
  showServices = false,
}) => {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Navigation Dock (Bottom on smartphones, Left vertical on desktop) */}
      <aside 
        aria-label="Quick navigation"
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 translate-y-0 md:left-6 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:bottom-auto z-40 flex flex-row md:flex-col items-center gap-2 md:gap-3 p-1.5 rounded-full bg-white/90 dark:bg-[#141414]/90 border border-[#e2ddd5] dark:border-[#262626] backdrop-blur-md shadow-2xl transition-all duration-200"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Top"
          className="apple-btn p-2.5 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-neutral-800/80"
        >
          <User className="w-4 h-4" />
        </button>
        {showFeaturedWorks && (
          <button
            onClick={() => scrollTo('work')}
            title="Work"
            className="apple-btn p-2.5 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-neutral-800/80"
          >
            <Briefcase className="w-4 h-4" />
          </button>
        )}
        <button
          onClick={() => scrollTo('experience')}
          title="Experience"
          className="apple-btn p-2.5 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-neutral-800/80"
        >
          <Code2 className="w-4 h-4" />
        </button>
        {showServices && (
          <button
            onClick={() => scrollTo('services')}
            title="Services"
            className="apple-btn p-2.5 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-neutral-800/80"
          >
            <Sparkles className="w-4 h-4" />
          </button>
        )}
        <div className="w-[1px] h-4 my-auto mx-0.5 md:w-4 md:h-[1px] md:mx-auto md:my-0 bg-neutral-300 dark:bg-neutral-800" />
        <button
          onClick={() => setIsDark((prev) => !prev)}
          title="Toggle Theme"
          className="apple-btn p-2.5 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-amber-500 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/80"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </aside>

      {/* Bottom Floating Status Bar (Visible on desktop md+) */}
      <div className="apple-card-hover fixed bottom-5 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 dark:bg-[#121212]/90 border border-[#e2ddd5] dark:border-[#262626] backdrop-blur-md shadow-2xl text-xs font-mono-custom text-neutral-700 dark:text-neutral-300 transition-colors duration-200">
        <div className="relative w-6 h-6 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700">
          <img
            src="https://avatars.githubusercontent.com/u/86652898?v=4"
            alt="Azat Madiyev"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-sans font-medium text-neutral-900 dark:text-white">Azat Madiyev</span>
        <span className="text-neutral-400 dark:text-neutral-600">•</span>
        <span className="text-neutral-600 dark:text-neutral-400 font-sans">Software Engineer</span>
        <span className="text-neutral-400 dark:text-neutral-600">•</span>
        <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available
        </span>
        <span className="text-neutral-400 dark:text-neutral-600">•</span>
        <span className="text-neutral-500 dark:text-neutral-400">{time || '11:22 AM'}</span>
      </div>
    </>
  )
}
