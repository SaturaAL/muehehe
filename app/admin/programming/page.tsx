import { prisma } from "@/lib/prisma";
import { logoutAction } from "../login/actions";
import { deleteProgramming } from "./actions";
import ProgrammingForm from "@/components/ProgrammingForm";
import DeleteButton from "@/components/DeleteButton";
import Link from "next/link";
import { Pencil } from "lucide-react";

export default async function AdminProgrammingPage() {
  const posts = await prisma.post.findMany({
    where: { type: "PROGRAMMING" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-12 md:px-12">

      {/* Decorative elements */}
      <div className="pointer-events-none absolute left-[5%] top-[20%] h-16 w-28 rotate-[5deg] rounded-sm bg-[#9CC0D8]/35 shadow-[6px_8px_14px_rgba(43,38,34,0.12)]" />

      <div className="pointer-events-none absolute right-[8%] top-[17%] h-16 w-16 rotate-[-8deg] rounded-full border-[3px] border-dashed border-[#E8A0A0]/60" />

      <div className="pointer-events-none absolute bottom-[14%] left-[8%] h-12 w-24 rotate-[-5deg] rounded-sm bg-[#A8BFA0]/35 shadow-[5px_7px_12px_rgba(43,38,34,0.12)]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-14">

          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">

            <Link
              href="/admin"
              className="font-script text-xl text-[#2B2622]/50 transition hover:text-[#6D9DBB]"
            >
              ← Control Room
            </Link>

            <div className="flex items-center gap-4">

              <Link
                href="/admin/illustration"
                className="font-script text-xl text-[#2B2622]/50 transition hover:text-[#DD8C8C]"
              >
                ← Ngegambar?
              </Link>

              <form action={logoutAction}>
                <button
                  type="submit"
                  className="rounded-full border border-[#2B2622]/10 bg-white/50 px-4 py-2 text-xs text-[#2B2622]/50 shadow-sm transition hover:-translate-y-0.5 hover:border-[#6D9DBB]/40 hover:text-[#416D89]"
                >
                  Udahan
                </button>
              </form>

            </div>
          </div>

          <div>

            <span className="mb-2 block font-script text-2xl text-[#6D9DBB]">
              ✦ digital workshop ✦
            </span>

            <h1 className="font-script text-3xl leading-none text-[#2B2622] md:text-4xl">
              Ada Projek
              <br />
              <span className="text-[#6D9DBB]">Apaniihh??</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-6 text-[#2B2622]/50">
              Tempat nyimpen semua hasil ngoding,
              eksperimen UI, website, dan project-project
              yang pernah dibuat.
            </p>

          </div>

        </header>


        {/* Upload */}
        <section className="mb-16">

          <div className="mb-5 flex items-end justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2B2622]/35">
                New project
              </p>

              <h2 className="font-script text-4xl text-[#2B2622]">
                Masukin project baru
              </h2>
            </div>

            <span className="hidden font-script text-lg text-[#2B2622]/30 md:block">
              commit it to the archive ✦
            </span>

          </div>

          <div className="relative rotate-[0.5deg] rounded-sm border border-[#2B2622]/10 bg-[#FFFDF8] p-5 shadow-[8px_10px_0_rgba(43,38,34,0.07),16px_18px_30px_rgba(43,38,34,0.10)] md:p-8">

            {/* tape */}
            <div className="pointer-events-none absolute right-[18%] top-[-10px] h-6 w-28 rotate-[-3deg] bg-[#9CC0D8]/50" />

            <ProgrammingForm />

          </div>

        </section>


        {/* Archive */}
        <section>

          <div className="mb-6 flex items-end justify-between border-b border-dashed border-[#2B2622]/15 pb-4">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2B2622]/35">
                Repository
              </p>

              <h2 className="font-script text-4xl text-[#2B2622]">
                Koleksi Programming
              </h2>
            </div>

            <span className="font-script text-xl text-[#6D9DBB]">
              {posts.length} project
            </span>

          </div>


          {posts.length === 0 ? (

            <div className="flex min-h-48 items-center justify-center rounded-sm border border-dashed border-[#2B2622]/15 bg-white/30">

              <p className="font-script text-2xl text-[#2B2622]/30">
                Belum ada project di sini...
              </p>

            </div>

          ) : (

            <div className="grid gap-7 md:grid-cols-2">

              {posts.map((post, index) => (

                <article
                  key={post.id}
                  className="group relative rotate-[var(--tilt)] overflow-hidden rounded-sm border border-[#2B2622]/10 bg-[#FFFDF8] shadow-[6px_8px_15px_rgba(43,38,34,0.12)] transition-all duration-300 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-[10px_16px_28px_rgba(43,38,34,0.18)]"
                  style={{
                    ["--tilt" as string]: `${index % 2 === 0 ? "-1deg" : "1deg"}`,
                  }}
                >

                  {/* Project image */}
                  <div className="relative aspect-video overflow-hidden bg-[#2B2622]/5">

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B2622]/25 via-transparent to-transparent opacity-60" />

                    {/* Project number */}
                    <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 font-script text-lg text-[#2B2622]/60 backdrop-blur-sm">
                      #{String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  {/* Content */}
                  <div className="p-5">

                    <div className="mb-3 flex items-start justify-between gap-4">

                      <div className="min-w-0">

                        <h3 className="truncate font-script text-3xl text-[#416D89]">
                          {post.title}
                        </h3>

                        <p className="mt-1 line-clamp-3 text-xs leading-5 text-[#2B2622]/50">
                          {post.description}
                        </p>

                      </div>

                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-[#2B2622]/25">
                        PROJECT
                      </span>

                    </div>


                    {/* Links */}
                    <div className="flex flex-wrap gap-2 border-t border-dashed border-[#2B2622]/10 pt-4">

                      {post.figmaUrl && (
                        <a
                          href={post.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[#2B2622]/10 bg-white px-3 py-1.5 text-xs text-[#2B2622]/50 transition hover:bg-[#E8A0A0]/15 hover:text-[#973939]"
                        >
                          Figma ↗
                        </a>
                      )}

                      {post.projectUrl && (
                        <a
                          href={post.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[#2B2622]/10 bg-white px-3 py-1.5 text-xs text-[#2B2622]/50 transition hover:bg-[#9CC0D8]/20 hover:text-[#416D89]"
                        >
                          Live Project ↗
                        </a>
                      )}

                      <div className="ml-auto flex gap-1">

                        <Link
                          href={`/admin/programming/${post.id}/edit`}
                          aria-label={`Edit ${post.title}`}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-[#2B2622]/35 transition hover:bg-[#9CC0D8]/20 hover:text-[#416D89]"
                        >
                          <Pencil className="h-4 w-4" />
                        </Link>

                        <DeleteButton
                          action={deleteProgramming.bind(null, post.id)}
                        />

                      </div>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}

        </section>


        {/* Footer */}
        <div className="mt-20 flex justify-center">

          <span className="font-script text-sm text-[#2B2622]/25">
            end of programming repository ✦
          </span>

        </div>

      </div>
    </main>
  );
}