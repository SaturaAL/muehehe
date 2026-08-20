"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink, Figma } from "lucide-react";

type Post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  type: "ILLUSTRATION" | "PROGRAMMING";
  figmaUrl: string | null;
  projectUrl: string | null;
};

const ROTATIONS = ["-2deg", "1.5deg", "-1deg", "2deg", "-1.5deg", "1deg"];

export default function FeedView({ posts }: { posts: Post[] }) {
  const [activeTab, setActiveTab] =
    useState<"ILLUSTRATION" | "PROGRAMMING">("ILLUSTRATION");

  const [selected, setSelected] = useState<Post | null>(null);

  const filtered = posts.filter((p) => p.type === activeTab);

  return (
    <div>
      {/* CATEGORY TABS */}
      <div className="mb-10 flex items-end justify-center gap-2 sm:justify-start">
        {(["ILLUSTRATION", "PROGRAMMING"] as const).map((tab) => {
          const active = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative rounded-t-xl px-5 py-3 text-xs font-medium transition-all duration-300 sm:px-7 sm:text-sm ${
                active
                  ? "z-10 -translate-y-1 bg-white text-[#2B2622] shadow-[3px_-2px_0_rgba(43,38,34,0.08),8px_-5px_18px_rgba(43,38,34,0.08)]"
                  : "bg-[#2B2622]/5 text-[#2B2622]/45 hover:-translate-y-0.5 hover:bg-[#2B2622]/10"
              }`}
            >
              {tab === "ILLUSTRATION" ? "✦ Illustration" : "⌘ Programming"}

              {active && (
                <span className="absolute -bottom-1 left-1/2 h-2 w-8 -translate-x-1/2 rotate-[-2deg] bg-[#E4B15A]/70" />
              )}
            </button>
          );
        })}
      </div>

      {/* GALLERY */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-7 md:grid-cols-4 md:gap-8">
        {filtered.map((post, i) => (
          <button
            key={post.id}
            onClick={() => setSelected(post)}
            className="group relative text-left transition-all duration-300 hover:z-20 hover:-translate-y-2 hover:rotate-0"
            style={
              {
                "--rotation": ROTATIONS[i % ROTATIONS.length],
              } as React.CSSProperties
            }
          >
            {/* CARD */}
            <div
              className="relative rotate-[var(--rotation)] bg-white p-2 pb-5 shadow-[3px_4px_0_rgba(43,38,34,0.08),8px_12px_24px_rgba(43,38,34,0.10)] transition-all duration-300 group-hover:shadow-[5px_7px_0_rgba(43,38,34,0.10),12px_18px_30px_rgba(43,38,34,0.16)] sm:p-3 sm:pb-6"
            >
              {/* TAPE */}
              <span className="absolute -top-2 left-1/2 z-10 h-4 w-12 -translate-x-1/2 rotate-[-2deg] bg-[#E4B15A]/60 shadow-sm sm:h-5 sm:w-16" />

              {/* IMAGE */}
              <div className="relative aspect-square overflow-hidden bg-[#FAF6EF]">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#2B2622]/0 transition-all duration-300 group-hover:bg-[#2B2622]/35">
                  <span className="translate-y-3 rounded-full bg-white/95 px-4 py-2 text-[10px] font-semibold text-[#2B2622] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-xs">
                    Open ✦
                  </span>
                </div>
              </div>

              {/* TITLE */}
              <div className="mt-3 px-1 text-center">
                <p className="truncate font-script text-lg text-[#2B2622] sm:text-xl">
                  {post.title}
                </p>

                <span className="mt-0.5 block text-[8px] uppercase tracking-[0.2em] text-[#2B2622]/25 sm:text-[9px]">
                  {post.type === "ILLUSTRATION"
                    ? "illustration"
                    : "project"}
                </span>
              </div>
            </div>
          </button>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full py-16 text-center">
            <p className="font-script text-3xl text-[#DD8C8C]">
              Nothing here yet...
            </p>
            <p className="mt-2 text-xs text-[#2B2622]/35">
              Belum ada post di kategori ini.
            </p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B2622]/60 p-3 backdrop-blur-sm sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto bg-white p-2 pb-5 shadow-[8px_10px_0_rgba(43,38,34,0.12),15px_20px_45px_rgba(43,38,34,0.25)] sm:rotate-[-1deg] sm:p-3 sm:pb-7"
          >
            {/* TAPE */}
            <div className="absolute -top-2 left-1/2 z-20 h-5 w-20 -translate-x-1/2 rotate-[-2deg] bg-[#E8A0A0]/70" />

            {/* CLOSE */}
            <button
              onClick={() => setSelected(null)}
              aria-label="Tutup"
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#2B2622]/60 shadow-md transition hover:rotate-90 hover:text-[#2B2622]"
            >
              <X className="h-4 w-4" />
            </button>

            {/* IMAGE */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#FAF6EF]">
              <Image
                src={selected.imageUrl}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="px-3 pt-5 sm:px-5 sm:pt-6">
              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#DD8C8C]">
                {selected.type === "ILLUSTRATION"
                  ? "Illustration"
                  : "Programming Project"}
              </span>

              <h3 className="mt-1 font-script text-3xl text-[#2B2622] sm:text-4xl">
                {selected.title}
              </h3>

              <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-[#2B2622]/60">
                {selected.description}
              </p>

              {/* LINKS */}
              {(selected.figmaUrl || selected.projectUrl) && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {selected.figmaUrl && (
                    <a
                      href={selected.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-full bg-[#2B2622] px-4 py-2.5 text-xs font-medium text-white transition hover:-translate-y-1 hover:bg-[#DD8C8C]"
                    >
                      <Figma className="h-3.5 w-3.5" />
                      Lihat di Figma
                      <ExternalLink className="h-3 w-3 opacity-50 transition group-hover:translate-x-0.5" />
                    </a>
                  )}

                  {selected.projectUrl && (
                    <a
                      href={selected.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-full border border-[#2B2622]/15 px-4 py-2.5 text-xs font-medium text-[#2B2622] transition hover:-translate-y-1 hover:bg-[#FAF6EF]"
                    >
                      Kunjungi Project
                      <ExternalLink className="h-3 w-3 opacity-50 transition group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}