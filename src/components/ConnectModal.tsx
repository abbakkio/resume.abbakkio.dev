import React, { useState } from 'react'
import { X, Mail, Send, Check } from 'lucide-react'

interface ConnectModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState<boolean>(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="animate-apple-fade-up relative w-full max-w-lg bg-white dark:bg-[#161616] border border-[#e2ddd5] dark:border-[#2a2a2a] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="apple-btn absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-[#1e1e1e] border border-orange-200 dark:border-transparent text-xs font-mono-custom text-[#ff5c00] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5c00]" />
            Let's build together
          </div>
          <h3 className="text-2xl font-medium text-neutral-900 dark:text-white">Get in touch</h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Have a project in mind, need a design system, or want to discuss a full product build?
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <div className="text-base font-medium text-neutral-900 dark:text-white">Message sent!</div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">I'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Rivera"
                className="w-full bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-neutral-700 rounded-lg p-2.5 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5c00]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-neutral-700 rounded-lg p-2.5 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5c00]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Project Details</label>
              <textarea
                rows={3}
                required
                placeholder="Tell me about what you are looking to create or fix..."
                className="w-full bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-neutral-700 rounded-lg p-2.5 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5c00]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="apple-btn flex-1 py-2.5 rounded-full bg-[#ff5c00] hover:bg-[#e05200] text-sm font-medium text-white transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              <a
                href="mailto:upirovazat7@gmail.com"
                className="apple-btn py-2.5 px-4 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 dark:bg-[#202020] dark:hover:bg-[#282828] dark:border-neutral-700 text-xs sm:text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Direct Email</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
