"use server";

import { prisma } from "@/lib/prisma";
import { saveUploadedFile } from "@/lib/upload";
import { revalidatePath } from "next/cache";

export async function createProgramming(formData: FormData) {
  const cover = formData.get("cover") as File;
  const imageUrl = await saveUploadedFile(cover);

  const extraFiles = formData.getAll("images") as File[];
  const images: string[] = [];
  for (const f of extraFiles) {
    if (f && f.size > 0) images.push(await saveUploadedFile(f));
  }

  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      imageUrl,
      images: images.length ? images : undefined,
      type: "PROGRAMMING",
      figmaUrl: (formData.get("figmaUrl") as string) || null,
      projectUrl: (formData.get("projectUrl") as string) || null,
    },
  });

  revalidatePath("/admin/programming");
  revalidatePath("/gallery");
  revalidatePath("/");
}

export async function updateProgramming(id: number, formData: FormData) {
  const cover = formData.get("cover") as File | null;

  const data: {
    title: string;
    description: string;
    figmaUrl: string | null;
    projectUrl: string | null;
    imageUrl?: string;
    images?: string[];
  } = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    figmaUrl: (formData.get("figmaUrl") as string) || null,
    projectUrl: (formData.get("projectUrl") as string) || null,
  };

  if (cover && cover.size > 0) {
    data.imageUrl = await saveUploadedFile(cover);
  }

  const extraFiles = formData.getAll("images") as File[];
  const newImages: string[] = [];
  for (const f of extraFiles) {
    if (f && f.size > 0) newImages.push(await saveUploadedFile(f));
  }
  if (newImages.length) {
    data.images = newImages;
  }

  await prisma.post.update({ where: { id }, data });

  revalidatePath("/admin/programming");
  revalidatePath("/gallery");
  revalidatePath("/");
}

export async function deleteProgramming(id: number) {
  await prisma.post.delete({ where: { id } });
  revalidatePath("/admin/programming");
  revalidatePath("/gallery");
  revalidatePath("/");
}