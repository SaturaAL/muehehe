import { prisma } from "@/lib/prisma";
import { updateIllustration } from "../../actions";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default async function EditIllustrationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });

  if (!post) notFound();

  const updateWithId = updateIllustration.bind(null, post.id);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link
            href="/admin/illustration"
            className="group mb-3 inline-flex items-center gap-2 text-sm text-[#2B2622]/50 transition hover:text-[#B5544A]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Illustration
          </Link>

          <h1 className="font-script text-5xl text-[#2B2622] md:text-6xl">
            Edit Illustration
          </h1>

          <p className="mt-1 text-sm text-[#2B2622]/50">
            Rapihin atau update karya kamu
          </p>
        </div>
      </div>

      {/* Content */}
      <form
        action={updateWithId}
        className="grid gap-8 lg:grid-cols-2"
      >
        {/* Form */}
        <div className="rounded-2xl border border-[#2B2622]/10 bg-white/70 p-6 shadow-[8px_10px_30px_rgba(43,38,34,0.08)] backdrop-blur-sm">
          <h2 className="mb-6 font-script text-3xl text-[#B5544A]">
            Edit detail karya
          </h2>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Ganti gambar
              </label>

              <p className="mb-2 text-xs text-[#2B2622]/40">
                Kosongkan jika tidak ingin mengganti gambar.
              </p>

              <input
                type="file"
                name="image"
                accept="image/*"
                className="w-full cursor-pointer rounded-xl border border-dashed border-[#2B2622]/20 bg-[#FAF6EF]/70 px-4 py-3 text-sm transition hover:border-[#B5544A]/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Judul
              </label>

              <input
                name="title"
                defaultValue={post.title}
                required
                className="w-full rounded-xl border border-[#2B2622]/10 bg-white px-4 py-3 outline-none transition focus:border-[#DD8C8C] focus:ring-2 focus:ring-[#DD8C8C]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Deskripsi
              </label>

              <textarea
                name="description"
                defaultValue={post.description}
                required
                rows={6}
                className="w-full resize-none rounded-xl border border-[#2B2622]/10 bg-white px-4 py-3 outline-none transition focus:border-[#DD8C8C] focus:ring-2 focus:ring-[#DD8C8C]/20"
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#2B2622] px-5 py-3 font-medium text-white shadow-[4px_5px_0_#DD8C8C] transition-all duration-200 hover:-translate-y-1 hover:bg-[#B5544A] hover:shadow-[6px_7px_0_#E4B15A]"
            >
              <Save className="h-4 w-4 transition-transform group-hover:rotate-6" />
              Simpan Perubahan
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="flex min-h-[500px] items-center justify-center rounded-2xl border border-[#2B2622]/10 bg-[#FAF6EF]/70 p-8">
          <div className="w-full max-w-sm rotate-[-2deg] bg-white p-3 pb-8 shadow-[8px_12px_25px_rgba(43,38,34,0.18)] transition-transform duration-300 hover:rotate-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.imageUrl}
              alt={post.title}
              className="aspect-square w-full object-cover"
            />

            <p className="mt-4 truncate text-center font-script text-2xl text-[#B5544A]">
              {post.title}
            </p>

            <p className="mt-1 line-clamp-2 text-center text-xs text-[#2B2622]/50">
              {post.description}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}