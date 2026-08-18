"use server";

import { prisma } from "@/lib/prisma";
import { destroySession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const type = formData.get("type") as "ILLUSTRATION" | "PROGRAMMING";

  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      imageUrl: formData.get("imageUrl") as string,
      type,
      figmaUrl: (formData.get("figmaUrl") as string) || null,
      projectUrl: (formData.get("projectUrl") as string) || null,
    },
  });

  revalidatePath("/admin");
}

export async function updatePost(id: number, formData: FormData) {
  const type = formData.get("type") as "ILLUSTRATION" | "PROGRAMMING";

  await prisma.post.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      imageUrl: formData.get("imageUrl") as string,
      type,
      figmaUrl: (formData.get("figmaUrl") as string) || null,
      projectUrl: (formData.get("projectUrl") as string) || null,
    },
  });

  revalidatePath("/admin");
}

export async function deletePost(id: number) {
  await prisma.post.delete({ where: { id } });
  revalidatePath("/admin");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login");
}