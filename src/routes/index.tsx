import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import bgImage from "@/assets/password-bg.jpg";
import roseAccent from "@/assets/rose-accent.png";
import archMark from "@/assets/arch-mark.svg";

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
      { property: "og:title", content: "The Dollhouse Brand Studio" },
      {
        property: "og:description",
        content: "Your business, everywhere online — done for you, every single day.",
      },
    ],
  }),
});

/* ─── Icons ───────────────────────────────────────────── */
const LockIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 1 1 8 0v3" />
  </svg>
);
const DoorIcon = ({ className = "" }: { className?: string }) => (
  <img src={archMark} alt="" className={className} />
);

/* ─── Shared ──────────────────────────────────────────── */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p
    className="text-[var(--gold)] text-[11px] tracking-luxe uppercase font-medium"
    style={{ fontFamily: "'Jost', sans-serif" }}
  >
    {children}
  </p>
);

const Divider = () => (
  <div className="flex items-center justify-center gap-2 text-[var(--gold)] my-4">
    <span className="h-px w-16 bg-current opacity-50" />
    <svg viewBox="0 0 12 10" className="w-2.5 h-2.5 fill-current">
      <path d="M6 9 L0.5 3.5 a2.2 2.2 0 0 1 3.1 -3.1 L6 2.8 l2.4 -2.4 a2.2 2.2 0 0 1 3.1 3.1 Z" />
    </svg>
    <span className="h-px w-16 bg-current opacity-50" />
  </div>
);

const SectionTitle = ({
  eyebrow,
  title,
  italic,
}: {
  eyebrow: string;
  title: React.ReactNode;
  italic?: string;
}) => (
  <div className="text-center max-w-3xl mx-auto">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2
      className="text-[var(--rose)] mt-4 leading-[1.05]"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 400,
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        letterSpacing: "0.01em",
      }}
    >
      {title}
    </h2>
    {italic && (
      <p
        className="text-[var(--rose)] italic mt-2"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem" }}
      >
        {italic}
      </p>
    )}
    <Divider />
  </div>
);

/* ─── Nav ─────────────────────────────────────────────── */
function Nav() {
  return (
    <nav className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-6 md:px-12 py-6">
      <a href="#" className="flex flex-col leading-none">
        <span
          className="text-[var(--rose)] italic"
          style={{ fontFamily: "'Pinyon Script', cursive", fontSize: "1.4rem" }}
        >
          the
        </span>
        <span
          className="text-[var(--rose)] tracking-[0.18em] -mt-1"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem" }}
        >
          DOLLHOUSE
        </span>
      </a>
      <div
        className="hidden md:flex items-center gap-9 text-[10px] tracking-luxe uppercase text-[var(--ink)]/75"
        style={{ fontFamily: "'Jost', sans-serif" }}
      >
        <a href="#services" className="hover:text-[var(--rose)] transition">Services</a>
        <a href="#pricing" className="hover:text-[var(--rose)] transition">Pricing</a>
        <a href="#faq" className="hover:text-[var(--rose)] transition">FAQ</a>
        <a href="#contact" className="hover:text-[var(--rose)] transition">Contact</a>
      </div>
      <a
        href="#contact"
        className="rounded-full bg-[var(--ink)] text-[var(--cream)] text-[10px] tracking-luxe uppercase px-5 py-2.5 hover:opacity-90 transition"
        style={{ fontFamily: "'Jost', sans-serif" }}
      >
        Book a Call
      </a>
    </nav>
  );
}

/* ─── Hero ────────────────────────────────────────────── */
function Hero() {
  return (
    <header
      className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Nav />
      <DoorIcon className="hidden lg:block absolute top-[42%] right-[5%] w-16 h-24 text-[var(--gold)]/55" />

      <div className="relative z-10 w-full max-w-[640px] text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/55 bg-white/30 backdrop-blur-sm px-5 py-2 text-[var(--gold)]">
          <LockIcon className="w-3 h-3" />
          <span
            className="text-[10px] tracking-luxe uppercase font-medium"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Done-For-You Social Media
          </span>
        </div>

        <div className="mt-10 flex justify-center text-[var(--gold)]">
          <DoorIcon className="w-7 h-10" />
        </div>

        <p
          className="text-[var(--rose)] italic mt-2 leading-none"
          style={{ fontFamily: "'Pinyon Script', cursive", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
        >
          the
        </p>
        <h1
          className="text-[var(--rose)] font-normal tracking-[0.04em] leading-[0.95] mt-1"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3.25rem, 8.5vw, 5.5rem)",
          }}
        >
          DOLLHOUSE
        </h1>
        <p
          className="mt-4 text-[var(--gold)] text-[11px] tracking-luxe uppercase"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          brand studio
        </p>

        <Divider />

        <p
          className="mt-2 text-[var(--ink)]/75 leading-relaxed max-w-md mx-auto"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.98rem" }}
        >
          Your business, everywhere online. AI-powered social media content,
          scheduling, and analytics — done for you, every single day.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#pricing"
            className="rounded-full bg-[var(--ink)] text-[var(--cream)] text-[11px] tracking-luxe uppercase px-8 py-4 hover:opacity-90 transition"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Book a Discovery Call →
          </a>
          <a
            href="#services"
            className="text-[11px] tracking-luxe uppercase text-[var(--ink)]/70 hover:text-[var(--rose)] transition px-4 py-2"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            See how it works ↓
          </a>
        </div>

        <p
          className="mt-6 text-[var(--ink)]/55 italic text-sm"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          3-month minimum · All communication by email
        </p>
      </div>
    </header>
  );
}

