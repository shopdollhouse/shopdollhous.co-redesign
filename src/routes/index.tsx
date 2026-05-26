import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-rose-bg.jpg";
import roseAccent from "@/assets/rose-accent.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Dollhouse Brand Studio — Done-For-You Social Media" },
      {
        name: "description",
        content:
          "AI-powered social media content, scheduling, and analytics — done for you, every single day. Branded content, ads, and strategy from The Dollhouse.",
      },
    ],
  }),
});

const Divider = () => (
  <div className="flex items-center justify-center gap-3 text-gold-brand">
    <span className="h-px w-12 bg-current opacity-60" />
    <span className="text-xs">♡</span>
    <span className="h-px w-12 bg-current opacity-60" />
  </div>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-sans text-[11px] tracking-luxe uppercase text-rose-brand">
    {children}
  </p>
);

function Nav() {
  return (
    <nav className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
      <a href="#" className="font-display text-xl text-[var(--ink)]">the dollhouse</a>
      <div className="hidden md:flex items-center gap-10 text-[11px] tracking-luxe uppercase text-[var(--ink)]/80">
        <a href="#services" className="hover:text-rose-brand transition">Services</a>
        <a href="#pricing" className="hover:text-rose-brand transition">Pricing</a>
        <a href="#faq" className="hover:text-rose-brand transition">FAQ</a>
        <a href="#contact" className="hover:text-rose-brand transition">Contact</a>
      </div>
      <a
        href="#contact"
        className="rounded-full bg-ink text-cream text-[10px] tracking-luxe uppercase px-5 py-2.5 hover:opacity-90 transition"
      >
        Book a Call
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <header
      className="relative min-h-[100vh] flex items-center justify-center px-6 pt-28 pb-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Nav />
      <div className="relative z-10 max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-2 text-[10px] tracking-luxe uppercase text-gold-brand bg-cream/40 backdrop-blur-sm">
          <span>⚿</span> Done-For-You Social Media
        </span>

        <div className="mt-10 flex justify-center">
          <svg width="22" height="34" viewBox="0 0 22 34" fill="none" className="text-gold-brand">
            <path d="M11 2 L20 12 V32 H2 V12 Z M8 22 a3 3 0 1 1 6 0 a3 3 0 1 1 -6 0" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        <p className="font-serif italic text-rose-brand text-3xl md:text-4xl mt-3">the</p>
        <h1 className="font-display text-[clamp(3.5rem,11vw,8rem)] leading-[0.95] tracking-[0.02em] text-rose-brand mt-1">
          DOLLHOUSE
        </h1>
        <p className="font-sans text-[11px] tracking-luxe uppercase text-gold-brand mt-3">
          brand studio
        </p>

        <div className="mt-6 flex justify-center"><Divider /></div>

        <p className="font-serif text-xl md:text-2xl text-[var(--ink)]/80 mt-6 max-w-xl mx-auto leading-relaxed">
          Your business, everywhere online. AI-powered social media content,
          scheduling, and analytics — done for you, every single day.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="rounded-full bg-ink text-cream text-[11px] tracking-luxe uppercase px-9 py-4 hover:opacity-90 transition"
          >
            Book a Discovery Call →
          </a>
          <a
            href="#services"
            className="text-[11px] tracking-luxe uppercase text-[var(--ink)]/70 hover:text-rose-brand transition"
          >
            See how it works ↓
          </a>
        </div>

        <p className="mt-8 text-xs text-[var(--ink)]/55 italic font-serif">
          3-month minimum · All communication by email
        </p>
      </div>
    </header>
  );
}

