export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className="sticker-drift absolute left-[6%] top-[18%] h-14 w-24 rotate-[-8deg] rounded-sm bg-[#E8A0A0]/60 shadow-[4px_6px_8px_rgba(43,38,34,0.14),8px_12px_18px_rgba(43,38,34,0.08)]"
        style={{ ["--r" as string]: "-8deg" }}
      />

      <div
        className="sticker-drift-dashed absolute right-[10%] top-[30%] h-10 w-10 rounded-full border-2 border-dashed border-[#9CC0D8] ]"
        style={{
          ["--r" as string]: "0deg",
          animationDelay: "1s",
        }}
      />

      <div
        className="sticker-drift absolute bottom-[15%] left-[15%] h-16 w-16 rotate-[10deg] rounded-md bg-[#A8BFA0]/50 shadow-[4px_6px_8px_rgba(43,38,34,0.14),8px_12px_18px_rgba(43,38,34,0.08)]"
        style={{
          ["--r" as string]: "10deg",
          animationDelay: "2s",
        }}
      />

      <div
        className="sticker-drift absolute bottom-[10%] right-[18%] h-8 w-20 rotate-[-4deg] rounded-sm bg-[#E4B15A]/50 shadow-[4px_6px_8px_rgba(43,38,34,0.14),8px_12px_18px_rgba(43,38,34,0.08)]"
        style={{
          ["--r" as string]: "-4deg",
          animationDelay: "0.5s",
        }}
      />
    </div>
  );
}