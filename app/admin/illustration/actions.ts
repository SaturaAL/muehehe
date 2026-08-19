"use server";

import { prisma } from "@/lib/prisma";
import { saveUploadedFile } from "@/lib/upload";
import { revalidatePath } from "next/cache";

export async function createIllustration(formData: FormData) {
  const file = formData.get("image") as File;
  const imageUrl = await saveUploadedFile(file);

  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      imageUrl,
      type: "ILLUSTRATION",
    },
  });

  revalidatePath("/admin/illustration");
  revalidatePath("/gallery");
  revalidatePath("/");
}

export async function updateIllustration(id: number, formData: FormData) {
  const file = formData.get("image") as File | null;

  const data: { title: string; description: string; imageUrl?: string } = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  };

  if (file && file.size > 0) {
    data.imageUrl = await saveUploadedFile(file);
  }

  await prisma.post.update({ where: { id }, data });

  revalidatePath("/admin/illustration");
  revalidatePath("/gallery");
  revalidatePath("/");
}

export async function deleteIllustration(id: number) {
  await prisma.post.delete({ where: { id } });
  revalidatePath("/admin/illustration");
  revalidatePath("/gallery");
  revalidatePath("/");
}