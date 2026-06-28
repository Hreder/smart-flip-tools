import React from "react";

export default function SmartFlipToolsDashboard() {
  const user = {
    name: "MikeK",
    avatar:
      "https://cdn.discordapp.com/embed/avatars/0.png",
    status: "Active subscriber",
    tag: "Connected with Discord",
  };

  const plans = [
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

  const subscriptions = [
    {
      id: 1,
      plan: "Pro",
      status: "Active",
      expires: "Apr 28, 2026",
      wallets: "4 wallets connected",
    },
    {
      id: 2,
      plan: "Starter",
      status: "Paused",
      expires: "May 11, 2026",
      wallets: "1 wallet connected",
    },
    {
      id: 3,
      plan: "Elite",
      status: "Expired",
      expires: "Mar 02, 2026",
      wallets: "0 wallets connected",
    },
  ];

  const tabs = [
    { id: "dashboard", label: "Dashboard", hint: "Buy subscription" },
    { id: "subscriptions", label: "Active Subscriptions", hint: "Manage plans" },
    { id: "profit", label: "Profit Tracker", hint: "Coming soon" },
  ];

  const [activeTab, setActiveTab] = React.useState("dashboard");

  const statusStyles = {
    Active: "text-emerald-300 border-emerald-400/25 bg-emerald-400/10",
    Paused: "text-amber-300 border-amber-400/25 bg-amber-400/10",
    Expired: "text-rose-300 border-rose-400/25 bg-rose-400/10",
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,224,0.16),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(0,224,224,0.10),transparent_20%)]" />

      <div className="relative z-10 flex min-h-screen">
        <aside className="w-full max-w-[300px] border-r border-white/10 bg-black/60 backdrop-blur-xl p-6 hidden md:flex md:flex-col">
          <div className="flex items-center gap-3 pb-8 border-b border-white/10">
            <div className="h-14 w-14 rounded-2xl border border-cyan-400/40 bg-cyan-400/5 flex items-center justify-center shadow-[0_0_25px_rgba(34,231,240,0.18)]">
              <svg viewBox="0 0 100 100" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 8L83 66" stroke="#22E7F0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M50 8L17 66" stroke="#22E7F0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 66L50 85L82 66" stroke="#22E7F0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="50" y="61" textAnchor="middle" fontSize="32" fontWeight="900" fill="#22E7F0" fontFamily="Arial, sans-serif">SF</text>
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold tracking-wide">Smart Flip Tools</div>
              <div className="text-sm text-white/45">Premium control panel</div>
            </div>
          </div>

          <div className="mt-8 space-y-2">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition-all ${
                    active
                      ? "border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,231,240,0.08)]"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="font-medium">{tab.label}</div>
                  <div className="text-sm text-white/45 mt-1">{tab.hint}</div>
                </button>
              );
            })}
          </div>

          <div className="mt-auto rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
            <div className="text-sm text-cyan-300 font-semibold tracking-[0.18em] uppercase mb-2">System</div>
            <div className="text-white/80 text-sm leading-6">
              Manage subscriptions, access controls, and upcoming analytics from one place.
            </div>
          </div>
        </aside>

        <main className="flex-1 px-4 md:px-8 py-6 md:py-8">
          <header className="rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl px-5 md:px-7 py-5 md:py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <div className="text-sm font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-2">Personal Cabinet</div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">Account Center</h1>
              <p className="text-white/55 mt-2 max-w-2xl">
                Control your access, manage active plans, and keep everything tied to your Discord account.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-[26px] border border-white/10 bg-black/40 px-4 py-4 min-w-0">
              <div className="h-16 w-16 rounded-2xl border border-cyan-400/35 p-[2px] shadow-[0_0_24px_rgba(34,231,240,0.22)] shrink-0">
                <img src={user.avatar} alt="Discord avatar" className="h-full w-full rounded-2xl object-cover bg-white/5" />
              </div>
              <div className="min-w-0">
                <div className="text-lg font-semibold truncate">{user.name}</div>
                <div className="text-sm text-white/45 truncate">{user.tag}</div>
                <div className="mt-2 inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  {user.status}
                </div>
              </div>
            </div>
          </header>

          <div className="md:hidden mt-5 grid gap-2">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition-all ${
                    active
                      ? "border-cyan-400/40 bg-cyan-400/10"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div className="font-medium">{tab.label}</div>
                  <div className="text-sm text-white/45 mt-1">{tab.hint}</div>
                </button>
              );
            })}
          </div>

          {activeTab === "dashboard" && (
            <section className="mt-6">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <div>
                  <div className="text-cyan-300 text-sm font-semibold tracking-[0.18em] uppercase mb-2">Subscriptions</div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight">Choose the plan that fits your trading flow.</h2>
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100/90">
                  Instant access after payment
                </div>
              </div>

              <div className="grid xl:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`rounded-[30px] border p-7 transition-all hover:-translate-y-1 ${
                      plan.featured
                        ? "border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_40px_rgba(34,231,240,0.08)]"
                        : "border-white/10 bg-white/[0.04] hover:bg-white/[0.06]"
                    }`}
                  >
                    {plan.featured && (
                      <div className="mb-4 inline-flex rounded-full bg-cyan-300 text-black px-3 py-1 text-sm font-semibold">
                        Recommended
                      </div>
                    )}
                    <div className="text-xl font-semibold">{plan.name}</div>
                    <div className="mt-3 text-4xl font-black">
                      {plan.price}
                      <span className="text-base font-medium text-white/45"> / mo</span>
                    </div>
                    <p className="mt-3 text-white/60 text-sm leading-6">{plan.desc}</p>
                    <div className="mt-6 space-y-3">
                      {plan.points.map((point) => (
                        <div key={point} className="flex items-center gap-3 text-sm text-white/75">
                          <span className="text-cyan-300">✓</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      className={`mt-8 w-full rounded-2xl px-4 py-3 font-semibold transition-colors ${
                        plan.featured
                          ? "bg-cyan-400 text-black hover:bg-cyan-300"
                          : "bg-white/10 text-white hover:bg-white/15"
                      }`}
                    >
                      Subscribe
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "subscriptions" && (
            <section className="mt-6">
              <div className="mb-8">
                <div className="text-cyan-300 text-sm font-semibold tracking-[0.18em] uppercase mb-2">Active Plans</div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Manage your current subscriptions.</h2>
              </div>

              <div className="grid xl:grid-cols-2 gap-6">
                {subscriptions.map((item) => (
                  <div key={item.id} className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <div className="text-2xl font-bold">{item.plan}</div>
                        <div className="text-white/50 text-sm mt-2">Expires: {item.expires}</div>
                        <div className="text-white/50 text-sm mt-1">{item.wallets}</div>
                      </div>
                      <div className={`inline-flex rounded-full border px-3 py-1 text-sm font-medium ${statusStyles[item.status]}`}>
                        {item.status}
                      </div>
                    </div>

                    <div className="mt-6 grid sm:grid-cols-3 gap-3">
                      <button className="rounded-2xl bg-cyan-400 text-black hover:bg-cyan-300 px-4 py-3 font-semibold transition-colors">
                        Extend
                      </button>
                      <button className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-3 font-semibold transition-colors">
                        Freeze
                      </button>
                      <button className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-3 font-semibold transition-colors">
                        Upgrade
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "profit" && (
            <section className="mt-6">
              <div className="mb-8">
                <div className="text-cyan-300 text-sm font-semibold tracking-[0.18em] uppercase mb-2">Profit Tracker</div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Analytics module in progress.</h2>
              </div>

              <div className="rounded-[34px] border border-white/10 bg-white/[0.04] backdrop-blur-xl min-h-[420px] flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,231,240,0.14),transparent_32%)]" />
                <div className="relative z-10">
                  <div className="mx-auto h-20 w-20 rounded-[24px] border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center shadow-[0_0_30px_rgba(34,231,240,0.1)] mb-6">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 17L9 12L13 16L20 8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 8H15" strokeLinecap="round"/>
                      <path d="M20 8V13" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black tracking-tight">Profit tracking coming soon</h3>
                  <p className="mt-4 text-white/55 max-w-xl leading-7">
                    This section will display your trading performance, strongest collections, and long-term PnL insights.
                  </p>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
