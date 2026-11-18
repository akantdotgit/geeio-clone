import { useState, useEffect } from 'react';
import { ABOUT_HERO_DATA } from '../../data/aboutData';

/**
 * AboutHero — Our Story & Video Collaboration Banner
 *
 * Implements:
 * - Editorial Display XL heading in Plus Jakarta Sans with negative tracking
 * - Mission statement subtext
 * - High-resolution collaboration banner image from assets (static, no hover effects)
 * - Borderless and shadowless video player container
 * - Interactive play button with subtle pulse and accessible video modal dialog
 * - Keyboard navigation (Esc to close modal, focus trap)
 */
export default function AboutHero({ data = ABOUT_HERO_DATA }) {
  const { title, description, banner } = data;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsVideoOpen(false);
      }
    };
    if (isVideoOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 md:pt-14 pb-8 sm:pb-12 md:pb-16">
      {/* Header Narrative */}
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-primary tracking-[-2px] sm:tracking-[-2.5px] font-heading leading-[1.12]">
          {title}
        </h1>
        <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-body max-w-2xl leading-relaxed font-heading px-2">
          {description}
        </p>
      </div>

      {/* Video Collaboration Banner (Borderless, Shadowless, No Hover Scale) */}
      <div className="mt-8 sm:mt-12 md:mt-16 relative w-full h-[260px] sm:h-[380px] md:h-[480px] lg:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden bg-surface">
        <img
          alt={banner.alt}
          className="w-full h-full object-cover object-center"
          src={banner.image}
          loading="eager"
        />

        {/* Subtle Gradient Scrim for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />

        {/* Center Play Button with Subtle Breathing Pulse */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            aria-label="Play video story"
            onClick={() => setIsVideoOpen(true)}
            className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-canvas text-primary flex items-center justify-center cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2"
          >
            <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 pl-1 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span
              className="absolute inset-0 rounded-full bg-canvas/40 animate-ping -z-10 opacity-75"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Accessible Video Modal */}
      {isVideoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Geeio Story Video"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-primary rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video dialog"
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-canvas/80 hover:bg-canvas text-primary flex items-center justify-center cursor-pointer transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-focus"
            >
              <span className="text-xl font-bold leading-none">&times;</span>
            </button>
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Geeio Story Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
