import Card from './Card';
import { HERO_TICKER_CARDS } from '../../data/heroTicker';

/**
 * MovingTickerTrack — Horizontal infinite moving track behind the Hero mockup
 *
 * Implements:
 * - Continuous smooth CSS ticker animation via `.animate-ticker`
 * - Duplicates card data (repeat = 2) to ensure a seamless infinite scroll loop at -50%
 * - Maps over data items and renders `Card` components
 *
 * @param {Object} props
 * @param {Array} [props.cards] - Array of ticker card objects (defaults to HERO_TICKER_CARDS)
 * @param {number} [props.repeat=2] - Number of times to duplicate cards for seamless looping
 * @param {string} [props.className] - Optional container classes
 * @param {string} [props.trackClassName] - Optional ticker track classes
 */
export default function MovingTickerTrack({
  cards = HERO_TICKER_CARDS,
  repeat = 2,
  className = '',
  trackClassName = '',
}) {
  const displayCards = Array.from({ length: repeat }).flatMap(() => cards);

  return (
    <div
      className={`absolute inset-x-0 flex items-center z-0 pointer-events-auto ${className}`.trim()}
    >
      <div
        className={`animate-ticker flex items-center gap-4 ${trackClassName}`.trim()}
      >
        {displayCards.map((card, index) => (
          <Card key={`${card.id || 'card'}-${index}`} card={card} />
        ))}
      </div>
    </div>
  );
}
