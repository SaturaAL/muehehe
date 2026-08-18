import { prisma } from "@/lib/prisma";
import { createPost, deletePost, logoutAction } from "./actions";
import Link from "next/link";

export default async function AdminPage() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin — Kelola Post</h1>
        <form action={logoutAction}>
          <button className="text-sm text-red-600 hover:underline">Logout</button>
        </form>
      </div>

      <form action={createPost} className="mb-10 space-y-3 rounded-lg border p-5">
        <h2 className="font-semibold">Tambah Post Baru</h2>
        <input name="title" placeholder="Judul" required className="w-full rounded border px-3 py-2" />
        <textarea name="description" placeholder="Deskripsi" required className="w-full rounded border px-3 py-2" />
        <input name="imageUrl" placeholder="URL Gambar" required className="w-full rounded border px-3 py-2" />
        <select name="type" required className="w-full rounded border px-3 py-2">
          <option value="ILLUSTRATION">Illustration</option>
          <option value="PROGRAMMING">Programming</option>
        </select>
        <input name="figmaUrl" placeholder="Link Figma (opsional)" className="w-full rounded border px-3 py-2" />
        <input name="projectUrl" placeholder="Link Project (opsional)" className="w-full rounded border px-3 py-2" />
        <button type="submit" className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800">
          Simpan
        </button>
      </form>

      <div className="space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="flex items-center justify-between rounded border p-4">
            <div>
              <p className="font-medium">{post.title}</p>
              <p className="text-sm text-gray-500">{post.type}</p>
            </div>
            <div className="flex gap-3">
              <Link href={`/admin/${post.id}/edit`} className="text-sm text-blue-600 hover:underline">
                Edit
              </Link>
              <form action={deletePost.bind(null, post.id)}>
                <button type="submit" className="text-sm text-red-600 hover:underline">
                  Hapus
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}