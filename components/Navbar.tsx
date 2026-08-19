"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const hoveringLink = useRef(false);
  const target = useRef({ x: 0, y: 0, w: 22, h: 22 });
  const current = useRef({ x: 0, y: 0, w: 22, h: 22 });
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

      c.x += (t.x - c.x) * 0.2;
      c.y += (t.y - c.y) * 0.2;
      c.w += (t.w - c.w) * 0.2;
      c.h += (t.h - c.h) * 0.2;

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
    const rect = navRef.current!.getBoundingClientRect();
    target.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, w: 22, h: 22 };
  }

  function handleLinkEnter(e: React.MouseEvent<HTMLAnchorElement>) {
    hoveringLink.current = true;
    const navRect = navRef.current!.getBoundingClientRect();
    const linkRect = e.currentTarget.getBoundingClientRect();
    target.current = {
      x: linkRect.left - navRect.left + linkRect.width / 2,
      y: linkRect.top - navRect.top + linkRect.height / 2,
      w: linkRect.width + 24,
      h: linkRect.height + 16,
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
      className="fixed left-0 top-0 z-50 flex w-full cursor-none items-center justify-between overflow-hidden border-b border-white/40 bg-white/30 px-6 py-5 shadow-sm backdrop-blur-md md:px-12"
    >
      <a
        href="/admin"
        onMouseEnter={handleLinkEnter}
        onMouseLeave={handleLinkLeave}
        className="relative z-10 font-script text-3xl transition-colors duration-200 hover:text-white"
      >
        Muehehe
      </a>

      <div
        ref={circleRef}
        className="pointer-events-none absolute rounded-full bg-[#DD8C8C] transition-opacity duration-300 ease-out"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: visible ? 0.9 : 0,
        }}
      />

      <ul className="relative z-10 flex gap-6 text-sm font-medium text-[#2B2622]/70">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onMouseEnter={handleLinkEnter}
              onMouseLeave={handleLinkLeave}
              className="relative pb-1 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}