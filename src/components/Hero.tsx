import React, { useState, useRef, useEffect } from 'react'
import { Globe, ArrowUpRight, Construction, X } from 'lucide-react'

interface HeroProps {
  onConnectClick: () => void
}

const GREETINGS = [
  { text: 'Hello', lang: 'English' },
  { text: 'Сәлем', lang: 'Kazakh' },
  { text: 'Привет', lang: 'Russian' },
  { text: 'Hola', lang: 'Spanish' },
  { text: 'Bonjour', lang: 'French' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: 'Ciao', lang: 'Italian' },
  { text: 'Hallo', lang: 'German' },
]

export const GreetingRotator: React.FC = () => {
  const [index, setIndex] = useState<number>(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)
  const [width, setWidth] = useState<number | undefined>(undefined)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const measureRef = useRef<HTMLSpanElement>(null)

  // Measure word width dynamically on index change
  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth)
    }
  }, [index])

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      if (measureRef.current) {
        setWidth(measureRef.current.offsetWidth)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto rotate greetings every 2.8s
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setIndex((current) => {
        setPrevIndex(current)
        setIsTransitioning(true)
        return (current + 1) % GREETINGS.length
      })
    }, 2800)

    return () => clearInterval(interval)
  }, [isPaused])

  // Reset transition state after animation finishes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setPrevIndex(null)
      }, 550)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning, index])

  const currentGreeting = GREETINGS[index]
  const prevGreeting = prevIndex !== null ? GREETINGS[prevIndex] : null

  return (
    <span
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      title={`${currentGreeting.lang} • hover to pause`}
      className="relative inline-flex items-baseline overflow-hidden transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-default"
      style={{ width: width ? `${width}px` : 'auto' }}
    >
      {/* Hidden element for measuring exact font width */}
      <span
        ref={measureRef}
        aria-hidden="true"
        className="invisible absolute top-0 left-0 pointer-events-none whitespace-nowrap opacity-0"
      >
        {currentGreeting.text}
      </span>

      {/* Current/Incoming Greeting */}
      <span
        key={`curr-${index}`}
        className={`whitespace-nowrap text-[#ff5c00] inline-block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isTransitioning ? 'animate-apple-word-in' : 'opacity-100 translate-y-0'
        }`}
      >
        {currentGreeting.text}
      </span>

      {/* Outgoing Greeting */}
      {prevGreeting && (
        <span
          key={`prev-${prevIndex}`}
          aria-hidden="true"
          className="whitespace-nowrap text-[#ff5c00] absolute left-0 top-0 inline-block pointer-events-none animate-apple-word-out"
        >
          {prevGreeting.text}
        </span>
      )}
    </span>
  )
}

