import React, { useState } from "react";

/**
 * Smart Flip Tools — single-file landing page.
 * React + Tailwind core utilities only. No external UI libraries.
 * Default export. Fully responsive, mobile-first.
 */

/* ----------------------------- Tiny inline icons ---------------------------- */
/* Stroke-based, inherit currentColor so they tint with text/accent classes. */

const Icon = ({ children, className = "h-5 w-5", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

const BoltIcon = (p) => (
  <Icon {...p}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
  </Icon>
);
const TargetIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" />
  </Icon>
);
const ShieldIcon = (p) => (
  <Icon {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
const ChartIcon = (p) => (
  <Icon {...p}>
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="m7 15 3-4 3 2 4-6" />
  </Icon>
);
const DiscordIcon = (p) => (
  <Icon {...p} strokeWidth="0" fill="currentColor">
    <path d="M19.3 5.4A17 17 0 0 0 15.1 4l-.2.4a14 14 0 0 1 3.7 1.2 13 13 0 0 0-11.2 0A14 14 0 0 1 11.1 4.4L10.9 4A17 17 0 0 0 6.7 5.4 17.5 17.5 0 0 0 3.6 17.5a17 17 0 0 0 5.2 2.6l.6-1a11 11 0 0 1-1.8-.9l.4-.3a12 12 0 0 0 10 0l.4.3a11 11 0 0 1-1.8.9l.6 1a17 17 0 0 0 5.2-2.6 17.5 17.5 0 0 0-3.1-12.1ZM9.4 14.8c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm5.2 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
  </Icon>
);
const XIcon = (p) => (
  <Icon {...p} strokeWidth="0" fill="currentColor">
    <path d="M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.2L7.3 21H4.2l7.5-8.6L3.8 3h6.6l4.5 5.7L17.5 3Zm-1.1 16.1h1.7L7.7 4.8H5.9l10.5 14.3Z" />
  </Icon>
);
const BookIcon = (p) => (
  <Icon {...p}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
    <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5A2.5 2.5 0 0 1 4 20.5z" />
  </Icon>
);
const PlayIcon = (p) => (
  <Icon {...p}>
    <path d="m8 5 11 7-11 7V5z" />
  </Icon>
);
const ChevronIcon = (p) => (
  <Icon {...p}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
);
const CheckIcon = (p) => (
  <Icon {...p}>
    <path d="m5 12 5 5 9-11" />
  </Icon>
);

/* --------------------------------- Logo ----------------------------------- */
/* Renders the brand logo from /logo.png (drop your file in public/logo.png).
   Falls back to an inline SVG recreation — cyan Ethereum diamond with "SF"
   monogram and drip lines — so the mark always renders even before the PNG
   is added. */

function LogoMark({ className = "h-9 w-9" }) {
  const [useImg, setUseImg] = useState(true);

  if (useImg) {
    return (
      <img
        src="/logo.png"
        alt="Smart Flip Tools logo"
        onError={() => setUseImg(false)}
        className={`${className} rounded-xl object-contain`}
      />
    );
  }

  return (
    <span
      className={`relative grid ${className} place-items-center rounded-xl border border-[#22E7F0]/40 bg-[#22E7F0]/10 shadow-[0_0_24px_-6px_rgba(34,231,240,0.7)]`}
    >
      <svg
        viewBox="0 0 64 64"
        className="h-[80%] w-[80%] text-[#22E7F0]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Ethereum diamond — top quad + bottom arrow */}
        <path d="M32 5 13 33 32 40 51 33Z" />
        <path d="M14 37 32 59 50 37" />
        {/* drip lines */}
        <path d="M21 43v9M26 45v12M31 47v6" opacity="0.65" />
        {/* SF monogram */}
        <text
          x="32"
          y="27"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="17"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          fill="currentColor"
          stroke="none"
        >
          SF
        </text>
      </svg>
    </span>
  );
}

const Logo = ({ withWordmark = true }) => (
  <a href="#top" className="group flex items-center gap-2.5" aria-label="Smart Flip Tools home">
    <span className="transition-transform group-hover:-translate-y-0.5">
      <LogoMark />
    </span>
    {withWordmark && (
      <span className="text-[15px] font-black tracking-tight leading-none">
        Smart Flip <span className="text-[#22E7F0]">Tools</span>
      </span>
    )}
  </a>
);

/* ------------------------------ Shared bits ------------------------------- */

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const DISCORD_URL = "https://discord.gg/EUXuTa2yjh";
const X_URL = "https://x.com/SmartFlipTools";
const DOCS_URL = "https://smart-flip-tools.gitbook.io/smart-flip-tools";

/* Lets nested CTAs ("Get Access", "Subscribe", etc.) navigate to the cabinet
   without prop-drilling. Provided by the root component. */
const NavContext = React.createContext(() => {});
const useGoToApp = () => React.useContext(NavContext);

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#22E7F0]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#22E7F0] shadow-[0_0_10px_2px_rgba(34,231,240,0.8)]" />
    {children}
  </span>
);

/* --------------------------------- Header --------------------------------- */

function Header() {
  const [open, setOpen] = useState(false);
  const goToApp = useGoToApp();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" aria-label="Join our Discord" className="grid h-9 w-9 place-items-center rounded-lg text-white/65 transition-colors hover:bg-white/5 hover:text-[#22E7F0]">
            <DiscordIcon />
          </a>
          <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label="Follow us on X" className="grid h-9 w-9 place-items-center rounded-lg text-white/65 transition-colors hover:bg-white/5 hover:text-[#22E7F0]">
            <XIcon className="h-4 w-4" />
          </a>
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" aria-label="Read the docs" className="grid h-9 w-9 place-items-center rounded-lg text-white/65 transition-colors hover:bg-white/5 hover:text-[#22E7F0]">
            <BookIcon />
          </a>
          <button
            type="button"
            onClick={goToApp}
            className="ml-3 rounded-xl bg-[#22E7F0] px-4 py-2 text-sm font-bold text-black shadow-[0_0_24px_-4px_rgba(34,231,240,0.8)] transition-transform hover:-translate-y-0.5"
          >
            Get Access
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
        >
          <Icon className="h-5 w-5">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </Icon>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" aria-label="Discord" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white/70 hover:text-[#22E7F0]"><DiscordIcon /></a>
              <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label="X" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white/70 hover:text-[#22E7F0]"><XIcon className="h-4 w-4" /></a>
              <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" aria-label="Docs" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white/70 hover:text-[#22E7F0]"><BookIcon /></a>
              <button type="button" onClick={() => { setOpen(false); goToApp(); }} className="ml-auto rounded-xl bg-[#22E7F0] px-4 py-2.5 text-sm font-bold text-black">Get Access</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

const heroStats = [
  { value: "100+", label: "bids / sec" },
  { value: "OpenSea + Blur", label: "marketplaces" },
  { value: "All EVM", label: "chains" },
  { value: "Profit", label: "tracking" },
];

function Hero() {
  const goToApp = useGoToApp();
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
      {/* Cyan aura gradients */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]">
        <div className="absolute left-1/2 top-[-180px] h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,231,240,0.22),transparent)] blur-2xl" />
        <div className="absolute left-[18%] top-[40px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(34,231,240,0.16),transparent)] blur-2xl" />
        <div className="absolute right-[14%] top-[120px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(closest-side,rgba(34,231,240,0.12),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <SectionLabel>NFT trading suite · live beta</SectionLabel>

        <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          Work smarter.
          <br />
          <span className="text-[#22E7F0] [text-shadow:0_0_40px_rgba(34,231,240,0.45)]">Flip faster.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-white/65 sm:text-lg">
          An all-in-one suite of NFT bots that automate bidding, listing and analytics — so you
          flip at machine speed and scale without the manual grind.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={goToApp}
            className="w-full rounded-xl bg-[#22E7F0] px-7 py-3.5 text-sm font-bold text-black shadow-[0_0_32px_-4px_rgba(34,231,240,0.85)] transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Start Free Trial
          </button>
          <a
            href="#demo"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:border-[#22E7F0]/50 hover:text-[#22E7F0] sm:w-auto"
          >
            <PlayIcon className="h-4 w-4" />
            Watch Demo
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-md transition-transform hover:-translate-y-0.5 hover:border-[#22E7F0]/40"
            >
              <div className="text-lg font-black tracking-tight text-[#22E7F0]">{s.value}</div>
              <div className="mt-0.5 text-xs font-medium uppercase tracking-wide text-white/55">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Features -------------------------------- */

const features = [
  {
    icon: BoltIcon,
    title: "Ultra-fast bidding",
    desc: "Real-time, aggressive bid placement with execution tuned to the millisecond. Beat the queue and out-pace manual traders.",
  },
  {
    icon: TargetIcon,
    title: "Trait / Collection / Token logic",
    desc: "Flexible strategies that target whole collections, rare traits, or individual tokens — mix and match per wallet.",
  },
  {
    icon: ShieldIcon,
    title: "Smart safety controls",
    desc: "Per-collection caps, floor-range guards, minimum-profit thresholds and instant Telegram alerts keep exposure in check.",
  },
  {
    icon: ChartIcon,
    title: "Profit analytics",
    desc: "Track flips over any period, surface your strongest collections and cut the bleeders before they add up.",
  },
];

function Features() {
  return (
    <section id="features" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <SectionLabel>Features</SectionLabel>
          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
            Everything a flipper needs, automated.
          </h2>
          <p className="mt-3 text-white/60">
            A focused toolset built around the one metric that matters: speed to a profitable fill.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#22E7F0]/40 hover:shadow-[0_20px_60px_-30px_rgba(34,231,240,0.6)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#22E7F0]/30 bg-[#22E7F0]/10 text-[#22E7F0] shadow-[0_0_24px_-8px_rgba(34,231,240,0.8)] transition-transform group-hover:-translate-y-0.5">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Modules --------------------------------- */

const modules = [
  { name: "Trait Bidder", desc: "Bid on rarity tiers & specific traits." },
  { name: "Collection Bidder", desc: "Blanket coverage across a collection." },
  { name: "Token Bidder", desc: "Snipe individual token IDs." },
  { name: "Auto Lister", desc: "Re-list fills at your target margin." },
  { name: "Profit Tracker", desc: "Realised PnL across every wallet." },
  { name: "Multi-wallet support", desc: "Run strategies in parallel, safely." },
];

function Modules() {
  return (
    <section id="modules" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <SectionLabel>Modules</SectionLabel>
          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
            One workflow, every angle covered.
          </h2>
          <p className="mt-4 text-white/60">
            Compose modules into a single pipeline: discover with the bidders, capture fills, then
            auto-list and let the tracker tell you what's actually working. Each module runs
            independently and shares the same risk controls.
          </p>
          <a
            href={DISCORD_URL} target="_blank" rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-xl border border-[#22E7F0]/40 bg-[#22E7F0]/10 px-5 py-3 text-sm font-bold text-[#22E7F0] transition-colors hover:bg-[#22E7F0]/20"
          >
            Explore the stack
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {modules.map((m) => (
            <div
              key={m.name}
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#22E7F0]/40"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#22E7F0] shadow-[0_0_10px_2px_rgba(34,231,240,0.8)]" />
                <span className="font-bold tracking-tight">{m.name}</span>
              </div>
              <p className="mt-2 text-sm text-white/55">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Speed / Perf ------------------------------ */

const speedTiers = [
  { tier: "Starter", value: 3 },
  { tier: "Pro", value: 8 },
  { tier: "Elite", value: 30 },
  { tier: "Max setup", value: 100 },
];
const MAX_SPEED = 100;

const perfChips = ["Instant counter bidding", "Auto cancelling", "<50ms avg response"];

function Speed() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,231,240,0.12),transparent)] blur-2xl" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <SectionLabel>Speed</SectionLabel>
          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
            Bids per second, by tier.
          </h2>
          <p className="mt-3 text-white/60">
            Throughput scales with your plan. Higher tiers unlock more aggressive execution windows.
          </p>
        </div>

        <div className="mt-10 rounded-[34px] border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-9">
          <div className="space-y-6">
            {speedTiers.map((s) => (
              <div key={s.tier} className="flex items-center gap-4 sm:gap-6">
                <div className="w-24 shrink-0 text-sm font-bold text-white/70 sm:w-28">{s.tier}</div>
                <div className="relative h-9 flex-1 overflow-hidden rounded-full border border-white/10 bg-black/40">
                  <div
                    className="flex h-full items-center justify-end rounded-full bg-gradient-to-r from-[#22E7F0]/30 to-[#22E7F0] pr-3 shadow-[0_0_28px_-6px_rgba(34,231,240,0.9)]"
                    style={{ width: `${(s.value / MAX_SPEED) * 100}%` }}
                  >
                    <span className="text-xs font-black text-black">{s.value}/s</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {perfChips.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-[#22E7F0]/30 bg-[#22E7F0]/10 px-4 py-2 text-sm font-semibold text-[#22E7F0]"
              >
                <BoltIcon className="h-4 w-4" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Pricing --------------------------------- */

const tiers = [
  {
    name: "Starter",
    price: "0.12",
    blurb: "For solo flippers getting started.",
    features: ["Core bidding engine", "1 wallet", "Basic analytics", "Discord support"],
    featured: false,
  },
  {
    name: "Pro",
    price: "0.30",
    blurb: "For active traders scaling up.",
    features: ["All modules included", "Multi-wallet", "Instant counter logic", "Advanced analytics"],
    featured: true,
  },
  {
    name: "Elite",
    price: "0.65",
    blurb: "For high-volume operations.",
    features: ["Max-speed setup", "Priority support", "Extended configs", "Private onboarding"],
    featured: false,
  },
];

const prepayDiscounts = [
  { term: "3 months", off: "−10%" },
  { term: "6 months", off: "−20%" },
  { term: "12 months", off: "−30%" },
];
const addOns = ["Blur bidding", "No prefix", "Stealth mode"];

function Pricing() {
  const goToApp = useGoToApp();
  return (
    <section id="pricing" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
            Priced in ETH. Access via Discord.
          </h2>
          <p className="mt-3 text-white/60">
            Pick a tier, open a ticket, get onboarded. No checkout, no middlemen.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                "relative flex flex-col rounded-[34px] border p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1",
                t.featured
                  ? "border-[#22E7F0]/50 bg-[#22E7F0]/[0.07] shadow-[0_30px_80px_-40px_rgba(34,231,240,0.8)] lg:-mt-4 lg:mb-0"
                  : "border-white/10 bg-white/5 hover:border-[#22E7F0]/30",
              ].join(" ")}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#22E7F0] px-3 py-1 text-xs font-black uppercase tracking-wide text-black shadow-[0_0_24px_-4px_rgba(34,231,240,0.9)]">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold tracking-tight">{t.name}</h3>
              <p className="mt-1 text-sm text-white/55">{t.blurb}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-black tracking-tight text-[#22E7F0]">Ξ{t.price}</span>
                <span className="mb-1 text-sm font-medium text-white/50">/mo</span>
              </div>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#22E7F0]" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={goToApp}
                className={[
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5",
                  t.featured
                    ? "bg-[#22E7F0] text-black shadow-[0_0_28px_-4px_rgba(34,231,240,0.85)]"
                    : "border border-white/15 bg-white/5 text-white hover:border-[#22E7F0]/50 hover:text-[#22E7F0]",
                ].join(" ")}
              >
                <DiscordIcon className="h-4 w-4" />
                Get Access via Discord
              </button>
            </div>
          ))}
        </div>

        {/* Prepay + add-ons */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-white/70">Prepay & save</h4>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {prepayDiscounts.map((d) => (
                <div key={d.term} className="rounded-2xl border border-white/10 bg-black/40 px-3 py-4 text-center">
                  <div className="text-xl font-black text-[#22E7F0]">{d.off}</div>
                  <div className="mt-1 text-xs text-white/55">{d.term}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-white/70">Add-ons</h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {addOns.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-2 rounded-full border border-[#22E7F0]/30 bg-[#22E7F0]/10 px-4 py-2 text-sm font-semibold text-[#22E7F0]"
                >
                  + {a}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/45">
              Add-ons stack on any tier. Configure them during Discord onboarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Beta ----------------------------------- */

function Beta() {
  const goToApp = useGoToApp();
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[34px] border border-[#22E7F0]/25 bg-white/5 p-8 backdrop-blur-md sm:p-12">
          <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(34,231,240,0.18),transparent)] blur-2xl" />
          <div className="relative max-w-2xl">
            <SectionLabel>Early-bird beta</SectionLabel>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Lock your price now — for good.
            </h2>
            <p className="mt-4 text-white/65">
              Smart Flip Tools is in active beta. The core engine has been battle-tested over months
              of live trading, and we're refining the edges in the open. Subscribe now and your rate
              stays fixed for as long as you stay subscribed — even after public pricing goes up.
            </p>
            <button
              type="button"
              onClick={goToApp}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#22E7F0] px-6 py-3 text-sm font-bold text-black shadow-[0_0_28px_-4px_rgba(34,231,240,0.85)] transition-transform hover:-translate-y-0.5"
            >
              <DiscordIcon className="h-4 w-4" />
              Claim early-bird pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ ----------------------------------- */

const faqs = [
  {
    q: "What is Smart Flip Tools?",
    a: "It's a suite of NFT trading bots that automate bidding, listing and profit analytics across OpenSea and Blur, so you can run flip strategies at machine speed instead of by hand.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. New users can start a free trial to test core bidding and analytics before subscribing. Open a ticket in Discord to get set up.",
  },
  {
    q: "How do the tiers differ?",
    a: "Higher tiers unlock more modules, more wallets, faster bid throughput and more advanced analytics. Starter covers core bidding; Pro adds multi-wallet and instant counter logic; Elite is the max-speed configuration with private onboarding.",
  },
  {
    q: "Can I get more bids per second?",
    a: "Throughput is tied to your tier, topping out at the max-speed Elite setup. If you need a custom configuration beyond that, talk to us in Discord.",
  },
  {
    q: "Do you guarantee profit?",
    a: "No. Smart Flip Tools is automation tooling, not a profit promise. NFT trading is volatile and inherently risky — you are responsible for your own strategies and outcomes. The tools help you execute faster and manage risk, nothing more.",
  },
  {
    q: "Which marketplaces and chains are supported?",
    a: "OpenSea and Blur out of the box, with support across EVM chains. Blur bidding is also available as an add-on for tiers that don't include it.",
  },
  {
    q: "How do payments work?",
    a: "Plans are priced in ETH and purchased through Discord tickets rather than a classic cart. Prepay 3, 6 or 12 months for a discount.",
  },
  {
    q: "How do I get support?",
    a: "All support runs through our Discord. Open a ticket and the team will help — note that staff never DM you first.",
  },
];

function FaqItem({ item, isOpen, onToggle, id }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:border-white/20">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <span className="font-bold tracking-tight">{item.q}</span>
          <ChevronIcon
            className={`h-5 w-5 shrink-0 text-[#22E7F0] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      {isOpen && (
        <div id={`${id}-panel`} role="region" aria-labelledby={`${id}-button`} className="px-5 pb-5 -mt-1 text-sm leading-relaxed text-white/65">
          {item.a}
        </div>
      )}
    </div>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Questions, answered.</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              id={`faq-${i}`}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Security --------------------------------- */

function Security() {
  return (
    <section className="px-5 pb-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-start gap-4 rounded-[28px] border border-[#22E7F0]/30 bg-[#22E7F0]/[0.06] p-6 backdrop-blur-md sm:p-7">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#22E7F0]/40 bg-[#22E7F0]/10 text-[#22E7F0]">
            <ShieldIcon className="h-6 w-6" />
          </span>
          <div>
            <h3 className="text-base font-bold tracking-tight text-[#22E7F0]">Security reminder</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-white/70">
              We will <span className="font-semibold text-white">never</span> ask for your seed phrase,
              private key or recovery phrase. Our support team never messages first — anyone who DMs
              you claiming to be staff is a scammer. Verify everything inside the official Discord.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Final CTA -------------------------------- */

function FinalCta() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md sm:p-16">
          <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,231,240,0.2),transparent)] blur-2xl" />
          <div className="relative">
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              Join before public
              <br />
              <span className="text-[#22E7F0] [text-shadow:0_0_40px_rgba(34,231,240,0.45)]">pricing goes live.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Early subscribers lock today's rate for good. Open a ticket and start flipping smarter.
            </p>
            <a
              href={DISCORD_URL} target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#22E7F0] px-8 py-4 text-sm font-bold text-black shadow-[0_0_36px_-4px_rgba(34,231,240,0.9)] transition-transform hover:-translate-y-0.5"
            >
              <DiscordIcon className="h-5 w-5" />
              Join the Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Footer --------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Logo />
        <nav className="flex items-center gap-6 text-sm text-white/60" aria-label="Footer">
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#22E7F0]">Docs</a>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#22E7F0]">Discord</a>
          <a href="#contact" className="transition-colors hover:text-[#22E7F0]">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" aria-label="Discord" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/60 transition-colors hover:text-[#22E7F0]"><DiscordIcon /></a>
          <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label="X" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/60 transition-colors hover:text-[#22E7F0]"><XIcon className="h-4 w-4" /></a>
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" aria-label="Docs" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/60 transition-colors hover:text-[#22E7F0]"><BookIcon /></a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-center text-xs text-white/40 sm:text-left">
        © 2026 Smart Flip Tools. All rights reserved. Trading NFTs is risky — tools automate execution, not outcomes.
      </p>
    </footer>
  );
}

/* ------------------------------- Landing page ----------------------------- */

function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-black font-sans text-white antialiased selection:bg-[#22E7F0] selection:text-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Modules />
        <Speed />
        <Pricing />
        <Beta />
        <Faq />
        <Security />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

/* ========================================================================== */
/* ============================ PERSONAL CABINET ============================ */
/* ========================================================================== */

/* ----------------------------- Cabinet icons ------------------------------ */

const GridIcon = (p) => (
  <Icon {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </Icon>
);
const LayersIcon = (p) => (
  <Icon {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5z" />
    <path d="m3 13 9 5 9-5" />
  </Icon>
);
const WalletIcon = (p) => (
  <Icon {...p}>
    <path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0H5a2 2 0 0 0-2 2z" />
    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <circle cx="16.5" cy="13" r="1.2" fill="currentColor" stroke="none" />
  </Icon>
);
const GearIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" />
  </Icon>
);
const CopyIcon = (p) => (
  <Icon {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </Icon>
);
const RefreshIcon = (p) => (
  <Icon {...p}>
    <path d="M21 12a9 9 0 1 1-2.6-6.4" />
    <path d="M21 3v6h-6" />
  </Icon>
);
const TelegramIcon = (p) => (
  <Icon {...p}>
    <path d="m21 4-9.5 9.5" />
    <path d="M21 4 14.5 21l-3-7.5L4 10.5 21 4z" />
  </Icon>
);
const LogoutIcon = (p) => (
  <Icon {...p}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <path d="M16 17l5-5-5-5" />
    <path d="M21 12H9" />
  </Icon>
);
const PlusIcon = (p) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);
const CloseIcon = (p) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);
const EyeIcon = (p) => (
  <Icon {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);

/* ----------------------------- Cabinet data ------------------------------- */

const CAB_USER = {
  name: "flip_master",
  handle: "flip_master#4827",
  initials: "FM",
};

const PAY_ADDRESS = "0x7F3aD4e1B9c0F2a8b6E5d4C3a2B1908f7e6D5c4b";

const termOptions = [
  { months: 1, label: "1 month", off: 0 },
  { months: 3, label: "3 months", off: 0.1 },
  { months: 6, label: "6 months", off: 0.2 },
  { months: 12, label: "12 months", off: 0.3 },
];

/* ------------------------------ Cabinet bits ------------------------------ */

function Avatar({ size = "h-11 w-11", text = "text-sm" }) {
  return (
    <span
      className={`grid ${size} shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#22E7F0] to-[#0c6b70] font-black ${text} text-black ring-2 ring-[#22E7F0]/40`}
      aria-hidden="true"
    >
      {CAB_USER.initials}
    </span>
  );
}

const statusStyles = {
  active: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  paused: "bg-amber-400/15 text-amber-300 border-amber-400/30",
  expired: "bg-rose-400/15 text-rose-300 border-rose-400/30",
};

function StatusPill({ status }) {
  const label = status.charAt(0).toUpperCase() + status.slice(1);
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-bold ${statusStyles[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${checked ? "bg-[#22E7F0]" : "bg-white/15"}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-black transition-transform ${checked ? "translate-x-5" : "translate-x-0.5"}`}
      />
    </button>
  );
}

function useCopy() {
  const [copied, setCopied] = useState("");
  const copy = (text, key = "x") => {
    try {
      if (navigator.clipboard) navigator.clipboard.writeText(text);
    } catch (e) {
      /* clipboard may be unavailable in sandboxed previews — ignore */
    }
    setCopied(key);
    setTimeout(() => setCopied(""), 1400);
  };
  return [copied, copy];
}

function shortAddr(a) {
  return `${a.slice(0, 6)}...${a.slice(-4)}`;
}

/* ------------------------------ Login screen ------------------------------ */

function LoginScreen({ onLogin, onBack }) {
  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-black px-5 font-sans text-white">
      <div className="pointer-events-none absolute left-1/2 top-[-160px] -z-10 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,231,240,0.22),transparent)] blur-2xl" />

      <div className="relative w-full max-w-md rounded-[34px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl shadow-[0_40px_120px_-50px_rgba(34,231,240,0.7)] sm:p-10">
        <div className="flex justify-center">
          <LogoMark className="h-16 w-16" />
        </div>
        <h1 className="mt-6 text-2xl font-black tracking-tight sm:text-3xl">
          Sign in to <span className="text-[#22E7F0]">Smart Flip Tools</span>
        </h1>
        <p className="mt-2 text-sm text-white/55">
          Access your personal cabinet, subscriptions and profit analytics.
        </p>

        <button
          type="button"
          onClick={onLogin}
          className="mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#5865F2] px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_32px_-6px_rgba(88,101,242,0.9)] transition-transform hover:-translate-y-0.5"
        >
          <DiscordIcon className="h-5 w-5" />
          Login with Discord
        </button>

        <p className="mt-5 text-xs leading-relaxed text-white/45">
          We only read your Discord username and avatar. We never ask for your wallet
          seed phrase or private keys.
        </p>

        <button
          type="button"
          onClick={onBack}
          className="mt-6 text-xs font-medium text-white/40 transition-colors hover:text-white/80"
        >
          ← Back to site
        </button>
      </div>
    </div>
  );
}

/* ----------------------------- Payment modal ------------------------------ */

function QrPlaceholder() {
  /* Decorative pseudo-QR — deterministic pattern, not a real code. */
  const cells = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const on = (r * 7 + c * 3 + ((r * c) % 5)) % 2 === 0;
      cells.push(
        <rect key={`${r}-${c}`} x={c * 10} y={r * 10} width="10" height="10" fill={on ? "#22E7F0" : "transparent"} />
      );
    }
  }
  return (
    <div className="grid place-items-center rounded-2xl bg-black p-3 ring-1 ring-[#22E7F0]/30">
      <svg viewBox="0 0 90 90" className="h-32 w-32" aria-label="Payment QR code placeholder">
        {cells}
      </svg>
    </div>
  );
}

function PaymentModal({ plan, onClose }) {
  const [termIdx, setTermIdx] = useState(0);
  const [copied, copy] = useCopy();
  const term = termOptions[termIdx];
  const monthly = parseFloat(plan.price);
  const total = monthly * term.months * (1 - term.off);
  const totalStr = total.toFixed(4).replace(/0+$/, "").replace(/\.$/, "");

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="ETH payment"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-[28px] border border-white/10 bg-[#070707]/95 p-6 backdrop-blur-xl shadow-[0_40px_120px_-40px_rgba(34,231,240,0.6)] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close payment dialog"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg text-white/50 transition-colors hover:bg-white/5 hover:text-white"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <h3 className="text-lg font-black tracking-tight">Pay with ETH</h3>
        <p className="mt-1 text-sm text-white/55">
          {plan.name} plan · send the exact amount to the address below.
        </p>

        {/* Term selector */}
        <div className="mt-5">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">Billing period</div>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {termOptions.map((t, i) => (
              <button
                key={t.months}
                type="button"
                onClick={() => setTermIdx(i)}
                className={`rounded-xl border px-2 py-2 text-center text-xs font-bold transition-colors ${
                  i === termIdx
                    ? "border-[#22E7F0]/60 bg-[#22E7F0]/15 text-[#22E7F0]"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/25"
                }`}
              >
                {t.months}mo
                <span className="mt-0.5 block text-[10px] font-semibold text-white/45">
                  {t.off ? `−${t.off * 100}%` : "—"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Amount */}
        <div className="mt-5 flex items-end justify-between rounded-2xl border border-[#22E7F0]/30 bg-[#22E7F0]/[0.06] px-5 py-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-wide text-white/55">Total due</div>
            <div className="mt-1 text-3xl font-black tracking-tight text-[#22E7F0]">Ξ{totalStr}</div>
          </div>
          <div className="text-right text-xs text-white/50">
            {plan.name} · {term.label}
            <br />
            Ξ{monthly}/mo base
          </div>
        </div>

        {/* QR + address */}
        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
          <QrPlaceholder />
          <div className="min-w-0 flex-1">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">Send to address</div>
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-3 py-2.5">
              <code className="min-w-0 flex-1 truncate text-xs text-white/80">{PAY_ADDRESS}</code>
              <button
                type="button"
                onClick={() => copy(PAY_ADDRESS, "addr")}
                className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-white/70 transition-colors hover:text-[#22E7F0]"
                aria-label="Copy payment address"
              >
                {copied === "addr" ? <CheckIcon className="h-4 w-4 text-[#22E7F0]" /> : <CopyIcon className="h-4 w-4" />}
              </button>
            </div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-300" />
              Waiting for payment...
            </div>
          </div>
        </div>

        <p className="mt-5 flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs leading-relaxed text-white/55">
          <ShieldIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#22E7F0]" />
          This screen only asks you to <span className="font-semibold text-white/80">send ETH to the address above</span>. We
          never request your seed phrase, private key or any card details.
        </p>
      </div>
    </div>
  );
}

/* ----------------------------- Dashboard tab ------------------------------ */

function DashboardTab() {
  const [payPlan, setPayPlan] = useState(null);

  return (
    <div>
      <h2 className="text-xl font-black tracking-tight sm:text-2xl">Buy a subscription</h2>
      <p className="mt-1.5 text-sm text-white/55">
        Pick a plan and pay in ETH. Plans activate as soon as the payment confirms.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={[
              "relative flex flex-col rounded-[28px] border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1",
              t.featured
                ? "border-[#22E7F0]/50 bg-[#22E7F0]/[0.07] shadow-[0_30px_80px_-45px_rgba(34,231,240,0.8)]"
                : "border-white/10 bg-white/5 hover:border-[#22E7F0]/30",
            ].join(" ")}
          >
            {t.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#22E7F0] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-black">
                Most Popular
              </span>
            )}
            <h3 className="text-base font-bold tracking-tight">{t.name}</h3>
            <div className="mt-3 flex items-end gap-1">
              <span className="text-3xl font-black tracking-tight text-[#22E7F0]">Ξ{t.price}</span>
              <span className="mb-1 text-xs font-medium text-white/50">/mo</span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#22E7F0]" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setPayPlan(t)}
              className={[
                "mt-6 rounded-xl px-5 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5",
                t.featured
                  ? "bg-[#22E7F0] text-black shadow-[0_0_24px_-4px_rgba(34,231,240,0.85)]"
                  : "border border-white/15 bg-white/5 text-white hover:border-[#22E7F0]/50 hover:text-[#22E7F0]",
              ].join(" ")}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>

      {payPlan && <PaymentModal plan={payPlan} onClose={() => setPayPlan(null)} />}
    </div>
  );
}

/* ------------------------- Active subscriptions tab ----------------------- */

const initialSubs = [
  { id: 1, plan: "Pro", status: "active", end: "Sep 14, 2026", daysLeft: 78, totalDays: 90, wallets: 4, autoRenew: true },
  { id: 2, plan: "Starter", status: "paused", end: "Aug 02, 2026", daysLeft: 35, totalDays: 90, wallets: 1, autoRenew: false },
  { id: 3, plan: "Elite", status: "expired", end: "May 30, 2026", daysLeft: 0, totalDays: 180, wallets: 0, autoRenew: false },
];

function SubscriptionCard({ sub, onPatch }) {
  const pct = Math.round((sub.daysLeft / sub.totalDays) * 100);
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors hover:border-white/20 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-lg font-black tracking-tight">{sub.plan}</span>
          <StatusPill status={sub.status} />
        </div>
        <div className="flex items-center gap-2 text-xs text-white/55">
          Auto-renew
          <Toggle
            checked={sub.autoRenew}
            onChange={(v) => onPatch(sub.id, { autoRenew: v })}
            label={`Auto-renew for ${sub.plan}`}
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
        <div>
          <div className="text-xs text-white/45">Renews / ends</div>
          <div className="mt-0.5 font-semibold">{sub.end}</div>
        </div>
        <div>
          <div className="text-xs text-white/45">Connected wallets</div>
          <div className="mt-0.5 font-semibold">{sub.wallets}</div>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <div className="text-xs text-white/45">Time remaining</div>
          <div className="mt-0.5 font-semibold">{sub.status === "expired" ? "—" : `${sub.daysLeft} days`}</div>
        </div>
      </div>

      {/* Countdown bar */}
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/50">
        <div
          className={`h-full rounded-full ${sub.status === "expired" ? "bg-rose-400/60" : "bg-gradient-to-r from-[#22E7F0]/40 to-[#22E7F0]"}`}
          style={{ width: `${Math.max(pct, sub.status === "expired" ? 100 : 4)}%` }}
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-lg border border-[#22E7F0]/40 bg-[#22E7F0]/10 px-3 py-1.5 text-xs font-bold text-[#22E7F0] transition-colors hover:bg-[#22E7F0]/20"
        >
          Extend
        </button>
        {sub.status !== "expired" && (
          <button
            type="button"
            onClick={() => onPatch(sub.id, { status: sub.status === "paused" ? "active" : "paused" })}
            className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/80 transition-colors hover:border-white/30"
          >
            {sub.status === "paused" ? "Unfreeze" : "Freeze"}
          </button>
        )}
        <button
          type="button"
          className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/80 transition-colors hover:border-white/30"
        >
          Upgrade
        </button>
        {sub.status !== "expired" && (
          <button
            type="button"
            onClick={() => onPatch(sub.id, { status: "expired", daysLeft: 0, autoRenew: false })}
            className="rounded-lg border border-rose-400/30 bg-rose-400/10 px-3 py-1.5 text-xs font-bold text-rose-300 transition-colors hover:bg-rose-400/20"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

function SubscriptionsTab() {
  const [subs, setSubs] = useState(initialSubs);
  const patch = (id, changes) =>
    setSubs((cur) => cur.map((s) => (s.id === id ? { ...s, ...changes } : s)));

  return (
    <div>
      <h2 className="text-xl font-black tracking-tight sm:text-2xl">Active subscriptions</h2>
      <p className="mt-1.5 text-sm text-white/55">Manage your plans, freeze billing or change tier.</p>
      <div className="mt-6 space-y-4">
        {subs.map((s) => (
          <SubscriptionCard key={s.id} sub={s} onPatch={patch} />
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- Profit tracker ----------------------------- */

const profitByPeriod = {
  "24h": {
    kpi: { pnl: "+1.84", win: "68%", flips: "42", best: "Azuki" },
    series: [0, 0.3, 0.2, 0.6, 0.5, 0.9, 0.8, 1.2, 1.1, 1.5, 1.4, 1.84],
    flips: [
      { col: "Azuki", buy: "3.10", sell: "3.42", profit: 0.32, date: "12:40" },
      { col: "Pudgy Penguins", buy: "12.80", sell: "13.55", profit: 0.75, date: "11:05" },
      { col: "Lil Pudgys", buy: "1.42", sell: "1.31", profit: -0.11, date: "09:22" },
      { col: "DeGods", buy: "5.60", sell: "6.18", profit: 0.58, date: "08:01" },
    ],
    top: [
      { col: "Pudgy Penguins", pnl: 0.92, share: 50 },
      { col: "DeGods", pnl: 0.58, share: 31 },
      { col: "Azuki", pnl: 0.32, share: 17 },
    ],
  },
  "7d": {
    kpi: { pnl: "+7.92", win: "64%", flips: "311", best: "Pudgy Penguins" },
    series: [0, 1.1, 0.8, 2.0, 2.6, 2.2, 3.4, 4.1, 3.8, 5.0, 6.3, 7.92],
    flips: [
      { col: "Pudgy Penguins", buy: "12.40", sell: "13.90", profit: 1.5, date: "Jun 27" },
      { col: "Milady", buy: "2.80", sell: "3.21", profit: 0.41, date: "Jun 26" },
      { col: "BAYC", buy: "18.20", sell: "17.60", profit: -0.6, date: "Jun 25" },
      { col: "Azuki", buy: "3.05", sell: "3.55", profit: 0.5, date: "Jun 24" },
      { col: "DeGods", buy: "5.40", sell: "6.10", profit: 0.7, date: "Jun 23" },
    ],
    top: [
      { col: "Pudgy Penguins", pnl: 3.8, share: 48 },
      { col: "Azuki", pnl: 2.3, share: 29 },
      { col: "DeGods", pnl: 1.82, share: 23 },
    ],
  },
  "30d": {
    kpi: { pnl: "+24.65", win: "61%", flips: "1,204", best: "Pudgy Penguins" },
    series: [0, 2.4, 4.1, 3.6, 6.8, 8.2, 7.5, 11.0, 14.2, 17.9, 21.3, 24.65],
    flips: [
      { col: "Pudgy Penguins", buy: "11.90", sell: "13.70", profit: 1.8, date: "Jun 21" },
      { col: "Azuki", buy: "3.20", sell: "3.95", profit: 0.75, date: "Jun 18" },
      { col: "Mutant Apes", buy: "4.10", sell: "3.74", profit: -0.36, date: "Jun 14" },
      { col: "Milady", buy: "2.60", sell: "3.18", profit: 0.58, date: "Jun 10" },
      { col: "DeGods", buy: "5.10", sell: "6.02", profit: 0.92, date: "Jun 06" },
    ],
    top: [
      { col: "Pudgy Penguins", pnl: 11.2, share: 45 },
      { col: "Azuki", pnl: 7.8, share: 32 },
      { col: "DeGods", pnl: 5.65, share: 23 },
    ],
  },
  all: {
    kpi: { pnl: "+118.3", win: "59%", flips: "8,640", best: "Lil Pudgys" },
    series: [0, 12, 21, 30, 41, 52, 60, 74, 86, 98, 109, 118.3],
    flips: [
      { col: "Lil Pudgys", buy: "1.30", sell: "1.74", profit: 0.44, date: "Mar 02" },
      { col: "Pudgy Penguins", buy: "10.80", sell: "12.90", profit: 2.1, date: "Feb 11" },
      { col: "BAYC", buy: "19.40", sell: "18.20", profit: -1.2, date: "Jan 28" },
      { col: "Azuki", buy: "2.90", sell: "3.61", profit: 0.71, date: "Jan 09" },
      { col: "DeGods", buy: "4.80", sell: "5.92", profit: 1.12, date: "Dec 30" },
    ],
    top: [
      { col: "Pudgy Penguins", pnl: 52.4, share: 44 },
      { col: "Lil Pudgys", pnl: 38.6, share: 33 },
      { col: "Azuki", pnl: 27.3, share: 23 },
    ],
  },
};

const periods = [
  { id: "24h", label: "24h" },
  { id: "7d", label: "7d" },
  { id: "30d", label: "30d" },
  { id: "all", label: "All time" },
];

function AreaChart({ series }) {
  const w = 600;
  const h = 180;
  const pad = 8;
  const max = Math.max(...series) || 1;
  const stepX = (w - pad * 2) / (series.length - 1);
  const pts = series.map((v, i) => {
    const x = pad + i * stepX;
    const y = h - pad - (v / max) * (h - pad * 2);
    return [x, y];
  });
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L${pts[pts.length - 1][0].toFixed(1)} ${h - pad} L${pts[0][0].toFixed(1)} ${h - pad} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-44 w-full" preserveAspectRatio="none" aria-label="PnL over time">
      <defs>
        <linearGradient id="pnlfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22E7F0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22E7F0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#pnlfill)" />
      <path d={line} fill="none" stroke="#22E7F0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="#22E7F0" />
      ))}
    </svg>
  );
}

function ProfitTrackerTab() {
  const [period, setPeriod] = useState("7d");
  const data = profitByPeriod[period];
  const kpis = [
    { label: "Total PnL", value: `Ξ${data.kpi.pnl}`, accent: true },
    { label: "Win rate", value: data.kpi.win },
    { label: "Total flips", value: data.kpi.flips },
    { label: "Best collection", value: data.kpi.best },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black tracking-tight sm:text-2xl">Profit tracker</h2>
          <p className="mt-1.5 text-sm text-white/55">Realised performance across all connected wallets.</p>
        </div>
        <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
          {periods.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPeriod(p.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                period === p.id ? "bg-[#22E7F0] text-black" : "text-white/60 hover:text-white"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* KPI row */}
      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <div className="text-xs font-medium uppercase tracking-wide text-white/50">{k.label}</div>
            <div className={`mt-1.5 text-xl font-black tracking-tight ${k.accent ? "text-emerald-300" : "text-white"}`}>
              {k.value}
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-4 rounded-[26px] border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-white/70">PnL over time</span>
          <span className="text-sm font-black text-emerald-300">Ξ{data.kpi.pnl}</span>
        </div>
        <div className="mt-3">
          <AreaChart series={data.series} />
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        {/* Recent flips */}
        <div className="overflow-hidden rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="border-b border-white/10 px-5 py-3.5 text-sm font-bold text-white/70">Recent flips</div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-white/40">
                  <th className="px-5 py-2.5 font-semibold">Collection</th>
                  <th className="px-3 py-2.5 font-semibold">Buy</th>
                  <th className="px-3 py-2.5 font-semibold">Sell</th>
                  <th className="px-3 py-2.5 font-semibold">Profit</th>
                  <th className="px-5 py-2.5 text-right font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.flips.map((f, i) => (
                  <tr key={i} className="border-t border-white/5">
                    <td className="px-5 py-3 font-semibold">{f.col}</td>
                    <td className="px-3 py-3 text-white/65">Ξ{f.buy}</td>
                    <td className="px-3 py-3 text-white/65">Ξ{f.sell}</td>
                    <td className={`px-3 py-3 font-bold ${f.profit >= 0 ? "text-emerald-300" : "text-rose-300"}`}>
                      {f.profit >= 0 ? "+" : "−"}Ξ{Math.abs(f.profit).toFixed(2)}
                    </td>
                    <td className="px-5 py-3 text-right text-white/50">{f.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top collections */}
        <div className="rounded-[26px] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
          <div className="text-sm font-bold text-white/70">Top collections</div>
          <div className="mt-4 space-y-4">
            {data.top.map((t) => (
              <div key={t.col}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">{t.col}</span>
                  <span className="font-bold text-emerald-300">+Ξ{t.pnl.toFixed(2)}</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-black/50">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#22E7F0]/40 to-[#22E7F0]"
                    style={{ width: `${t.share}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- Wallets --------------------------------- */

const initialWallets = [
  { id: 1, address: "0x7F3aD4e1B9c0F2a8b6E5d4C3a2B1908f7e6D5c4b", label: "Main flipper" },
  { id: 2, address: "0x19Ab44c2E0fD81aA7654bC3dE9012f4567aB89c0", label: "Blur wallet" },
  { id: 3, address: "0xC0ffeE2543a1bB9087fE6D5c4b3a2190feeDc0De", label: "Cold storage" },
];
const WALLET_LIMIT = 5; // Pro plan

function WalletsTab() {
  const [wallets, setWallets] = useState(initialWallets);
  const [copied, copy] = useCopy();

  const connect = () => {
    if (wallets.length >= WALLET_LIMIT) return;
    const a = `0x${"abcdef1234567890".repeat(3).slice(0, 38)}${wallets.length}1`;
    setWallets((cur) => [...cur, { id: Date.now() + cur.length, address: a, label: "New wallet" }]);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black tracking-tight sm:text-2xl">Wallets</h2>
          <p className="mt-1.5 text-sm text-white/55">
            {wallets.length} of {WALLET_LIMIT} wallets used · limit set by your Pro plan.
          </p>
        </div>
        <button
          type="button"
          onClick={connect}
          disabled={wallets.length >= WALLET_LIMIT}
          className="inline-flex items-center gap-2 rounded-xl bg-[#22E7F0] px-4 py-2.5 text-sm font-bold text-black transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <PlusIcon className="h-4 w-4" />
          Connect wallet
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {wallets.map((w) => (
          <div
            key={w.id}
            className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-md"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#22E7F0]/30 bg-[#22E7F0]/10 text-[#22E7F0]">
                <WalletIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">{w.label}</div>
                <code className="text-xs text-white/50">{shortAddr(w.address)}</code>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <button
                type="button"
                onClick={() => copy(w.address, `w${w.id}`)}
                aria-label="Copy wallet address"
                className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-white/60 transition-colors hover:text-[#22E7F0]"
              >
                {copied === `w${w.id}` ? <CheckIcon className="h-4 w-4 text-[#22E7F0]" /> : <CopyIcon className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={() => setWallets((cur) => cur.filter((x) => x.id !== w.id))}
                className="rounded-lg border border-rose-400/30 bg-rose-400/10 px-3 py-1.5 text-xs font-bold text-rose-300 transition-colors hover:bg-rose-400/20"
              >
                Disconnect
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs leading-relaxed text-white/55">
        <ShieldIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#22E7F0]" />
        Only your <span className="font-semibold text-white/80">public address</span> is connected. We never need
        private keys, seed phrases or signatures that move funds.
      </p>
    </div>
  );
}

/* -------------------------------- Settings -------------------------------- */

function SettingsTab({ onLogout }) {
  const [tg, setTg] = useState("");
  const [tgConnected, setTgConnected] = useState(false);
  const [apiKey, setApiKey] = useState("sft_live_9f4Ac2Be71Dd05Xy83Qn");
  const [showKey, setShowKey] = useState(false);
  const [copied, copy] = useCopy();

  const regen = () => {
    const chars = "abcdef0123456789";
    let k = "sft_live_";
    for (let i = 0; i < 20; i++) k += chars[Math.floor(Math.random() * chars.length)];
    setApiKey(k);
    setShowKey(true);
  };

  return (
    <div>
      <h2 className="text-xl font-black tracking-tight sm:text-2xl">Settings</h2>
      <p className="mt-1.5 text-sm text-white/55">Alerts and API access for your bot.</p>

      {/* Telegram */}
      <div className="mt-6 rounded-[26px] border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:p-6">
        <div className="flex items-center gap-2">
          <TelegramIcon className="h-5 w-5 text-[#22E7F0]" />
          <h3 className="font-bold tracking-tight">Telegram alerts</h3>
          {tgConnected && (
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-xs font-bold text-emerald-300">
              Connected
            </span>
          )}
        </div>
        <p className="mt-1.5 text-sm text-white/55">Get fills, counter-bids and safety alerts in real time.</p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <div className="flex flex-1 items-center rounded-xl border border-white/10 bg-black/50 px-3">
            <span className="text-sm text-white/40">@</span>
            <input
              value={tg}
              onChange={(e) => setTg(e.target.value.replace(/^@/, ""))}
              placeholder="your_telegram"
              className="w-full bg-transparent px-2 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={() => setTgConnected(tg.trim().length > 0)}
            className="rounded-xl bg-[#22E7F0] px-5 py-2.5 text-sm font-bold text-black transition-transform hover:-translate-y-0.5"
          >
            {tgConnected ? "Update" : "Connect"}
          </button>
        </div>
      </div>

      {/* API key */}
      <div className="mt-4 rounded-[26px] border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:p-6">
        <h3 className="font-bold tracking-tight">API key</h3>
        <p className="mt-1.5 text-sm text-white/55">Use this to connect the desktop bot. Keep it secret.</p>
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-3 py-2.5">
          <code className="min-w-0 flex-1 truncate text-sm text-white/80">
            {showKey ? apiKey : "•".repeat(apiKey.length)}
          </code>
          <button
            type="button"
            onClick={() => setShowKey((v) => !v)}
            aria-label={showKey ? "Hide API key" : "Show API key"}
            className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-white/60 transition-colors hover:text-[#22E7F0]"
          >
            <EyeIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => copy(apiKey, "api")}
            aria-label="Copy API key"
            className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-white/60 transition-colors hover:text-[#22E7F0]"
          >
            {copied === "api" ? <CheckIcon className="h-4 w-4 text-[#22E7F0]" /> : <CopyIcon className="h-4 w-4" />}
          </button>
        </div>
        <button
          type="button"
          onClick={regen}
          className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-white/80 transition-colors hover:border-[#22E7F0]/50 hover:text-[#22E7F0]"
        >
          <RefreshIcon className="h-4 w-4" />
          Regenerate key
        </button>
      </div>

      <button
        type="button"
        onClick={onLogout}
        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-rose-400/30 bg-rose-400/10 px-5 py-2.5 text-sm font-bold text-rose-300 transition-colors hover:bg-rose-400/20"
      >
        <LogoutIcon className="h-4 w-4" />
        Log out
      </button>
    </div>
  );
}

/* ------------------------------ Cabinet shell ----------------------------- */

const cabTabs = [
  { id: "dashboard", label: "Dashboard", icon: GridIcon },
  { id: "subscriptions", label: "Active Subscriptions", icon: LayersIcon },
  { id: "profit", label: "Profit Tracker", icon: ChartIcon },
  { id: "wallets", label: "Wallets", icon: WalletIcon },
  { id: "settings", label: "Settings", icon: GearIcon },
];

function CabinetShell({ onLogout, onExitToSite }) {
  const [tab, setTab] = useState("dashboard");

  return (
    <div className="relative min-h-screen overflow-hidden bg-black font-sans text-white antialiased selection:bg-[#22E7F0] selection:text-black">
      <div className="pointer-events-none absolute left-1/2 top-[-180px] -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,231,240,0.16),transparent)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <button type="button" onClick={onExitToSite} className="transition-transform hover:-translate-y-0.5">
            <Logo />
          </button>
        </div>

        {/* Header */}
        <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <SectionLabel>Personal Cabinet</SectionLabel>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Account Center</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-md">
              <Avatar />
              <div className="leading-tight">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">{CAB_USER.name}</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                    Active subscriber
                  </span>
                </div>
                <div className="mt-0.5 flex items-center gap-1.5 text-xs text-white/50">
                  <DiscordIcon className="h-3.5 w-3.5 text-[#5865F2]" />
                  Connected with Discord
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={onLogout}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold text-white/80 transition-colors hover:border-rose-400/40 hover:text-rose-300"
            >
              <LogoutIcon className="h-4 w-4" />
              Log out
            </button>
          </div>
        </div>

        {/* Body: sidebar + content */}
        <div className="mt-8 flex flex-col gap-6 lg:flex-row">
          <aside className="lg:w-60 lg:shrink-0">
            <nav
              className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
              aria-label="Cabinet sections"
            >
              {cabTabs.map((t) => {
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTab(t.id)}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex shrink-0 items-center gap-2.5 rounded-xl border px-4 py-2.5 text-sm font-bold transition-colors lg:w-full ${
                      active
                        ? "border-[#22E7F0]/50 bg-[#22E7F0]/10 text-[#22E7F0]"
                        : "border-white/10 bg-white/5 text-white/65 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <t.icon className="h-5 w-5" />
                    <span className="whitespace-nowrap">{t.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          <div className="min-w-0 flex-1">
            {tab === "dashboard" && <DashboardTab />}
            {tab === "subscriptions" && <SubscriptionsTab />}
            {tab === "profit" && <ProfitTrackerTab />}
            {tab === "wallets" && <WalletsTab />}
            {tab === "settings" && <SettingsTab onLogout={onLogout} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalCabinet({ onExitToSite }) {
  const [authed, setAuthed] = useState(false);

  if (!authed) {
    return <LoginScreen onLogin={() => setAuthed(true)} onBack={onExitToSite} />;
  }
  return <CabinetShell onLogout={() => setAuthed(false)} onExitToSite={onExitToSite} />;
}

/* ------------------------------- Root router ------------------------------ */

export default function SmartFlipTools() {
  const [view, setView] = useState("landing"); // "landing" | "app"

  if (view === "app") {
    return <PersonalCabinet onExitToSite={() => setView("landing")} />;
  }

  return (
    <NavContext.Provider value={() => setView("app")}>
      <LandingPage />
    </NavContext.Provider>
  );
}
