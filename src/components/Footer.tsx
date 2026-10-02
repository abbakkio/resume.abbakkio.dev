import React from 'react'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-28 px-6 sm:px-12 flex flex-col items-center text-center">
      {/* Social Links Row */}
      <div className="flex items-center gap-4 mb-16">
        <a
          href="https://github.com/abbakkio"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="w-9 h-9 rounded-lg bg-white hover:bg-neutral-100 border border-[#e2ddd5] dark:bg-[#141414] dark:hover:bg-[#222222] dark:border-neutral-800 flex items-center justify-center text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors shadow-sm"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
        <a
          href="mailto:upirovazat7@gmail.com"
          aria-label="Email"
          className="w-9 h-9 rounded-lg bg-white hover:bg-neutral-100 border border-[#e2ddd5] dark:bg-[#141414] dark:hover:bg-[#222222] dark:border-neutral-800 flex items-center justify-center text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors shadow-sm"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/azatmadiyev"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="w-9 h-9 rounded-lg bg-white hover:bg-neutral-100 border border-[#e2ddd5] dark:bg-[#141414] dark:hover:bg-[#222222] dark:border-neutral-800 flex items-center justify-center text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors shadow-sm"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
      </div>

      {/* Red Wax Seal Center Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 text-sm text-neutral-600 dark:text-neutral-400">
        <span>Thank you, for visiting here</span>
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 animate-pulse hover:scale-110 transition-transform duration-300">
          <img
            src="https://framerusercontent.com/images/gTs9Gn4SrIfOggGbvF2KyFRzI.png?width=300&height=300"
            alt="Red wax seal"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>
        <span>Let's create something beautiful</span>
      </div>

      {/* Handwritten Signature */}
      <div className="mb-8 select-none opacity-85 hover:opacity-100 transition-opacity">
        <span className="font-hand text-4xl sm:text-5xl text-neutral-800 dark:text-neutral-200 tracking-wide">
          Azat Madiyev
        </span>
      </div>

      {/* Copyright */}
      <div className="font-mono-custom text-xs text-neutral-500">
        @Azat Madiyev 2026
      </div>
    </footer>
  )
}
