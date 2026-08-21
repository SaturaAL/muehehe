"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight } from "lucide-react";

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

function FigmaIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 2h4v6H8a3 3 0 1 1 0-6Z" fill="currentColor" />
      <path d="M12 2h4a3 3 0 1 1 1 3 3 3 0 0 1-1 3h-4V2Z" fill="currentColor" />
      <path d="M8 8h4v6H8a3 3 0 1 1 0-6Z" fill="currentColor" />
      <path d="M12 8h4a3 3 0 1 1 0 0 6 0v-6Z" fill="currentColor" />
      <path d="M8 14h4v6a3 3 0 1 1-3-3 3 3 0 0 1-1-3Z" fill="currentColor" />
    </svg>
  );
}

export default function GalleryView({ posts }: { posts: Post[] }) {
  const [activeTab, setActiveTab] = useState<"ILLUSTRATION" | "PROGRAMMING">("ILLUSTRATION");
  const [selected, setSelected] = useState<Post | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setSlideIndex(0);
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selected]);

  const filtered = posts.filter((post) => post.type === activeTab);

  const extraImages = Array.isArray(selected?.images) ? (selected.images as string[]) : [];
  const slides = selected ? [selected.imageUrl, ...extraImages] : [];

  const nextSlide = () => {
    setSlideIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

  const previousSlide = () => {
    setSlideIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft" && slides.length > 1) previousSlide();
      if (e.key === "ArrowRight" && slides.length > 1) nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, slides.length]);

  const lightbox = selected && (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2B2622]/85 p-3 backdrop-blur-sm sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-xl bg-[#FAF6EF] shadow-2xl ${
          selected.type === "PROGRAMMING" ? "max-w-3xl" : "max-w-5xl md:flex-row"
        }`}
      >
        <button
          onClick={() => setSelected(null)}
          aria-label="Tutup"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#C1443A] text-white shadow-lg transition hover:scale-110 hover:bg-[#a83a31]"
        >
          <X className="h-4 w-4" strokeWidth={2.5} />
        </button>

        {selected.type === "PROGRAMMING" ? (
          <>
            <div className="relative flex max-h-[58vh] min-h-[220px] items-center justify-center overflow-hidden bg-[#2B2622]/5 sm:min-h-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slides[slideIndex]}
                alt={selected.title}
                className="max-h-[58vh] w-auto max-w-full object-contain"
              />

              {slides.length > 1 && (
                <>
                  <button
                    onClick={previousSlide}
                    aria-label="Gambar sebelumnya"
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#2B2622] shadow-md transition hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Gambar berikutnya"
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#2B2622] shadow-md transition hover:scale-110"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/80 px-3 py-1.5 backdrop-blur-sm">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlideIndex(i)}
                        aria-label={`Gambar ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                          i === slideIndex ? "w-5 bg-[#2B2622]" : "w-1.5 bg-[#2B2622]/30"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="overflow-y-auto p-5 sm:p-7">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-[#9CC0D8]/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#2B2622]/60">
                  Programming
                </span>
                {slides.length > 1 && (
                  <span className="text-[10px] text-[#2B2622]/40">
                    {slideIndex + 1} / {slides.length}
                  </span>
                )}
              </div>

              <h3 className="mb-3 font-script text-3xl leading-tight text-[#B5544A] drop-shadow-sm sm:text-4xl">
                {selected.title}
              </h3>

              <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#2B2622]/60">
                {selected.description}
              </p>

              {(selected.figmaUrl || selected.projectUrl) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {selected.figmaUrl && (
                    <a
                      href={selected.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#2B2622] px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#2B2622]/80"
                    >
                      <FigmaIcon />
                      Lihat di Figma
                    </a>
                  )}
                  {selected.projectUrl && (
                    <a
                      href={selected.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#2B2622]/20 bg-white px-4 py-2.5 text-sm text-[#2B2622] transition hover:-translate-y-0.5 hover:bg-[#2B2622]/5"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Kunjungi Project
                    </a>
                  )}
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="flex max-h-[52vh] min-h-[220px] items-center justify-center overflow-hidden bg-[#2B2622]/5 sm:min-h-[300px] md:max-h-[92vh] md:min-h-0 md:flex-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.imageUrl}
                alt={selected.title}
                className="max-h-[52vh] w-auto max-w-full object-contain md:max-h-[92vh]"
              />
            </div>

            <div className="flex max-h-[40vh] flex-col justify-between overflow-y-auto bg-[#FAF6EF] p-5 sm:p-7 md:max-h-[92vh] md:w-80">
              <div>
                <span className="mb-4 inline-block rounded-full bg-[#E8A0A0]/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#2B2622]/60">
                  Illustration
                </span>

                <h3 className="mb-3 font-script text-3xl leading-tight text-[#B5544A] drop-shadow-sm sm:text-4xl">
                  {selected.title}
                </h3>

                <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#2B2622]/60">
                  {selected.description}
                </p>

                {(selected.figmaUrl || selected.projectUrl) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {selected.figmaUrl && (
                      <a
                        href={selected.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#2B2622] px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#2B2622]/80"
                      >
                        <FigmaIcon />
                        Lihat di Figma
                      </a>
                    )}
                    {selected.projectUrl && (
                      <a
                        href={selected.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#2B2622]/20 bg-white px-4 py-2.5 text-sm text-[#2B2622] transition hover:-translate-y-0.5 hover:bg-[#2B2622]/5"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Kunjungi Project
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-6 border-t border-[#2B2622]/10 pt-4 text-[10px] uppercase tracking-[0.2em] text-[#2B2622]/25">
                all rights reserved © 2026 Satura AL
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-8 flex items-center gap-2 border-b border-[#2B2622]/10">
        {(["ILLUSTRATION", "PROGRAMMING"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-5 py-3 text-sm font-medium transition-all duration-300 ${
              activeTab === tab ? "text-[#2B2622]" : "text-[#2B2622]/40 hover:text-[#2B2622]/70"
            }`}
          >
            {tab === "ILLUSTRATION" ? "Arts" : "Works"}
            {activeTab === tab && (
              <span className="absolute bottom-[-1px] left-0 h-0.5 w-full rounded-full bg-[#DD8C8C]" />
            )}
          </button>
        ))}
      </div>

      <div
        className={
          activeTab === "PROGRAMMING" ? "columns-1 gap-5 sm:columns-2" : "columns-2 gap-4 sm:columns-3 md:columns-4"
        }
      >
        {filtered.map((post) =>
          post.type === "PROGRAMMING" ? (
            <button
              key={post.id}
              onClick={() => setSelected(post)}
              className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-lg border border-[#2B2622]/10 bg-white text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden bg-[#2B2622]/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  loading="lazy"
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#2B2622]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Web Project
                </span>
                <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-[#2B2622]/50 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#2B2622] shadow-md">
                    Lihat Detail
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 border-t border-[#2B2622]/10 px-4 py-3">
                <p className="truncate text-sm font-medium text-[#2B2622]">{post.title}</p>
                <div className="flex shrink-0 gap-1.5">
                  {post.figmaUrl && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9CC0D8]/25 text-[#2B2622]/60">
                      <FigmaIcon className="h-3.5 w-3.5" />
                    </span>
                  )}
                  {post.projectUrl && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A8BFA0]/25 text-[#2B2622]/60">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              </div>
            </button>
          ) : (
            <button
              key={post.id}
              onClick={() => setSelected(post)}
              className="group mb-4 block w-full break-inside-avoid rounded-sm bg-white p-2 pb-5 text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:mb-5"
            >
              <div className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  loading="lazy"
                  className="w-full scale-100 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#2B2622]/0 opacity-0 transition-all duration-300 group-hover:bg-[#2B2622]/35 group-hover:opacity-100">
                  <span className="translate-y-2 rounded-full bg-white/95 px-4 py-1.5 text-xs font-medium text-[#2B2622] opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    See More
                  </span>
                </div>
              </div>
              <p className="mt-2 truncate px-1 text-center text-xs text-[#2B2622]/60 transition-colors group-hover:text-[#2B2622]">
                {post.title}
              </p>
            </button>
          )
        )}

        {filtered.length === 0 && (
          <div className="col-span-full flex min-h-40 items-center justify-center">
            <div className="text-center">
              <p className="font-script text-2xl text-[#DD8C8C]/70">Belum ada karya...</p>
              <p className="mt-1 text-xs text-[#2B2622]/30">Coba cek kategori lainnya.</p>
            </div>
          </div>
        )}
      </div>

      {mounted && selected && createPortal(lightbox, document.body)}
    </div>
  );
}