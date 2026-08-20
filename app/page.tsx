import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import RevealOnScroll from "@/components/RevealOnScroll";
import QuickPreview from "@/components/QuickPreview";
import ProgrammingHome from "@/components/ProgrammingHome";
import About from "@/components/About";

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  const illustrations = posts.filter(
    (p) => p.type === "ILLUSTRATION"
  );

  const programming = posts.filter(
    (p) => p.type === "PROGRAMMING"
  );

  const latest = illustrations[0];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FAF7F2] text-[#2B2622]">
      <BackgroundBlobs />
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-8 md:px-12">

        {/* ================= HERO ================= */}
        <section className="grid items-center gap-12 pb-24 pt-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:pb-32">

          {/* Hero text */}
          <RevealOnScroll>
            <div className="relative">
              <div className="absolute -left-3 -top-5 h-5 w-24 rotate-[-5deg] bg-[#E4B15A]/50 shadow-sm" />

              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#2B2622]/35">
                So, this is it !
              </p>

              <h1 className="max-w-xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                Earth without Art,
                <br />
                <span className="font-script font-normal text-[#DD8C8C]">
                  just an "Eh".
                </span>
              </h1>

              <p className="mt-7 max-w-md text-sm leading-7 text-[#2B2622]/55 sm:text-base">
                Digital Illustrator, UI/UX Designer, and Frontend Developer,
                (Bisa Fullstack juga kok..), hobi exploring ide untuk bantu
                ngelarin masalah dengan sedikit Gaya~
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/gallery"
                  className="group flex items-center gap-3 rounded-full bg-[#2B2622] px-5 py-3 text-sm font-medium text-white shadow-[4px_5px_0_rgba(43,38,34,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_8px_0_rgba(43,38,34,0.15)]"
                >
                  Explore my work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <a
                  href="#about"
                  className="text-sm font-medium text-[#2B2622]/50 underline decoration-[#DD8C8C]/40 underline-offset-4 transition hover:text-[#2B2622]"
                >
                  Get to know me
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Latest work */}
          {latest ? (
            <RevealOnScroll>
              <Link
                href="/gallery"
                className="group relative mx-auto block w-full max-w-xl rotate-[2deg] transition-all duration-500 hover:rotate-0"
              >
                {/* Tape */}
                <div className="absolute -top-4 left-1/2 z-20 h-7 w-28 -translate-x-1/2 rotate-[-3deg] bg-[#E4B15A]/60 shadow-sm" />

                <div className="relative rounded-sm bg-white p-3 pb-8 shadow-[6px_8px_20px_rgba(43,38,34,0.12)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F1ECE5]">
                    <Image
                      src={latest.imageUrl}
                      alt={latest.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-90"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-[#2B2622]/0 transition-all duration-300 group-hover:bg-[#2B2622]/35">
                      <span className="translate-y-3 rounded-full bg-white px-5 py-2 text-xs font-medium opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        View artwork →
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-end justify-between gap-4 px-1">
                    <div>
                      <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#2B2622]/30">
                        Newest work
                      </p>

                      <p className="font-script text-2xl text-[#B5544A]">
                        {latest.title}
                      </p>
                    </div>

                    <span className="rotate-[-4deg] text-xl text-[#E4B15A]">
                      {"(˶>⩊<˶)"}
                    </span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-sm border border-dashed border-[#2B2622]/15">
              <p className="text-sm text-[#2B2622]/35">
                Belum ada karya terbaru.
              </p>
            </div>
          )}
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="scroll-mt-28 py-20 md:py-28">
          <RevealOnScroll>
            <div className="mb-10 flex items-end gap-4">
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#2B2622]/30">
                  A little introduction
                </p>

                <h2 className="font-script text-5xl text-[#DD8C8C]">
                  About Me
                </h2>
              </div>

              <span className="mb-2 text-xl text-[#E4B15A]">{"˙𐃷˙"} </span>
            </div>

            <div className="rounded-sm border border-[#2B2622]/8 bg-white/60 p-5 shadow-sm sm:p-8">
              <About />
            </div>
          </RevealOnScroll>
        </section>

        {/* ================= QUICK LOOK ================= */}
        <section className="py-20 md:py-28">
          <RevealOnScroll>
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#2B2622]/30">
                  Recent illustrations
                </p>

                <h2 className="font-script text-5xl text-[#DD8C8C]">
                  Quick Look
                </h2>
              </div>

              <Link
                href="/gallery"
                className="hidden text-sm font-medium text-[#2B2622]/45 underline decoration-[#DD8C8C]/40 underline-offset-4 transition hover:text-[#2B2622] sm:block"
              >
                Lihat semua →
              </Link>
            </div>

            <QuickPreview posts={illustrations} />

            <Link
              href="/gallery"
              className="mt-6 block text-center text-sm font-medium text-[#2B2622]/45 underline decoration-[#DD8C8C]/40 underline-offset-4 sm:hidden"
            >
              Lihat semua karya →
            </Link>
          </RevealOnScroll>
        </section>

        {/* ================= PROGRAMMING ================= */}
        <section className="py-20 md:py-28">
          <RevealOnScroll>
            <div className="mb-10">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#2B2622]/30">
                Things I build
              </p>

              <div className="flex items-end gap-4">
                <h2 className="font-script text-5xl text-[#DD8C8C]">
                  Works
                </h2>

                <span className="mb-2 rotate-[-8deg] text-xl text-[#9CC0D8]">
                  {"[o_<]"}
                </span>
              </div>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#2B2622]/50">
                Beberapa project dan eksperimen yang dibangun dari kode,
                desain, dan sedikit ricuh.
              </p>
            </div>

            <ProgrammingHome posts={programming} />
          </RevealOnScroll>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-20">
          <RevealOnScroll>
            <div className="relative overflow-hidden rounded-sm bg-[#2B2622] px-6 py-14 text-center text-white shadow-[7px_8px_0_rgba(43,38,34,0.12)] sm:px-12">
              <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#DD8C8C]/30 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#E4B15A]/20 blur-2xl" />

              <div className="relative">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                  Still curious?
                </p>

                <h2 className="font-script text-5xl text-[#F3C2C2] sm:text-6xl">
                  Let&apos;s make something.
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/55">
                  Kalau ada ide, project, atau sekadar mau ngobrol soal
                  desain dan development, feel free to reach out ٩(ˊᗜˋ )و.
                </p>

                <a
                  href="#contact"
                  className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2B2622] transition hover:-translate-y-1 hover:shadow-lg"
                >
                  Say hello →
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </section>
      </main>

      <Footer />
    </div>
  );
}