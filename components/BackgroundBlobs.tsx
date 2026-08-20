export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* =========================
          TOP LEFT — PINK PAPER
         ========================= */}
      <div
        className="sticker-drift absolute left-[3%] top-[18%] h-14 w-24 rotate-[-8deg] rounded-sm bg-[#E8A0A0]/55 shadow-[4px_6px_8px_rgba(43,38,34,0.12),8px_12px_18px_rgba(43,38,34,0.06)]"
        style={{
          ["--r" as string]: "-8deg",
        }}
      />

      {/* Tape on pink paper */}
      <div
        className="absolute left-[4%] top-[16%] h-4 w-12 rotate-[-8deg] bg-[#E4B15A]/35"
      />

      {/* =========================
          TOP RIGHT — BLUE DOODLE
         ========================= */}
      <div
        className="sticker-drift-dashed absolute right-[7%] top-[27%] h-12 w-12 rounded-full border-2 border-dashed border-[#9CC0D8]/80"
        style={{
          ["--r" as string]: "0deg",
          animationDelay: "1s",
        }}
      />

      <div
        className="absolute right-[8.2%] top-[25%] rotate-12 text-2xl text-[#9CC0D8]/70"
      >
        ✦
      </div>

      {/* =========================
          MIDDLE LEFT — STAR
         ========================= */}
      <div
        className="sticker-drift absolute left-[9%] top-[47%] text-4xl text-[#E4B15A]/50"
        style={{
          ["--r" as string]: "-5deg",
          animationDelay: "1.5s",
        }}
      >
        ✦
      </div>

      {/* =========================
          BOTTOM LEFT — GREEN NOTE
         ========================= */}
      <div
        className="sticker-drift absolute bottom-[14%] left-[10%] h-16 w-16 rotate-[10deg] rounded-md bg-[#A8BFA0]/45 shadow-[4px_6px_8px_rgba(43,38,34,0.12),8px_12px_18px_rgba(43,38,34,0.06)]"
        style={{
          ["--r" as string]: "10deg",
          animationDelay: "2s",
        }}
      >
        <div className="flex h-full items-center justify-center text-xl text-[#2B2622]/30">
          ✧
        </div>
      </div>

      {/* =========================
          BOTTOM RIGHT — YELLOW TAPE
         ========================= */}
      <div
        className="sticker-drift absolute bottom-[10%] right-[15%] h-8 w-20 rotate-[-4deg] rounded-sm bg-[#E4B15A]/45 shadow-[4px_6px_8px_rgba(43,38,34,0.12),8px_12px_18px_rgba(43,38,34,0.06)]"
        style={{
          ["--r" as string]: "-4deg",
          animationDelay: "0.5s",
        }}
      />

      {/* =========================
          SMALL DOODLES
         ========================= */}
      <div className="absolute left-[25%] top-[13%] rotate-[-12deg] text-xl text-[#DD8C8C]/50">
        ✧
      </div>

      <div className="absolute right-[28%] top-[18%] rotate-[8deg] text-lg text-[#E4B15A]/50">
        +
      </div>

      <div className="absolute bottom-[27%] right-[7%] rotate-[15deg] text-2xl text-[#9CC0D8]/50">
        ✦
      </div>

      {/* =========================
          SOFT ORGANIC BLOBS
         ========================= */}
      <div className="absolute -left-32 top-[38%] h-72 w-72 rounded-full bg-[#E8A0A0]/10 blur-3xl" />

      <div className="absolute -right-32 top-[55%] h-80 w-80 rounded-full bg-[#9CC0D8]/10 blur-3xl" />

      <div className="absolute bottom-[-120px] left-[38%] h-72 w-72 rounded-full bg-[#E4B15A]/10 blur-3xl" />
    </div>
  );
}