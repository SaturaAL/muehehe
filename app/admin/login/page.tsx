"use client";

import { useState } from "react";
import { loginAction } from "./actions";

export default function LoginPage() {
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    const result = await loginAction(formData);

    if (result?.error) setError(result.error);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FAF6EF] px-4">

      {/* Decorative blobs */}
      <div className="absolute left-[8%] top-[15%] h-24 w-40 rotate-[-12deg] rounded-lg bg-[#E8A0A0]/50 shadow-[8px_10px_20px_rgba(43,38,34,0.12)]" />

      <div className="absolute right-[10%] top-[25%] h-16 w-16 rounded-full border-4 border-dashed border-[#9CC0D8]/70" />

      <div className="absolute bottom-[15%] left-[15%] h-20 w-20 rotate-[12deg] rounded-xl bg-[#A8BFA0]/50 shadow-[7px_9px_18px_rgba(43,38,34,0.12)]" />

      <div className="absolute bottom-[12%] right-[15%] h-10 w-28 rotate-[-5deg] rounded-md bg-[#E4B15A]/50 shadow-[6px_8px_15px_rgba(43,38,34,0.12)]" />

      {/* Login card */}
      <form
        action={handleSubmit}
        className="relative z-10 w-full max-w-sm rotate-[-1deg] rounded-sm border border-[#2B2622]/10 bg-white px-8 py-9 shadow-[8px_10px_0_rgba(43,38,34,0.12),18px_20px_35px_rgba(43,38,34,0.18)] transition-transform duration-300 hover:rotate-0"
      >
        {/* Tape */}
        <div className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 rotate-[-3deg] bg-[#E8A0A0]/60 shadow-sm" />

        <div className="mb-7 text-center">
          <p className="font-script text-5xl text-[#DD8C8C]">
            Muehehe
          </p>

          <h1 className="mt-1 text-lg font-semibold text-[#2B2622]">
            Satura A. L, passwordnyaa?
          </h1>

          <p className="mt-1 text-xs text-[#2B2622]/40">
            Area khusus pemilik website 👀
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-xs font-medium text-[#2B2622]/60"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              placeholder="Masukin password..."
              required
              className="w-full rounded-md border border-[#2B2622]/15 bg-[#FAF6EF]/60 px-4 py-3 text-sm text-[#2B2622] outline-none transition focus:border-[#DD8C8C] focus:bg-white focus:ring-2 focus:ring-[#E8A0A0]/20"
            />
          </div>

          {error && (
            <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-center text-xs text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-md bg-[#2B2622] py-3 text-sm font-medium text-white shadow-[4px_5px_0_#DD8C8C] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3B3430] hover:shadow-[6px_7px_0_#DD8C8C] active:translate-y-1 active:shadow-none"
          >
            Lah, ayo masuk!
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        <p className="mt-7 text-center font-script text-sm text-[#2B2622]/35">
          jangan lupa passwordnya ya...
        </p>
      </form>
    </div>
  );
}