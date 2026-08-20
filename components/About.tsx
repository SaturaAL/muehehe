export default function About() {
const skills = {
  Illustration: [
    "Digital Illustration",
    "Digital Painting",
    "Adobe Photoshop",
    "Clip Studio Paint",
  ],
  Design: [
    "UI Design",
    "UX Design",
    "Design Systems",
    "Prototyping",
    "Figma",
  ],
  Development: [
    "Frontend Development",
    "Backend Development",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Laravel",
    "Node.js",
    "Prisma",
    "Bootstrap",
    "GitHub",
  ],
};

  const tags = ["Illustrator", "UI/UX", "Frontend Dev"];

  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

      {/* ================= INTRO ================= */}
      <div className="relative">
        {/* Decorative tape */}
        <div className="absolute -right-2 -top-4 h-5 w-20 rotate-[4deg] bg-[#9CC0D8]/50 shadow-sm" />

        <div className="relative rounded-sm bg-[#FFFDF9] p-6 shadow-[4px_6px_18px_rgba(43,38,34,0.08)] sm:p-8">

          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 rotate-[-5deg] items-center justify-center rounded-full bg-[#DD8C8C]/20 text-lg">
              {"಄"}
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#2B2622]/30">
                So, 
              </p>

              <p className="font-script text-2xl text-[#B5544A]">
                Who am I?
              </p>
            </div>
          </div>

          <p className="text-sm leading-7 text-[#2B2622]/65 sm:text-[15px]">
            Saya hobi gambar, digital awalnya. Saya resah akan pemilihan
            palet warna yang sering saya temui karena selalu menekankan
            fungsionalitas.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#2B2622]/65 sm:text-[15px]">
            Kata siapa fungsional tidak bisa berwarna?
          </p>

          <p className="mt-4 text-sm font-medium leading-7 text-[#2B2622]/80 sm:text-[15px]">
            Inilah saya, junior software developer yang ingin mengenalkan
            warna dalam dunia fungsional.
          </p>

          {/* Tags */}
          <div className="mt-7 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`cursor-default rounded-full border px-3 py-1.5 text-[11px] font-medium transition-all duration-300 hover:-translate-y-1 ${
                  index === 0
                    ? "border-[#DD8C8C]/30 bg-[#DD8C8C]/10 hover:bg-[#DD8C8C] hover:text-white"
                    : index === 1
                      ? "border-[#9CC0D8]/30 bg-[#9CC0D8]/10 hover:bg-[#9CC0D8] hover:text-white"
                      : "border-[#A8BFA0]/40 bg-[#A8BFA0]/10 hover:bg-[#A8BFA0] hover:text-white"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SKILLS ================= */}
      <div className="relative">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#2B2622]/30">
              Things I work with
            </p>

            <h3 className="mt-1 font-script text-3xl text-[#DD8C8C]">
              My Toolbox
            </h3>
          </div>

          <span className="mb-1 rotate-[8deg] text-xl text-[#E4B15A]">
            {"( ◡̀_◡́)ᕤ"}
          </span>
        </div>

        <div className="space-y-4">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div
              key={category}
              className="rounded-sm border border-[#2B2622]/8 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${
                    categoryIndex === 0
                      ? "bg-[#DD8C8C]/15"
                      : categoryIndex === 1
                        ? "bg-[#9CC0D8]/15"
                        : "bg-[#A8BFA0]/20"
                  }`}
                >
                  {categoryIndex === 0
                    ? "✎"
                    : categoryIndex === 1
                      ? "☘︎"
                      : "</>"}
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B2622]/45">
                  {category}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <span
                    key={item}
                    style={{
                      ["--tilt" as string]:
                        i % 2 === 0 ? "-2deg" : "2deg",
                    }}
                    className="stamp cursor-default rounded-full border border-[#2B2622]/8 bg-[#FAF7F2] px-4 py-2 text-xs font-medium text-[#2B2622]/75 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#2B2622] hover:shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}