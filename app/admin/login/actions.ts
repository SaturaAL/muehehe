"use server";

import { createSession, destroySession } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const password = formData.get("password") as string;

  if (password !== process.env.ADMIN_PASSWORD) {
    return { error: "Password salah" };
  }

  await createSession();
  redirect("/admin");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login");
}