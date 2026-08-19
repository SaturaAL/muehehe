import Link from "next/link";
import { logoutAction } from "./login/actions";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export default function AdminHomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-12 md:px-12 md:py-16">

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute left-[5%] top-[18%] h-20 w-32 rotate-[-12deg] rounded-sm bg-[#E8A0A0]/40 shadow-[6px_8px_12px_rgba(43,38,34,0.12)]" />
      
      <div className="pointer-events-none absolute right-[8%] top-[12%] h-16 w-16 rotate-[8deg] rounded-full border-[3px] border-dashed border-[#9CC0D8]/70" />
      
      <div className="pointer-events-none absolute bottom-[15%] left-[10%] h-14 w-14 rotate-[14deg] rounded-md bg-[#A8BFA0]/40 shadow-[5px_7px_12px_rgba(43,38,34,0.12)]" />

      <div className="pointer-events-none absolute bottom-[12%] right-[12%] h-10 w-24 rotate-[-6deg] rounded-sm bg-[#E4B15A]/40 shadow-[5px_7px_12px_rgba(43,38,34,0.12)]" />


      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Header */}
        <header className="mb-16 text-center">

          <p className="mb-3 font-script text-2xl text-[#DD8C8C] md:text-3xl">
            - little control room - 
          </p>

          <h1 className="font-script text-6xl leading-none text-[#2B2622] md:text-8xl">
            Mau Ngapain
            <br />
            <span className="text-[#DD8C8C]">Hari Ini?</span>
          </h1>

          <div className="mx-auto mt-6 max-w-md">
            <p className="text-sm leading-6 text-[#2B2622]/55">
              Tempat kecil buat ngurus semua isi portfolio.
              Upload karya, update project, lalu kembali
              menjadi manusia normal.
            </p>
          </div>

          <div className="mx-auto mt-8 h-px w-32 bg-[#2B2622]/20" />

        </header>


        {/* Content Cards */}
        <section className="grid gap-8 md:grid-cols-2">

          {/* Illustration */}
          <Link
            href="/admin/illustration"
            className="group relative block rotate-[-2deg] transition-all duration-300 hover:-translate-y-3 hover:rotate-[0deg]"
          >
            <div className="relative overflow-hidden rounded-sm border border-[#2B2622]/10 bg-[#FFFDF8] p-8 shadow-[8px_10px_0_rgba(43,38,34,0.10),18px_20px_28px_rgba(43,38,34,0.12)] transition-shadow duration-300 group-hover:shadow-[10px_14px_0_rgba(43,38,34,0.14),24px_28px_35px_rgba(43,38,34,0.18)]">

              {/* tape */}
              <div className="absolute left-1/2 top-[-8px] h-6 w-28 -translate-x-1/2 rotate-[-2deg] bg-[#E8A0A0]/50" />

              {/* number */}
              <span className="absolute right-6 top-5 font-script text-5xl text-[#E8A0A0]/40">
                01
              </span>

              <div className="mb-12 mt-5">

                <div className="mb-6 flex h-20 w-20 rotate-[-5deg] items-center justify-center rounded-2xl bg-[#E8A0A0]/30 text-4xl shadow-[4px_5px_0_rgba(43,38,34,0.08)] transition-transform duration-300 group-hover:rotate-[5deg] group-hover:scale-110">
                  ART
                </div>

                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#DD8C8C]">
                  Creative Archive
                </p>

                <h2 className="font-script text-5xl text-[#2B2622]">
                  Illustration
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-6 text-[#2B2622]/55">
                  Upload dan kelola karya ilustrasi,
                  artwork, character design, dan karya
                  visual lainnya.
                </p>

              </div>

              <div className="flex items-center justify-between border-t border-dashed border-[#2B2622]/15 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2B2622] text-white transition-all duration-300 group-hover:-translate-x-2 group-hover:bg-[#6D9DBB]">
                  <ArrowLeft className="h-5 w-5" />
                </span>
                <span className="font-script text-lg text-[#2B2622]/50">
                  Upload gambar cuy!
                </span>


              </div>

            </div>
          </Link>


          {/* Programming */}
          <Link
            href="/admin/programming"
            className="group relative block rotate-[2deg] transition-all duration-300 hover:-translate-y-3 hover:rotate-[0deg]"
          >
            <div className="relative overflow-hidden rounded-sm border border-[#2B2622]/10 bg-[#FFFDF8] p-8 shadow-[8px_10px_0_rgba(43,38,34,0.10),18px_20px_28px_rgba(43,38,34,0.12)] transition-shadow duration-300 group-hover:shadow-[10px_14px_0_rgba(43,38,34,0.14),24px_28px_35px_rgba(43,38,34,0.18)]">

              {/* tape */}
              <div className="absolute right-10 top-[-8px] h-6 w-28 rotate-[3deg] bg-[#9CC0D8]/50" />

              {/* number */}
              <span className="absolute right-6 top-5 font-script text-5xl text-[#9CC0D8]/50">
                02
              </span>

              <div className="mb-12 mt-5">

                <div className="mb-6 flex h-20 w-20 rotate-[5deg] items-center justify-center rounded-2xl bg-[#9CC0D8]/30 text-4xl shadow-[4px_5px_0_rgba(43,38,34,0.08)] transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-110">
                  CODE
                </div>

                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#6D9DBB]">
                  Digital Workshop
                </p>

                <h2 className="font-script text-5xl text-[#2B2622]">
                  Programming
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-6 text-[#2B2622]/55">
                  Kelola project development, website,
                  UI implementation, dan berbagai
                  eksperimen coding.
                </p>

              </div>

              <div className="flex items-center justify-between border-t border-dashed border-[#2B2622]/15 pt-5">

                <span className="font-script text-lg text-[#2B2622]/50">
                  Upload projek bro!
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2B2622] text-white transition-all duration-300 group-hover:translate-x-2 group-hover:bg-[#6D9DBB]">
                  <ArrowRight className="h-5 w-5" />
                </span>

              </div>

            </div>
          </Link>

        </section>


        {/* Bottom */}
        <footer className="mt-20 flex flex-col items-center gap-4">

          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-[#2B2622]/15" />
            <span className="font-script text-sm text-[#2B2622]/35">
              end of the control room
            </span>
            <span className="h-px w-12 bg-[#2B2622]/15" />
          </div>

          <form action={logoutAction}>
            <button
              type="submit"
              className="group rounded-full border border-[#2B2622]/15 bg-white/50 px-5 py-2 text-xs text-[#2B2622]/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#DD8C8C]/40 hover:bg-[#DD8C8C]/10 hover:text-[#973939]"
            >
              <span className="mr-2">↗</span>
              Dah ah, Logout
            </button>
          </form>

        </footer>

      </div>
    </main>
  );
}