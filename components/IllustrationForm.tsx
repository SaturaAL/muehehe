"use client";

import { useState } from "react";
import { createIllustration } from "@/app/admin/illustration/actions";
import FileDropInput from "./FileDropInput";

export default function IllustrationForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");

  return (
    <form
      action={createIllustration}
      className="grid gap-8 lg:grid-cols-[1fr_320px]"
    >

      {/* Form */}
      <div className="space-y-5">

        <div>
          <p className="mb-1 font-script text-2xl text-[#DD8C8C]">
            01 — artwork
          </p>

          <h3 className="font-script text-3xl text-[#2B2622]">
            Isi dulu..
          </h3>
        </div>


        <div className="space-y-2">

          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B2622]/45">
            Gambar
          </label>

          <FileDropInput
            name="image"
            label="Mana gambarnya?"
            required
            onPreview={setPreview}
          />

        </div>


        <div className="space-y-2">

          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B2622]/45">
            Judul
          </label>

          <input
            name="title"
            placeholder="Dikasih judul apa?"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-sm border border-[#2B2622]/15 bg-white/70 px-4 py-3 text-sm outline-none transition placeholder:text-[#2B2622]/25 focus:border-[#DD8C8C] focus:bg-white focus:ring-2 focus:ring-[#DD8C8C]/10"
          />

        </div>


        <div className="space-y-2">

          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B2622]/45">
            Cerita sedikit
          </label>

          <textarea
            name="description"
            placeholder="Jelasin juga doongg.."
            required
            rows={5}
            className="w-full resize-none rounded-sm border border-[#2B2622]/15 bg-white/70 px-4 py-3 text-sm outline-none transition placeholder:text-[#2B2622]/25 focus:border-[#DD8C8C] focus:bg-white focus:ring-2 focus:ring-[#DD8C8C]/10"
          />

        </div>


        <div className="flex items-center justify-between border-t border-dashed border-[#2B2622]/15 pt-5">

          <span className="font-script text-lg text-[#2B2622]/35">
            siap dipajang? 
          </span>

          <button
            type="submit"
            className="rounded-full bg-[#2B2622] px-6 py-3 font-script text-lg text-white shadow-[4px_5px_0_#DD8C8C] transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_7px_0_#DD8C8C] active:translate-y-0 active:shadow-[2px_3px_0_#DD8C8C]"
          >
            Aplot!!!
          </button>

        </div>

      </div>


      {/* Preview */}
      <div className="flex min-h-[360px] items-center justify-center rounded-sm bg-[#FAF6EF] p-8">

        <div className="relative w-56 rotate-[2deg] bg-white p-2 pb-7 shadow-[5px_7px_15px_rgba(43,38,34,0.18)] transition-transform duration-300 hover:rotate-0">

          {/* tape */}
          <div className="absolute left-1/2 top-[-9px] z-10 h-5 w-20 -translate-x-1/2 rotate-[-3deg] bg-[#E4B15A]/45" />

          {preview ? (

            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview}
              alt="preview"
              className="aspect-square w-full object-cover"
            />

          ) : (

            <div className="flex aspect-square items-center justify-center bg-[#2B2622]/5">

              <div className="text-center">

                <p className="mb-2 text-3xl opacity-30">
                  
                </p>

                <p className="font-script text-lg text-[#2B2622]/30">
                  Preview gambar
                </p>

              </div>

            </div>

          )}

          <p className="mt-3 truncate text-center font-script text-lg text-[#2B2622]/65">
            {title || "Judul post"}
          </p>

        </div>

      </div>

    </form>
  );
}