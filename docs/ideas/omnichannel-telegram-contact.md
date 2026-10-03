# Omnichannel Telegram Contact Bridge

## Problem Statement
How Might We transform the static "Let's Connect" modal on `resume.abbakkio.dev` into a high-conversion multi-channel communication bridge that dispatches inquiries directly to your Telegram bot via `api.abbakkio.dev` while giving visitors instant 1-click access to Telegram, LinkedIn, WhatsApp, and Email?

## Recommended Direction
**The Frictionless Omnichannel Hub** — A unified two-tier contact interface:
1. **Immediate Zero-Friction Channels (Top Strip):** Instant 1-click badges for visitors who want direct conversation:
   - **Telegram:** `https://t.me/voidpip`
   - **LinkedIn:** `https://www.linkedin.com/in/azatmadiyev`
   - **WhatsApp:** `https://wa.me/77016255449`
   - **Email:** `mailto:upirovazat7@gmail.com`
2. **Direct-to-Telegram Web Form (Bottom):** An in-page form submitting directly to `POST https://api.abbakkio.dev/api/messages/send`:
   - Accepts Name, Flexible Contact (`Email, @telegram, or Phone`), and Message.
   - Triggers instant HTML-formatted push notifications to Azat's personal Telegram via the Telegram Bot API (`telegram_service.send_anonymous_note`).
   - Includes anti-spam honeypot (`bot_trap`) and server-side IP rate limiting (5 msgs / 10 mins).

## Key Assumptions to Validate
- [x] **Backend Endpoint Readiness:** `https://api.abbakkio.dev/api/messages/send` is live and healthy.
- [x] **CORS Origins:** Verified that `https://resume.abbakkio.dev` is authorized by regex `^https://([a-zA-Z0-9-]+\.)*abbakkio\.dev$`.
- [x] **Anti-Spam Defense:** Validated honeypot field prevents bots from spamming your Telegram bot without annoying real users with captchas.

## MVP Scope
- **Channels Supported:** Telegram, LinkedIn, WhatsApp, Email.
- **Form Submission:** Live `fetch` to `api.abbakkio.dev` with loading spinner, error feedback, and success view.
- **Spam Protection:** Hidden `bot_trap` input and backend rate limiting.

## Not Doing (and Why)
- **Not forcing Telegram only:** Many hiring managers and recruiters browse on corporate machines without Telegram desktop installed; keeping LinkedIn, Email, and in-browser form guarantees zero drop-off.
- **Not building real-time bidirectional web chat:** Over-engineered for portfolio inquiries; asynchronous push notifications to Telegram allow instant responses via the contact info left by the sender.

## Open Questions
- Would you like Telegram notification message formatting customized with specific action buttons (e.g. inline button to reply directly or open sender's profile)?
