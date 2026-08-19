"use client";

import { Trash2 } from "lucide-react";

export default function DeleteButton({ action }: { action: () => Promise<void> }) {
  async function handleClick() {
    if (window.confirm("Yakin mau hapus post ini? Gak bisa dibatalin.")) {
      await action();
    }
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Hapus"
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#2B2622]/40 transition hover:bg-red-50 hover:text-red-600"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  );
}