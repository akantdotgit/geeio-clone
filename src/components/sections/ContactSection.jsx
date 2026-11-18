import { useState } from 'react';
import brandIconSvg from '../../assets/icons/6a64d9bf2d2279d5e3a43461_Icon.svg';
import { Button, Input } from '../ui';
import { CONTACT_METHODS, CONTACT_PAGE_DATA } from '../../data/contactData';

/**
 * ContactSection — Main Section of the Contact Page
 *
 * Implements:
 *   - Botanical brand icon accent from assets folder
 *   - Negative-tracked editorial display heading per AGENTS.md
 *   - Data-driven contact methods list (Email, Live Chat, Response Time) mapped from src/data/contactData.js
 *   - Flat color-blocking architecture with all borders and shadows completely removed
 *   - Contact form utilizing reusable Input and Button UI primitives
 *   - Accessible interactive states with focus-visible rings
 */
export default function ContactSection({ className = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  const renderIcon = (icon) => {
    switch (icon) {
      case 'email':
        return (
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-body shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'chat':
        return (
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-body shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'clock':
      default:
        return (
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-body shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={`w-full max-w-[1140px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${className}`.trim()}
    >
      {/* ── BEGIN: LeftInfoColumn ──────────────────────────────────── */}
      <section
        aria-labelledby="contact-heading"
        className="w-full flex flex-col justify-start pt-2 lg:pt-6"
      >
        {/* Botanical brand icon accent from assets */}
        <div aria-hidden="true" className="mb-8 select-none">
          <img
            src={brandIconSvg}
            alt=""
            className="w-8 h-8 object-contain"
          />
        </div>

        {/* Main Display Heading with negative tracking per AGENTS.md */}
        <h1
          id="contact-heading"
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.5px] text-primary leading-[1.08] mb-8 sm:mb-12 lg:mb-16 whitespace-pre-line"
        >
          {CONTACT_PAGE_DATA.heading}
        </h1>

        {/* Contact Methods List — Data-driven */}
        <div className="space-y-0 max-w-[480px]">
          {CONTACT_METHODS.map((item) => (
            <div key={item.id}>
              <div className="py-4 flex items-center gap-3.5 font-heading text-[14.5px] text-primary">
                {renderIcon(item.icon)}
                <div>
                  <span className="font-normal text-body">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:underline font-normal text-primary focus-ring rounded transition-colors ml-0.5"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-body font-normal ml-0.5">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
              <div
                aria-hidden="true"
                className="h-px w-full bg-neutral-2/30"
              />
            </div>
          ))}
        </div>
      </section>
      {/* ── END: LeftInfoColumn ────────────────────────────────────── */}

      {/* ── BEGIN: RightFormColumn ─────────────────────────────────── */}
      <section
        aria-label="Contact submission form container"
        className="w-full flex justify-center lg:justify-end"
      >
        {/* Form panel: Flat surface background, borderless and shadowless */}
        <div className="w-full max-w-[500px] bg-surface rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-0 shadow-none">
          {isSubmitted ? (
            <div className="py-10 flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-1 text-accent flex items-center justify-center mb-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-primary">
                Message sent!
              </h2>
              <p className="font-heading text-sm text-body leading-relaxed max-w-sm">
                Thank you for getting in touch. Our team will review your message and respond within 1 business day.
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="mt-4"
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Input: Name */}
              <Input
                label="Name"
                id="full-name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              {/* Input: Email address */}
              <Input
                label="Email address"
                id="email-address"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />

              {/* Input: Subject */}
              <Input
                label="Subject"
                id="subject"
                name="subject"
                type="text"
                placeholder="Write a subject line"
                required
                value={formData.subject}
                onChange={handleChange}
              />

              {/* Input: Message */}
              <Input
                as="textarea"
                rows={4}
                label="Message"
                id="message"
                name="message"
                placeholder="Tell us how we can help"
                required
                value={formData.message}
                onChange={handleChange}
              />

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full py-3.5 text-[15px] font-semibold rounded-full border-0 shadow-none"
                >
                  Send Message
                </Button>
              </div>

              {/* Form Footer Note */}
              <p className="text-center font-ui text-xs sm:text-sm text-body pt-1">
                <span className="font-medium text-primary">Note:</span>{' '}
                {CONTACT_PAGE_DATA.note}
              </p>
            </form>
          )}
        </div>
      </section>
      {/* ── END: RightFormColumn ───────────────────────────────────── */}
    </div>
  );
}
