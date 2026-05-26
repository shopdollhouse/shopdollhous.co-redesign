import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import bgImage from "@/assets/password-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Dollhouse — Private Access" },
      {
        name: "description",
        content:
          "Answer 19 questions and get a personalised business blueprint, brand identity, launch plan, and marketing strategy.",
      },
    ],
  }),
});

function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  );
}

function DoorIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" fill="none" className={className} stroke="currentColor" strokeWidth="1.2">
      <path d="M4 58 V20 a16 16 0 0 1 32 0 V58 Z" />
      <circle cx="20" cy="6" r="2.5" fill="currentColor" stroke="none" />
      <path d="M20 8 V14" />
      <circle cx="27" cy="36" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ArchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 90" fill="none" className={className} stroke="currentColor" strokeWidth="1">
      <path d="M6 88 V30 a24 24 0 0 1 48 0 V88" />
      <path d="M14 88 V32 a16 16 0 0 1 32 0 V88" />
      <path d="M30 14 l2 -3 l2 3 l-2 3 Z" fill="currentColor" />
    </svg>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.1A10.5 10.5 0 0 1 12 5c6.5 0 10 7 10 7a17.4 17.4 0 0 1-3.2 4.1M6.6 6.6C3.7 8.4 2 12 2 12s3.5 7 10 7c1.6 0 3-.3 4.3-.8" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
      <path d="M12 3l1.8 4.8L18 9.5l-4.2 1.7L12 16l-1.8-4.8L6 9.5l4.2-1.7z" />
      <path d="M19 14l.9 2.1 2.1.9-2.1.9L19 20l-.9-2.1-2.1-.9 2.1-.9z" />
    </svg>
  );
}
function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </svg>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-2 text-[var(--gold)] my-3">
      <span className="h-px w-16 bg-current opacity-50" />
      <svg viewBox="0 0 12 10" className="w-2.5 h-2.5 fill-current">
        <path d="M6 9 L0.5 3.5 a2.2 2.2 0 0 1 3.1 -3.1 L6 2.8 l2.4 -2.4 a2.2 2.2 0 0 1 3.1 3.1 Z" />
      </svg>
      <span className="h-px w-16 bg-current opacity-50" />
    </div>
  );
}

function Index() {
  const [show, setShow] = useState(false);
  const [key, setKey] = useState("");

  return (
    <main
      className="min-h-screen w-full relative flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Floating side arch decoration */}
      <DoorIcon className="hidden lg:block absolute top-[44%] right-[6%] w-16 h-24 text-[var(--gold)]/55" />

      <div className="relative z-10 w-full max-w-[560px] text-center">
        {/* Private Strategy Suite badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/55 bg-white/30 backdrop-blur-sm px-5 py-2 text-[var(--gold)]">
          <LockIcon className="w-3 h-3" />
          <span className="text-[10px] tracking-luxe uppercase font-medium">Private Strategy Suite</span>
        </div>

        {/* Door icon */}
        <div className="mt-10 flex justify-center text-[var(--gold)]">
          <DoorIcon className="w-7 h-10" />
        </div>

        {/* Logo */}
        <p
          className="text-[var(--rose)] italic mt-2 leading-none"
          style={{ fontFamily: "'Pinyon Script', cursive", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
        >
          the
        </p>
        <h1
          className="text-[var(--rose)] font-normal tracking-[0.04em] leading-[0.95] mt-1"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3.25rem, 8.5vw, 5.5rem)" }}
        >
          DOLLHOUSE
        </h1>

        <p className="mt-5 text-[var(--gold)] text-[11px] tracking-luxe uppercase" style={{ fontFamily: "'Jost', sans-serif" }}>
          private access
        </p>

        <Divider />

        {/* Description */}
        <p
          className="mt-4 text-[var(--ink)]/70 leading-relaxed max-w-md mx-auto"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem" }}
        >
          Answer 19 questions and walk away with your complete brand strategy,
          product plan, and launch roadmap — built specifically for you.
        </p>

        {/* Feature pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { icon: <FileIcon />, label: "17 Rooms" },
            { icon: <SparkleIcon />, label: "Custom Plan" },
            { icon: <CheckCircleIcon />, label: "Portable Save" },
          ].map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-1.5 rounded-lg border border-[var(--gold)]/40 bg-white/35 backdrop-blur-sm px-6 py-3 min-w-[130px] text-[var(--gold)]"
            >
              {f.icon}
              <span className="text-[10px] tracking-luxe uppercase font-medium">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Access key info */}
        <p className="mt-6 text-[var(--ink)]/55 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Your access key is in your purchase confirmation<br />
          email. Questions?{" "}
          <a href="https://shopdollhouse.co" className="text-[var(--rose)] underline underline-offset-2">
            shopdollhouse.co
          </a>
        </p>

        {/* Access key form */}
        <div className="mt-8 rounded-2xl bg-white/65 backdrop-blur-md border border-white/70 shadow-[0_20px_50px_-20px_rgba(180,120,120,0.25)] p-7">
          <p className="text-[var(--gold)] text-[11px] tracking-luxe uppercase font-medium">
            Enter your access key
          </p>
          <div className="mt-4 relative">
            <input
              type={show ? "text" : "password"}
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Access Key"
              className="w-full rounded-xl bg-white/60 border border-[var(--gold)]/30 px-5 py-3.5 text-center text-[var(--ink)] placeholder:text-[var(--ink)]/35 focus:outline-none focus:border-[var(--rose)] tracking-[0.2em]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontStyle: "italic" }}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--ink)]/50 hover:text-[var(--rose)] transition"
              aria-label="Toggle password visibility"
            >
              <EyeIcon open={show} />
            </button>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-xl bg-[var(--ink)] text-[var(--cream)] py-4 text-[11px] tracking-luxe uppercase font-medium hover:opacity-90 transition"
          >
            Enter
          </button>
        </div>

        {/* Personal use only */}
        <div className="mt-8 rounded-xl border border-[var(--gold)]/40 bg-white/25 backdrop-blur-sm p-5 text-[var(--ink)]/55">
          <div className="flex items-center justify-center gap-2 text-[var(--gold)] mb-2">
            <LockIcon className="w-3 h-3" />
            <span className="text-[10px] tracking-luxe uppercase font-medium">Personal Use Only</span>
          </div>
          <p className="text-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            This blueprint is licensed for personal use only. It may not be resold,
            redistributed, shared, or reproduced in any form without prior written
            permission from The Dollhouse.
          </p>
        </div>
      </div>
    </main>
  );
}
