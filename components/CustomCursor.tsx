"use client";

import { useEffect, useState } from "react";
import { useCursor } from "./CursorContext";

export default function CustomCursor() {
  const { variant, active } = useCursor();
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed z-40 hidden rounded-full bg-[#DD8C8C] md:block ${
        active ? "opacity-90" : "opacity-0"
      }`}
      style={{
        left: pos.x,
        top: pos.y,
        width: variant === "nav" ? 64 : 16,
        height: variant === "nav" ? 64 : 16,
        transform: "translate3d(-50%, -50%, 0)",
        transition: "width 0.25s ease-out, height 0.25s ease-out, opacity 0.3s ease-out, left 0.12s ease-out, top 0.12s ease-out",
      }}
    />
  );
}