/* ─── Trust bar ───────────────────────────────────────── */
function TrustBar() {
  const logos = ["Meta", "OpenAI", "TikTok", "Google", "Stripe"];
  return (
    <section className="py-14 px-6 bg-[var(--cream)]/60 backdrop-blur-sm border-y border-[var(--gold)]/15">
      <p
        className="text-center text-[10px] tracking-luxe uppercase text-[var(--gold)]"
        style={{ fontFamily: "'Jost', sans-serif" }}
      >
        Powered by the same infrastructure trusted by 500,000+ businesses
      </p>
      <div className="mt-7 flex flex-wrap justify-center items-center gap-x-14 gap-y-4 text-[var(--ink)]/60">
        {logos.map((l) => (
          <span
            key={l}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem" }}
          >
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─── Services ────────────────────────────────────────── */
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
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_25px_50px_-25px_rgba(180,120,120,0.3)] p-7">
      <div className="flex justify-between items-baseline">
        <p
          className="text-[var(--ink)]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem" }}
        >
          June 2026
        </p>
        <p className="text-[10px] tracking-luxe uppercase text-[var(--gold)]" style={{ fontFamily: "'Jost', sans-serif" }}>
          12 posts queued
        </p>
      </div>
      <div className="grid grid-cols-7 gap-2 mt-5">
        {days.map((d) => (
          <div
            key={d.d}
            className="aspect-square rounded-lg bg-[var(--blush)]/70 flex flex-col items-center justify-center"
          >
            <span className="text-[9px] uppercase text-[var(--ink)]/55" style={{ fontFamily: "'Jost', sans-serif" }}>
              {d.d}
            </span>
            {d.t && <span className="mt-1 text-[10px] text-[var(--rose)] font-medium">{d.t}</span>}
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-2.5">
        {[["Instagram", "5 posts"], ["TikTok", "4 posts"], ["Facebook", "2 posts"], ["Google", "1 post"]].map(
          ([p, c]) => (
            <div
              key={p}
              className="flex justify-between text-sm border-b border-[var(--gold)]/15 pb-2 last:border-0"
            >
              <span className="text-[var(--ink)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p}</span>
              <span className="text-[var(--ink)]/55 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{c}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function AnalyticsCard() {
  const stats: [string, string, string][] = [
    ["Reach", "14.2K", "+38%"],
    ["Engagements", "1,840", "+52%"],
    ["New Followers", "312", "+29%"],
    ["Profile Visits", "2.1K", "+44%"],
  ];
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_25px_50px_-25px_rgba(180,120,120,0.3)] p-7">
      <Eyebrow>This Month</Eyebrow>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {stats.map(([l, v, c]) => (
          <div key={l} className="rounded-xl bg-[var(--blush)]/60 p-4">
            <p className="text-[9px] uppercase tracking-wider text-[var(--ink)]/55" style={{ fontFamily: "'Jost', sans-serif" }}>
              {l}
            </p>
            <p
              className="text-[var(--ink)] mt-1"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.85rem" }}
            >
              {v}
            </p>
            <p className="text-[10px] text-[var(--gold)] mt-0.5">{c} vs last month</p>
          </div>
        ))}
      </div>
      <p className="text-[9px] uppercase tracking-luxe text-[var(--ink)]/55 mt-5" style={{ fontFamily: "'Jost', sans-serif" }}>
        Weekly reach
      </p>
      <div className="mt-2 flex items-end gap-1 h-14">
        {[40, 55, 35, 70, 60, 85, 95].map((h, i) => (
          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: "var(--rose)", opacity: 0.7 }} />
        ))}
      </div>
    </div>
  );
}

function CaptionCard() {
  return (
    <div className="rounded-2xl bg-[var(--ink)] text-[var(--cream)] shadow-[0_25px_50px_-25px_rgba(80,40,40,0.4)] p-7">
      <p className="text-[10px] tracking-luxe uppercase text-[var(--gold)]" style={{ fontFamily: "'Jost', sans-serif" }}>
        ✦ AI Content Studio
      </p>
      <p className="text-xs text-[var(--cream)]/55 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        Generating caption…
      </p>

      <div className="mt-6">
        <p className="text-[9px] tracking-luxe uppercase text-[var(--cream)]/50" style={{ fontFamily: "'Jost', sans-serif" }}>
          Prompt
        </p>
        <p
          className="italic mt-2 text-[var(--cream)]/90"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}
        >
          Behind the scenes at our salon this Saturday 🌸
        </p>
      </div>

      <div className="mt-5 border-t border-[var(--cream)]/10 pt-5">
        <p className="text-[9px] tracking-luxe uppercase text-[var(--cream)]/50" style={{ fontFamily: "'Jost', sans-serif" }}>
          Generated Caption
        </p>
        <p
          className="mt-2 leading-relaxed text-[var(--cream)]/90"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.02rem" }}
        >
          Saturday magic is in the making ✨ Swipe to see how we prep for our busiest day of the week — from first coffee to last client. Slide into our DMs to book your spot. 🌿
        </p>
        <p className="mt-3 text-xs text-[var(--gold)]/85" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          #localsalon #socialmedia #behindthescenes #salonlife
        </p>
      </div>
    </div>
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
      <SectionTitle
        eyebrow="What's Inside"
        title={<>Everything you need to<br />dominate social media.</>}
      />
      <div className="mt-20 max-w-6xl mx-auto space-y-24">
        {items.map((it, i) => (
          <div
            key={it.tag}
            className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
          >
            <div className="[direction:ltr]">
              <Eyebrow>{it.tag}</Eyebrow>
              <h3
                className="text-[var(--ink)] mt-4 leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.85rem, 3.2vw, 2.6rem)",
                }}
              >
                {it.title}
              </h3>
              <p
                className="italic text-[var(--rose)] mt-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}
              >
                {it.sub}
              </p>
              <p
                className="mt-5 text-[var(--ink)]/70 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {it.body}
              </p>
            </div>
            <div className="[direction:ltr]">{it.visual}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Pricing ─────────────────────────────────────────── */
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
    <section id="pricing" className="py-24 md:py-32 px-6 bg-[var(--cream)]/55">
      <SectionTitle
        eyebrow="Pricing"
        title="Choose your plan"
        italic="Done-for-you monthly retainer. 3-month minimum."
      />
      <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-start">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-2xl p-10 border ${
              t.featured
                ? "bg-[var(--ink)] text-[var(--cream)] border-[var(--ink)] shadow-[0_30px_60px_-30px_rgba(80,40,40,0.5)] md:-mt-6 md:mb-6"
                : "bg-white/75 backdrop-blur-sm text-[var(--ink)] border-white/80 shadow-[0_20px_40px_-25px_rgba(180,120,120,0.3)]"
            }`}
          >
            {t.featured && (
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] tracking-luxe uppercase px-4 py-1 rounded-full"
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--ink)",
                  fontFamily: "'Jost', sans-serif",
                }}
              >
                Most Popular
              </span>
            )}
            <p
              className={`text-[11px] tracking-luxe uppercase ${t.featured ? "text-[var(--gold)]" : "text-[var(--gold)]"}`}
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {t.name}
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "3rem",
                lineHeight: 1,
              }}
            >
              {t.price}
              <span
                className="opacity-60 ml-1"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem" }}
              >
                /mo USD
              </span>
            </p>
            <p
              className={`italic mt-3 ${t.featured ? "text-[var(--cream)]/80" : "text-[var(--ink)]/70"}`}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
            >
              {t.tagline}
            </p>

            <ul className="mt-7 space-y-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {t.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm">
                  <span className={t.featured ? "text-[var(--gold)]" : "text-[var(--rose)]"}>✦</span>
                  <span className={t.featured ? "text-[var(--cream)]/85" : "text-[var(--ink)]/75"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`mt-9 block text-center rounded-full text-[11px] tracking-luxe uppercase px-6 py-4 transition ${
                t.featured
                  ? "bg-[var(--cream)] text-[var(--ink)] hover:opacity-90"
                  : "bg-[var(--ink)] text-[var(--cream)] hover:opacity-90"
              }`}
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Book a Discovery Call →
            </a>
            <p
              className={`mt-3 text-[10px] text-center italic ${t.featured ? "text-[var(--cream)]/50" : "text-[var(--ink)]/45"}`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              3-month minimum · all communication by email
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── FAQ ─────────────────────────────────────────────── */
function FAQ() {
  const faqs: [string, string][] = [
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
      <SectionTitle eyebrow="Common Questions" title="FAQ" />
      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {faqs.map(([q, a]) => (
          <details
            key={q}
            className="group rounded-xl bg-white/65 backdrop-blur-sm border border-white/80 overflow-hidden"
          >
            <summary className="cursor-pointer list-none px-6 py-5 flex justify-between items-center">
              <span
                className="text-[var(--ink)]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}
              >
                {q}
              </span>
              <span className="text-[var(--rose)] text-2xl transition-transform group-open:rotate-45">+</span>
            </summary>
            <p
              className="px-6 pb-6 text-[var(--ink)]/70 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem" }}
            >
              {a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ─── Starter Kit CTA ─────────────────────────────────── */
function StarterKitCTA() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto bg-[var(--ink)] text-[var(--cream)] rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
        <img
          src={roseAccent}
          alt=""
          loading="lazy"
          className="absolute -top-10 -right-10 w-56 opacity-25 pointer-events-none"
        />
        <Eyebrow>Just Starting Out?</Eyebrow>
        <h2
          className="text-[var(--cream)] mt-3"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}
        >
          Build your brand first
        </h2>
        <p
          className="text-[var(--cream)]/75 mt-5 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Not ready for a retainer yet? The Starter Kit gives you the Brand Kit,
          AI Prompt Kit, and Brand Workbook — everything you need to build a
          solid brand foundation.
        </p>
        <Link
          to="/starter-kit"
          className="mt-8 inline-block rounded-full bg-[var(--cream)] text-[var(--ink)] text-[11px] tracking-luxe uppercase px-8 py-4 hover:opacity-90 transition"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          See the Starter Kit →
        </Link>
      </div>
    </section>
  );
}

/* ─── Contact ─────────────────────────────────────────── */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <SectionTitle
        eyebrow="Get Started"
        title={<>Ready to grow<br />your business?</>}
        italic="Tell us about your business and we'll reach out within 24 hours."
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="mt-12 max-w-xl mx-auto rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_25px_50px_-25px_rgba(180,120,120,0.3)] p-8 md:p-10 space-y-5"
      >
        {([
          ["Your Name", "text", "Jane Doe"],
          ["Business Name", "text", "Your Brand"],
          ["Email Address", "email", "you@brand.co"],
        ] as const).map(([label, type, ph]) => (
          <div key={label}>
            <label
              className="block text-[10px] tracking-luxe uppercase text-[var(--gold)] mb-2"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {label}
            </label>
            <input
              type={type}
              placeholder={ph}
              required
              className="w-full rounded-xl bg-white/60 border border-[var(--gold)]/30 px-5 py-3.5 text-[var(--ink)] placeholder:text-[var(--ink)]/35 focus:outline-none focus:border-[var(--rose)] transition"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
            />
          </div>
        ))}
        <div>
          <label
            className="block text-[10px] tracking-luxe uppercase text-[var(--gold)] mb-2"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Which plan interests you?
          </label>
          <select
            className="w-full rounded-xl bg-white/60 border border-[var(--gold)]/30 px-5 py-3.5 text-[var(--ink)] focus:outline-none focus:border-[var(--rose)] transition"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
          >
            <option>Starter — $1,000/mo</option>
            <option>Growth — $2,500/mo</option>
            <option>Elite — $5,000+/mo</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-[var(--ink)] text-[var(--cream)] py-4 text-[11px] tracking-luxe uppercase hover:opacity-90 transition"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          {submitted ? "Thank you — we'll be in touch ♡" : "Book my discovery call →"}
        </button>
      </form>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-[var(--gold)]/15 py-12 px-6 text-center">
      <span
        className="text-[var(--rose)] italic block"
        style={{ fontFamily: "'Pinyon Script', cursive", fontSize: "1.6rem" }}
      >
        the
      </span>
      <span
        className="text-[var(--rose)] tracking-[0.22em] -mt-1 inline-block"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
      >
        DOLLHOUSE
      </span>
      <p
        className="text-[10px] tracking-luxe uppercase text-[var(--gold)] mt-2"
        style={{ fontFamily: "'Jost', sans-serif" }}
      >
        brand studio
      </p>
      <p
        className="text-xs text-[var(--ink)]/45 mt-6"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        © {new Date().getFullYear()} The Dollhouse. All rights reserved.
      </p>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-[var(--blush)] text-[var(--ink)]">
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
