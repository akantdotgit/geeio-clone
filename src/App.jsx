/**
 * App.jsx — Step 1 Primitives Dev Showcase
 *
 * Demonstrates the color palette, typography scale, inputs, buttons, and dropdown.
 */
import { useState } from 'react';
import { Button, SwitchToggle, Input, Dropdown, DropdownItem, MegaMenuPanel } from './components/ui';
import { Navbar, Footer } from './components/layout';
import { Faq } from './components/sections';

/* ── Section wrapper helper ─────────────────────────────────────────── */
function Section({ title, bg = 'bg-canvas', children }) {
  return (
    <section className={`${bg} px-8 py-12`}>
      <div className="max-w-4xl mx-auto">
        <p className="font-ui text-xs font-medium text-muted uppercase tracking-widest mb-6">
          {title}
        </p>
        {children}
      </div>
    </section>
  );
}

/* ── Token swatch ───────────────────────────────────────────────────── */
const SWATCHES = [
  { name: 'primary',     hex: '#0E160F' },
  { name: 'accent',      hex: '#317039' },
  { name: 'canvas',      hex: '#FFFFFF', border: true },
  { name: 'surface',     hex: '#F6F7F6', border: true },
  { name: 'surface-alt', hex: '#E4EFD3', border: true },
  { name: 'body',        hex: '#505851' },
  { name: 'muted',       hex: '#999999' },
  { name: 'neutral-1',   hex: '#222222' },
  { name: 'neutral-2',   hex: '#CCCCCC', border: true },
  { name: 'neutral-3',   hex: '#333333' },
  { name: 'accent-1',    hex: '#E1FCE4', border: true },
  { name: 'accent-2',    hex: '#111EB2' },
  { name: 'accent-3',    hex: '#161B4C' },
  { name: 'focus',       hex: '#3B79C3' },
];

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [billingCycle, setBillingCycle] = useState('Monthly');

  return (
    <div className="min-h-screen font-heading">
      {/* ── Non-floating Navbar (Step 2 Layout) ────────────────────── */}
      <Navbar activePage="Home" />

      {/* ── Page header ─────────────────────────────────────────────── */}
      <div className="bg-primary text-canvas px-8 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="font-ui text-xs text-canvas/50 uppercase tracking-widest mb-2">
            Step 1 — Primitives
          </p>
          <h1 className="text-[40px] font-medium leading-[1.16] tracking-[-2px] mb-1">
            Geeio UI System
          </h1>
          <p className="font-ui text-sm text-canvas/60">
            Color palette · Typography scale · Inputs · Buttons · Dropdown
          </p>
        </div>
      </div>

      {/* ── 1. Color palette ────────────────────────────────────────── */}
      <Section title="1 · Color Palette" bg="bg-surface">
        <div className="flex flex-wrap gap-3">
          {SWATCHES.map(({ name, hex, border }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <div
                className={`w-14 h-14 rounded-xl ${border ? 'border border-neutral-2' : ''}`}
                style={{ backgroundColor: hex }}
              />
              <span className="font-ui text-[10px] text-body text-center">{name}</span>
              <span className="font-ui text-[9px] text-muted">{hex}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 2. Typography ───────────────────────────────────────────── */}
      <Section title="2 · Typography Scale">
        <div className="space-y-4">
          <p className="font-heading text-[64px] font-medium leading-[1.12] tracking-[-2.5px] text-primary">Display XL — 64px −2.5px</p>
          <p className="font-heading text-[48px] font-medium leading-[1.16] tracking-[-2px] text-primary">Display LG — 48px −2px</p>
          <p className="font-heading text-[32px] font-medium leading-[1.25] tracking-[-1px] text-primary">Heading — 32px −1px</p>
          <p className="font-heading text-[24px] font-medium leading-[1.5] tracking-[-0.5px] text-body">Body XL — 24px −0.5px</p>
          <p className="font-heading text-[20px] font-medium leading-[1.4] text-body">Body LG — 20px</p>
          <p className="font-heading text-[20px] font-bold leading-[1.4] tracking-[-0.16px] text-body">Body LG Strong — 20px 700</p>
          <p className="font-heading text-[18px] font-medium leading-[1.55] text-body">Body MD — 18px</p>
          <p className="font-ui text-[18px] font-medium leading-[1.55] text-body">Button LG — Inter 18px</p>
          <p className="font-ui text-[14px] font-normal leading-[1.5] text-body">Button MD / Nav — Inter 14px</p>
          <p className="font-ui text-[12px] font-medium leading-[1.25] text-muted">Caption MD — Inter 12px</p>
        </div>
      </Section>

      {/* ── 3. Buttons (Replicated from Assets) ───────────────────────── */}
      <Section title="3 · Buttons (Replicated from Assets)" bg="bg-surface">
        <div className="flex flex-col gap-8">
          {/* Row 1: Primary Dark Pill */}
          <div className="flex flex-col gap-3">
            <span className="font-ui text-xs text-muted">1. Primary Dark Pill Buttons (Hero & Feature CTA)</span>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Download Geeio For Free</Button>
              <Button variant="primary">Download It's Free</Button>
              <Button variant="primary">Get Started</Button>
            </div>
          </div>

          {/* Row 2: Outline Pill Button */}
          <div className="flex flex-col gap-3">
            <span className="font-ui text-xs text-muted">2. Outline Pill Button (Pricing Free Plan)</span>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline">Get Started</Button>
            </div>
          </div>

          {/* Row 3: Watch Demo Button */}
          <div className="flex flex-col gap-3">
            <span className="font-ui text-xs text-muted">3. Watch Demo Button (White pill with icon)</span>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="demo"
                icon={
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" className="shrink-0">
                    <path d="M16.3125 14.625C16.3125 14.7742 16.2532 14.9173 16.1477 15.0227C16.0423 15.1282 15.8992 15.1875 15.75 15.1875H2.25C2.10082 15.1875 1.95774 15.1282 1.85225 15.0227C1.74676 14.9173 1.6875 14.7742 1.6875 14.625C1.6875 14.4758 1.74676 14.3327 1.85225 14.2273C1.95774 14.1218 2.10082 14.0625 2.25 14.0625H15.75C15.8992 14.0625 16.0423 14.1218 16.1477 14.2273C16.2532 14.3327 16.3125 14.4758 16.3125 14.625ZM16.3125 3.9375V11.8125C16.3125 12.1109 16.194 12.397 15.983 12.608C15.772 12.819 15.4859 12.9375 15.1875 12.9375H2.8125C2.51413 12.9375 2.22798 12.819 2.017 12.608C1.80603 12.397 1.6875 12.1109 1.6875 11.8125V3.9375C1.6875 3.63913 1.80603 3.35298 2.017 3.142C2.22798 2.93103 2.51413 2.8125 2.8125 2.8125H15.1875C15.4859 2.8125 15.772 2.93103 15.983 3.142C16.194 3.35298 16.3125 3.63913 16.3125 3.9375ZM11.5312 7.875C11.5312 7.78462 11.5094 7.69557 11.4677 7.61541C11.4259 7.53524 11.3655 7.46631 11.2915 7.41445L8.47898 5.4457C8.39471 5.38666 8.29585 5.35187 8.19317 5.34512C8.09049 5.33837 7.98792 5.35991 7.89664 5.4074C7.80535 5.45489 7.72884 5.52651 7.67544 5.61447C7.62203 5.70243 7.59378 5.80335 7.59375 5.90625V9.84375C7.59378 9.94665 7.62203 10.0476 7.67544 10.1355C7.72884 10.2235 7.80535 10.2951 7.89664 10.3426C7.98792 10.3901 8.09049 10.4116 8.19317 10.4049C8.29585 10.3981 8.39471 10.3633 8.47898 10.3043L11.2915 8.33555C11.3655 8.28369 11.4259 8.21476 11.4677 8.13459C11.5094 8.05443 11.5312 7.96538 11.5312 7.875Z" fill="#505851"/>
                  </svg>
                }
              >
                Watch demo
              </Button>
            </div>
          </div>

          {/* Row 4: White Pill Button on Dark Surface */}
          <div className="flex flex-col gap-3">
            <span className="font-ui text-xs text-muted">4. White Pill on Dark Surface (Footer CTA)</span>
            <div className="bg-primary rounded-2xl p-8 flex flex-wrap items-center gap-4">
              <Button variant="white">Book Your Appointment</Button>
            </div>
          </div>

          {/* Row 5: Pricing Monthly / Yearly Switch */}
          <div className="flex flex-col gap-3">
            <span className="font-ui text-xs text-muted">5. Pricing Switch Toggle</span>
            <div>
              <SwitchToggle
                options={['Monthly', 'Yearly']}
                value={billingCycle}
                onChange={setBillingCycle}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── 4. Input ────────────────────────────────────────────────── */}
      <Section title="4 · Input (Replicated from Screenshot)">
        <div className="max-w-[486px] bg-surface rounded-2xl p-6 sm:p-8 flex flex-col gap-3">
          <Input
            label="Name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <Input
            label="Email address"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <Input
            label="Subject"
            type="text"
            placeholder="Write a subject line"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />

          <Input
            label="Message"
            multiline
            placeholder="Tell us how we can help"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
      </Section>

      {/* ── 5. Dropdown ─────────────────────────────────────────────── */}
      <Section title="5 · Dropdown & Mega Menu" bg="bg-surface">
        <div className="flex flex-col gap-10 min-h-[580px]">
          {/* Row 1: Simple list & right-aligned */}
          <div className="flex flex-wrap items-start gap-16">
            <div>
              <p className="font-ui text-xs text-muted mb-4">Simple list (Hover to open)</p>
              <Dropdown label="Products">
                <DropdownItem href="#">Plant Identifier</DropdownItem>
                <DropdownItem href="#">Care Reminders</DropdownItem>
                <DropdownItem href="#">Disease Diagnosis</DropdownItem>
                <DropdownItem href="#">Community</DropdownItem>
              </Dropdown>
            </div>

            <div>
              <p className="font-ui text-xs text-muted mb-4">Right-aligned (Hover to open)</p>
              <Dropdown label="Account" align="right">
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Sign out</DropdownItem>
              </Dropdown>
            </div>
          </div>

          {/* Row 2: Mega-menu panel (as in screenshot) */}
          <div>
            <p className="font-ui text-xs text-muted mb-4">Pages Mega Menu (Hover "Pages" to open)</p>
            <Dropdown
              label="Pages"
              panelWidth="w-[820px] max-w-[90vw]"
              panel={<MegaMenuPanel activePage="Home" />}
            />
          </div>
        </div>
      </Section>

      {/* ── 6. FAQ Section ────────────────────────────────────────── */}
      <Section title="6 · FAQ Section (Data-Driven Accordion)">
        <Faq />
      </Section>

      {/* ── Footer Layout ───────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