function TrustBar() {
  const logos = ["Meta", "OpenAI", "TikTok", "Google", "Stripe"];
  return (
    <section className="bg-cream py-12 border-y border-[var(--border)]">
      <p className="text-center text-[10px] tracking-luxe uppercase text-[var(--ink)]/55">
        Powered by the same infrastructure trusted by 500,000+ businesses
      </p>
      <div className="mt-6 flex flex-wrap justify-center items-center gap-x-14 gap-y-4">
        {logos.map((l) => (
          <span key={l} className="font-display text-2xl text-[var(--ink)]/70">{l}</span>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      tag: "Content & Social Media Management",
      title: "Branded content, created and published for you — every day.",
      sub: "Show up consistently without lifting a finger.",
      body: "We handle the strategy, writing, design, and scheduling. Branded posts go live across your platforms on time, every time — captions, hashtags, and visuals all done. You stay focused on running your business.",
      visual: <ContentCalendarCard />,
    },
    {
      tag: "Paid Social & Search Advertising",
      title: "Facebook, Instagram, and Google ads that bring in real leads.",
      sub: "More reach. More bookings. Less guesswork.",
      body: "We build and manage your ad campaigns from scratch — audience targeting, ad creative, budget allocation, and daily optimisation. Every dollar is tracked and working toward your growth.",
      visual: <AnalyticsCard />,
    },
    {
      tag: "Strategy, Analytics & Reporting",
      title: "Always know what's working — and a plan to scale it.",
      sub: "Clear data. Smarter decisions. Every month.",
      body: "Detailed performance reports and a dedicated monthly strategy session keep you in the loop. We track what's growing your business and build the next month's plan around what's working.",
      visual: <CaptionCard />,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow>What's Inside</Eyebrow>
        <h2 className="font-display text-4xl md:text-6xl text-rose-brand mt-4 leading-tight">
          Everything you need to<br/>dominate social media.
        </h2>
        <div className="mt-6 flex justify-center"><Divider /></div>
      </div>

      <div className="mt-20 max-w-6xl mx-auto space-y-24">
        {items.map((it, i) => (
          <div
            key={it.tag}
            className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
          >
            <div className="[direction:ltr]">
              <Eyebrow>{it.tag}</Eyebrow>
              <h3 className="font-display text-3xl md:text-5xl text-[var(--ink)] mt-4 leading-tight">
                {it.title}
              </h3>
              <p className="font-serif italic text-rose-brand text-xl mt-4">{it.sub}</p>
              <p className="mt-6 text-[var(--ink)]/70 leading-relaxed">{it.body}</p>
            </div>
            <div className="[direction:ltr]">{it.visual}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContentCalendarCard() {
  const days = [
    { d: "Mon", t: "IG" },
    { d: "Tue", t: "" },
    { d: "Wed", t: "TK" },
    { d: "Thu", t: "FB" },
    { d: "Fri", t: "IG" },
    { d: "Sat", t: "G" },
    { d: "Sun", t: "TK" },
  ];
  const platforms = [
    ["Instagram", "5 posts"],
    ["TikTok", "4 posts"],
    ["Facebook", "2 posts"],
    ["Google", "1 post"],
  ];
  return (
    <div className="bg-cream rounded-2xl shadow-[0_30px_60px_-30px_rgba(120,60,60,0.25)] p-8 border border-[var(--border)]">
      <div className="flex justify-between items-baseline">
        <p className="font-serif text-xl text-[var(--ink)]">June 2026</p>
        <p className="text-[10px] tracking-luxe uppercase text-rose-brand">12 posts queued</p>
      </div>
      <div className="grid grid-cols-7 gap-2 mt-6">
        {days.map((d) => (
          <div key={d.d} className="aspect-square rounded-lg bg-blush/60 flex flex-col items-center justify-center text-[10px] text-[var(--ink)]/60">
            <span>{d.d}</span>
            {d.t && <span className="mt-1 text-rose-brand font-medium">{d.t}</span>}
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-2">
        {platforms.map(([p, c]) => (
          <div key={p} className="flex justify-between items-center text-sm border-b border-[var(--border)] pb-2 last:border-0">
            <span className="font-serif text-[var(--ink)]">{p}</span>
            <span className="text-[var(--ink)]/55 text-xs">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsCard() {
  const stats = [
    ["Reach", "14.2K", "+38%"],
    ["Engagements", "1,840", "+52%"],
    ["New Followers", "312", "+29%"],
    ["Profile Visits", "2.1K", "+44%"],
  ];
  return (
    <div className="bg-cream rounded-2xl shadow-[0_30px_60px_-30px_rgba(120,60,60,0.25)] p-8 border border-[var(--border)]">
      <p className="text-[10px] tracking-luxe uppercase text-rose-brand">This Month</p>
      <div className="grid grid-cols-2 gap-4 mt-5">
        {stats.map(([l, v, c]) => (
          <div key={l} className="rounded-xl bg-blush/40 p-4">
            <p className="text-[10px] uppercase tracking-wider text-[var(--ink)]/55">{l}</p>
            <p className="font-display text-3xl text-[var(--ink)] mt-1">{v}</p>
            <p className="text-xs text-gold-brand mt-1">{c} vs last month</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] uppercase tracking-luxe text-[var(--ink)]/50 mt-5">Weekly reach</p>
      <div className="mt-2 flex items-end gap-1 h-16">
        {[40, 55, 35, 70, 60, 85, 95].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-rose-brand/70" style={{ height: `${h}%`, backgroundColor: "var(--rose)" }} />
        ))}
      </div>
    </div>
  );
}

function CaptionCard() {
  return (
    <div className="bg-ink text-cream rounded-2xl shadow-[0_30px_60px_-30px_rgba(120,60,60,0.4)] p-8">
      <p className="text-[10px] tracking-luxe uppercase text-gold-brand">✦ AI Content Studio</p>
      <p className="text-xs text-cream/60 mt-1">Generating caption…</p>

      <div className="mt-6">
        <p className="text-[10px] tracking-luxe uppercase text-cream/50">Prompt</p>
        <p className="font-serif italic mt-2 text-cream/90">
          Behind the scenes at our salon this Saturday 🌸
        </p>
      </div>

      <div className="mt-6 border-t border-cream/10 pt-6">
        <p className="text-[10px] tracking-luxe uppercase text-cream/50">Generated Caption</p>
        <p className="font-serif mt-2 leading-relaxed">
          Saturday magic is in the making ✨ Swipe to see how we prep for our busiest day of the week — from first coffee to last client. Slide into our DMs to book your spot. 🌿
        </p>
        <p className="mt-4 text-xs text-gold-brand/80">
          #localsalon #socialmedia #behindthescenes #salonlife
        </p>
      </div>
    </div>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$1,000",
      tagline: "Get visible. Get consistent.",
      features: [
        "Social media management (1 platform)",
        "Content creation & scheduling",
        "Branded posts published for you",
        "Caption & hashtag writing",
        "Monthly analytics report",
      ],
    },
    {
      name: "Growth",
      price: "$2,500",
      tagline: "More reach. More leads. More revenue.",
      featured: true,
      features: [
        "Social media management (all platforms)",
        "Social media ad creation & management",
        "Email marketing automations",
        "Content calendar & strategy",
        "Advanced analytics dashboard",
        "Monthly strategy session",
      ],
    },
    {
      name: "Elite",
      price: "$5,000+",
      tagline: "Full-service. Everything handled.",
      features: [
        "Facebook & Instagram ad management",
        "Social media management (all platforms)",
        "Google ad campaigns",
        "Review & reputation management",
        "Email & SMS marketing campaigns",
        "Website or landing page funnel",
        "Bi-weekly strategy calls",
        "Weekly performance reports",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 px-6 bg-cream/60">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="font-display text-4xl md:text-6xl text-rose-brand mt-4">Choose Your Plan</h2>
        <p className="font-serif italic text-[var(--ink)]/70 text-lg mt-4">
          Done-for-you monthly retainer. 3-month minimum. Book a call to get started.
        </p>
        <div className="mt-6 flex justify-center"><Divider /></div>
      </div>

      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-2xl p-10 border ${
              t.featured
                ? "bg-ink text-cream border-ink shadow-[0_30px_60px_-30px_rgba(80,40,40,0.5)] md:-mt-4"
                : "bg-cream text-[var(--ink)] border-[var(--border)]"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-brand text-ink text-[10px] tracking-luxe uppercase px-4 py-1 rounded-full" style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}>
                Most Popular
              </span>
            )}
            <p className={`text-[11px] tracking-luxe uppercase ${t.featured ? "text-gold-brand" : "text-rose-brand"}`}>
              {t.name}
            </p>
            <p className={`font-display text-5xl mt-4 ${t.featured ? "text-cream" : "text-[var(--ink)]"}`}>
              {t.price}
              <span className="font-sans text-sm font-light opacity-60">/mo USD</span>
            </p>
            <p className={`font-serif italic mt-3 ${t.featured ? "text-cream/80" : "text-[var(--ink)]/70"}`}>
              {t.tagline}
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className={t.featured ? "text-gold-brand" : "text-rose-brand"}>✦</span>
                  <span className={t.featured ? "text-cream/85" : "text-[var(--ink)]/75"}>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`mt-10 block text-center rounded-full text-[11px] tracking-luxe uppercase px-6 py-4 transition ${
                t.featured
                  ? "bg-cream text-ink hover:opacity-90"
                  : "bg-ink text-cream hover:opacity-90"
              }`}
            >
              Book a Discovery Call →
            </a>
            <p className={`mt-4 text-[10px] text-center italic ${t.featured ? "text-cream/50" : "text-[var(--ink)]/45"}`}>
              3-month minimum · all communication by email
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["What does 'done-for-you' actually mean?", "We handle everything — strategy, writing, design, scheduling, ad management, and reporting. You approve, we execute. No tools to learn, no calendars to manage."],
    ["What platforms do you manage?", "Instagram, TikTok, Facebook, and Google. Email and SMS marketing are included on Growth and Elite plans."],
    ["How do you learn my brand voice?", "We start with a kickoff questionnaire and onboarding session, then refine your voice with every approved post. Within 30 days it sounds like you wrote it yourself."],
    ["Do I have to approve content before it goes live?", "Yes. Every post is queued in your private content calendar for approval before scheduling — but we keep it lightweight so it never becomes a bottleneck."],
    ["Is there a minimum commitment?", "All retainers have a 3-month minimum. After that, month-to-month."],
    ["Is pricing in USD?", "Yes, all pricing is listed in USD."],
    ["What kinds of businesses do you work with?", "Local service businesses, boutique brands, and creator-led companies that want to show up online without doing it themselves."],
    ["What's included in the Elite funnel or website build?", "A custom landing page or single-page funnel designed to convert your ad traffic — copy, design, and tracking included."],
  ];
  return (
    <section id="faq" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow>Common Questions</Eyebrow>
        <h2 className="font-display text-4xl md:text-6xl text-rose-brand mt-4">FAQ</h2>
        <div className="mt-6 flex justify-center"><Divider /></div>
      </div>
      <div className="mt-14 max-w-3xl mx-auto space-y-3">
        {faqs.map(([q, a]) => (
          <details key={q} className="group bg-cream rounded-xl border border-[var(--border)] overflow-hidden">
            <summary className="cursor-pointer list-none px-6 py-5 flex justify-between items-center font-serif text-lg text-[var(--ink)]">
              <span>{q}</span>
              <span className="text-rose-brand text-2xl transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="px-6 pb-6 text-[var(--ink)]/70 leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function StarterKitCTA() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto bg-ink text-cream rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
        <img
          src={roseAccent}
          alt=""
          loading="lazy"
          className="absolute -top-10 -right-10 w-56 opacity-30"
        />
        <Eyebrow>Just Starting Out?</Eyebrow>
        <h2 className="font-display text-4xl md:text-5xl text-cream mt-4">Build Your Brand First</h2>
        <p className="font-serif text-cream/75 mt-5 max-w-xl mx-auto leading-relaxed">
          Not ready for a retainer yet? The Starter Kit gives you the Brand Kit,
          AI Prompt Kit, and Brand Workbook — everything you need to build a solid
          brand foundation.
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded-full bg-cream text-ink text-[11px] tracking-luxe uppercase px-8 py-4 hover:opacity-90 transition"
        >
          See the Starter Kit →
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow>Get Started</Eyebrow>
        <h2 className="font-display text-4xl md:text-6xl text-rose-brand mt-4 leading-tight">
          Ready to grow<br/>your business?
        </h2>
        <p className="font-serif italic text-[var(--ink)]/70 text-lg mt-6">
          Tell us about your business and we'll reach out within 24 hours to book your discovery call.
        </p>
        <div className="mt-6 flex justify-center"><Divider /></div>
      </div>

      <form className="mt-14 max-w-xl mx-auto bg-cream rounded-2xl p-8 md:p-10 border border-[var(--border)] space-y-5">
        {[
          ["Your Name", "text", "Jane Doe"],
          ["Business Name", "text", "Your Brand"],
          ["Email Address", "email", "you@brand.co"],
        ].map(([label, type, ph]) => (
          <div key={label}>
            <label className="block text-[10px] tracking-luxe uppercase text-rose-brand mb-2">{label}</label>
            <input
              type={type}
              placeholder={ph}
              className="w-full bg-blush/50 border border-[var(--border)] rounded-lg px-4 py-3 font-serif text-[var(--ink)] placeholder:text-[var(--ink)]/30 focus:outline-none focus:border-rose-brand transition"
            />
          </div>
        ))}
        <div>
          <label className="block text-[10px] tracking-luxe uppercase text-rose-brand mb-2">Which Plan Interests You?</label>
          <select className="w-full bg-blush/50 border border-[var(--border)] rounded-lg px-4 py-3 font-serif text-[var(--ink)] focus:outline-none focus:border-rose-brand transition">
            <option>Starter — $1,000/mo</option>
            <option>Growth — $2,500/mo</option>
            <option>Elite — $5,000+/mo</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-ink text-cream text-[11px] tracking-luxe uppercase px-6 py-4 hover:opacity-90 transition"
        >
          Book My Discovery Call →
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 px-6 text-center">
      <p className="font-display text-2xl text-rose-brand">the dollhouse</p>
      <p className="text-[10px] tracking-luxe uppercase text-[var(--ink)]/50 mt-2">brand studio</p>
      <p className="text-xs text-[var(--ink)]/45 mt-6">
        © {new Date().getFullYear()} The Dollhouse. All rights reserved.
      </p>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <TrustBar />
      <Services />
      <Pricing />
      <FAQ />
      <StarterKitCTA />
      <Contact />
      <Footer />
    </main>
  );
}
