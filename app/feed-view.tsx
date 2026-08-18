"use client";

import { useState } from "react";
import Image from "next/image";

type Post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  type: "ILLUSTRATION" | "PROGRAMMING";
  figmaUrl: string | null;
  projectUrl: string | null;
};

const ROTATIONS = ["-3deg", "2deg", "-1deg", "3deg", "-2deg", "1deg"];

export default function FeedView({ posts }: { posts: Post[] }) {
  const [activeTab, setActiveTab] = useState<"ILLUSTRATION" | "PROGRAMMING">("ILLUSTRATION");
  const [selected, setSelected] = useState<Post | null>(null);

  const filtered = posts.filter((p) => p.type === activeTab);

  return (
    <div>
      <div className="mb-10 flex gap-2">
        {(["ILLUSTRATION", "PROGRAMMING"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-t-lg px-5 py-2 text-sm font-medium transition ${
              activeTab === tab
                ? "bg-white shadow-md"
                : "bg-[#2B2622]/5 text-[#2B2622]/50 hover:bg-[#2B2622]/10"
            }`}
          >
            {tab === "ILLUSTRATION" ? "Illustration" : "Programming"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {filtered.map((post, i) => (
          <button
            key={post.id}
            onClick={() => setSelected(post)}
            className="group relative rounded-sm bg-white p-2 pb-6 shadow-md transition hover:z-10 hover:-translate-y-1 hover:rotate-0 hover:shadow-xl"
            style={{ rotate: ROTATIONS[i % ROTATIONS.length] }}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover transition group-hover:brightness-90"
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium text-[#2B2622]">
                  See More
                </span>
              </span>
            </div>
            <p className="mt-2 truncate text-center text-xs text-[#2B2622]/60">{post.title}</p>
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-[#2B2622]/40">Belum ada post di kategori ini.</p>
        )}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B2622]/60 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-sm bg-white p-3 pb-6"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image src={selected.imageUrl} alt={selected.title} fill className="object-cover" />
            </div>
            <div className="px-3 pt-4">
              <h3 className="mb-2 font-script text-2xl">{selected.title}</h3>
              <p className="mb-5 text-sm text-[#2B2622]/60">{selected.description}</p>
              <div className="flex gap-3">
                {selected.figmaUrl && (
                  <a
                    href={selected.figmaUrl}
                    target="_blank"
                    className="rounded-full bg-[#2B2622] px-4 py-2 text-sm font-medium text-white hover:bg-[#2B2622]/80"
                  >
                    Lihat di Figma
                  </a>
                )}
                {selected.projectUrl && (
                  <a
                    href={selected.projectUrl}
                    target="_blank"
                    className="rounded-full border border-[#2B2622]/30 px-4 py-2 text-sm hover:bg-[#2B2622]/5"
                  >
                    Kunjungi Project
                  </a>
                )}
              </div>
              <button
                onClick={() => setSelected(null)}
                className="mt-5 text-sm text-[#2B2622]/40 hover:text-[#2B2622]/70"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}