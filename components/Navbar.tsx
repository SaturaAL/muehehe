"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const hoveringLink = useRef(false);

  const target = useRef({
    x: 0,
    y: 0,
    w: 22,
    h: 22,
  });

  const current = useRef({
    x: 0,
    y: 0,
    w: 22,
    h: 22,
  });

  const [visible, setVisible] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/#contact", label: "Contact" },
  ];

  useEffect(() => {
    let raf: number;

    function loop() {
      const c = current.current;
      const t = target.current;

      c.x += (t.x - c.x) * 0.18;
      c.y += (t.y - c.y) * 0.18;
      c.w += (t.w - c.w) * 0.18;
      c.h += (t.h - c.h) * 0.18;

      if (circleRef.current) {
        circleRef.current.style.left = `${c.x}px`;
        circleRef.current.style.top = `${c.y}px`;
        circleRef.current.style.width = `${c.w}px`;
        circleRef.current.style.height = `${c.h}px`;
      }

      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }, []);

  function handleNavMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (hoveringLink.current) return;

    const rect = navRef.current?.getBoundingClientRect();

    if (!rect) return;

    target.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      w: 22,
      h: 22,
    };
  }

  function handleLinkEnter(
    e: React.MouseEvent<HTMLAnchorElement>
  ) {
    hoveringLink.current = true;

    const navRect = navRef.current?.getBoundingClientRect();

    if (!navRect) return;

    const linkRect = e.currentTarget.getBoundingClientRect();

    target.current = {
      x: linkRect.left - navRect.left + linkRect.width / 2,
      y: linkRect.top - navRect.top + linkRect.height / 2,
      w: linkRect.width + 30,
      h: linkRect.height + 18,
    };
  }

  function handleLinkLeave() {
    hoveringLink.current = false;
  }

  return (
    <nav
      ref={navRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleNavMouseMove}
      className="
        fixed left-1/2 top-3 z-50
        flex w-[calc(100%-24px)]
        max-w-6xl -translate-x-1/2
        cursor-none items-center justify-between
        overflow-hidden
        rounded-2xl
        border border-white/70
        bg-[#FAF6EF]/75
        px-5 py-3
        shadow-[0_8px_25px_rgba(43,38,34,0.10),0_2px_6px_rgba(43,38,34,0.08)]
        backdrop-blur-xl
        md:px-7 md:py-3.5
      "
    >
      {/* Decorative paper corner */}
      <div
        className="
          pointer-events-none absolute
          -right-4 -top-5
          h-12 w-12
          rotate-12
          rounded-sm
          bg-[#E8A0A0]/35
          blur-[1px]
        "
      />

      {/* Moving hover blob */}
      <div
        ref={circleRef}
        className="
          pointer-events-none
          absolute
          rounded-full
          bg-[#DD8C8C]
          shadow-[0_5px_15px_rgba(221,140,140,0.35)]
          transition-opacity
          duration-300
          ease-out
        "
        style={{
          transform: "translate(-50%, -50%)",
          opacity: visible ? 0.9 : 0,
        }}
      />

      {/* Logo */}
      <a
        href="/admin"
        onMouseEnter={handleLinkEnter}
        onMouseLeave={handleLinkLeave}
        className="
          relative z-10
          -rotate-2
          font-script
          text-3xl
          leading-none
          text-[#2B2622]
          transition-all
          duration-300
          hover:rotate-2
          hover:text-white
          md:text-4xl
        "
      >
        Muehehe
      </a>

      {/* Small decorative divider */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
        <span className="font-script text-sm text-[#2B2622]/25">
          Welcome, to my World~
        </span>
      </div>

      {/* Navigation */}
      <ul
        className="
          relative z-10
          flex items-center
          gap-1
          text-sm
          font-medium
          text-[#2B2622]/65
          md:gap-2
        "
      >
        {links.map((link, index) => (
          <li key={link.href}>
            <a
              href={link.href}
              onMouseEnter={handleLinkEnter}
              onMouseLeave={handleLinkLeave}
              className="
                relative
                block
                rounded-full
                px-3 py-2
                transition-all
                duration-200
                hover:text-white
                md:px-4
              "
            >
              {link.label}

              {/* Tiny underline decoration */}
              {index === 1 && (
                <span
                  className="
                    pointer-events-none
                    absolute
                    -bottom-0.5
                    left-1/2
                    h-[2px]
                    w-5
                    -translate-x-1/2
                    rotate-[-3deg]
                    rounded-full
                    bg-[#E4B15A]/60
                  "
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}