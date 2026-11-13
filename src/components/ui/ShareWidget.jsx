import { useState } from 'react';
import xSvg from '../../assets/icons/6a689026f6892b62bdea4f63_x.svg';
import pinterestSvg from '../../assets/icons/6a68902641a36e195bff521f_pinterest.svg';
import shareSvg from '../../assets/icons/6a689026b00cf28d6a638f10_share.svg';

/**
 * src/components/ui/ShareWidget.jsx
 *
 * Share buttons (X, Pinterest, Copy Link) rendered responsively
 * (mobile inline bar + desktop sticky sidebar) from ONE component with no duplicated markup.
 * Uses official icon assets from src/assets/icons/ and tokens from AGENTS.md.
 *
 * @param {Object} props
 * @param {string} [props.title] - Optional article title for tweet text
 * @param {string} [props.url] - Optional article URL (defaults to window.location.href)
 * @param {'auto'|'inline'|'sidebar'} [props.variant='auto'] - Layout variant
 * @param {string} [props.className] - Additional wrapper class
 */
export default function ShareWidget({
  title = '',
  url = '',
  variant = 'auto',
  className = '',
}) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (url) return url;
    if (typeof window !== 'undefined') return window.location.href;
    return 'https://geeio.webflow.io/';
  };

  const handleCopy = async () => {
    try {
      const shareUrl = getShareUrl();
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const input = document.createElement('input');
        input.value = shareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const shareUrl = encodeURIComponent(getShareUrl());
  const shareTitle = encodeURIComponent(
    title || 'Check out this plant care article on Geeio'
  );

  const containerClass =
    variant === 'inline'
      ? 'flex items-center justify-between pb-6 mb-6 border-b border-neutral-2/40 w-full'
      : variant === 'sidebar'
      ? 'md:col-span-2 pt-2'
      : 'col-span-1 md:col-span-2 w-full lg:mr-6.5';

  const innerClass =
    variant === 'inline'
      ? 'flex items-center justify-between w-full'
      : variant === 'sidebar'
      ? 'sticky top-22 flex flex-col items-start gap-2'
      : 'sticky md:top-22 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start pb-6 my-6.5 md:pb-0 md:mb-0 border-b border-neutral-2/40 md:border-b-0 gap-2';

  const labelNode =
    variant === 'inline' ? (
      <span className="font-ui text-sm font-medium text-neutral-3 tracking-tight">
        Share article
      </span>
    ) : variant === 'sidebar' ? (
      <span className="font-ui text-sm font-medium text-neutral-3 mb-2 tracking-tight">
        Share
      </span>
    ) : (
      <span className="font-ui text-sm font-medium text-neutral-3 tracking-tight md:mb-2">
        <span className="md:hidden">Share article</span>
        <span className="hidden md:inline">Share</span>
      </span>
    );

  return (
    <div className={`${containerClass} ${className}`.trim()}>
      <div className={innerClass}>
        {labelNode}

        <div className="flex items-center gap-4 relative">
          {/* X / Twitter */}
          <a
            className="hover:contrast-200 transition-opacity inline-flex items-center justify-center p-1 md:p-0 rounded focus:outline-none focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2"
            href={`https://x.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
            rel="noopener noreferrer"
            target="_blank"
            title="Share on X"
            aria-label="Share on X"
          >
            <img
              src={xSvg}
              alt="Share on X"
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
          </a>

          {/* Pinterest */}
          <a
            className="hover:contrast-200 transition-opacity inline-flex items-center justify-center p-1 md:p-0 rounded focus:outline-none focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2"
            href={`https://www.pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}`}
            rel="noopener noreferrer"
            target="_blank"
            title="Share on Pinterest"
            aria-label="Share on Pinterest"
          >
            <img
              src={pinterestSvg}
              alt="Share on Pinterest"
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
          </a>

          {/* Copy link button */}
          <button
            id="share-copy-btn"
            className="hover:contrast-200 transition-opacity inline-flex items-center justify-center p-1 md:p-0 cursor-pointer rounded focus:outline-none focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 relative"
            title={copied ? 'Copied to clipboard!' : 'Copy link'}
            aria-label={copied ? 'Copied to clipboard!' : 'Copy link'}
            type="button"
            onClick={handleCopy}
          >
            <img
              src={shareSvg}
              alt="Copy link"
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
            {copied && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-ui font-medium bg-primary text-canvas rounded shadow-sm pointer-events-none whitespace-nowrap">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
