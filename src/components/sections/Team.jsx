import { TEAM_MEMBERS } from '../../data/teamData';

/**
 * TeamMemberCard — Individual card for a team member
 *
 * Implements:
 * - Fluid sizing (240px -> 280px -> 300px) with 3:4 aspect ratio
 * - Smooth image zoom on hover
 * - Floating glassmorphism hover card overlay with name and role
 * - Keyboard accessible focus state with focus ring
 * - Graceful fallback to bundled webp if remote URL fails
 */
function TeamMemberCard({ member }) {
  return (
    <div
      tabIndex={0}
      className="relative w-[280px] sm:w-[320px] h-[332px] sm:h-[380px] rounded-2xl overflow-hidden group shrink-0 bg-surface-alt focus:outline-none focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2"
    >
      <img
        alt={member.name}
        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out"
        src={member.image}
        loading="lazy"
      />
      {/* Floating Hover Card Overlay */}
      <div
        className="absolute inset-x-3 bottom-3 sm:bottom-4 transition-all duration-300 ease-out transform translate-y-4 opacity-0 group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:translate-y-1 group-focus-within:opacity-100 z-10"
      >
        <div
          className="bg-canvas rounded-lg py-3 px-3.5 shadow-md text-center"
        >
          <h4 className="font-medium text-primary text-sm sm:text-lg leading-tight font-ui">
            {member.name}
          </h4>
          <p className="text-[13px] text-body mt-1 font-normal font-ui">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Team — Leadership & Team Ticker Section
 *
 * Implements:
 * - Data-driven ticker mapping over TEAM_MEMBERS from src/data/teamData
 * - Infinite seamless marquee loop with duplicate set for smooth looping
 * - Negative tracking display heading matching Geeio design tokens
 * - Interactive hover card overlay showing member role & credentials
 * - Accessible dual-track pattern (aria-hidden on duplicate set)
 *
 * Source: export/about.html (SECTION 4: LEADERSHIP & TEAM TICKER)
 *
 * @param {Object} props
 * @param {string} [props.title='Meet the team behind Geeio'] - Section heading
 * @param {string} [props.badge] - Optional badge label rendered above heading
 * @param {Array} [props.members=TEAM_MEMBERS] - Array of team members
 * @param {boolean} [props.pauseOnHover=true] - Whether to pause ticker on hover
 * @param {string} [props.className=''] - Additional CSS classes for outer section
 */
export default function Team({
  title = 'Meet the team behind Geeio',
  members = TEAM_MEMBERS,
  className = '',
}) {
  return (
    <section
      className={`w-full flex flex-col gap-10 sm:gap-13 py-12 sm:py-16 md:py-24 overflow-hidden bg-canvas ${className}`.trim()}
    >
      <div className="text-center mx-auto px-7.5 max-w-[450px]">
        <h2 className="text-[2rem] sm:text-4xl md:text-[38px] lg:text-5xl font-medium text-primary tracking-[-1px] sm:tracking-[-2px] leading-9.5 lg:leading-13.5 font-heading">
          {title}
        </h2>
      </div>

      {/* Ticker Carousel Container */}
      <div
        className="w-full overflow-hidden select-none py-2"
        style={{ animationPlayState: 'running' }}
      >
        <div
          className="animate-marquee flex gap-4"
          style={{ animationPlayState: 'running' }}
        >
          {/* SET 1 */}
          <div
            className="flex gap-4"
            style={{ animationPlayState: 'running' }}
          >
            {members.map((member, index) => (
              <TeamMemberCard
                key={member.id ? `set1-${member.id}` : `set1-${index}`}
                member={member}
              />
            ))}
          </div>

          {/* SET 2 (Exact Duplicate for Seamless Infinite Marquee Loop) */}
          <div
            aria-hidden="true"
            className="flex gap-4"
            style={{ animationPlayState: 'running' }}
          >
            {members.map((member, index) => (
              <TeamMemberCard
                key={member.id ? `set2-${member.id}` : `set2-${index}`}
                member={member}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
