export default function Footer() {
    const socials = [
    { name: "Instagram", href: "https://instagram.com/strrarya", external: true },
    { name: "Twitter/X", href: "https://x.com/mwwhehe", external: true },
    { name: "WhatsApp", href: "https://wa.me/6285332130737", external: true },
    { name: "Email", href: "mailto:satura.araryal22@gmail.com", external: false },
    { name: "TikTok", href: "https://tiktok.com/@mw.hehehe", external: true },
    ];

  return (
    <footer id="contact" className="relative z-10 mt-24 border-t-2 border-dashed border-[#2B2622]/15 px-6 py-10 text-center">
      <p className="mb-4 font-script text-2xl">Contact me via</p>
      <div className="mb-6 flex justify-center gap-3 text-sm">

        {socials.map((s) => (
        <a
            key={s.name}
            href={s.href}
            target={s.external ? "_blank" : undefined}
            rel={s.external ? "noopener noreferrer" : undefined}
            className="rounded-full bg-[#E8A0A0]/30 px-4 py-2 text-[#2B2622]/80 hover:bg-[#E8A0A0]/50"
        >
            {s.name}
        </a>
        ))}
      </div>
      <p className="text-xs text-[#2B2622]/40">Web maintained by Satura Ararya L</p>
    </footer>
  );
}