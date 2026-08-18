export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className="sticker-drift absolute left-[6%] top-[18%] h-14 w-24 rotate-[-8deg] rounded-sm bg-[#E8A0A0]/60"
        style={{ ["--r" as string]: "-8deg" }}
      />
      <div
        className="sticker-drift absolute right-[10%] top-[30%] h-10 w-10 rounded-full border-2 border-dashed border-[#9CC0D8]"
        style={{ ["--r" as string]: "0deg", animationDelay: "1s" }}
      />
      <div
        className="sticker-drift absolute left-[15%] bottom-[15%] h-16 w-16 rotate-[10deg] rounded-md bg-[#A8BFA0]/50"
        style={{ ["--r" as string]: "10deg", animationDelay: "2s" }}
      />
      <div
        className="sticker-drift absolute right-[18%] bottom-[10%] h-8 w-20 rotate-[-4deg] rounded-sm bg-[#E4B15A]/50"
        style={{ ["--r" as string]: "-4deg", animationDelay: "0.5s" }}
      />
    </div>
  );
}