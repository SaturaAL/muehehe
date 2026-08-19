export default function About() {
  const skills = {
    Illustration: ["Procreate", "Character Design", "Digital Painting"],
    Design: ["Figma", "UI/UX", "Design Systems"],
    Development: ["Next.js", "Tailwind", "Laravel", "Prisma"],
  };

  return (
    <div className="grid items-start gap-10 md:grid-cols-[1fr_1.2fr]">
      <div>
        <p className="mb-5 leading-relaxed text-[#2B2622]/70">
          Ganti teks ini dengan cerita singkat kamu — latar belakang, apa yang bikin kamu
          tertarik nggambar sekaligus ngoding, dan apa yang lagi kamu cari (kerja/freelance/kolaborasi).
        </p>
        <div className="flex flex-wrap gap-2">
          {["Illustrator", "UI/UX", "Frontend Dev"].map((tag) => (
            <span
              key={tag}
              className="cursor-default rounded-full border border-[#2B2622]/20 px-3 py-1 text-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2B2622] hover:bg-[#2B2622] hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#2B2622]/40">{category}</p>
            <div className="flex flex-wrap gap-2">
            {items.map((item, i) => (
                <span
                key={item}
                style={{ ["--tilt" as string]: i % 2 === 0 ? "-4deg" : "4deg" }}
                className="stamp cursor-default rounded-full bg-white px-4 py-1.5 text-sm font-medium text-[#2B2622]"
                >
                {item}
                </span>
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}