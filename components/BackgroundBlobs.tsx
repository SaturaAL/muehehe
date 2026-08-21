"use client";

import { useEffect, useState } from "react";
import { Compass } from "lucide-react";

type DeviceOrientationEventWithPermission = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<"granted" | "denied">;
};

function useGyroTilt() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [needsPermission, setNeedsPermission] = useState(false);

  function handleOrientation(e: DeviceOrientationEvent) {
    const gamma = e.gamma ?? 0; // kiri-kanan, -90..90
    const beta = e.beta ?? 0; // depan-belakang, -180..180
    const x = Math.max(-1, Math.min(1, gamma / 30));
    const y = Math.max(-1, Math.min(1, (beta - 45) / 30));
    setTilt({ x, y });
  }

  useEffect(() => {
    const DOE = window.DeviceOrientationEvent as unknown as DeviceOrientationEventWithPermission;

    if (typeof DOE?.requestPermission === "function") {
      setNeedsPermission(true);
      return;
    }

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  function requestPermission() {
    const DOE = window.DeviceOrientationEvent as unknown as DeviceOrientationEventWithPermission;
    DOE.requestPermission?.().then((res) => {
      if (res === "granted") {
        setNeedsPermission(false);
        window.addEventListener("deviceorientation", handleOrientation);
      }
    });
  }

  return { tilt, needsPermission, requestPermission };
}

function offset(tilt: { x: number; y: number }, depth: number) {
  return `translate3d(${tilt.x * depth}px, ${tilt.y * depth}px, 0)`;
}

export default function BackgroundBlobs() {
  const { tilt, needsPermission, requestPermission } = useGyroTilt();

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* TOP LEFT — PINK PAPER + TAPE (bergerak bareng, depth 8) */}
        <div
          className="absolute left-[3%] top-[18%] transition-transform duration-150 ease-out"
          style={{ transform: offset(tilt, 8) }}
        >
          <div
            className="sticker-drift h-14 w-24 rotate-[-8deg] rounded-sm bg-[#E8A0A0]/55 shadow-[4px_6px_8px_rgba(43,38,34,0.12),8px_12px_18px_rgba(43,38,34,0.06)]"
            style={{ ["--r" as string]: "-8deg" }}
          />
          <div className="absolute -top-2 left-1 h-4 w-12 rotate-[-8deg] bg-[#E4B15A]/35" />
        </div>

        {/* TOP RIGHT — BLUE DOODLE (depth 10) */}
        <div
          className="absolute right-[7%] top-[27%] transition-transform duration-150 ease-out"
          style={{ transform: offset(tilt, 10) }}
        >
          <div
            className="sticker-drift-dashed h-12 w-12 rounded-full border-2 border-dashed border-[#9CC0D8]/80"
            style={{ ["--r" as string]: "0deg", animationDelay: "1s" }}
          />
          <div className="absolute -right-1 -top-6 rotate-12 text-2xl text-[#9CC0D8]/70">☾</div>
        </div>

        {/* MIDDLE LEFT — STAR (depth 12, paling deket) */}
        <div
          className="absolute left-[9%] top-[47%] transition-transform duration-150 ease-out"
          style={{ transform: offset(tilt, 12) }}
        >
          <div
            className="sticker-drift text-4xl text-[#E4B15A]/50"
            style={{ ["--r" as string]: "-5deg", animationDelay: "1.5s" }}
          >
            𝄞
          </div>
        </div>

        {/* BOTTOM LEFT — GREEN NOTE (depth 6) */}
        <div
          className="absolute bottom-[14%] left-[10%] transition-transform duration-150 ease-out"
          style={{ transform: offset(tilt, 6) }}
        >
          <div
            className="sticker-drift h-16 w-16 rotate-[10deg] rounded-md bg-[#A8BFA0]/45 shadow-[4px_6px_8px_rgba(43,38,34,0.12),8px_12px_18px_rgba(43,38,34,0.06)]"
            style={{ ["--r" as string]: "10deg", animationDelay: "2s" }}
          >
            <div className="flex h-full items-center justify-center text-xl text-[#2B2622]/30">✧</div>
          </div>
        </div>

        {/* BOTTOM RIGHT — YELLOW TAPE (depth 6) */}
        <div
          className="absolute bottom-[10%] right-[15%] transition-transform duration-150 ease-out"
          style={{ transform: offset(tilt, 6) }}
        >
          <div
            className="sticker-drift h-8 w-20 rotate-[-4deg] rounded-sm bg-[#E4B15A]/45 shadow-[4px_6px_8px_rgba(43,38,34,0.12),8px_12px_18px_rgba(43,38,34,0.06)]"
            style={{ ["--r" as string]: "-4deg", animationDelay: "0.5s" }}
          />
        </div>

        {/* SMALL DOODLES — paling kecil, depth paling tinggi (14) biar kesan paling deket */}
        <div
          className="absolute left-[25%] top-[13%] rotate-[-12deg] text-xl text-[#DD8C8C]/50 transition-transform duration-150 ease-out"
          style={{ transform: offset(tilt, 14) }}
        >
          ಄
        </div>
        <div
          className="absolute right-[28%] top-[18%] rotate-[8deg] text-lg text-[#E4B15A]/50 transition-transform duration-150 ease-out"
          style={{ transform: offset(tilt, 14) }}
        >
          ⋆
        </div>
        <div
          className="absolute bottom-[27%] right-[7%] rotate-[15deg] text-2xl text-[#9CC0D8]/50 transition-transform duration-150 ease-out"
          style={{ transform: offset(tilt, 14) }}
        >
          •ᴗ•
        </div>

        {/* SOFT ORGANIC BLOBS — background jauh, depth paling rendah (2) */}
        <div
          className="absolute -left-32 top-[38%] h-72 w-72 rounded-full bg-[#E8A0A0]/10 blur-3xl transition-transform duration-150 ease-out"
          style={{ transform: offset(tilt, 2) }}
        />
        <div
          className="absolute -right-32 top-[55%] h-80 w-80 rounded-full bg-[#9CC0D8]/10 blur-3xl transition-transform duration-150 ease-out"
          style={{ transform: offset(tilt, 2) }}
        />
        <div
          className="absolute bottom-[-120px] left-[38%] h-72 w-72 rounded-full bg-[#E4B15A]/10 blur-3xl transition-transform duration-150 ease-out"
          style={{ transform: offset(tilt, 2) }}
        />
      </div>

      {needsPermission && (
        <button
          onClick={requestPermission}
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#2B2622] shadow-lg md:hidden"
          aria-label="Aktifkan efek gyroscope"
        >
          <Compass className="h-5 w-5" />
        </button>
      )}
    </>
  );
}