export default function SmartFlipToolsSiteMockup() {
  const features = [
    {
      title: "Ultra-fast bidding",
      text: "Compete in real time with aggressive bidding speed and optimized execution logic.",
      icon: "⚡",
    },
    {
      title: "Trait, collection & token logic",
      text: "Run flexible strategies across full collections, rare traits, or exact token targets.",
      icon: "◈",
    },
    {
      title: "Smart safety controls",
      text: "Set collection limits, control floor ranges, define minimum profit, and receive Telegram alerts to stay in control.",
      icon: "🛡",
    },
    {
      title: "Profit analytics",
      text: "Track your flips over any time period. Identify your strongest collections and cut the ones that drain your PnL.",
      icon: "📈",
    },
  ];

  const modules = [
    "Trait Bidder",
    "Collection Bidder",
    "Token Bidder",
    "Auto Lister",
    "Profit Tracker",
    "Multi-wallet support",
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$49",
      desc: "For smaller traders testing the flow",
      points: ["Core bidding tools", "1 wallet", "Basic analytics", "Discord support"],
    },
    {
      name: "Pro",
      price: "$99",
      desc: "Best for active NFT flippers",
      points: ["All bidding modules", "Multi-wallet", "Instant counter logic", "Advanced analytics"],
      featured: true,
    },
    {
      name: "Elite",
      price: "$199",
      desc: "For power users and heavy automation",
      points: ["Maximum speed setup", "Priority support", "Extended configs", "Private onboarding"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,224,0.16),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(0,224,224,0.10),transparent_20%)]" />

      <header className="relative z-10 border-b border-white/10 backdrop-blur-sm bg-black/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-14 w-14 rounded-2xl border border-cyan-400/40 bg-cyan-400/5 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.18)] overflow-hidden shrink-0">
              <svg viewBox="0 0 100 100" className="h-11 w-11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 8L83 66" stroke="#22E7F0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M50 8L17 66" stroke="#22E7F0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 66L50 85L82 66" stroke="#22E7F0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M50 85L76 63" stroke="#22E7F0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M76 63L50 97" stroke="#22E7F0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 77V95" stroke="#22E7F0" strokeWidth="6" strokeLinecap="round"/>
                <path d="M30 83V95" stroke="#22E7F0" strokeWidth="6" strokeLinecap="round"/>
                <path d="M50 88V95" stroke="#22E7F0" strokeWidth="6" strokeLinecap="round"/>
                <text x="50" y="61" textAnchor="middle" fontSize="32" fontWeight="900" fill="#22E7F0" fontFamily="Arial, sans-serif">SF</text>
              </svg>
            </div>
            <div className="font-semibold tracking-wide text-xl truncate">Smart Flip Tools</div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-cyan-300 transition-colors">Features</a>
            <a href="#modules" className="hover:text-cyan-300 transition-colors">Modules</a>            <a href="#pricing" className="hover:text-cyan-300 transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-cyan-300 transition-colors" aria-label="Discord">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3c-.161.287-.349.67-.478.969a18.27 18.27 0 0 0-5.814 0 9.587 9.587 0 0 0-.484-.969 19.736 19.736 0 0 0-3.436 1.372C4.533 7.55 3.954 10.649 4.243 13.704A19.9 19.9 0 0 0 10.2 16.7c.48-.65.907-1.338 1.27-2.061-.7-.265-1.37-.59-2.003-.966.168-.12.332-.246.49-.376 3.87 1.82 8.073 1.82 11.897 0 .16.131.323.257.49.376-.634.377-1.306.703-2.005.968.364.722.79 1.41 1.27 2.06a19.867 19.867 0 0 0 5.96-2.996c.339-3.54-.58-6.61-2.252-9.336ZM9.955 11.813c-.888 0-1.617-.817-1.617-1.822 0-1.005.711-1.822 1.617-1.822.914 0 1.634.826 1.618 1.822 0 1.005-.713 1.822-1.618 1.822Zm4.09 0c-.888 0-1.617-.817-1.617-1.822 0-1.005.711-1.822 1.617-1.822.914 0 1.634.826 1.618 1.822 0 1.005-.704 1.822-1.618 1.822Z"/>
              </svg>
            </a>
            <a href="#" className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-cyan-300 transition-colors" aria-label="X">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2H21l-6.017 6.877L22 22h-5.828l-4.563-6.674L5.764 22H3l6.435-7.353L2 2h5.976l4.124 6.145L18.244 2Zm-1.022 18h1.528L7.146 3.895H5.506L17.222 20Z"/>
              </svg>
            </a>
            <a href="#" className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-cyan-300 transition-colors" aria-label="GitBook">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 3.5C4 2.67 4.67 2 5.5 2H20v16.5c0 .83-.67 1.5-1.5 1.5H6a2 2 0 0 1-2-2V3.5Zm2 .5v14h12V4H6Zm2 2h8v2H8V6Zm0 4h8v2H8v-2Zm0 4h5v2H8v-2Z"/>
              </svg>
            </a>
            <a href="#" className="rounded-2xl bg-cyan-400 text-black hover:bg-cyan-300 font-semibold px-5 py-2.5 transition-colors">
              Get Access
            </a>
          </div>
        </div>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div><h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Work smarter.
              <br />
              <span className="text-cyan-300">Flip faster.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/70 leading-8">
              Smart Flip Tools is an all-in-one NFT trading suite that automates bidding, listing, and analytics so traders can flip faster and scale with less manual work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="rounded-2xl bg-cyan-400 text-black hover:bg-cyan-300 px-6 py-4 text-base font-semibold transition-colors">
                Start Free Trial
              </a>
              <a href="#" className="rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-4 text-base text-white transition-colors">
                Watch Demo
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              {[
                ["All EVM", "chains supported"],
                ["Flexible", "settings"],
                ["Profit", "tracking"],
              ].map(([big, small]) => (
                <div key={big} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-black text-cyan-300">{big}</div>
                  <div className="text-sm text-white/50">{small}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <div className="text-cyan-300 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Features</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Everything serious flippers need in one ecosystem.</h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {features.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors p-6">
              <div className="h-12 w-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-5 text-xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/60 leading-7 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="modules" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="text-cyan-300 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Modules</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">Built to automate the work you do every day.</h2>
            <p className="text-white/65 max-w-xl leading-8">
              Manage bidding, listing, and trade tracking from one place with a clean workflow designed for active NFT traders.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {modules.map((item) => (
              <div key={item} className="rounded-[24px] border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.03] p-5 flex items-center justify-between">
                <span className="font-medium">{item}</span>
                <span className="text-cyan-300">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-cyan-300 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Pricing</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Simple plans with a premium feel.</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[30px] border p-7 ${plan.featured ? "border-cyan-400/40 bg-cyan-400/10" : "border-white/10 bg-white/5"}`}
            >
              {plan.featured && (
                <div className="mb-4 inline-flex rounded-full bg-cyan-300 text-black px-3 py-1 text-sm font-semibold">Most Popular</div>
              )}
              <div className="text-xl font-semibold">{plan.name}</div>
              <div className="mt-3 text-4xl font-black">{plan.price}<span className="text-base font-medium text-white/45"> / mo</span></div>
              <p className="mt-3 text-white/60 text-sm">{plan.desc}</p>
              <div className="mt-6 space-y-3">
                {plan.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-white/75">
                    <span className="text-cyan-300">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <a href="#" className={`mt-8 block w-full rounded-2xl text-center px-4 py-3 font-semibold transition-colors ${plan.featured ? "bg-cyan-400 text-black hover:bg-cyan-300" : "bg-white/10 text-white hover:bg-white/15"}`}>
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-white/45">
          <div>© 2026 Smart Flip Tools</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cyan-300">Docs</a>
            <a href="#" className="hover:text-cyan-300">Discord</a>
            <a href="#" className="hover:text-cyan-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
