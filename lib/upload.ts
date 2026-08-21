import { put } from "@vercel/blob";
import { randomUUID } from "crypto";

export async function saveUploadedFile(file: File): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const filename = `${randomUUID()}.${ext}`;

  const blob = await put(filename, file, {
    access: "public",
  });

  return blob.url;
}