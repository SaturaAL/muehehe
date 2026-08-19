import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import GalleryView from "@/components/GalleryView";

export default async function GalleryPage() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundBlobs />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-12">
        <h1 className="mb-1 font-script text-4xl text-[#DD8C8C]" style={{ marginTop: "20px" }}>Gallery</h1>
        <p className="mb-10 text-sm text-[#2B2622]/60">Semua karya, disortir sesuai kategori.</p>
        <GalleryView posts={posts} />
      </main>
      <Footer />
    </div>
  );
}