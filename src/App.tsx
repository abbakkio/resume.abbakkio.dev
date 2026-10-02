import { useState, useEffect } from 'react'
import { FloatingNav } from './components/FloatingNav'
import { Hero } from './components/Hero'
import { FeaturedWorks } from './components/FeaturedWorks'
import { Experience } from './components/Experience'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import { ConnectModal } from './components/ConnectModal'

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  })
  const [isConnectOpen, setIsConnectOpen] = useState<boolean>(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      document.body.style.backgroundColor = '#0a0a0a'
      localStorage.setItem('portfolio-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      document.body.style.backgroundColor = '#faf9f7'
      localStorage.setItem('portfolio-theme', 'light')
    }
  }, [isDark])

  const SHOW_FEATURED_WORKS = false
  const SHOW_SERVICES = false

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#0a0a0a] text-[#f0f0f0]' : 'light bg-[#faf9f7] text-[#1a1a1a]'} bg-grid-pattern transition-colors duration-200 relative selection:bg-[#ff5c00] selection:text-white font-sans`}>
      {/* Floating Controls (Left Dock + Bottom Status Bar) */}
      <FloatingNav
        isDark={isDark}
        setIsDark={setIsDark}
        showFeaturedWorks={SHOW_FEATURED_WORKS}
        showServices={SHOW_SERVICES}
      />

      {/* Main Single-Column Portfolio Container */}
      <main className="max-w-[980px] mx-auto border-x border-[#e2ddd5] dark:border-[#1f1f1f] bg-[#faf9f7] dark:bg-[#0a0a0a]/95 backdrop-blur-sm shadow-2xl relative transition-colors duration-200">
        <Hero onConnectClick={() => setIsConnectOpen(true)} />
        {SHOW_FEATURED_WORKS && <FeaturedWorks />}
        <Experience />
        {SHOW_SERVICES && <Services />}
        <Testimonials />
        <Footer />
      </main>

      {/* Interactive Modal */}
      <ConnectModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />
    </div>
  )
}
