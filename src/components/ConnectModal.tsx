import React, { useState } from 'react'
import { X, Mail, Send, Check, Loader2, AlertCircle } from 'lucide-react'
import { TelegramIcon, LinkedinIcon, WhatsAppIcon } from './Icons'

interface ConnectModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState<string>('')
  const [contact, setContact] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [botTrap, setBotTrap] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  if (!isOpen) return null

  const resetForm = () => {
    setName('')
    setContact('')
    setMessage('')
    setBotTrap('')
    setErrorMessage(null)
    setSubmitted(false)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!name.trim() || !contact.trim() || !message.trim()) {
      setErrorMessage('Please fill in your name, contact info, and message.')
      return
    }

    setIsLoading(true)

    try {
      const apiBase = (import.meta.env.VITE_API_BASE_URL as string | undefined) || 'https://api.abbakkio.dev'
      const response = await fetch(`${apiBase}/api/v1/messages/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `Inquiry from ${name.trim()}:\n\n${message.trim()}`,
          contact: `${name.trim()} (${contact.trim()})`,
          bot_trap: botTrap.trim() || undefined,
        }),
      })

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Too many messages sent. Please connect directly via Telegram or Email.')
        }
        const errorData = await response.json().catch(() => null)
        throw new Error(errorData?.detail || 'Could not deliver your message. Please try Telegram or Email directly.')
      }

      setSubmitted(true)
      setTimeout(() => {
        handleClose()
      }, 3500)
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to send message. Please reach out via Telegram or Email directly.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="animate-apple-fade-up relative w-full max-w-lg bg-white dark:bg-[#161616] border border-[#e2ddd5] dark:border-[#2a2a2a] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="apple-btn absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-[#1e1e1e] border border-orange-200 dark:border-transparent text-xs font-mono-custom text-[#ff5c00] mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5c00] animate-pulse" />
            Direct to Telegram • Instant Alert
          </div>
          <h3 className="text-2xl font-medium text-neutral-900 dark:text-white">Get in touch</h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Reach out via your preferred channel or send a message directly to my Telegram bot:
          </p>
        </div>

        {/* Quick Connect Channels Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
          <a
            href="https://t.me/abbakkio"
            target="_blank"
            rel="noreferrer"
            className="apple-btn flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#f0ede8] dark:bg-[#1c1c1c] hover:bg-[#eae6df] dark:hover:bg-[#252525] border border-[#e2ddd5] dark:border-[#2a2a2a] text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:text-[#0088cc] dark:hover:text-[#29b6f6] transition-all group"
          >
            <TelegramIcon className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-[#0088cc] dark:group-hover:text-[#29b6f6] transition-colors" />
            <span>Telegram</span>
          </a>

          <a
            href="https://www.linkedin.com/in/azatmadiyev"
            target="_blank"
            rel="noreferrer"
            className="apple-btn flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#f0ede8] dark:bg-[#1c1c1c] hover:bg-[#eae6df] dark:hover:bg-[#252525] border border-[#e2ddd5] dark:border-[#2a2a2a] text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:text-[#0a66c2] dark:hover:text-[#0a66c2] transition-all group"
          >
            <LinkedinIcon className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-[#0a66c2] transition-colors" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://wa.me/77016255449"
            target="_blank"
            rel="noreferrer"
            className="apple-btn flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#f0ede8] dark:bg-[#1c1c1c] hover:bg-[#eae6df] dark:hover:bg-[#252525] border border-[#e2ddd5] dark:border-[#2a2a2a] text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:text-[#25d366] dark:hover:text-[#25d366] transition-all group"
          >
            <WhatsAppIcon className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-[#25d366] transition-colors" />
            <span>WhatsApp</span>
          </a>

          <a
            href="mailto:upirovazat7@gmail.com"
            className="apple-btn flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#f0ede8] dark:bg-[#1c1c1c] hover:bg-[#eae6df] dark:hover:bg-[#252525] border border-[#e2ddd5] dark:border-[#2a2a2a] text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:text-[#ff5c00] dark:hover:text-[#ff5c00] transition-all group"
          >
            <Mail className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-[#ff5c00] transition-colors" />
            <span>Email</span>
          </a>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-4">
          <div className="w-full border-t border-neutral-200 dark:border-neutral-800" />
          <span className="absolute px-3 bg-white dark:bg-[#161616] text-[10px] sm:text-[11px] font-mono-custom text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
            or send a message to my bot
          </span>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <div className="text-base font-medium text-neutral-900 dark:text-white">Delivered directly to Telegram!</div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-xs mx-auto">
              Your message has been sent to my personal Telegram bot. I'll get back to you shortly!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Error Banner */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Name Input */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={name}
                disabled={isLoading}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Rivera"
                className="w-full bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-neutral-700 rounded-lg p-2.5 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5c00] transition-colors"
              />
            </div>

            {/* Flexible Contact Input */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Your Contact (Email, @telegram, or Phone)
              </label>
              <input
                type="text"
                required
                value={contact}
                disabled={isLoading}
                onChange={(e) => setContact(e.target.value)}
                placeholder="you@company.com, @telegram_handle, or +7..."
                className="w-full bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-neutral-700 rounded-lg p-2.5 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5c00] transition-colors"
              />
            </div>

            {/* Message Details */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Message</label>
              <textarea
                rows={3}
                required
                value={message}
                disabled={isLoading}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about what you are looking to create, an open role, or just say hi..."
                className="w-full bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-neutral-700 rounded-lg p-2.5 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5c00] transition-colors"
              />
            </div>

            {/* Hidden honeypot field for anti-spam */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="bot_trap"
                value={botTrap}
                onChange={(e) => setBotTrap(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={isLoading}
                className="apple-btn flex-1 py-2.5 rounded-full bg-[#ff5c00] hover:bg-[#e05200] disabled:opacity-60 text-sm font-medium text-white transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending to Telegram...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send to Telegram Bot</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
