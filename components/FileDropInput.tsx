"use client";

import { useRef, useState } from "react";
import { ImagePlus } from "lucide-react";

type Props = {
  name: string;
  label: string;
  multiple?: boolean;
  required?: boolean;
  onPreview?: (url: string) => void;
};

export default function FileDropInput({ name, label, multiple, required, onPreview }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [dragActive, setDragActive] = useState(false);

  function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setFileNames(Array.from(files).map((f) => f.name));
    if (onPreview) onPreview(URL.createObjectURL(files[0]));
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragActive(false);
    if (inputRef.current) inputRef.current.files = e.dataTransfer.files;
    handleFiles(e.dataTransfer.files);
  }

  return (
    <div>
      <label className="mb-1 block text-xs text-[#2B2622]/50">{label}</label>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        className={`flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed px-4 py-6 text-center transition-colors ${
          dragActive ? "border-[#B5544A] bg-[#B5544A]/5" : "border-[#2B2622]/20 hover:border-[#2B2622]/40"
        }`}
      >
        <ImagePlus className="h-5 w-5 text-[#2B2622]/40" />
        <p className="text-xs text-[#2B2622]/50">
          {fileNames.length > 0 ? fileNames.join(", ") : "Klik atau tarik gambar ke sini"}
        </p>
      </div>
      <input
        ref={inputRef}
        type="file"
        name={name}
        accept="image/*"
        multiple={multiple}
        required={required}
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
      />
    </div>
  );
}