export const Hero: React.FC<HeroProps> = ({ onConnectClick }) => {
  const [showDevNotification, setShowDevNotification] = useState<boolean>(false)
  const notificationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleDownloadCv = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowDevNotification(true)
    if (notificationTimerRef.current) {
      clearTimeout(notificationTimerRef.current)
    }
    notificationTimerRef.current = setTimeout(() => {
      setShowDevNotification(false)
    }, 4000)
  }

  return (
    <section id="hero" className="relative pt-12 pb-20 md:py-24 border-b border-[#e2ddd5] dark:border-[#1f1f1f] px-6 sm:px-12 overflow-hidden transition-colors duration-200">
      {/* Development Notification Toast - Apple Dynamic Island Style */}
      {showDevNotification && (
        <div 
          role="status"
          aria-live="polite"
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto min-w-[340px] max-w-md animate-apple-toast select-none"
        >
          <div className="rounded-3xl bg-white/85 dark:bg-[#121212]/90 border border-black/10 dark:border-white/10 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.18),0_0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.8),0_0_1px_1px_rgba(255,255,255,0.08)] backdrop-blur-2xl p-3.5 sm:px-4 sm:py-3.5 flex items-center gap-3.5 relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-10 bg-amber-500/20 blur-xl pointer-events-none rounded-full" />
            
            {/* Dynamic Island Icon */}
            <div className="w-9 h-9 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center justify-center flex-shrink-0 shadow-inner">
              <Construction className="w-4 h-4 animate-pulse" />
            </div>

            {/* Notification Text */}
            <div className="flex-1 pr-1 text-left min-w-0">
              <div className="text-xs sm:text-[13px] font-semibold text-neutral-900 dark:text-white tracking-tight flex items-center gap-1.5">
                <span>Currently under development</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono-custom mt-0.5 truncate">
                Resume download will be available soon!
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowDevNotification(false)}
              aria-label="Close notification"
              className="apple-btn w-6 h-6 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors ml-1 flex-shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Auto-dismiss progress line */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-500 via-[#ff5c00] to-amber-500 animate-toast-progress rounded-full opacity-60" />
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8">
        {/* Left Column: Text & CTA */}
        <div className="flex-1 max-w-2xl">
          {/* Status Badge */}
          <div className="animate-apple-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ede8] dark:bg-[#161616] border border-[#e2ddd5] dark:border-[#262626] text-xs font-mono-custom text-emerald-600 dark:text-emerald-400 mb-6 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available</span>
          </div>

          {/* Titles */}
          <h1 className="animate-apple-fade-up animation-delay-100 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-2 transition-colors flex flex-wrap items-baseline gap-x-3 sm:gap-x-3.5 gap-y-1">
            <GreetingRotator />
            <span>I am Azat</span>
            <span className="animate-wave-hand cursor-pointer select-none">👋</span>
          </h1>
          <h2 className="animate-apple-fade-up animation-delay-150 text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 font-normal mb-5 transition-colors">
            Mathematical &amp; Computational Science Student
          </h2>

          {/* Description */}
          <p className="animate-apple-fade-up animation-delay-200 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-4 max-w-xl transition-colors">
            First-year Mathematical &amp; Computational Science student with a focus on fullstack development, systems programming, applied algorithms, and modern UI/UX engineering.
          </p>

          {/* Website Link Label */}
          <div className="animate-apple-fade-up animation-delay-250 mb-8">
            <a
              href="https://www.abbakkio.dev"
              target="_blank"
              rel="noreferrer"
              className="apple-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0ede8] dark:bg-[#161616] hover:bg-[#eae6df] dark:hover:bg-[#222222] border border-[#e2ddd5] dark:border-[#262626] text-xs font-mono-custom text-neutral-800 dark:text-neutral-200 hover:text-[#ff5c00] dark:hover:text-[#ff5c00] transition-all shadow-xs group"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#ff5c00] transition-colors" />
              <span>www.abbakkio.dev</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-[#ff5c00] transition-colors" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="animate-apple-fade-up animation-delay-300 flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadCv}
              className="apple-btn px-5 py-2.5 rounded-full bg-white dark:bg-[#181818] hover:bg-neutral-100 dark:hover:bg-[#242424] border border-[#e2ddd5] dark:border-[#2d2d2d] text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-all duration-150 shadow-sm"
            >
              Download CV
            </button>
            <button
              onClick={onConnectClick}
              className="apple-btn px-5 py-2.5 rounded-full bg-white dark:bg-[#181818] hover:bg-neutral-100 dark:hover:bg-[#242424] border border-[#e2ddd5] dark:border-[#2d2d2d] text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-all duration-150 shadow-sm flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff5c00]" />
              <span>Let's connect</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hanging Lanyard ID Badge */}
        <div className="animate-apple-fade-up animation-delay-200 relative self-center lg:self-start lg:mt-[-48px] flex flex-col items-center">
          {/* Hanging Cord */}
          <div className="w-[3px] h-20 sm:h-28 bg-gradient-to-b from-neutral-400 via-neutral-300 to-neutral-400 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-800 shadow-md" />
          
          {/* Metal Clip Ring */}
          <div className="w-7 h-4 rounded-full border-2 border-neutral-400 bg-neutral-200 dark:bg-neutral-900 shadow-inner -my-1 z-10 flex items-center justify-center">
            <div className="w-3 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" />
          </div>

          {/* ID Badge Card */}
          <div className="id-badge-hang cursor-pointer w-[220px] sm:w-[240px] rounded-2xl bg-white dark:bg-[#141414] border border-[#e2ddd5] dark:border-[#2a2a2a] overflow-hidden shadow-2xl">
            {/* Orange Slot Header */}
            <div className="bg-[#ff5c00] h-6 flex items-center justify-center relative">
              <div className="w-8 h-2 rounded-full bg-black/30 border border-black/10" />
            </div>

            {/* Photo */}
            <div className="p-3">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-[#262626]">
                <img
                  src="https://avatars.githubusercontent.com/u/86652898?v=4"
                  alt="Azat Madiyev ID Card"
                  className="w-full h-full object-cover object-top pointer-events-none select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
