import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export const FeaturedWorks: React.FC = () => {
  return (
    <section id="work" className="py-20 border-b border-[#e2ddd5] dark:border-[#1f1f1f] px-6 sm:px-12 transition-colors duration-200">
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-mono-custom italic text-[#ff5c00] text-sm tracking-wide">
          // Featured works
        </span>
        <h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 dark:text-white mt-1.5 transition-colors">
          These are ones that taught me the most
        </h2>
      </div>

      <div className="space-y-6">
        {/* Card 1: Lumio Design System (2-Column Large) */}
        <div className="rounded-2xl bg-white dark:bg-[#141414] border border-[#e2ddd5] dark:border-[#222222] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 group hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 shadow-xl overflow-hidden">
          <div className="flex-1 flex flex-col justify-between self-stretch">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-neutral-900 dark:text-white mb-4 group-hover:text-black dark:group-hover:text-neutral-100 transition-colors">
                Building a Perfect Design System from Zero
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-[#f0ede8] dark:bg-[#1e1e1e] border border-[#e2ddd5] dark:border-neutral-800 text-xs font-mono-custom text-neutral-600 dark:text-neutral-400">
                  4 Months
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#f0ede8] dark:bg-[#1e1e1e] border border-[#e2ddd5] dark:border-neutral-800 text-xs font-mono-custom text-neutral-600 dark:text-neutral-400">
                  2026
                </span>
              </div>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8 max-w-lg transition-colors">
                Joined the team when every single screen was built in complete isolation and there is no tokens, no components, no consistency.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
              <div className="flex items-center gap-3">
                <img
                  src="https://framerusercontent.com/images/6yV1RTlxwVFri96AEimF0i7gmc.png?width=125&height=126"
                  alt="Lumio"
                  className="w-7 h-7 rounded-lg object-contain"
                />
                <div>
                  <div className="text-xs font-medium text-neutral-900 dark:text-white">Lumio</div>
                  <div className="text-[11px] text-neutral-500 font-sans">Designer</div>
                </div>
              </div>

              <a
                href="#lumio"
                className="w-8 h-8 rounded-full bg-[#ff5c00] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[48%] rounded-xl overflow-hidden bg-[#f5f3ef] dark:bg-neutral-900/60 p-2 border border-[#e8e4de] dark:border-neutral-800/50">
            <img
              src="https://framerusercontent.com/images/vqmSVW5t260MQvbxKFJVyVZU.png?width=848&height=634"
              alt="Lumio Design System Mockup"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Row 2: Trackflow & Orion Labs (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 2: Trackflow HQ */}
          <div className="rounded-2xl bg-white dark:bg-[#141414] border border-[#e2ddd5] dark:border-[#222222] p-6 sm:p-7 flex flex-col justify-between group hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 shadow-xl overflow-hidden">
            <div className="w-full rounded-xl overflow-hidden bg-[#f5f3ef] dark:bg-neutral-900/60 p-2 mb-6 border border-[#e8e4de] dark:border-neutral-800/50">
              <img
                src="https://framerusercontent.com/images/FJm9lkqFOZ8skzXu5opgSSar2Iw.png?width=864&height=544"
                alt="Trackflow Dashboard"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-white mb-3">
                Redesigning the Core Dashboard of saas product
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-[#f0ede8] dark:bg-[#1e1e1e] border border-[#e2ddd5] dark:border-neutral-800 text-xs font-mono-custom text-neutral-600 dark:text-neutral-400">
                  3 month
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#f0ede8] dark:bg-[#1e1e1e] border border-[#e2ddd5] dark:border-neutral-800 text-xs font-mono-custom text-neutral-600 dark:text-neutral-400">
                  2024
                </span>
              </div>

              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                The old dashboard had 11 years of visual debt. I stripped it back, rebuilt every component in React, and shipped a version that cut user drop-off by 40%.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
              <div className="flex items-center gap-3">
                <img
                  src="https://framerusercontent.com/images/shFvG2qqC1MIMwzRFghTPQBdDa8.png?width=125&height=126"
                  alt="Trackflow HQ"
                  className="w-7 h-7 rounded-lg object-contain"
                />
                <div>
                  <div className="text-xs font-medium text-neutral-900 dark:text-white">Trackflow HQ</div>
                  <div className="text-[11px] text-neutral-500 font-sans">Frontend + designer</div>
                </div>
              </div>

              <a
                href="#trackflow"
                className="w-8 h-8 rounded-full bg-[#ff5c00] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Orion Labs */}
          <div className="rounded-2xl bg-white dark:bg-[#141414] border border-[#e2ddd5] dark:border-[#222222] p-6 sm:p-7 flex flex-col justify-between group hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 shadow-xl overflow-hidden">
            <div className="w-full rounded-xl overflow-hidden bg-[#f5f3ef] dark:bg-neutral-900/60 p-2 mb-6 border border-[#e8e4de] dark:border-neutral-800/50">
              <img
                src="https://framerusercontent.com/images/2sngz7vnl2Hwf5K2uLGBlP5cH5A.png?width=864&height=544"
                alt="Marketing site mockup"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-white mb-3">
                launching a Marketing Site in 5 Days
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-[#f0ede8] dark:bg-[#1e1e1e] border border-[#e2ddd5] dark:border-neutral-800 text-xs font-mono-custom text-neutral-600 dark:text-neutral-400">
                  1 Week
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#f0ede8] dark:bg-[#1e1e1e] border border-[#e2ddd5] dark:border-neutral-800 text-xs font-mono-custom text-neutral-600 dark:text-neutral-400">
                  2025
                </span>
              </div>

              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                Startup needed a launch site before their funding announcement. I designed and built the entire thing in Framer — live in 5 days, no handoff needed.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
              <div className="flex items-center gap-3">
                <img
                  src="https://framerusercontent.com/images/tGLKBEYVJf0hOdNWGNTPQgstU.png?width=125&height=126"
                  alt="Orion Labs"
                  className="w-7 h-7 rounded-lg object-contain"
                />
                <div>
                  <div className="text-xs font-medium text-neutral-900 dark:text-white">Orion Labs</div>
                  <div className="text-[11px] text-neutral-500 font-sans">Design engineer</div>
                </div>
              </div>

              <a
                href="#orion"
                className="w-8 h-8 rounded-full bg-[#ff5c00] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Card 4: Stackwise App (Full-Width, Mockup on Left) */}
        <div className="rounded-2xl bg-white dark:bg-[#141414] border border-[#e2ddd5] dark:border-[#222222] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 group hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 shadow-xl overflow-hidden">
          <div className="w-full lg:w-[48%] rounded-xl overflow-hidden bg-[#f5f3ef] dark:bg-neutral-900/60 p-2 border border-[#e8e4de] dark:border-neutral-800/50 order-2 lg:order-1">
            <img
              src="https://framerusercontent.com/images/VKoqdMRhhobaYKCO653Yhxi5i8.png?width=848&height=634"
              alt="Stackwise Onboarding Flow"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between self-stretch order-1 lg:order-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-neutral-900 dark:text-white mb-4">
                Prototyping an Onboarding Flow That Actually Converts
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-[#f0ede8] dark:bg-[#1e1e1e] border border-[#e2ddd5] dark:border-neutral-800 text-xs font-mono-custom text-neutral-600 dark:text-neutral-400">
                  6 Weeks
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#f0ede8] dark:bg-[#1e1e1e] border border-[#e2ddd5] dark:border-neutral-800 text-xs font-mono-custom text-neutral-600 dark:text-neutral-400">
                  2024
                </span>
              </div>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8 max-w-lg">
                The original onboarding had a 60% drop-off at step two. I redesigned the flow in framer and handed devs production-ready specs.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
              <div className="flex items-center gap-3">
                <img
                  src="https://framerusercontent.com/images/TEvYeIoGqRfw0xtTuDGonwrZlw.png?width=125&height=126"
                  alt="Stackwise"
                  className="w-7 h-7 rounded-lg object-contain"
                />
                <div>
                  <div className="text-xs font-medium text-neutral-900 dark:text-white">Stackwise app</div>
                  <div className="text-[11px] text-neutral-500 font-sans">Designer</div>
                </div>
              </div>

              <a
                href="#stackwise"
                className="w-8 h-8 rounded-full bg-[#ff5c00] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
