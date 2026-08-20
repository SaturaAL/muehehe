import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import GalleryView from "@/components/GalleryView";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FAF7F2] text-[#2B2622]">
      <BackgroundBlobs />
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-8 md:px-12">
        {/* Header */}
        <section className="relative mb-12">
          {/* Decorative tape */}
          <div className="absolute -left-2 -top-5 h-5 w-24 rotate-[-4deg] bg-[#E4B15A]/50 shadow-sm sm:-left-4" />

          <div className="relative">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#2B2622]/35">
              Selected Works
            </p>

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h1 className="font-script text-5xl leading-none text-[#DD8C8C] drop-shadow-[2px_3px_0_rgba(43,38,34,0.08)] sm:text-6xl md:text-7xl">
                  Gallery
                </h1>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-[#2B2622]/55">
                  Karya dan Ilustrasi dari kepala
                  yg sedikit chaotic. (ᵕ-ᴗ-)
                </p>
              </div>

              {/* Counter */}
              <div className="flex w-fit items-center gap-3 rounded-full border border-[#2B2622]/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#DD8C8C]" />
                <span className="text-xs font-medium text-[#2B2622]/55">
                  {posts.length}{" "}
                  {posts.length === 1 ? "project" : "projects"}
                </span>
              </div>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#2B2622]/10" />
            <span className="rotate-12 text-sm text-[#E4B15A]">• ᴖ •</span>
            <div className="h-px w-12 bg-[#2B2622]/10 sm:w-20" />
          </div>
        </section>

        {/* Gallery */}
        <section className="relative">
          <GalleryView posts={posts} />
        </section>
      </main>

      <Footer />
    </div>
  );
}