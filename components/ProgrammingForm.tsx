"use client";

import { useState } from "react";
import { createProgramming } from "@/app/admin/programming/actions";
import FileDropInput from "./FileDropInput";

export default function ProgrammingForm() {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      action={createProgramming}
      className="grid gap-10 lg:grid-cols-[1fr_360px]"
    >

      {/* Form */}
      <div className="space-y-5">

        <div>
          <p className="mb-1 font-script text-2xl text-[#6D9DBB]">
            01 — project
          </p>

          <h3 className="font-script text-3xl text-[#2B2622]">
            Project Apaaanihh?
          </h3>
        </div>


        {/* Cover */}
        <div className="space-y-2">

          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B2622]/45">
            Cover project
          </label>

          <FileDropInput
            name="cover"
            label="Gambar tamnel nih"
            required
            onPreview={setCoverPreview}
          />

        </div>


        {/* Additional images */}
        <div className="space-y-2">

          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B2622]/45">
            Gallery
          </label>

          <FileDropInput
            name="images"
            label="Gambar lain, ada ga? (bisa pilih beberapa)"
            multiple
          />

        </div>


        {/* Title */}
        <div className="space-y-2">

          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B2622]/45">
            Nama project
          </label>

          <input
            name="title"
            placeholder="Emang namanya apa?"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-sm border border-[#2B2622]/15 bg-white/70 px-4 py-3 text-sm outline-none transition placeholder:text-[#2B2622]/25 focus:border-[#6D9DBB] focus:bg-white focus:ring-2 focus:ring-[#6D9DBB]/10"
          />

        </div>


        {/* Description */}
        <div className="space-y-2">

          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B2622]/45">
            Deskripsi
          </label>

          <textarea
            name="description"
            placeholder="Jelasin deh, sok.."
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full resize-none rounded-sm border border-[#2B2622]/15 bg-white/70 px-4 py-3 text-sm outline-none transition placeholder:text-[#2B2622]/25 focus:border-[#6D9DBB] focus:bg-white focus:ring-2 focus:ring-[#6D9DBB]/10"
          />

        </div>


        {/* Links */}
        <div className="grid gap-4 sm:grid-cols-2">

          <input
            name="figmaUrl"
            placeholder="Link Figma (ada, ga?)"
            className="w-full rounded-sm border border-[#2B2622]/15 bg-white/70 px-4 py-3 text-sm outline-none transition placeholder:text-[#2B2622]/25 focus:border-[#6D9DBB] focus:bg-white"
          />

          <input
            name="projectUrl"
            placeholder="Link Project (ada, ga?)"
            className="w-full rounded-sm border border-[#2B2622]/15 bg-white/70 px-4 py-3 text-sm outline-none transition placeholder:text-[#2B2622]/25 focus:border-[#6D9DBB] focus:bg-white"
          />

        </div>


        {/* Submit */}
        <div className="flex items-center justify-between border-t border-dashed border-[#2B2622]/15 pt-5">

          <span className="font-script text-lg text-[#2B2622]/35">
            push it!
          </span>

          <button
            type="submit"
            className="rounded-full bg-[#2B2622] px-6 py-3 font-script text-lg text-white shadow-[4px_5px_0_#6D9DBB] transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_7px_0_#6D9DBB] active:translate-y-0 active:shadow-[2px_3px_0_#6D9DBB]"
          >
            Aplot!!!
          </button>

        </div>

      </div>


      {/* Preview */}
      <div className="flex min-h-[420px] items-center justify-center rounded-sm bg-[#EEF4F7] p-8">

        <div className="relative w-full max-w-sm rotate-[-1deg] overflow-hidden rounded-sm border border-[#2B2622]/10 bg-white shadow-[7px_9px_18px_rgba(43,38,34,0.18)] transition-transform duration-300 hover:rotate-0">

          {/* Browser-like header */}
          <div className="flex items-center gap-1.5 border-b border-[#2B2622]/10 bg-[#FAFAFA] px-4 py-3">

            <span className="h-2.5 w-2.5 rounded-full bg-[#E8A0A0]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E4B15A]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#A8BFA0]" />

            <span className="ml-3 font-mono text-[9px] text-[#2B2622]/25">
              project-preview.exe
            </span>

          </div>


          {/* Cover */}
          <div className="flex aspect-video items-center justify-center overflow-hidden bg-[#2B2622]/5">

            {coverPreview ? (

              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={coverPreview}
                alt="preview"
                className="h-full w-full object-cover"
              />

            ) : (

              <div className="text-center">

                <p className="mb-2 text-4xl opacity-25">
                  
                </p>

                <span className="font-script text-lg text-[#2B2622]/30">
                  Preview cover
                </span>

              </div>

            )}

          </div>


          {/* Project content */}
          <div className="p-5">

            <div className="mb-3 flex items-center justify-between">

              <h3 className="truncate font-script text-3xl text-[#416D89]">
                {title || "Judul project"}
              </h3>

              <span className="font-mono text-[9px] text-[#2B2622]/25">
                v1.0
              </span>

            </div>

            <p className="line-clamp-4 whitespace-pre-wrap text-xs leading-relaxed text-[#2B2622]/55">
              {description || "Deskripsi akan muncul di sini."}
            </p>


            <div className="mt-5 flex gap-2 border-t border-dashed border-[#2B2622]/10 pt-4">

              <span className="rounded-full bg-[#9CC0D8]/20 px-3 py-1 font-mono text-[9px] text-[#416D89]">
                PROJECT
              </span>

              <span className="rounded-full bg-[#E8A0A0]/15 px-3 py-1 font-mono text-[9px] text-[#973939]">
                PORTFOLIO
              </span>

            </div>

          </div>

        </div>

      </div>

    </form>
  );
}