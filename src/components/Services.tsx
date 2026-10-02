import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface ServiceItem {
  id: number
  title: string
  description: string
  deliverables: string[]
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'UI & Product Design',
    description:
      'End-to-end interface design for web and mobile products. From research and wireframing to high-fidelity interactive prototypes and design-to-development handoffs.',
    deliverables: ['Design discovery & audits', 'Figma prototypes & wireframes', 'Responsive web & mobile layouts'],
  },
  {
    id: 2,
    title: 'Design Engineering',
    description:
      "Turning Figma concepts into clean, accessible, production-ready frontend code. Zero loss in translation between the designer's intent and shipped software.",
    deliverables: ['Production React / Next.js code', 'Tailwind CSS implementation', 'Figma to code fidelity guarantees'],
  },
  {
    id: 3,
    title: 'Framer Development',
    description:
      'Fast turnaround marketing sites and landing pages built natively in Framer. Interactive components, CMS setup, SEO optimization, and live deployment in days.',
    deliverables: ['Custom Framer templates', 'Interactive animations & micro-interactions', 'SEO and CMS configuration'],
  },
  {
    id: 4,
    title: 'Design Systems',
    description:
      'Scalable design systems built with atomic tokens, flexible component libraries, and thorough documentation so product teams ship consistent features faster.',
    deliverables: ['Design token architecture', 'Reusable component libraries', 'Storybook / documentation guidelines'],
  },
  {
    id: 5,
    title: 'Interaction & Motion Design',
    description:
      'Bringing interfaces to life with fluid animations, tactile feedback, and physics-based motion that guides user focus and enhances the overall brand perception.',
    deliverables: ['Micro-interactions & state transitions', 'Custom SVG animations', 'Gesture & scroll-driven motion'],
  },
]

export const Services: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="services" className="py-20 border-b border-[#e2ddd5] dark:border-[#1f1f1f] px-6 sm:px-12 transition-colors duration-200">
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-mono-custom italic text-[#ff5c00] text-sm tracking-wide">
          // Services i provide
        </span>
        <h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 dark:text-white mt-1.5 transition-colors">
          I can help you with these things
        </h2>
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800/80">
        {services.map((service) => {
          const isOpen = openId === service.id
          return (
            <div key={service.id} className="py-5 transition-colors">
              <button
                onClick={() => toggle(service.id)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="text-base sm:text-lg font-medium text-neutral-900 dark:text-white group-hover:text-[#ff5c00] transition-colors">
                  {service.id}. {service.title}
                </span>
                <span className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-[#e2ddd5] dark:border-neutral-800 flex items-center justify-center text-[#ff5c00] group-hover:border-[#ff5c00]/50 transition-colors">
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>

              {isOpen && (
                <div className="pt-4 pb-2 pl-4 text-neutral-600 dark:text-neutral-400 space-y-3">
                  <p className="text-xs sm:text-sm leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-[#f0ede8] dark:bg-[#161616] text-[11px] font-mono-custom text-neutral-700 dark:text-neutral-300 border border-[#e2ddd5] dark:border-neutral-800"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
