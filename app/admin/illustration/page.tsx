import { prisma } from "@/lib/prisma";
import { logoutAction } from "../login/actions";
import { deleteIllustration } from "./actions";
import IllustrationForm from "@/components/IllustrationForm";
import DeleteButton from "@/components/DeleteButton";
import Link from "next/link";
import { Pencil } from "lucide-react";

export default async function AdminIllustrationPage() {
  const posts = await prisma.post.findMany({
    where: { type: "ILLUSTRATION" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-12 md:px-12">

      {/* Decorative elements */}
      <div className="pointer-events-none absolute left-[4%] top-[18%] h-20 w-28 rotate-[-8deg] rounded-sm bg-[#E8A0A0]/35 shadow-[6px_8px_14px_rgba(43,38,34,0.12)]" />

      <div className="pointer-events-none absolute right-[7%] top-[22%] h-14 w-14 rotate-[8deg] rounded-full border-[3px] border-dashed border-[#9CC0D8]/60" />

      <div className="pointer-events-none absolute bottom-[12%] right-[10%] h-12 w-24 rotate-[-5deg] rounded-sm bg-[#E4B15A]/35 shadow-[5px_7px_12px_rgba(43,38,34,0.12)]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-14">

          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">

            <Link
              href="/admin"
              className="font-script text-xl text-[#2B2622]/50 transition hover:text-[#DD8C8C]"
            >
              ← Control Room
            </Link>

            <div className="flex items-center gap-4">

              <Link
                href="/admin/programming"
                className="font-script text-xl text-[#2B2622]/50 transition hover:text-[#6D9DBB]"
              >
                Mengkoding →
              </Link>

              <form action={logoutAction}>
                <button
                  type="submit"
                  className="rounded-full border border-[#2B2622]/10 bg-white/50 px-4 py-2 text-xs text-[#2B2622]/50 shadow-sm transition hover:-translate-y-0.5 hover:border-[#DD8C8C]/30 hover:text-[#973939]"
                >
                  Udahan
                </button>
              </form>

            </div>
          </div>

          <div className="relative">

            <span className="mb-2 block font-script text-2xl text-[#DD8C8C]">
              ✦ creative archive ✦
            </span>

            <h1 className="font-script text-3xl leading-none text-[#2B2622] md:text-4xl">
              Habis Gambar
              <br />
              <span className="text-[#DD8C8C]">Apaa??</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-6 text-[#2B2622]/50">
              Kalo orang keren mah upload aja.
              Masa keren gini, up porto nya pakai LinkTree
              eh..
            </p>

          </div>

        </header>


        {/* Upload Area */}
        <section className="mb-16">

          <div className="mb-5 flex items-end justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2B2622]/35">
                New artwork
              </p>

              <h2 className="font-script text-4xl text-[#2B2622]">
                Tambah karya baru
              </h2>
            </div>

            <span className="hidden font-script text-lg text-[#2B2622]/30 md:block">
              jangan lupa judulnya ✎
            </span>

          </div>

          <div className="relative rotate-[-0.5deg] rounded-sm border border-[#2B2622]/10 bg-[#FFFDF8] p-5 shadow-[8px_10px_0_rgba(43,38,34,0.07),16px_18px_30px_rgba(43,38,34,0.10)] md:p-8">

            {/* tape */}
            <div className="pointer-events-none absolute left-1/2 top-[-10px] h-6 w-28 -translate-x-1/2 rotate-[2deg] bg-[#E8A0A0]/45" />

            <IllustrationForm />

          </div>

        </section>


        {/* Archive */}
        <section>

          <div className="mb-6 flex items-end justify-between border-b border-dashed border-[#2B2622]/15 pb-4">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2B2622]/35">
                Archive
              </p>

              <h2 className="font-script text-4xl text-[#2B2622]">
                Koleksi Ilustrasi
              </h2>
            </div>

            <span className="font-script text-xl text-[#DD8C8C]">
              {posts.length} karya
            </span>

          </div>


          {posts.length === 0 ? (

            <div className="flex min-h-48 items-center justify-center rounded-sm border border-dashed border-[#2B2622]/15 bg-white/30">
              <p className="font-script text-2xl text-[#2B2622]/30">
                Belum ada karya di sini...
              </p>
            </div>

          ) : (

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {posts.map((post, index) => (

                <article
                  key={post.id}
                  className="group relative rotate-[var(--tilt)] rounded-sm bg-white p-3 pb-5 shadow-[5px_7px_12px_rgba(43,38,34,0.13)] transition-all duration-300 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-[8px_14px_25px_rgba(43,38,34,0.18)]"
                  style={{
                    ["--tilt" as string]: `${index % 2 === 0 ? "-1.5deg" : "1.5deg"}`,
                  }}
                >

                  {/* Image */}
                  <div className="relative overflow-hidden bg-[#FAF6EF]">

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/5" />

                  </div>


                  {/* Info */}
                  <div className="px-2 pt-4">

                    <p className="truncate font-script text-2xl text-[#2B2622]">
                      {post.title}
                    </p>

                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#2B2622]/45">
                      {post.description}
                    </p>

                  </div>


                  {/* Actions */}
                  <div className="mt-4 flex justify-end gap-1 border-t border-dashed border-[#2B2622]/10 pt-3">

                    <Link
                      href={`/admin/illustration/${post.id}/edit`}
                      aria-label={`Edit ${post.title}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-[#2B2622]/35 transition hover:bg-[#9CC0D8]/20 hover:text-[#2B2622]"
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>

                    <DeleteButton
                      action={deleteIllustration.bind(null, post.id)}
                    />

                  </div>

                </article>

              ))}

            </div>

          )}

        </section>


        {/* Footer */}
        <div className="mt-20 flex justify-center">

          <span className="font-script text-sm text-[#2B2622]/25">
            end of illustration archive ✦
          </span>

        </div>

      </div>
    </main>
  );
}