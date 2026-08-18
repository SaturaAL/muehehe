"use client";

import { useState } from "react";

type Post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  type: "ILLUSTRATION" | "PROGRAMMING";
  figmaUrl: string | null;
  projectUrl: string | null;
};

export default function GalleryView({ posts }: { posts: Post[] }) {
  const [activeTab, setActiveTab] = useState<"ILLUSTRATION" | "PROGRAMMING">("ILLUSTRATION");
  const [selected, setSelected] = useState<Post | null>(null);

  const filtered = posts.filter((p) => p.type === activeTab);

  return (
    <div>
      <div className="mb-8 flex gap-2">
        {(["ILLUSTRATION", "PROGRAMMING"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-t-lg px-5 py-2 text-sm font-medium transition ${
              activeTab === tab ? "bg-white shadow-md" : "bg-[#2B2622]/5 text-[#2B2622]/50 hover:bg-[#2B2622]/10"
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
            className="group mb-5 block w-full break-inside-avoid rounded-sm bg-white p-2 pb-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.imageUrl} alt={post.title} loading="lazy" className="w-full transition group-hover:brightness-90" />
            </div>
            <p className="mt-2 truncate text-center text-xs text-[#2B2622]/60">{post.title}</p>
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="py-10 text-center text-sm text-[#2B2622]/40">Belum ada post di kategori ini.</p>
        )}
      </div>

      {selected && (
        <div onClick={() => setSelected(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B2622]/80 p-4">
          <div onClick={(e) => e.stopPropagation()} className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-sm bg-white md:flex-row">
            <div className="flex max-h-[50vh] items-center justify-center bg-[#2B2622]/5 md:max-h-[90vh] md:flex-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selected.imageUrl} alt={selected.title} className="max-h-[50vh] w-auto object-contain md:max-h-[90vh]" />
            </div>
            <div className="flex flex-col justify-between p-6 md:w-72">
              <div>
                <h3 className="mb-2 font-script text-2xl">{selected.title}</h3>
                <p className="mb-5 text-sm text-[#2B2622]/60">{selected.description}</p>
                <div className="flex flex-wrap gap-3">
                  {selected.figmaUrl && (
                    <a href={selected.figmaUrl} target="_blank" className="rounded-full bg-[#2B2622] px-4 py-2 text-sm font-medium text-white hover:bg-[#2B2622]/80">
                      Lihat di Figma
                    </a>
                  )}
                  {selected.projectUrl && (
                    <a href={selected.projectUrl} target="_blank" className="rounded-full border border-[#2B2622]/30 px-4 py-2 text-sm hover:bg-[#2B2622]/5">
                      Kunjungi Project
                    </a>
                  )}
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="mt-5 self-start text-sm text-[#2B2622]/40 hover:text-[#2B2622]/70">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}