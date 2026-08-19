"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  images: unknown;
  type: "ILLUSTRATION" | "PROGRAMMING";
  figmaUrl: string | null;
  projectUrl: string | null;
};

export default function GalleryView({ posts }: { posts: Post[] }) {
  const [activeTab, setActiveTab] = useState<"ILLUSTRATION" | "PROGRAMMING">("ILLUSTRATION");
  const [selected, setSelected] = useState<Post | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setSlideIndex(0), [selected]);

  const filtered = posts.filter((p) => p.type === activeTab);

  const extraImages = Array.isArray(selected?.images) ? (selected.images as string[]) : [];
  const slides = selected ? [selected.imageUrl, ...extraImages] : [];

  const lightbox = selected && (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2B2622]/85 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex max-h-[90vh] w-full flex-col rounded-sm bg-white ${
          selected.type === "PROGRAMMING" ? "max-w-2xl" : "max-w-4xl md:flex-row"
        }`}
      >
        <button
          onClick={() => setSelected(null)}
          aria-label="Tutup"
          className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#C1443A] text-white shadow-lg transition hover:scale-110 hover:bg-[#a83a31]"
        >
          <X className="h-4 w-4" strokeWidth={2.5} />
        </button>

        {selected.type === "PROGRAMMING" ? (
          <>
            <div className="relative flex max-h-[55vh] items-center justify-center overflow-hidden bg-[#2B2622]/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slides[slideIndex]} alt={selected.title} className="max-h-[55vh] w-auto object-contain" />

              {slides.length > 1 && (
                <>
                  <button
                    onClick={() => setSlideIndex((i) => (i === 0 ? slides.length - 1 : i - 1))}
                    className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setSlideIndex((i) => (i === slides.length - 1 ? 0 : i + 1))}
                    className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:scale-110"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {slides.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-1.5 rounded-full ${i === slideIndex ? "bg-[#2B2622]" : "bg-[#2B2622]/30"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="overflow-y-auto p-6">
              <h3 className="mb-3 font-script text-3xl leading-tight text-[#B5544A] drop-shadow-sm">
                {selected.title}
              </h3>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#2B2622]/60">{selected.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {selected.figmaUrl && (
                  <a
                    href={selected.figmaUrl}
                    target="_blank"
                    className="rounded-full bg-[#2B2622] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#2B2622]/80"
                  >
                    Lihat di Figma
                  </a>
                )}
                {selected.projectUrl && (
                  <a
                    href={selected.projectUrl}
                    target="_blank"
                    className="rounded-full border border-[#2B2622]/30 px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:bg-[#2B2622]/5"
                  >
                    Kunjungi Project
                  </a>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex max-h-[50vh] items-center justify-center overflow-hidden bg-[#2B2622]/5 md:max-h-[90vh] md:flex-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selected.imageUrl} alt={selected.title} className="max-h-[50vh] w-auto object-contain md:max-h-[90vh]" />
            </div>
            <div className="flex flex-col justify-between p-6 md:w-80">
              <div>
                <h3 className="mb-3 font-script text-3xl leading-tight text-[#B5544A] drop-shadow-sm md:text-4xl">
                  {selected.title}
                </h3>
                <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#2B2622]/60">{selected.description}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {selected.figmaUrl && (
                    <a
                      href={selected.figmaUrl}
                      target="_blank"
                      className="rounded-full bg-[#2B2622] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#2B2622]/80"
                    >
                      Lihat di Figma
                    </a>
                  )}
                  {selected.projectUrl && (
                    <a
                      href={selected.projectUrl}
                      target="_blank"
                      className="rounded-full border border-[#2B2622]/30 px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:bg-[#2B2622]/5"
                    >
                      Kunjungi Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-8 flex gap-2">
        {(["ILLUSTRATION", "PROGRAMMING"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-t-lg px-5 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-white shadow-md"
                : "bg-[#2B2622]/5 text-[#2B2622]/50 hover:-translate-y-0.5 hover:bg-[#2B2622]/10"
            }`}
          >
            {tab === "ILLUSTRATION" ? "Illustration" : "Programming"}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-5 sm:columns-3 md:columns-4">
        {filtered.map((post) => (
          <button
            key={post.id}
            onClick={() => setSelected(post)}
            className="group mb-5 block w-full break-inside-avoid rounded-sm bg-white p-2 pb-6 text-left shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.imageUrl}
                alt={post.title}
                loading="lazy"
                className="w-full scale-100 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#2B2622]/0 opacity-0 transition-all duration-300 group-hover:bg-[#2B2622]/40 group-hover:opacity-100">
                <span className="translate-y-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[#2B2622] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  See More
                </span>
              </div>
            </div>
            <p className="mt-2 truncate text-center text-xs text-[#2B2622]/60 transition-colors group-hover:text-[#2B2622]">
              {post.title}
            </p>
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="py-10 text-center text-sm text-[#2B2622]/40">Belum ada post di kategori ini.</p>
        )}
      </div>

      {mounted && selected && createPortal(lightbox, document.body)}
    </div>
  );
}