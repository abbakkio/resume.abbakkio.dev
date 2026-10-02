import React from 'react'

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 border-b border-[#e2ddd5] dark:border-[#1f1f1f] px-6 sm:px-12 transition-colors duration-200">
      {/* Section Header */}
      <div className="mb-10">
        <span className="font-mono-custom italic text-[#ff5c00] text-sm tracking-wide">
          // good words
        </span>
        <h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 dark:text-white mt-1.5 transition-colors">
          some good words from people I've worked with
        </h2>
      </div>

      {/* Honest / Empty Testimonial Box */}
      <div className="apple-card-hover rounded-2xl bg-white dark:bg-[#141414] border border-[#e2ddd5] dark:border-[#222222] p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          {/* Orange Quote Mark */}
          <div className="text-[#ff5c00] font-serif text-5xl sm:text-6xl leading-none select-none flex-shrink-0">
            “
          </div>

          <div className="space-y-3 text-center sm:text-left flex-1">
            <p className="font-hand text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-100">
              Didn't get any yet :)
            </p>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-sans max-w-lg leading-relaxed">
              Currently focusing on university coursework, side projects, and open source. Eager to earn those first words on upcoming collaborations!
            </p>
            <div className="pt-2">
              <span className="font-mono-custom text-xs text-neutral-400 dark:text-neutral-500">
                — Azat Madiyev
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
