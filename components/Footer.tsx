"use client";

import { MessageCircle, Mail } from "lucide-react";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.57l-5.14-6.73L5.15 22H1.89l7.61-8.7L1.5 2h6.74l4.65 6.14L18.244 2Zm-1.15 17.54h1.8L7.22 4.35H5.29l11.804 15.19Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M16.6 5.82c-1.02-.9-1.6-2.15-1.6-3.62h-3.14v13.6c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.28 0 .55.04.8.11V9.83c-.27-.03-.53-.05-.8-.05-3.28 0-5.94 2.66-5.94 5.94S8.68 21.66 11.96 21.66s5.94-2.66 5.94-5.94V8.98c1.23.88 2.73 1.4 4.36 1.4V7.24c-1.98 0-3.68-1.28-4.66-2.55l-1-.87z" />
    </svg>
  );
}

export default function Footer() {
  const socials = [
    {
      name: "Instagram",
      href: "https://instagram.com/strrarya",
      external: true,
      icon: InstagramIcon,
      color:
        "hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
    },
    {
      name: "Twitter/X",
      href: "https://x.com/mwwhehe",
      external: true,
      icon: XIcon,
      color: "hover:bg-[#1DA1F2]",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/6285332130737",
      external: true,
      icon: MessageCircle,
      color: "hover:bg-[#25D366]",
    },
    {
      name: "Email",
      href: "mailto:satura.araryal22@gmail.com",
      external: false,
      icon: Mail,
      color: "hover:bg-[#eb372a]",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@mw.hehehe",
      external: true,
      icon: TikTokIcon,
      color: "hover:bg-[#2B2622]",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative z-10 mt-24 overflow-hidden border-t-2 border-dashed border-[#2B2622]/20 px-6 pb-8 pt-20 text-center"
      style={{ backgroundColor: "#ffffff8c" }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 top-10 h-52 w-52 rounded-full bg-[#E8A0A0]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#E4B15A]/20 blur-3xl" />

      {/* Decorative stars */}
      <span className="absolute left-[12%] top-16 rotate-[-15deg] text-4xl text-[#E4B15A]/60">
        ✦
      </span>

      <span className="absolute right-[13%] top-24 rotate-[15deg] text-3xl text-[#DD8C8C]/60">
        ✦
      </span>

      <span className="absolute bottom-20 left-[20%] text-xl text-[#9CC0D8]/60">
        ✧
      </span>

      {/* Main heading */}
      <div className="relative">
        <p className="mb-[-8px] rotate-[-2deg] font-script text-5xl text-[#DD8C8C] drop-shadow-[3px_4px_0_rgba(43,38,34,0.12)] md:text-7xl">
          Let&apos;s Create
        </p>

        <p className="rotate-[1deg] font-script text-5xl text-[#2B2622] drop-shadow-[4px_5px_0_rgba(232,160,160,0.35)] md:text-7xl">
          Something Together
        </p>
      </div>

      {/* Divider */}
      <div className="mx-auto my-8 flex max-w-xs items-center justify-center gap-3">
        <span className="h-px flex-1 bg-[#2B2622]/15" />
        <span className="rotate-12 text-[#DD8C8C]">✦</span>
        <span className="h-px flex-1 bg-[#2B2622]/15" />
      </div>

      {/* Social buttons */}
      <div className="relative mb-14 flex flex-wrap justify-center gap-5">
        {socials.map((s, index) => {
          const Icon = s.icon;

          return (
            <a
              key={s.name}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              aria-label={s.name}
              className={`group relative flex h-14 w-14 items-center justify-center rounded-full border border-[#2B2622]/10 bg-white text-[#2B2622] shadow-[4px_5px_0_rgba(43,38,34,0.12),8px_10px_18px_rgba(43,38,34,0.08)] transition-all duration-300 hover:-translate-y-3 hover:rotate-[6deg] hover:text-white hover:shadow-[7px_10px_0_rgba(43,38,34,0.18),12px_16px_25px_rgba(43,38,34,0.18)] ${s.color}`}
              style={{
                transform: `rotate(${index % 2 === 0 ? "-3" : "3"}deg)`,
              }}
            >
              <Icon className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:scale-125" />

              <span className="pointer-events-none absolute -inset-1 rounded-full border border-dashed border-[#2B2622]/10 opacity-0 transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100" />
            </a>
          );
        })}
      </div>

      {/* Footer signature */}
      <div className="relative flex items-center justify-center">
        <span className="rotate-[-2deg] border border-[#2B2622]/10 bg-[#E8A0A0]/50 px-5 py-2 font-script text-sm text-[#2B2622] shadow-[3px_4px_0_rgba(43,38,34,0.12)]">
          Web maintained by Satura Ararya L
        </span>
      </div>

      <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-[#2B2622]/25">
        Made with curiosity & chaos
      </p>
    </footer>
  );
}