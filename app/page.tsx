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

export default async function Home() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
  const illustrations = posts.filter((p) => p.type === "ILLUSTRATION");
  const programming = posts.filter((p) => p.type === "PROGRAMMING");
  const latest = illustrations[0];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundBlobs />
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-10 md:px-12">
        <section className="grid items-center gap-12 py-20 md:grid-cols-2">
          <RevealOnScroll>
            <p className="mb-2 font-script text-2xl text-[#DD8C8C]">Newest Update</p>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              {latest ? latest.title : "Welcome to my portfolio"}
            </h1>
            <p className="mb-6 max-w-md text-[#2B2622]/60">
              {latest ? latest.description : "Digital Illustrator · UI/UX Designer · Frontend Developer"}
            </p>
          </RevealOnScroll>

          {latest && (
            <RevealOnScroll delay={0.1}>
              <Link
                href="/gallery"
                className="group relative block rotate-[-3deg] rounded-sm bg-white p-3 pb-8 shadow-xl transition hover:rotate-0"
              >
                <div className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-[-2deg] bg-[#E4B15A]/70" />
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={latest.imageUrl}
                    alt={latest.title}
                    fill
                    className="object-cover transition group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#2B2622]/0 opacity-0 transition-all duration-300 group-hover:bg-[#2B2622]/40 group-hover:opacity-100">
                    <span className="translate-y-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[#2B2622] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      See More
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-center font-script text-xl">{latest.title}</p>
              </Link>
            </RevealOnScroll>
          )}
        </section>

        <section className="py-16">
          <RevealOnScroll>
            <h2 className="mb-8 font-script text-3xl text-[#DD8C8C]">About Me</h2>
            <About />
          </RevealOnScroll>
        </section>

        <section className="py-10">
          <RevealOnScroll>
            <div className="mb-6 flex items-end justify-between">
              <h2 className="font-script text-3xl text-[#DD8C8C]">Quick Look</h2>
              <Link href="/gallery" className="text-sm text-[#2B2622]/50 hover:text-[#2B2622]">
                Lihat semua →
              </Link>
            </div>
            <QuickPreview posts={illustrations} />
          </RevealOnScroll>
        </section>

        <section className="py-16">
          <RevealOnScroll>
            <h2 className="mb-1 font-script text-3xl text-[#DD8C8C]">Programming Projects</h2>
            <p className="mb-8 text-sm text-[#2B2622]/60">Beberapa hal yang aku bangun.</p>
            <ProgrammingHome posts={programming} />
          </RevealOnScroll>
        </section>
      </main>

      <Footer />
    </div>
  );
}